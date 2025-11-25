import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";

interface OrderDelayedEmailProps {
  customerName?: string;
  orderNumber?: string;
  originalDeliveryDate?: string;
  newDeliveryDate?: string;
  delayReason?: string;
  compensationOffer?: string;
  trackingLink?: string;
  orderLink?: string;
  supportEmail?: string;
}

function OrderDelayedEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  originalDeliveryDate = "15. října 2025",
  newDeliveryDate = "22. října 2025",
  delayReason = "Vysoký počet objednávek a omezení dodávek od výrobce",
  compensationOffer = "Slevový kupón ve výši 10% na další nákup",
  trackingLink = "https://yourstore.com/orders/12345/track",
  orderLink = "https://yourstore.com/orders/12345",
  supportEmail = "support@yourstore.com"
}: OrderDelayedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Omlouváme se za zpoždění objednávky {orderNumber}</Preview>
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
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[10px] mx-2">
                Omlouváme se za zpoždění
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[18px] leading-[24px] font-normal m-2">
                ⏰ Vaše objednávka bude doručena později
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Číslo objednávky: {orderNumber}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Původní termín doručení: {originalDeliveryDate}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Nový termín doručení: {newDeliveryDate}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Důvod zpoždění: {delayReason}
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Velmi se omlouváme za způsobené inconvenience. Snažíme se všechny objednávky zpracovat co nejrychleji.
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Jako kompenzaci nabízíme:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                {compensationOffer}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                * Kupón bude automaticky přidán do vašeho účtu po doručení objednávky
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Sledujte stav své objednávky online nebo nás kontaktujte na{" "}
                <Link
                  href={`mailto:${supportEmail}`}
                  className="text-[#87986A] no-underline text-[14px] leading-[24px] hover:text-[#212222] transition-colors"
                >
                  {supportEmail}
                </Link>{" "}
                s jakýmikoliv dotazy.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-2"
                href={trackingLink}
              >
                Sledovat objednávku
              </Button>
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={orderLink}
              >
                Zobrazit objednávku
              </Button>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Děkujeme za pochopení a trpělivost. Vaše spokojenost je pro nás na prvním místě a snažíme se všechny objednávky vyřídit co nejrychleji.
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

export const OrderDelayedEmail = (props: OrderDelayedEmailProps) => (
  <OrderDelayedEmailComponent {...props} />
)

// Mock data for preview/development
const mockOrderDelayed: OrderDelayedEmailProps = {
  customerName: "Marie Svobodová",
  orderNumber: "#12345",
  originalDeliveryDate: "15. října 2025",
  newDeliveryDate: "22. října 2025",
  delayReason: "Vysoký počet objednávek a omezení dodávek od výrobce",
  compensationOffer: "Slevový kupón ve výši 10% na další nákup",
  trackingLink: "https://yourstore.com/orders/12345/track",
  orderLink: "https://yourstore.com/orders/12345",
  supportEmail: "support@yourstore.com"
}

export default () => <OrderDelayedEmailComponent {...mockOrderDelayed} />