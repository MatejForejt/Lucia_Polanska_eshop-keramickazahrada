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

interface EmailChangeEmailProps {
  customerName?: string;
  oldEmail?: string;
  newEmail?: string;
  confirmationLink?: string;
  expiryTime?: string;
  accountLink?: string;
}

function EmailChangeEmailComponent({
  customerName = "Vážený zákazník",
  oldEmail = "old@email.com",
  newEmail = "new@email.com",
  confirmationLink = "https://yourstore.com/account/confirm-email?token=abc123",
  expiryTime = "24 hodin",
  accountLink = "https://yourstore.com/account"
}: EmailChangeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Potvrďte změnu e-mailové adresy</Preview>
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
                Potvrďte změnu e-mailu
              </Heading>
              <Text className="text-[#212222] text-[20px] font-medium leading-[24px]">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Požádali jste o změnu e-mailové adresy ve vašem účtu. Pro dokončení změny je potřeba potvrdit novou adresu.
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                <span className="font-normal">Současná e-mailová adresa:</span> {oldEmail}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                <span className="font-normal">Nová e-mailová adresa:</span> {newEmail}
              </Text>
            </Section>

            <Section className="my-[12px]">
              <Text className="text-[#212222] text-[20px] leading-[24px]">
                🔗 Klikněte na tlačítko níže pro potvrzení změny e-mailu
              </Text>
            </Section>

            <Section className="text-center mt-[12px] pb-5 mb-[32px] border-b border-solid border-[#212222]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-5"
                href={confirmationLink}
              >
                Potvrdit nový e-mail
              </Button>
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={accountLink}
              >
                Zobrazit účet
              </Button>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Odkaz pro potvrzení je platný {expiryTime}. Po uplynutí této doby bude nutné požádat o změnu znovu.
              </Text>
            </Section>

            <Section className="my-[32px]">
              <div className="bg-[#fa5c5c] border border-solid border-[#ffeaa7] rounded-lg p-4 text-center">
                <Text className="text-[#fff] text-[16px] leading-[24px] font-bold">
                  ⚠️ Pokud jste o tuto změnu nepožádali, okamžitě změňte heslo ve vašem účtu a kontaktujte podporu.
                </Text>
              </div>
              <Text className="text-[#212222] text-[16px] leading-[24px] mt-2">
                Po potvrzení nové e-mailové adresy budete dostávat všechny notifikace na novou adresu.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Z bezpečnostních důvodů ověřujeme všechny změny e-mailových adres. Pokud máte jakékoliv otázky, kontaktujte naši podporu.
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

export const EmailChangeEmail = (props: EmailChangeEmailProps) => (
  <EmailChangeEmailComponent {...props} />
)

// Mock data for preview/development
const mockEmailChange: EmailChangeEmailProps = {
  customerName: "Jan Novák",
  oldEmail: "jan.novak@stary-email.cz",
  newEmail: "jan.novak@novy-email.cz",
  confirmationLink: "https://yourstore.com/account/confirm-email?token=abc123",
  expiryTime: "24 hodin",
  accountLink: "https://yourstore.com/account"
}

export default () => <EmailChangeEmailComponent {...mockEmailChange} />