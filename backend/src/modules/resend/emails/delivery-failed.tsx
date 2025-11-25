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

interface DeliveryFailedEmailProps {
  customerName?: string;
  orderNumber?: string;
  trackingNumber?: string;
  carrierName?: string;
  failureReason?: string;
  nextAttemptDate?: string;
  pickupLocation?: string;
  pickupAddress?: string;
  pickupHours?: string;
  trackingLink?: string;
  orderLink?: string;
  supportEmail?: string;
}

function DeliveryFailedEmailComponent({
  customerName = "Vážený zákazník",
  orderNumber = "#12345",
  trackingNumber = "CZ123456789",
  carrierName = "Česká pošta",
  failureReason = "Nikdo nebyl doma během doručovací doby",
  nextAttemptDate = "Zítra mezi 9:00-17:00",
  pickupLocation = "Pošta Praha 1",
  pickupAddress = "Jindřišská 909/16, Praha 1",
  pickupHours = "Po-Pá: 8:00-18:00, So: 8:00-12:00",
  trackingLink = "https://www.postaonline.cz/trackandtrace/-/zasilka/cislo?parcelNumbers=CZ123456789",
  orderLink = "https://yourstore.com/orders/12345",
  supportEmail = "support@yourstore.com"
}: DeliveryFailedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Pokus o doručení objednávky {orderNumber} se nezdařil</Preview>
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
                Pokus o doručení se nezdařil
              </Heading>

              <Text className="text-[#212222] text-[20px] leading-[24px] font-medium m-2 mt-10">
                Vážený {customerName},
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px] m-2">
                🚚 Pokus o doručení vaší objednávky se bohužel nezdařil.
              </Text>
            </Section>

            <Section className="my-[32px] border border-solid border-[#212222] rounded-lg p-[20px] bg-[#87986A]">
              <Text className="text-[#ffff] text-[16px] leading-[24px] font-medium">
                <span className="font-bold text-[18px]">Číslo objednávky:</span> {orderNumber}
              </Text>
              <Text className="text-[#ffff] text-[16px] leading-[24px] font-medium">
                <span className="font-bold text-[18px]">Číslo zásilky:</span> {trackingNumber}
              </Text>
              <Text className="text-[#ffff] text-[16px] leading-[24px]">
                <span className="font-bold text-[18px]">Dopravce:</span> {carrierName}
              </Text>
              <Text className="text-[#ffff] text-[16px] leading-[24px]">
                <span className="font-bold text-[18px]">Důvod neúspěchu:</span> {failureReason}
              </Text>
              <Text className="text-[#ffff] text-[16px] leading-[24px]">
                <span className="font-bold text-[18px]">Další pokus o doručení:</span> {nextAttemptDate}
              </Text>
            </Section>

            <Section className="border-b border-solid border-[#212222] my-[32px]">
              <Text className="text-[#212222] text-[18px] leading-[24px]">
                Zásilka bude uložena na poště nebo v depu dopravce. Můžete si ji vyzvednout osobně nebo si domluvit nový termín doručení.
              </Text>
            </Section>

            <Section className="border border-solid border-[#212222] p-[20px] my-[32px]">
              <Text className="text-[#212222] text-[20px] leading-[24px] font-bold">
                Možnosti vyzvednutí:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                <span className="font-bold text-[18px]">Místo vyzvednutí:</span> {pickupLocation}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                <span className="font-bold text-[18px]">Adresa:</span> {pickupAddress}
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                <span className="font-bold text-[18px]">Otevírací doba:</span> {pickupHours}
              </Text>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[18px] leading-[24px] font-semibold">
                Další možnosti:
              </Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">• Změna doručovací adresy</Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">• Doručení na jinou adresu</Text>
              <Text className="text-[#212222] text-[16px] leading-[24px]">• Vrácení zásilky zpět</Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px] gap-5 border-t border-solid border-[#212222] pt-5">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors mr-2"
                href={trackingLink}
              >
                Sledovat zásilku
              </Button>
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={orderLink}
              >
                Zobrazit objednávku
              </Button>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-[#212222] text-[16px] leading-[24px]">
                Pro jakékoliv dotazy nebo změny kontaktujte nás na{" "}
                <Link
                  href={`mailto:${supportEmail}`}
                  className="text-[#87986A] no-underline text-[14px] leading-[24px] hover:text-[#212222] transition-colors"
                >
                  {supportEmail}
                </Link>{" "}
                nebo zavolejte dopravci přímo.
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

export const DeliveryFailedEmail = (props: DeliveryFailedEmailProps) => (
  <DeliveryFailedEmailComponent {...props} />
)

// Mock data for preview/development
const mockDeliveryFailed: DeliveryFailedEmailProps = {
  customerName: "Jan Novák",
  orderNumber: "#12345",
  trackingNumber: "CZ123456789",
  carrierName: "Česká pošta",
  failureReason: "Nikdo nebyl doma během doručovací doby",
  nextAttemptDate: "Zítra mezi 9:00-17:00",
  pickupLocation: "Pošta Praha 1",
  pickupAddress: "Jindřišská 909/16, Praha 1",
  pickupHours: "Po-Pá: 8:00-18:00, So: 8:00-12:00",
  trackingLink: "https://www.postaonline.cz/trackandtrace/-/zasilka/cislo?parcelNumbers=CZ123456789",
  orderLink: "https://yourstore.com/orders/12345",
  supportEmail: "support@yourstore.com"
}

export default () => <DeliveryFailedEmailComponent {...mockDeliveryFailed} />