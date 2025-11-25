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
} from "@react-email/components";

interface RefundRequestEmailProps {
  customerName?: string;
  orderNumber?: string;
  refundAmount?: string;
  refundReason?: string;
  orderLink?: string;
  estimatedProcessingTime?: string;
}

function RefundRequestEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  refundAmount = "1 250 Kč",
  refundReason = "Požadavek zákazníka",
  orderLink = "https://yourstore.com/orders/12345",
  estimatedProcessingTime = "3-5 pracovních dnů"
}: RefundRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Žádost o vrácení peněz byla přijata - {orderNumber}</Preview>
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
                Žádost o vrácení peněz přijata
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Vaše žádost o vrácení peněz za objednávku {orderNumber} byla úspěšně přijata a je nyní zpracovávána.
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <div className="space-y-[12px]">
                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Objednávka:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {orderNumber}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Požadovaná částka k vrácení:
                  </Text>
                  <Text className="text-green-600 text-[20px] font-bold leading-[28px] m-0">
                    {refundAmount}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Důvod vrácení:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {refundReason}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Očekávaná doba zpracování:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {estimatedProcessingTime}
                  </Text>
                </div>
              </div>
            </Section>

            <Section className="my-[32px] bg-blue-50 border border-solid border-blue-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                ⏱️ Zpracování žádosti může trvat až {estimatedProcessingTime}
              </Text>
            </Section>

            <Section className="my-[32px] border-t border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Jakmile bude žádost zpracována, obdržíte potvrzovací e-mail s informacemi o připsání peněz na váš účet.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] mt-2">
                Sledujte stav své žádosti v sekci "Mé objednávky" na našem webu.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
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

export const RefundRequestEmail = (props: RefundRequestEmailProps) => (
  <RefundRequestEmailComponent {...props} />
)

// Mock data for preview/development
const mockRefundRequest: RefundRequestEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  refundAmount: "1 250 Kč",
  refundReason: "Požadavek zákazníka",
  orderLink: "https://yourstore.com/orders/12345",
  estimatedProcessingTime: "3-5 pracovních dnů"
}

export default () => <RefundRequestEmailComponent {...mockRefundRequest} />