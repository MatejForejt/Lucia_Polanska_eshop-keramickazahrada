import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface AccountDeletedEmailProps {
  customerName?: string;
  email?: string;
  deletionDate?: string;
}

function AccountDeletedEmailComponent({
  customerName = "Vážený zákazník",
  email = "your@email.com",
  deletionDate = new Date().toLocaleDateString('cs-CZ')
}: AccountDeletedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Váš účet byl úspěšně smazán</Preview>
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
                Účet byl úspěšně smazán
              </Heading>
              <Text className="text-[#212222] text-[18px] leading-[24px] m-2">
                Vážený {customerName},
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#d1ecf1] border border-solid border-[#bee5eb] rounded-lg p-[20px] text-center">
              <Text className="text-[#0c5460] text-[18px] font-bold leading-[26px] m-0">
                ✅ Váš účet byl úspěšně smazán dne {deletionDate}
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[18px] leading-[24px]">
                E-mailová adresa: <strong>{email}</strong>
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                V souladu s našimi zásadami ochrany osobních údajů byly všechny vaše osobní údaje a údaje o objednávkách trvale odstraněny z našich systémů.
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#f8f9fa] border border-solid border-[#dee2e6] rounded-lg p-[20px]">
              <Text className="text-[#212222] text-[18px] font-bold leading-[24px] m-0 mb-4">
                Co se stalo s vašimi údaji:
              </Text>
              <Text className="text-[#666] text-[16px] leading-[20px] m-0">• Osobní údaje - anonymizovány</Text>
              <Text className="text-[#666] text-[16px] leading-[20px] m-0">• Historie objednávek - zachována pro daňové účely</Text>
              <Text className="text-[#666] text-[16px] leading-[20px] m-0">• Newsletter - odhlášena</Text>
              <Text className="text-[#666] text-[16px] leading-[20px] m-0">• Wishlist - odstraněna</Text>
              <Text className="text-[#666] text-[16px] leading-[20px] m-0">• Účet - označen jako smazaný</Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Pokud jste si to rozmysleli nebo se jednalo o chybu, můžete si kdykoliv vytvořit nový účet a tím obnovit přístup ke svým datům.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Děkujeme za důvěru a čas strávený v našem e-shopu.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px]">
                <Text className="text-[#212222] text-[14px] leading-[24px]">
                    S pozdravem,<br />
                    Keramická Zahrada, Lucie Polanská
                </Text>
            </Section>
            
            {/* Footer */}
            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
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

export const AccountDeletedEmail = (props: AccountDeletedEmailProps) => (
  <AccountDeletedEmailComponent {...props} />
);

// Mock data for preview/development
const mockAccountDeleted: AccountDeletedEmailProps = {
  customerName: "Vážený zákazník",
  email: "your@email.com",
  deletionDate: new Date().toLocaleDateString('cs-CZ'),
};

export default () => <AccountDeletedEmailComponent {...mockAccountDeleted} />;