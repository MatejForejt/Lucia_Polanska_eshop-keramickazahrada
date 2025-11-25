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

interface ReturnRejectedEmailProps {
  customerName?: string;
  orderNumber?: string;
  returnNumber?: string;
  rejectedItems?: string;
  rejectionReason?: string;
  appealInstructions?: string;
  orderLink?: string;
  supportEmail?: string;
}

function ReturnRejectedEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  returnNumber = "RTN12345",
  rejectedItems = "Keramický hrnek - modrý",
  rejectionReason = "Produkt byl používán nebo poškozen",
  appealInstructions = "Můžete se odvolat do 14 dní od obdržení tohoto e-mailu",
  orderLink = "https://yourstore.com/orders/12345",
  supportEmail = "support@yourstore.com"
}: ReturnRejectedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Žádost o vrácení pro objednávku {orderNumber} byla zamítnuta</Preview>
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
                Žádost o vrácení byla zamítnuta
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Bohužel jsme museli vaši žádost o vrácení zamítnout. Níže najdete podrobnosti o rozhodnutí.
              </Text>
            </Section>

            <Section className="my-[32px] bg-red-50 border border-solid border-red-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                ❌ Vaše žádost o vrácení byla zamítnuta
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <div className="space-y-[12px]">
                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Číslo objednávky:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {orderNumber}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Číslo žádosti o vrácení:
                  </Text>
                  <Text className="text-blue-600 text-[18px] font-bold leading-[26px] m-0 font-mono">
                    {returnNumber}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Zamítnuté položky:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {rejectedItems}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Důvod zamítnutí:
                  </Text>
                  <Text className="text-red-600 text-[16px] leading-[24px] italic m-0">
                    {rejectionReason}
                  </Text>
                </div>
              </div>
            </Section>

            <Section className="my-[32px] bg-yellow-50 border border-solid border-yellow-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Naše politika vrácení:
              </Text>
              <div className="space-y-[8px]">
                <Text className="text-[#212222] text-[16px] leading-[20px] m-0">• Produkty musí být v původním stavu a balení</Text>
                <Text className="text-[#212222] text-[16px] leading-[20px] m-0">• Nepoužité a nepoškozené zboží</Text>
                <Text className="text-[#212222] text-[16px] leading-[20px] m-0">• Originální účtenka nebo doklad o nákupu</Text>
                <Text className="text-[#212222] text-[16px] leading-[20px] m-0">• Lhůta pro vrácení: 30 dní od doručení</Text>
              </div>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                {appealInstructions}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] mt-2">
                Pokud s rozhodnutím nesouhlasíte nebo máte další otázky, kontaktujte nás prosím na{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-[#87986A] no-underline hover:text-[#212222] transition-colors"
                >
                  {supportEmail}
                </a>.
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

export const ReturnRejectedEmail = (props: ReturnRejectedEmailProps) => (
  <ReturnRejectedEmailComponent {...props} />
)

// Mock data for preview/development
const mockReturnRejected: ReturnRejectedEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  returnNumber: "RTN12345",
  rejectedItems: "Keramický hrnek - modrý",
  rejectionReason: "Produkt byl používán nebo poškozen",
  appealInstructions: "Můžete se odvolat do 14 dní od obdržení tohoto e-mailu",
  orderLink: "https://yourstore.com/orders/12345",
  supportEmail: "support@yourstore.com"
}

export default () => <ReturnRejectedEmailComponent {...mockReturnRejected} />