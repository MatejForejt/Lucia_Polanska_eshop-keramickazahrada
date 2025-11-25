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

interface SignInNotificationEmailProps {
  customerName?: string;
  email?: string;
  signInTime?: string;
  signInLocation?: string;
  deviceInfo?: string;
  accountLink?: string;
}

function SignInNotificationEmailComponent({
  customerName = "Vážený zákazník",
  email = "your@email.com",
  signInTime = new Date().toLocaleString('cs-CZ'),
  signInLocation = "Česká republika",
  deviceInfo = "Chrome na macOS",
  accountLink = "https://yourstore.com/account"
}: SignInNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nové přihlášení k vašemu účtu</Preview>
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
                Nové přihlášení k vašemu účtu
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Zaznamenali jsme nové přihlášení k vašemu účtu na našem e-shopu. Pro vaše bezpečnost vám posíláme tyto informace.
              </Text>
            </Section>

            <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
              <div className="space-y-[12px]">
                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    E-mail:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {email}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Čas přihlášení:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {signInTime}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Poloha:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {signInLocation}
                  </Text>
                </div>

                <div className="mb-4">
                  <Text className="text-[#87986A] text-[14px] font-semibold leading-[20px] uppercase m-0 mb-[2px]">
                    Zařízení:
                  </Text>
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {deviceInfo}
                  </Text>
                </div>
              </div>
            </Section>

            <Section className="my-[32px] bg-blue-50 border border-solid border-blue-200 rounded-lg p-[20px] text-center">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                🔒 Pokud jste se přihlásili vy, můžete tuto zprávu ignorovat.
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] font-semibold leading-[24px]">
                Pokud jste se nepřihlásili vy, doporučujeme okamžitě změnit heslo a kontaktovat nás.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={accountLink}
              >
                Spravovat účet
              </Button>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Tato zpráva byla zaslána automaticky pro vaše bezpečnost.
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

export const SignInNotificationEmail = (props: SignInNotificationEmailProps) => (
  <SignInNotificationEmailComponent {...props} />
)

// Mock data for preview/development
const mockSignInNotification: SignInNotificationEmailProps = {
  customerName: "Jan Novák",
  email: "jan.novak@email.com",
  signInTime: new Date().toLocaleString('cs-CZ'),
  signInLocation: "Česká republika",
  deviceInfo: "Chrome na macOS",
  accountLink: "https://yourstore.com/account"
}

export default () => <SignInNotificationEmailComponent {...mockSignInNotification} />