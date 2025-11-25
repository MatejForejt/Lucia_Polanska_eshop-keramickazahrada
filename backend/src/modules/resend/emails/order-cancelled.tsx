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

interface OrderCancelledEmailProps {
  customerName?: string;
  orderNumber?: string;
  reason?: string;
}

function OrderCancelledEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  reason = "na žádost zákazníka"
}: OrderCancelledEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vaše objednávka byla zrušena</Preview>
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
              <Heading className="text-[#212222] text-[36px] font-normal text-center p-0 my-[30px] mx-0">
                Vaše objednávka byla zrušena
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[18px] leading-[24px] m-2">
                ❌ Objednávka zrušena
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Číslo objednávky: {orderNumber}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Důvod zrušení: {reason}
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Vaše objednávka byla zrušena. Pokud jste o zrušení nepožádali nebo máte jakékoliv otázky, kontaktujte nás prosím.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                V případě, že byla objednávka uhrazena, bude částka vrácena na váš účet během 3-5 pracovních dnů.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href="https://yourstore.com/store"
              >
                Pokračovat v nákupu
              </Button>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Omlouváme se za případné nepříjemnosti a doufáme, že vás brzy znovu uvítáme v našem e-shopu.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                V případě jakýchkoliv dotazů nás neváhejte kontaktovat. Jsme tu, abychom vám pomohli s vašimi objednávkami a nákupy.
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

export const OrderCancelledEmail = (props: OrderCancelledEmailProps) => (
  <OrderCancelledEmailComponent {...props} />
)

// Mock data for preview/development
const mockOrderCancelled: OrderCancelledEmailProps = {
  customerName: "Anna Dvořáková",
  orderNumber: "#12345",
  reason: "na žádost zákazníka"
}

export default () => <OrderCancelledEmailComponent {...mockOrderCancelled} />