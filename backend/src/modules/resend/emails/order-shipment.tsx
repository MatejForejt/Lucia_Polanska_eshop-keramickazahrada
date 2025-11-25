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
} from "@react-email/components";

interface OrderShipmentEmailProps {
  customerName?: string;
  orderNumber?: string;
  trackingNumber?: string;
  carrierName?: string;
  estimatedDelivery?: string;
  trackingLink?: string;
  orderLink?: string;
}

function OrderShipmentEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  trackingNumber = "CZ123456789",
  carrierName = "Česká pošta",
  estimatedDelivery = "2-3 pracovní dny",
  trackingLink = "https://www.postaonline.cz/trackandtrace/-/zasilka/cislo?parcelNumbers=CZ123456789",
  orderLink = "https://yourstore.com/orders/12345"
}: OrderShipmentEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vaše objednávka {orderNumber} byla odeslána!</Preview>
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
                Vaše objednávka byla odeslána! 
              </Heading>
               <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Vaše objednávka byla úspěšně předána dopravci a je nyní na cestě k vám.
              </Text>
            </Section>

            <Section className="my-[32px] bg-green-50 border border-solid border-green-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-normal leading-[26px] m-0">
                📦 Vaše objednávka byla úspěšně předána dopravci
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Detaily zásilky:
              </Text>

              <div className="space-y-[12px] gap-4 flex flex-col">
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
                    Číslo zásilky:
                  </Text>
                  <Text className="text-blue-600 text-[18px] font-bold leading-[26px] m-0 font-mono">
                    {trackingNumber}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Dopravce:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {carrierName}
                  </Text>
                </div>

                <div>
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Odhadované doručení:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {estimatedDelivery}
                  </Text>
                </div>
              </div>
            </Section>

            <Section className="my-[32px] bg-blue-50 border border-solid border-blue-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] m-0">
                🔍 Sledujte zásilku online a získejte aktuální informace o doručení.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-5"
                href={trackingLink}
              >
                Sledovat zásilku
              </Button>
              <Button
                className="bg-[#212222] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#87986A] transition-colors"
                href={orderLink}
              >
                Zobrazit objednávku
              </Button>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Informace o doručení:
              </Text>
              <Text className="text-[#212222] text-[14px] leading-[20px] m-0 mt-2">
                • Zásilka bude doručena během pracovních dnů, které Vám dopravce sdělí.
              </Text>
              <Text className="text-[#212222] text-[14px] leading-[20px] m-0 mt-2">
                • V případě nepřítomnosti bude zásilka uložena, kde si ji můžete vyzvednout.
              </Text>
              <Text className="text-[#212222] text-[14px] leading-[20px] m-0 mt-2">
                • O doručení budete informováni SMS nebo e-mailem vaším vybraným dopravcem.
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

export const OrderShipmentEmail = (props: OrderShipmentEmailProps) => (
  <OrderShipmentEmailComponent {...props} />
)

// Mock data for preview/development
const mockOrderShipment: OrderShipmentEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  trackingNumber: "CZ123456789",
  carrierName: "Česká pošta",
  estimatedDelivery: "2-3 pracovní dny",
  trackingLink: "https://www.postaonline.cz/trackandtrace/-/zasilka/cislo?parcelNumbers=CZ123456789",
  orderLink: "https://yourstore.com/orders/12345"
}

export default () => <OrderShipmentEmailComponent {...mockOrderShipment} />