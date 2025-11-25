import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface PriceDropEmailProps {
  customerName?: string;
  productName?: string;
  productImage?: string;
  originalPrice?: string;
  newPrice?: string;
  discountPercentage?: string;
  productLink?: string;
  timeLimited?: boolean;
  expiryDate?: string;
}

function PriceDropEmailComponent({
  customerName = "Vážený zákazník",
  productName = "Keramický hrnek - modrý",
  productImage = "https://via.placeholder.com/200x200?text=Product",
  originalPrice = "450 Kč",
  newPrice = "360 Kč",
  discountPercentage = "20%",
  productLink = "https://yourstore.com/products/hrnek-modry",
  timeLimited = true,
  expiryDate = "31. října 2025"
}: PriceDropEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>🔥 Cena klesla! {productName} nyní za {newPrice}</Preview>
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
            {/* Header */}

            {/* Main Heading */}
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[10px] mx-2">
                Cena klesla! 🔥
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] text-left m-2">
                Produkt, který vás možná zajímal, má nyní výhodnější cenu! Nepropásněte tuto příležitost.
              </Text>
            </Section>

            {/* Product Section */}
            <Section className="my-[32px]">
              <Heading className="text-[#212222] text-[24px] font-semibold mb-[20px] text-center">
                Speciální nabídka
              </Heading>

              <Section className="bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px] text-center">
                <Img
                  src={productImage}
                  alt={productName}
                  className="rounded-lg w-[150px] h-[150px] object-cover mx-auto mb-[16px]"
                />

                <Text className="text-[#212222] text-[20px] font-semibold leading-[28px] mb-[16px]">
                  {productName}
                </Text>

                <Section className="mb-[16px]">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Text className="text-gray-500 text-[18px] line-through leading-[24px]">
                      {originalPrice}
                    </Text>
                    <Text className="text-green-600 text-[24px] font-bold leading-[32px]">
                      {newPrice}
                    </Text>
                  </div>
                  <div className="bg-red-500 text-white text-[14px] font-bold px-3 py-1 rounded inline-block">
                    -{discountPercentage}
                  </div>
                </Section>
              </Section>
            </Section>

            {/* Urgency Section */}
            {timeLimited && (
              <Section className="my-[32px] bg-yellow-50 border border-solid border-yellow-200 rounded-lg p-[20px] text-center">
                <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] mb-0">
                  ⏰ Tato cena je časově omezená! Nabídka platí do {expiryDate}
                </Text>
              </Section>
            )}

            {/* Benefits Section */}
            <Section className="my-[32px]">
              <Heading className="text-[#212222] text-[24px] font-semibold mb-[20px] text-center">
                Proč si koupit právě teď?
              </Heading>

              <Section className="bg-blue-50 border border-solid border-blue-200 rounded-lg p-[20px]">
                <div className="space-y-[12px]">
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">💰 Ušetříte {discountPercentage} z původní ceny</Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">🚚 Rychlé doručení do 2-3 dnů</Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">🔄 Možnost vrácení do 30 dnů</Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">⭐ Hodnocení od spokojených zákazníků</Text>
                </div>
              </Section>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={productLink}
              >
                Koupit nyní za {newPrice}
              </Button>
            </Section>

            {/* Footer */}
            <Section className="my-[32px] border-t border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Tento e-mail jste obdrželi, protože jste si produkt prohlédli nebo přidali do wishlistu.
                Pokud nechcete dostávat tyto notifikace, můžete se odhlásit v nastavení účtu.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px]">
                <Text className="text-[#212222] text-[14px] leading-[24px]">
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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const PriceDropEmail = (props: PriceDropEmailProps) => (
  <PriceDropEmailComponent {...props} />
)

// Mock data for preview/development
const mockPriceDrop: PriceDropEmailProps = {
  customerName: "Jan Novák",
  productName: "Keramický hrnek - modrý",
  productImage: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  originalPrice: "450 Kč",
  newPrice: "360 Kč",
  discountPercentage: "20%",
  productLink: "https://yourstore.com/products/hrnek-modry",
  timeLimited: true,
  expiryDate: "31. října 2025"
}

export default () => <PriceDropEmailComponent {...mockPriceDrop} />