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

interface AddressAddedEmailProps {
  customerName?: string;
  addressType?: string;
  addressDetails?: string;
  addTime?: string;
  accountLink?: string;
  editLink?: string;
}

function AddressAddedEmailComponent({
  customerName = "Vážený zákazník",
  addressType = "Doručovací adresa",
  addressDetails = "Jan Novák\nVáclavské náměstí 123\n110 00 Praha 1\nČeská republika",
  addTime = new Date().toLocaleString('cs-CZ'),
  accountLink = "https://yourstore.com/account",
  editLink = "https://yourstore.com/account/addresses"
}: AddressAddedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nová adresa byla přidána do vašeho účtu</Preview>
      <Tailwind>
        <Body className="bg-[#87986A] my-auto mx-auto font-sans">

            <Section className="border-b border-solid border-[#212222]">
              <div className="bg-[#ffff] text-white py-3 flex align-center justify-center">
                <img style={{ width: "80px", height: "80px", margin: "6px 0" }} src="https://c3studium.com/assets/icons/logo.svg" alt="Logo" className="w-[40px] h-[40px]" />
                <Heading className="text-[#212222] text-[26px] font-normal text-center p-0 my-[30px] mx-0">
                  Keramická Zahrada
                </Heading>
              </div>
            </Section>

          <Container className="border border-solid border-[#212222] rounded-3xl my-[40px] mx-auto p-[20px] max-w-600px] bg-white">
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[10px] mx-2">
                Nová adresa přidána
              </Heading>
              <Text className="text-[#212222] text-[18px] leading-[24px] m-2">
                Vážený {customerName},
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#d4edda] border border-solid border-[#c3e6cb] rounded-lg p-[20px] text-center">
              <Text className="text-[#155724] text-[18px] font-bold leading-[26px] m-0">
                ✅ Nová adresa byla úspěšně přidána do vašeho účtu
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#f8f9fa] border border-solid border-[#dee2e6] rounded-lg p-[20px]">
              <Text className="text-[#666] text-[18px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Typ adresy:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-4">
                {addressType}
              </Text>

              <Text className="text-[#666] text-[18px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Adresa:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[20px] m-0 mb-4 whitespace-pre-line">
                {addressDetails}
              </Text>

              <Text className="text-[#666] text-[18px] font-bold leading-[20px] m-0 mb-1 uppercase">
                Čas přidání:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                {addTime}
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-t border-solid border-[#212222]">
              <Text className="text-[#212222] text-[18px] leading-[24px]">
                Tato adresa bude nyní k dispozici při objednávání produktů. Můžete ji upravit nebo odstranit v nastavení účtu.
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#e7f3ff] border border-solid border-[#b8daff] rounded-lg p-[20px]">
              <Text className="text-[#004085] text-[18px] font-bold leading-[24px] m-0 mb-4">
                Výhody uložených adres:
              </Text>
              <Text className="text-[#004085] text-[16px] leading-[20px] m-0">🚚 Rychlejší dokončení objednávek</Text>
              <Text className="text-[#004085] text-[16px] leading-[20px] m-0">✏️ Snadná úprava nebo odstranění</Text>
              <Text className="text-[#004085] text-[16px] leading-[20px] m-0">🔄 Opětovné použití pro budoucí nákupy</Text>
            </Section>

            <Section className="text-center gap-5 mt-[32px] mb-[32px] flex justify-center flex-wrap">
              <Button
                className="bg-[#87986A] rounded-3xl mr-5 text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={editLink}
              >
                Upravit adresy
              </Button>
              <Button
                className="bg-[#6c757d] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
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

export const AddressAddedEmail = (props: AddressAddedEmailProps) => (
  <AddressAddedEmailComponent {...props} />
);

// Mock data for preview/development
const mockAddressAdded: AddressAddedEmailProps = {
  customerName: "Vážený zákazník",
  addressType: "Doručovací adresa",
  addressDetails: "Jan Novák\nVáclavské náměstí 123\n110 00 Praha 1\nČeská republika",
  addTime: new Date().toLocaleString('cs-CZ'),
  accountLink: "https://yourstore.com/account",
  editLink: "https://yourstore.com/account/addresses",
};

export default () => <AddressAddedEmailComponent {...mockAddressAdded} />;