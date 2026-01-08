import { Metadata } from "next"
import { notFound } from "next/navigation"
import { cookies } from "next/headers"
import { retrieveCustomer } from "@lib/data/customer"
import BgImage from "@modules/account/components/BgImage"
import { retrieveProduct } from "@lib/data/products"
import WishlistTemplate from "@modules/account/templates/wishlist-template"
import { listRegions } from "@lib/data/regions"
import { sdk } from "@lib/config"

import s from "../styles/profile.module.scss"

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your saved products",
}

async function getCustomerWishlists(_customerId: string) {
  const cookieStore = await cookies()
  const token = cookieStore.get("_medusa_jwt")?.value
  const pk = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
  
  console.log("[Wishlist Page] Token exists:", !!token)
  console.log("[Wishlist Page] Using SDK.client.fetch")
  
  if (!token) {
    console.log("[Wishlist Page] No token, returning empty")
    return []
  }

  try {
    const data = await sdk.client.fetch<{ wishlist: { items: any[] } }>(
      `/store/customers/me/wishlists`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          ...(pk ? { "x-publishable-api-key": pk } : {}),
        },
        cache: "no-store",
      }
    )
    
    console.log("[Wishlist Page] SDK Success, items count:", data.wishlist?.items?.length || 0)
    return data.wishlist?.items ?? []
  } catch (e: any) {
    console.error("[Wishlist Page] SDK Error:", e?.message || e)
    return []
  }
}

type PageProps = { params: Promise<{ countryCode: string }> }

export default async function WishlistPage(props: PageProps) {
  const { countryCode } = await props.params
    const customer = await retrieveCustomer()
    const regions = await listRegions()
    
    if (!customer || !regions) {
      notFound()
    }

  const wishlistItems = await getCustomerWishlists(customer.id)
  const enrichedItems = await Promise.all(
    wishlistItems.map(async (item: any) => {
      const variant = item?.product_variant
      const product = variant?.product
      const hasHandle = !!product?.handle
      const hasThumb = !!product?.thumbnail
      if (hasHandle && hasThumb) return item

      const productId = product?.id || variant?.product_id
      if (!productId) return item

      try {
        const p = await retrieveProduct(productId, { fields: "id,handle,thumbnail,title" })
        return {
          ...item,
          product_variant: {
            ...variant,
            product: { ...product, ...p },
          },
        }
      } catch {
        return item
      }
    })
  )
  console.log("Fetched wishlist items", wishlistItems)
  return (
    <main className={s.root}>
      <WishlistTemplate items={enrichedItems} countryCode={countryCode} />
      <BgImage src="/assets/img/img/2.jpg" />
    </main>
  )
}
