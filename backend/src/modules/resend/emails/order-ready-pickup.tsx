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
  Link,
  Button, 
} from "@react-email/components"

interface OrderReadyPickupEmailProps {
  customerName?: string;
  orderNumber?: string;
  pickupLocation?: string;
  pickupAddress?: string;
  pickupHours?: string;
  readyDate?: string;
  pickupDeadline?: string;
  orderLink?: string;
  pickupInstructions?: string;
}

function OrderReadyPickupEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  pickupLocation = "Prodejna Praha",
  pickupAddress = "Václavské náměstí 123, Praha 1",
  pickupHours = "Po-Pá: 9:00-18:00, So: 10:00-16:00",
  readyDate = new Date().toLocaleDateString('cs-CZ'),
  pickupDeadline = "14 dní od připravenosti",
  orderLink = "https://yourstore.com/orders/12345",
  pickupInstructions = "Při vyzvednutí si vezměte občanský průkaz a číslo objednávky"
}: OrderReadyPickupEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vaše objednávka {orderNumber} je připravena k vyzvednutí!</Preview>
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
                Vaše objednávka je připravena k vyzvednutí! 🏪
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Vaše objednávka je připravena k vyzvednutí v naší prodejně. Níže najdete všechny potřebné informace.
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#87986A] bg-opacity-10 border border-solid border-[#87986A] rounded-lg p-[20px] text-center">
              <Text className="text-[#fff] text-[18px] font-semibold leading-[26px] m-0">
                ✅ Vaše objednávka je připravena k vyzvednutí
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Detaily vyzvednutí:
              </Text>

              <div className="space-y-[12px]">
                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Číslo objednávky:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {orderNumber}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Místo vyzvednutí:
                  </Text>
                  <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                    {pickupLocation}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Adresa:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {pickupAddress}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Otevírací doba:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {pickupHours}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Připraveno od:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {readyDate}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Lhůta k vyzvednutí:
                  </Text>
                  <Text className="text-[16px] font-semibold leading-[24px] m-0 text-red-600">
                    {pickupDeadline}
                  </Text>
                </div>
              </div>
            </Section>

            {/* <Section className="my-[32px] bg-yellow-50 border border-solid border-yellow-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Instrukce pro vyzvednutí:
              </Text>
              <Text className="text-[#212222] text-[14px] leading-[20px] mb-[8px]">
                • {pickupInstructions}
              </Text>
              <Text className="text-[#212222] text-[14px] leading-[20px] mb-[8px]">
                • Objednávku můžete vyzvednout pouze vy nebo osoba s vaším pověřením
              </Text>
              <Text className="text-[#212222] text-[14px] leading-[20px] mb-[8px]">
                • Při vyzvednutí si prosím zkontrolujte obsah zásilky
              </Text>
            </Section> */}

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Pokud nemůžete přijít vyzvednout objednávku včas, kontaktujte vašeho dodavatele nebo nás prosím co nejdříve na telefon.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-5"
                href={orderLink}
              >
                Zobrazit objednávku
              </Button>
              <Button
                className="bg-[#212222] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#87986A] transition-colors"
                href={`tel:+420123456789`}
              >
                Zavolat
              </Button>
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

export const OrderReadyPickupEmail = (props: OrderReadyPickupEmailProps) => (
  <OrderReadyPickupEmailComponent {...props} />
)

// Mock data for preview/development
const mockOrderReadyPickup: OrderReadyPickupEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  pickupLocation: "Prodejna Praha",
  pickupAddress: "Václavské náměstí 123, Praha 1",
  pickupHours: "Po-Pá: 9:00-18:00, So: 10:00-16:00",
  readyDate: new Date().toLocaleDateString('cs-CZ'),
  pickupDeadline: "14 dní od připravenosti",
  orderLink: "https://yourstore.com/orders/12345",
  pickupInstructions: "Při vyzvednutí si vezměte občanský průkaz a číslo objednávky"
}

export default () => <OrderReadyPickupEmailComponent {...mockOrderReadyPickup} />