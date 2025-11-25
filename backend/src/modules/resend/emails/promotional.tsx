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

interface PromotionalEmailProps {
  customerName?: string;
  discountCode?: string;
  discountPercentage?: string;
  expiryDate?: string;
  productLink?: string;
  unsubscribeLink?: string;
}

function PromotionalEmailComponent({
  customerName = "Vážený zákazník",
  discountCode = "KERAMIKA20",
  discountPercentage = "20%",
  expiryDate = "31. prosince 2024",
  productLink = "https://yourstore.com/products",
  unsubscribeLink = "https://yourstore.com/unsubscribe"
}: PromotionalEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Speciální nabídka: {discountPercentage} sleva na všechny produkty!</Preview>
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
                Speciální nabídka pro vás!
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Máme pro vás skvělou zprávu! Využijte této jedinečné příležitosti a obohaťte svůj domov o krásnou keramiku za výhodnou cenu.
              </Text>
            </Section>

            <Section className="my-[32px] bg-[#212222] rounded-lg p-[24px] text-center">
              <Text className="text-white text-[24px] font-bold leading-[32px] mb-[16px]">
                🎉 {discountPercentage} SLEVY NA VŠECHNY PRODUKTY 🎉
              </Text>
              <Text className="text-white text-[18px] leading-[26px] mb-[8px]">
                Slevový kód: <span className="font-bold bg-[#87986A] px-2 py-1 rounded">{discountCode}</span>
              </Text>
              <Text className="text-gray-300 text-[14px] leading-[20px]">
                Platnost do: {expiryDate}
              </Text>
            </Section>

            <Section className="my-[32px] border border-solid border-[#212222] p-2 rounded-lg">
              <Text className="text-[#212222] text-[18px] font-semibold leading-[24px]">
                Naše kolekce zahrnuje:
              </Text>
              <div className="space-y-[8px] mt-[16px]">
                <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-1">• Ručně malované talíře a mísy</Text>
                <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-1">• Unikátní vázy a dekorace</Text>
                <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-1">• Funkční keramika pro každodenní použití</Text>
                <Text className="text-[#212222] text-[16px] leading-[24px] m-0 mb-1">• Limitované edice od českých umělců</Text>
              </div>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={productLink}
              >
                Procházet produkty
              </Button>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Slevový kód můžete použít při objednávce na našem webu. Nabídka platí pouze na produkty skladem.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
              <Text className="text-[#212222] text-[14px] leading-[24px]">
                Pokud se chcete odhlásit z newsletteru, klikněte{" "}
                <a
                  href={unsubscribeLink}
                  className="text-[#87986A] no-underline hover:text-[#212222] transition-colors"
                >
                  zde
                </a>.
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

export const PromotionalEmail = (props: PromotionalEmailProps) => (
  <PromotionalEmailComponent {...props} />
)

// Mock data for preview/development
const mockPromotional: PromotionalEmailProps = {
  customerName: "Jan Novák",
  discountCode: "KERAMIKA20",
  discountPercentage: "20%",
  expiryDate: "31. prosince 2024",
  productLink: "https://yourstore.com/products",
  unsubscribeLink: "https://yourstore.com/unsubscribe"
}

export default () => <PromotionalEmailComponent {...mockPromotional} />