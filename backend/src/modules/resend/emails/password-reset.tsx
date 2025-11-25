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

type PasswordResetEmailProps = {
  reset_url: string
  email?: string
}

function PasswordResetEmailComponent({ reset_url, email }: PasswordResetEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Zresetujte své heslo</Preview>
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
                Zresetujte své heslo
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Dobrý den,{email ? ` ${email}` : ""},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Obdrželi jsme žádost o resetování vašeho hesla. Klikněte na tlačítko níže a vytvořte si nové heslo pro svůj účet.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={reset_url}
              >
                Zresetujte heslo
              </Button>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Nebo zkopírujte a vložte tuto adresu URL do svého prohlížeče:
              </Text>
              <Link
                href={reset_url}
                className="text-[#87986A] no-underline text-[14px] leading-[24px] break-all hover:text-[#212222] transition-colors"
              >
                {reset_url}
              </Link>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px] underline-offset-4 underline">
                Tento odkaz pro resetování hesla brzy vyprší z bezpečnostních důvodů.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] mt-2">
                Pokud jste o resetování hesla nežádali, můžete tento e-mail bezpečně ignorovat. Vaše heslo zůstane nezměněno.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
              <Text className="text-[#212222] text-[14px] leading-[24px]">
                Z bezpečnostních důvodů nikdy nesdílejte tento odkaz na resetování s nikým. Pokud máte potíže s tlačítkem výše, zkopírujte a vložte adresu URL do svého webového prohlížeče.
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

export const passwordResetEmail = (props: PasswordResetEmailProps) => (
  <PasswordResetEmailComponent {...props} />
)

// Mock data for preview/development
const mockPasswordReset: PasswordResetEmailProps = {
  reset_url: "https://your-app.com/reset-password?token=sample-reset-token-123",
  email: "user@example.com",
}

export default () => <PasswordResetEmailComponent {...mockPasswordReset} />