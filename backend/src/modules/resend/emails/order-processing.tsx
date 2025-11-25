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

interface OrderProcessingEmailProps {
  customerName?: string;
  orderNumber?: string;
  estimatedProcessingTime?: string;
  orderLink?: string;
}

function OrderProcessingEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  estimatedProcessingTime = "1-3 pracovní dny",
  orderLink = "https://yourstore.com/orders/12345"
}: OrderProcessingEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vaše objednávka {orderNumber} se začala zpracovávat</Preview>
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
                Vaše objednávka se začala zpracovávat
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                ⚙️ Vaše objednávka byla přijata a začalo se s jejím zpracováním
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#f8f9fa] border border-solid border-[#dee2e6] rounded-lg p-[20px]">
              <Text className="text-[#666] text-[14px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Číslo objednávky:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-4">
                {orderNumber}
              </Text>

              <Text className="text-[#666] text-[14px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Odhadovaný čas zpracování:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                {estimatedProcessingTime}
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Nyní připravujeme vaše produkty a balíme je s maximální péčí. Jakmile bude objednávka připravena k odeslání, obdržíte další e-mail s informacemi o expedici od vaší zvolené přepravní společnosti.
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#f8f9fa] border border-solid border-[#dee2e6] rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-bold leading-[24px] m-0 mb-4">
                Co se děje s vaší objednávkou:
              </Text>
              <Text className="text-[#666] text-[14px] leading-[20px] m-0">• Kontrola produktů</Text>
              <Text className="text-[#666] text-[14px] leading-[20px] m-0">• Příprava a balení zásilky</Text>
              <Text className="text-[#666] text-[14px] leading-[20px] m-0">• Kvalitní kontrola před odesláním</Text>
              <Text className="text-[#666] text-[14px] leading-[20px] m-0">• Předání dopravci</Text>
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
  );
}

export const OrderProcessingEmail = (props: OrderProcessingEmailProps) => (
  <OrderProcessingEmailComponent {...props} />
);

// Mock data for preview/development
const mockOrderProcessing: OrderProcessingEmailProps = {
  customerName: "Vážený zákazník",
  orderNumber: "#12345",
  estimatedProcessingTime: "1-2 pracovní dny",
  orderLink: "https://yourstore.com/orders/12345",
};

export default () => <OrderProcessingEmailComponent {...mockOrderProcessing} />;