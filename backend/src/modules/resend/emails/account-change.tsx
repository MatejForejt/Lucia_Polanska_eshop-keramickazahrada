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

interface AccountChangeEmailProps {
  customerName?: string;
  changeType?: string;
  changeDetails?: string;
  changeTime?: string;
  accountLink?: string;
  securityNote?: boolean;
}

function AccountChangeEmailComponent({
  customerName = "Vážený zákazník",
  changeType = "Změna osobních údajů",
  changeDetails = "Bylo aktualizováno jméno a příjmení",
  changeTime = new Date().toLocaleString('cs-CZ'),
  accountLink = "https://yourstore.com/account",
  securityNote = true
}: AccountChangeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Změna v účtu: {changeType}</Preview>
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
                Změna v účtu
              </Heading>

              <Text className="text-[#212222] text-[18px] leading-[24px] m-2">
                Vážený {customerName},
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#d1ecf1] border border-solid border-[#bee5eb] rounded-lg p-[20px] text-center">
              <Text className="text-[#0c5460] text-[18px] font-bold leading-[26px] m-0">
                Váš účet byl úspěšně aktualizován
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#f8f9fa] border border-solid border-[#dee2e6] rounded-lg p-[20px]">
              <Text className="text-[#666] text-[14px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Typ změny:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-4">
                {changeType}
              </Text>

              <Text className="text-[#666] text-[14px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Detaily:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-4">
                {changeDetails}
              </Text>

              <Text className="text-[#666] text-[14px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Čas změny:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                {changeTime}
              </Text>
            </Section>

            {securityNote && (
              <Section className="my-[32px] flex justify-center">
                <div className="bg-[#fa5c5c] border border-solid border-[#ffeaa7] rounded-lg p-4 text-center">
                    <Text className="text-[#fff] text-[16px] font-bold leading-[24px] m-0">
                  🔒    Pokud jste tuto změnu neprovedli vy, okamžitě kontaktujte naši podporu a změňte heslo pomocí odkazu níže.
                    </Text>
                </div>
                <div className="flex justify-center mt-2">
                    <Button
                        className="bg-[#fa5c5c] text-[#fff] font-bold py-2 px-4 rounded-3xl mt-2 hover:bg-[#f8d7da] transition-colors"
                        href="http://localhost:8000/cz/forgot-password"
                    >
                        Kontaktujte podporu
                    </Button>
                </div>
              </Section>
            )}

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Všechny změny byly uloženy a jsou okamžitě aktivní. Pokud máte jakékoliv dotazy, neváhejte nás kontaktovat.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[12px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={accountLink}
              >
                Zobrazit účet
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
  );
}

export const AccountChangeEmail = (props: AccountChangeEmailProps) => (
  <AccountChangeEmailComponent {...props} />
);

// Mock data for preview/development
const mockAccountChange: AccountChangeEmailProps = {
  customerName: "Vážený zákazník",
  changeType: "Změna osobních údajů",
  changeDetails: "Bylo aktualizováno jméno a příjmení",
  changeTime: new Date().toLocaleString('cs-CZ'),
  accountLink: "https://yourstore.com/account",
  securityNote: true,
};

export default () => <AccountChangeEmailComponent {...mockAccountChange} />;