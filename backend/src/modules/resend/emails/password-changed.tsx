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
} from "@react-email/components";

interface PasswordChangedEmailProps {
  customerName?: string;
}

function PasswordChangedEmailComponent({ customerName = "Vážený zákazník" }: PasswordChangedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Heslo bylo úspěšně změněno</Preview>
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
                Heslo bylo úspěšně změněno
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Vaše heslo bylo úspěšně změněno. Pokud jste tuto změnu neprovedli vy, okamžitě kontaktujte naši podporu.
              </Text>
            </Section>

            <Section className="my-[32px] bg-green-50 border border-solid border-green-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                ✅ Vaše heslo bylo úspěšně změněno
              </Text>
            </Section>

            <Section className="my-[12px] mt-[32px]">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[24px]">
                Pro vaši bezpečnost doporučujeme:
              </Text>
            </Section>

            <Section className="my-[12px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[16px] leading-[20px] m-0 mb-[4px]">
                • Používat silné a unikátní heslo
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[20px] m-0 mb-[4px]">
                • Ne sdílet heslo s nikým jiným
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[20px] m-0 mb-[4px]">
                • Pravidelně měnit heslo
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[20px] m-0 mb-[4px]">
                • Používat dvoufaktorové ověření, pokud je k dispozici
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Pokud máte jakékoliv obavy ohledně bezpečnosti vašeho účtu, kontaktujte nás prosím ihned.
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

export const PasswordChangedEmail = (props: PasswordChangedEmailProps) => (
  <PasswordChangedEmailComponent {...props} />
)

// Mock data for preview/development
const mockPasswordChanged: PasswordChangedEmailProps = {
  customerName: "Jan Novák"
}

export default () => <PasswordChangedEmailComponent {...mockPasswordChanged} />