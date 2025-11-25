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

interface ReturnApprovedEmailProps {
  customerName?: string;
  orderNumber?: string;
  returnNumber?: string;
  approvedItems?: string;
  returnReason?: string;
  returnMethod?: string;
  returnDeadline?: string;
  returnAddress?: string;
  returnInstructions?: string;
  orderLink?: string;
}

function ReturnApprovedEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  returnNumber = "RTN12345",
  approvedItems = "Keramický hrnek - modrý, Keramický talíř - bílý",
  returnReason = "Požadavek zákazníka",
  returnMethod = "Osobní vrácení v prodejně",
  returnDeadline = "30 dní od schválení",
  returnAddress = "Václavské náměstí 123, Praha 1",
  returnInstructions = "Při vrácení si vezměte originální účtenku a produkty v původním balení",
  orderLink = "https://yourstore.com/orders/12345"
}: ReturnApprovedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vrácení pro objednávku {orderNumber} bylo schváleno</Preview>
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
                Vrácení bylo schváleno
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Vaše žádost o vrácení byla úspěšně schválena. Níže najdete všechny potřebné informace pro dokončení procesu vrácení.
              </Text>
            </Section>

            <Section className="my-[32px] bg-green-50 border border-solid border-green-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                ✅ Vaše žádost o vrácení byla schválena
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <div className="space-y-[12px]">
                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[4px]">
                    Číslo objednávky:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {orderNumber}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Číslo vrácení:
                  </Text>
                  <Text className="text-blue-600 text-[18px] font-bold leading-[26px] m-0 font-mono">
                    {returnNumber}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Schválené položky:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {approvedItems}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Důvod vrácení:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {returnReason}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Způsob vrácení:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {returnMethod}
                  </Text>
                </div>

                <div className="pb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Lhůta pro vrácení:
                  </Text>
                  <Text className="text-red-600 text-[16px] font-bold leading-[24px] m-0">
                    {returnDeadline}
                  </Text>
                </div>
              </div>
            </Section>

            {returnMethod === "Osobní vrácení v prodejně" && (
              <Section className="my-[32px] bg-blue-50 border border-solid border-blue-200 rounded-lg p-[20px]">
                <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                  Informace pro vrácení v prodejně:
                </Text>
                <div className="space-y-[8px]">
                  <Text className="text-[#212222] text-[14px] leading-[20px] m-0">Adresa: {returnAddress}</Text>
                  <Text className="text-[#212222] text-[14px] leading-[20px] m-0">Instrukce: {returnInstructions}</Text>
                </div>
              </Section>
            )}

            {returnMethod === "Poštovní vrácení" && (
              <Section className="my-[32px] bg-yellow-50 border border-solid border-yellow-200 rounded-lg p-[20px]">
                <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] m-0 mb-[16px]">
                  Informace pro poštovní vrácení:
                </Text>
                <div className="space-y-[8px]">
                  <Text className="text-[#212222] text-[14px] leading-[20px] m-0">Adresa: {returnAddress}</Text>
                  <Text className="text-[#212222] text-[14px] leading-[20px] m-0">Instrukce: {returnInstructions}</Text>
                  <Text className="text-[#212222] text-[14px] leading-[20px] m-0">Poštovné hradí: Zákazník (vráceno po zpracování)</Text>
                </div>
              </Section>
            )}

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px] mb-[16px]">
                Jak bude vrácení zpracováno:
              </Text>
              <div className="space-y-[8px]">
                <Text className="text-[#212222] text-[14px] leading-[20px] m-0">1. Přijmeme vaše zboží</Text>
                <Text className="text-[#212222] text-[14px] leading-[20px] m-0">2. Zkontrolujeme stav produktů</Text>
                <Text className="text-[#212222] text-[14px] leading-[20px] m-0">3. Vrátíme peníze na původní platební metodu</Text>
                <Text className="text-[#212222] text-[14px] leading-[20px] m-0">4. Zašleme potvrzení o zpracování</Text>
              </div>
            </Section>

            <Section className="text-center my-[32px] border-b border-solid border-[#212222]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors m-5"
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

export const ReturnApprovedEmail = (props: ReturnApprovedEmailProps) => (
  <ReturnApprovedEmailComponent {...props} />
)

// Mock data for preview/development
const mockReturnApproved: ReturnApprovedEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  returnNumber: "RTN12345",
  approvedItems: "Keramický hrnek - modrý, Keramický talíř - bílý",
  returnReason: "Požadavek zákazníka",
  returnMethod: "Osobní vrácení v prodejně",
  returnDeadline: "30 dní od schválení",
  returnAddress: "Václavské náměstí 123, Praha 1",
  returnInstructions: "Při vrácení si vezměte originální účtenku a produkty v původním balení",
  orderLink: "https://yourstore.com/orders/12345"
}

export default () => <ReturnApprovedEmailComponent {...mockReturnApproved} />