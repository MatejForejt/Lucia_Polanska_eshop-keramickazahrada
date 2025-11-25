import {
  Text,
  Container,
  Heading,
  Html,
  Section,
  Tailwind,
  Head,
  Preview,
  Body,
  Button,
  Img,
} from "@react-email/components";

interface OrderReviewEmailProps {
  customerName?: string;
  orderNumber?: string;
  productName?: string;
  productImage?: string;
  productLink?: string;
  reviewLink?: string;
  orderLink?: string;
}

function OrderReviewEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  productName = "Keramický hrnek - modrý",
  productImage = "https://via.placeholder.com/200x200?text=Product",
  productLink = "https://yourstore.com/products/hrnek-modry",
  reviewLink = "https://yourstore.com/reviews/write?product=hrnek-modry&order=12345",
  orderLink = "https://yourstore.com/orders/12345"
}: OrderReviewEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Jak se vám líbil produkt: {productName}?</Preview>
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
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[10px] mx-2">
                Jak se vám líbil váš nákup?
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] text-left m-2">
                Děkujeme za nákup v našem e-shopu! Rádi bychom znali váš názor na produkt, který jste si u nás zakoupili.
              </Text>
            </Section>

            {/* Product Display */}
            <Section className="my-[32px]">
              <Heading className="text-[#212222] text-[24px] font-semibold mb-[20px] text-center">
                Produkt k hodnocení
              </Heading>

              <Section className="bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px] text-center max-w-[300px] mx-auto">
                <Img
                  src={productImage}
                  alt={productName}
                  className="w-[120px] h-[120px] object-cover rounded-lg mx-auto mb-[16px]"
                />
                <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] mb-[8px]">
                  {productName}
                </Text>
                <Text className="text-[#87986A] text-[14px] leading-[20px]">
                  Objednávka: {orderNumber}
                </Text>
              </Section>
            </Section>

            {/* Benefits Section */}
            <Section className="my-[32px]">
              <Heading className="text-[#212222] text-[24px] font-semibold mb-[20px] text-center">
                Proč psát recenze?
              </Heading>

              <Section className="bg-blue-50 border border-solid border-blue-200 rounded-lg p-[20px]">
                <div className="space-y-[12px]">
                  <div className="flex items-center gap-2">
                    <Text className="text-[#212222] text-[16px] leading-[24px] m-0">⭐</Text>
                    <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                      Pomáháte ostatním zákazníkům s rozhodováním
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Text className="text-[#212222] text-[16px] leading-[24px] m-0">🎁</Text>
                    <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                      Vracíte nám zpětnou vazbu pro zlepšení našich produktů a služeb
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Text className="text-[#212222] text-[16px] leading-[24px] m-0">💝</Text>
                    <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                      Podporujete české obchody a výrobce
                    </Text>
                  </div>
                </div>
              </Section>
            </Section>

            {/* Call to Action */}
            <Section className="text-center mt-[32px] mb-[32px] border-b border-solid border-[#212222] pb-8">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-5"
                href={reviewLink}
              >
                Napsat recenzi
              </Button>
              <Button
                className="bg-[#212222] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#87986A] transition-colors"
                href={productLink}
              >
                Zobrazit produkt
              </Button>
            </Section>

            {/* Additional Message */}
            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px] text-center">
                Vaše zpětná vazba nám pomáhá zlepšovat naše produkty a služby. Hodnocení a recenze jsou pro nás velmi cenné.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] text-center mt-4">
                Pokud nejste spokojeni s produktem nebo máte jakékoliv dotazy, neváhejte nás kontaktovat.
              </Text>
            </Section>

            {/* Footer */}
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

export const OrderReviewEmail = (props: OrderReviewEmailProps) => (
  <OrderReviewEmailComponent {...props} />
)

// Mock data for preview/development
const mockOrderReview: OrderReviewEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  productName: "Keramický hrnek - modrý",
  productImage: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  productLink: "https://yourstore.com/products/hrnek-modry",
  reviewLink: "https://yourstore.com/reviews/write?product=hrnek-modry&order=12345",
  orderLink: "https://yourstore.com/orders/12345"
}

export default () => <OrderReviewEmailComponent {...mockOrderReview} />