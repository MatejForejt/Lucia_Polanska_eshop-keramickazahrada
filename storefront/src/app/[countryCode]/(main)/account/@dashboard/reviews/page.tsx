import { Metadata } from "next"
import s from "../styles/profile.module.scss"
import { notFound } from "next/navigation"
import { retrieveCustomer } from "@lib/data/customer"
import { cookies } from "next/headers"
import { sdk } from "@lib/config"
import Link from "next/link"
import BgImage from "@modules/account/components/BgImage"
import ReviewsTemplate from "@modules/account/templates/reviews-template"
import { listRegions } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "My Reviews",
  description: "See the reviews you’ve written",
}

async function getCustomerReviews() {
  const cookieStore = await cookies()
  const token = cookieStore.get("_medusa_jwt")?.value
  const pk = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY

  if (!token) return []

  try {
    const data = await sdk.client.fetch<{ reviews: any[]; count?: number; limit?: number; offset?: number }>(
      `/store/customers/me/reviews`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          ...(pk ? { "x-publishable-api-key": pk, "x-publishable-key": pk } : {}),
        },
        cache: "no-store",
      }
    )
    console.log("[Account] fetched reviews:", {
      count: (data as any)?.count,
      limit: (data as any)?.limit,
      offset: (data as any)?.offset,
      length: Array.isArray((data as any)?.reviews) ? (data as any)?.reviews.length : "n/a",
    })
    return Array.isArray(data.reviews) ? data.reviews.filter((r) => !!r) : []
  } catch (e) {
    console.error("[Account] failed to fetch customer reviews", e)
    return []
  }
}

type PageProps = { params: Promise<{ countryCode: string }> }

export default async function ReviewsPage(props: PageProps) {
  const { countryCode } = await props.params
  const customer = await retrieveCustomer()
  const regions = await listRegions()
  
  if (!customer || !regions) {
    notFound()
  }
  if (!customer) {
    return(
      <div>
        <p>Pro přístup k recenzím se prosím přihlaste</p>
        <LocalizedClientLink href={`/account`}>Přihlásit se</LocalizedClientLink>
      </div>
    )
  }

  const reviews = await getCustomerReviews()
  // console.log("[Account] reviews to render:", Array.isArray(reviews) ? reviews.length : "n/a")

  const { response: { products, count } } = await listProducts({
    queryParams: {
      limit: 16,
      fields: "*bundle", 
    },
    countryCode,
  })

  console.log('products', products, count)

  const getProductByReview = (review: any) => {
    if (!review || !Array.isArray(products) || products.length === 0) return null
    const prodId = review?.product?.id || review?.product_id
    if (!prodId) return null
    return products.find(p => p.id === prodId) || null
  }

  // Enrich reviews with real product data
  const enrichedReviews = reviews.map(review => ({
    ...review,
    product: getProductByReview(review) || review.product // fallback to mock data if not found
  }))
  return (
    <main className={s.root}>
      <ReviewsTemplate reviews={enrichedReviews}/>
      <BgImage src="/assets/img/img/2.jpg" />
    </main>
  )
}
