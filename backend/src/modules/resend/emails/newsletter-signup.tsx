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

interface NewsletterSignupEmailProps {
  customerName?: string;
  unsubscribeLink?: string;
}

function NewsletterSignupEmailComponent({
  customerName = "Vážený zákazník",
  unsubscribeLink = "https://yourstore.com/unsubscribe"
}: NewsletterSignupEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Vítejte v našem newsletteru!</Preview>
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
                Vítejte v našem newsletteru!
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                Děkujeme za přihlášení k odběru našeho newsletteru! Nyní budete pravidelně dostávat:
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">• Novinky o nových produktech</Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">• Speciální nabídky a slevy</Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">• Tipy a rady pro keramiku</Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-0">• Exkluzivní obsah pro naše příznivce</Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#87986A] text-[16px] leading-[24px]">
                📧 Newsletter budete dostávat maximálně 1x týdně
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] mt-2">
                Vaše e-mailová adresa bude použita pouze pro zasílání newsletteru a nebude sdílena s třetími stranami.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href="https://yourstore.com/store"
              >
                Procházet produkty
              </Button>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Pokud se chcete kdykoliv odhlásit, můžete tak učinit kliknutím na odkaz v patičce každého e-mailu nebo{" "}
                <Link
                  href={unsubscribeLink}
                  className="text-[#87986A] no-underline text-[16px] leading-[24px] hover:text-[#212222] transition-colors"
                >
                  zde
                </Link>.
              </Text>
            </Section>

            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#212222]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Vaše přihlášení k newsletteru je zcela dobrovolné a můžete se kdykoliv odhlásit. Váš e-mail bude chráněn v souladu s našimi zásadami ochrany osobních údajů.
              </Text>
            </Section>
            <Section className=" mt-[32px] pt-[20px] pb-[20px] border-t border-b border-solid border-[#212222]">
              <Text className="text-[#212222] text-[18px] leading-[24px]">
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

export const NewsletterSignupEmail = (props: NewsletterSignupEmailProps) => (
  <NewsletterSignupEmailComponent {...props} />
)

// Mock data for preview/development
const mockNewsletterSignup: NewsletterSignupEmailProps = {
  customerName: "Marie Svobodová",
  unsubscribeLink: "https://yourstore.com/unsubscribe?token=abc123"
}

export default () => <NewsletterSignupEmailComponent {...mockNewsletterSignup} />