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

interface PaymentCancelledEmailProps {
  customerName?: string;
  orderNumber?: string;
  paymentAmount?: string;
  cancellationReason?: string;
  orderLink?: string;
  retryLink?: string;
}

function PaymentCancelledEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  paymentAmount = "2 450 Kč",
  cancellationReason = "Zrušeno zákazníkem",
  orderLink = "https://yourstore.com/orders/12345",
  retryLink = "https://yourstore.com/checkout/retry/12345"
}: PaymentCancelledEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Platba za objednávku {orderNumber} byla zrušena</Preview>
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
                Platba byla zrušena
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Platba za vaši objednávku byla zrušena. Vaše objednávka nebyla dokončena, ale produkty zůstávají ve vašem košíku.
              </Text>
            </Section>

            <Section className="my-[32px] bg-red-50 border border-solid border-red-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                🚫 Platba za vaši objednávku byla zrušena
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Detaily platby:
              </Text>

              <div className="space-y-[12px]">
                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Číslo objednávky:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {orderNumber}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Částka:
                  </Text>
                  <Text className="text-[#212222] text-[20px] font-bold leading-[28px] m-0">
                    {paymentAmount}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Důvod zrušení:
                  </Text>
                  <Text className="text-red-600 text-[16px] leading-[24px] m-0 italic">
                    {cancellationReason}
                  </Text>
                </div>
              </div>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Produkty zůstávají ve vašem košíku a můžete dokončit nákup kdykoliv. Pokud chcete dokončit objednávku, můžete použít uložené údaje nebo začít znovu.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-5"
                href={retryLink}
              >
                Dokončit objednávku
              </Button>
              <Button
                className="bg-[#212222] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#87986A] transition-colors"
                href={orderLink}
              >
                Zobrazit objednávku
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

export const PaymentCancelledEmail = (props: PaymentCancelledEmailProps) => (
  <PaymentCancelledEmailComponent {...props} />
)

// Mock data for preview/development
const mockPaymentCancelled: PaymentCancelledEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  paymentAmount: "2 450 Kč",
  cancellationReason: "Zrušeno zákazníkem",
  orderLink: "https://yourstore.com/orders/12345",
  retryLink: "https://yourstore.com/checkout/retry/12345"
}

export default () => <PaymentCancelledEmailComponent {...mockPaymentCancelled} />