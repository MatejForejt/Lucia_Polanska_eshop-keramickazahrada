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

interface OrderDeliveredEmailProps {
  customerName?: string;
  orderNumber?: string;
}

function OrderDeliveredEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345"
}: OrderDeliveredEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vaše objednávka byla doručena!</Preview>
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
                Vaše objednávka byla doručena!
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Vaše objednávka {orderNumber} byla úspěšně doručena na uvedenou adresu.
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[24px] leading-[24px]">
                ✅ Objednávka doručena
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] font-semibold">
                Číslo objednávky: {orderNumber}
              </Text>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Doufáme, že jste s našimi produkty spokojeni. Pokud ano, zanechte prosím recenzi nebo sdílejte své zkušenosti s přáteli.
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Pokud máte jakékoliv otázky nebo potřebujete pomoc s vašimi výrobky, neváhejte nás kontaktovat.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] mr-5 rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href="https://yourstore.com/store"
              >
                Nakupovat znovu
              </Button>
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href="https://googlereviews.com"
              >
                Podpořte nás
              </Button>
            </Section>

            <Section className="my-[32px] border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[18px] leading-[24px]">
                Děkujeme za důvěru a těšíme se na další spolupráci!
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
  );
}

export const OrderDeliveredEmail = (props: OrderDeliveredEmailProps) => (
  <OrderDeliveredEmailComponent {...props} />
);

// Mock data for preview/development
const mockOrderDelivered: OrderDeliveredEmailProps = {
  customerName: "Vážený zákazník",
  orderNumber: "#12345",
};

export default () => <OrderDeliveredEmailComponent {...mockOrderDelivered} />;