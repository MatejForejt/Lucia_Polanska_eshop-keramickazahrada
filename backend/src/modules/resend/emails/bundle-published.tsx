import {
  Text,
  Column,
  Container,
  Heading,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Head,
  Preview,
  Body,
  Link,
  Button
} from "@react-email/components"

type BundlePublishedEmailProps = {
  bundle: {
    id: string
    name: string
    description: string
    thumbnail?: string
    items: Array<{
      id: string
      product_title: string
      variant_title: string
      thumbnail?: string
      unit_price: number
      quantity: number
    }>
    total_price: number
    discount_percentage?: number
    bundle_url: string
  }
  customer?: {
    first_name?: string
    email: string
  }
}

function BundlePublishedEmailComponent({ bundle, customer }: BundlePublishedEmailProps) {
  const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency: "czk",
  })

  const formatPrice = (price: number) => {
    return formatter.format(price)
  }

  return (
    <Html>
      <Head />
      <Preview>Nový balíček je k dispozici - {bundle.name}</Preview>
      <Tailwind>
        <Body className="bg-[#87986A] my-auto mx-auto font-sans">
            {/* Header */}
            <Section className="border-b border-solid border-[#212222]">
              <div className="bg-[#ffff] text-white py-3 flex align-center justify-center">
                <img style={{ width: "80px", height: "80px", margin: "6px 0" }} src="https://c3studium.com/assets/icons/logo.svg" alt="Logo" className="w-[40px] h-[40px]" />
                <Heading className="text-[#212222] text-[26px] font-normal text-center p-0 my-[30px] mx-0">
                  Keramická Zahrada
                </Heading>
              </div>
            </Section>

          <Container className="border border-solid border-[#212222] rounded-3xl my-[40px] mx-auto p-[20px] max-w-[600px] bg-white">

            {/* Main Message */}
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[10px] mx-2">
                Nový balíček je k dispozici!
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] text-left m-2 mt-10 font-medium">
                {customer?.first_name || "Vážený zákazník"},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] text-left m-2">
                Máme pro vás skvělou novinku! Právě jsme zveřejnili nový balíček produktů, který vám ušetří peníze a čas.
              </Text>
            </Section>

            {/* Bundle Banner */}
            <Section className="my-[32px] bg-[#212222] rounded-lg p-[20px] text-center flex justify-center">
              <Heading className="text-white text-[24px] font-semibold mb-[20px]">
                {bundle.name}
              </Heading>
              <div className="w-full flex justify-center">
                <Img src={bundle.thumbnail ?? ''} alt={bundle.name} className="rounded-lg w-[300px] h-[350px] mb-[16px]" />
              </div>
              {bundle.discount_percentage && (
                <div className="w-full flex justify-center">
                  <div className="w-fit px-10 py-2 rounded-3xl bg-[#87986A]">
                    <Text className="text-white text-[18px] font-bold mb-[8px]">
                      Sleva {bundle.discount_percentage}%!
                    </Text>
                  </div>
                </div>
              )}
              <Text className="text-white text-[16px] leading-[24px] mb-[16px]">
                {bundle.description}
              </Text>
              <Text className="text-white text-[20px] font-bold mb-[16px]">
                Celková cena: {formatPrice(bundle.total_price)}
              </Text>
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] mt-10 font-semibold no-underline text-center px-5 py-3 hover:bg-[#87986A] transition-colors"
                href={bundle.bundle_url}
              >
                Prohlédnout balíček
              </Button>
            </Section>

            {/* Bundle Items */}
            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Heading style={{ borderBottom: '1px solid #87986A' }} className="text-[#212222] text-[32px] font-semibold mb-[20px]">
                Co balíček obsahuje
              </Heading>

              {bundle.items?.map((item) => (
                <Section key={item.id} className="border-b border-solid border-[#87986A] py-[16px]">
                  <Row>
                    <Column className="w-1/3">
                      <Img
                        src={item.thumbnail ?? ''}
                        alt={item.product_title ?? ''}
                        className="rounded-lg w-full"
                      />
                    </Column>
                    <Column className="w-2/3 pl-4">
                      <Text className="text-[#212222] text-[18px] font-semibold leading-[24px] m-1">
                        {item.product_title}
                      </Text>
                      <Text className="text-[#87986A] text-[16px] leading-[24px] m-1">
                        {item.variant_title}
                      </Text>
                      <Text className="text-[#212222] text-[16px] leading-[24px] mt-1 m-1">
                        Množství: {item.quantity}
                      </Text>
                      <Text className="text-[#212222] text-[16px] font-bold leading-[24px] mt-2 m-1">
                        {formatPrice(item.unit_price)}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              ))}
            </Section>

            {/* Price Comparison */}
            <Section className="my-[32px]">
              <Heading style={{ borderBottom: '1px solid #212222' }} className="text-[#212222] text-[32px] font-semibold mb-[20px] text-center">
                💰 Srovnání cen a úspory
              </Heading>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-solid border-[#87986A] rounded-xl p-[24px] shadow-sm">
                <div className="space-y-[20px]">
                  {/* Individual Items Total */}
                  <div className="bg-white rounded-lg p-[16px] border border-solid border-gray-200">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Text className="text-[#212222] text-[18px] font-semibold leading-[24px] mb-[2px] m-0">
                          Cena jednotlivých produktů
                        </Text>
                        <Text className="text-[#87986A] text-[16px] leading-[20px] m-2">
                          Pokud byste kupovali každý produkt zvlášť
                        </Text>
                      </div>
                      <div className="text-right ml-4">
                        <Text className="text-[#212222] text-[18px] font-bold leading-[24px] line-through opacity-75">
                          {formatPrice(bundle.items?.reduce((total, item) => total + (item.unit_price * item.quantity), 0) || 0)}
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="text-center py-[8px]">
                    <Text className="text-[#212222] text-[32px] leading-[24px]">↓</Text>
                  </div>

                  {/* Bundle Price */}
                  <div className="bg-[#87986A] rounded-lg p-[16px] text-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Text className="text-white text-[18px] font-semibold leading-[24px] mb-[4px] m-0">
                          Cena balíčku
                        </Text>
                        <Text className="text-white text-[14px] leading-[20px] opacity-90 m-2">
                          Speciální balíčková cena
                        </Text>
                      </div>
                      <div className="text-right ml-4">
                        <Text className="text-white text-[22px] font-bold leading-[28px]">
                          {formatPrice(bundle.total_price)}
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* Savings Highlight */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-[20px] text-white text-center">
                    <div className="mb-[8px]">
                      <Text className="text-[#212222] text-[18px] font-semibold leading-[24px]">
                        🎉 Vaše úspora
                      </Text>
                    </div>
                    <Text className="text-[#212222] text-[32px] font-bold leading-[32px] mb-[4px]">
                      {formatPrice((bundle.items?.reduce((total, item) => total + (item.unit_price * item.quantity), 0) || 0) - bundle.total_price)}
                    </Text>
                    {bundle.discount_percentage && (
                      <Text className="text-[#212222] text-[18px] leading-[24px] opacity-90">
                        {bundle.discount_percentage}% sleva
                      </Text>
                    )}
                  </div>
                </div>
              </div>
            </Section>

            {/* Call to Action */}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={bundle.bundle_url}
              >
                Objednat balíček nyní
              </Button>
            </Section>

            {/* Footer */}
            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
              <Text style={{ borderBottom: "1px solid #212222" }} className="text-[#212222] text-[14px] leading-[20px] text-center w-full pb-2">
                Máte otázky k tomuto balíčku? <br /> Odpovězte na tento e-mail nebo kontaktujte náš tým podpory.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[20px] text-center mt-2">
                Název Balíčku: {bundle.name}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[20px] text-center mt-2">
                ID balíčku: {bundle.id}
              </Text>
              <Section className="mt-[32px] pt-[20px]">
                <Text className="text-[#212222] text-[16px] leading-[24px]">
                    S pozdravem,<br />
                    Keramická Zahrada, Lucie Polanská
                </Text>
            </Section>
            <Section className="border-t border-solid border-[#87986A]">
                <Text className="text-[#212222] text-[14px] leading-[20px] text-center">
                    Potřebujete pomoc? <a href="mailto:luciepolanska@gmail.com" className="text-[#87986A] no-underline hover:text-[#212222] transition-colors">Kontaktujte nás</a>
                </Text>
                <Text className="text-[#87986A] text-[12px] leading-[18px] text-center mt-4">
                    © {new Date().getFullYear()} Keramická Zahrada, Lucie Polanská. Všechna práva vyhrazena.
                </Text>
            </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const bundlePublishedEmail = (props: BundlePublishedEmailProps) => (
  <BundlePublishedEmailComponent {...props} />
)

// Mock data for preview/development
const mockBundlePublished = {
  bundle: {
    id: "bundle_01JSNXDH9BPJWWKVW03B9E9KW8",
    name: "Keramický set pro začátečníky",
    description: "Kompletní sada pro všechny, kdo chtějí začít s keramikou. Obsahuje vše potřebné pro vytvoření prvních děl.",
    total_price: 2500,
    discount_percentage: 15,
    bundle_url: "https://yourstore.com/bundles/bundle-01JSNXDH9BPJWWKVW03B9E9KW8",
    thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
    items: [
      {
        id: "item_01",
        product_title: "Keramická hlína - 5kg",
        variant_title: "Bílá hlína",
        thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
        unit_price: 800,
        quantity: 1
      },
      {
        id: "item_02",
        product_title: "Keramické nástroje - základní set",
        variant_title: "8 nástrojů",
        thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
        unit_price: 1200,
        quantity: 1
      },
      {
        id: "item_03",
        product_title: "Keramický glazovací set",
        variant_title: "Barevné glazury - 6 barev",
        thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
        unit_price: 600,
        quantity: 1
      },
      {
        id: "item_04",
        product_title: "Kniha - Keramika pro začátečníky",
        variant_title: "Česká verze",
        thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
        unit_price: 250,
        quantity: 1
      }
    ]
  },
  customer: {
    first_name: "Marie",
    email: "marie.novakova@email.com"
  }
}

export default () => <BundlePublishedEmailComponent {...mockBundlePublished} />