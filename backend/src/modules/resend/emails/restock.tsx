import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface RestockEmailProps {
  variant?: {
    product_variant?: {
      id?: string;
      title?: string;
      description?: string;
      images?: Array<{ url: string }>;
    };
  };
}

function RestockEmailComponent({
  variant
}: RestockEmailProps) {
  const images = variant?.product_variant?.images || [];
  const storefrontUrl = process.env.MEDUSA_STOREFRONT_URL || "https://yourstore.com";

  return (
    <Html>
      <Head />
      <Preview>Dobré zprávy! Produkt je opět skladem</Preview>
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
            {/* Header */}

            {/* Main Heading */}
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[10px] mx-2">
                Dobré zprávy! 🎉
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] font-normal m-2 mt-10">
                Produkt, který jste měli v oblíbených, je opět skladem!
              </Text>
            </Section>

            {/* Product Section */}
            <Section className="my-[32px]">
              <Heading className="text-[#212222] text-[24px] font-semibold mb-[20px] text-center">
                {variant?.product_variant?.title}
              </Heading>

              {images.length > 0 && (
                <Section className="text-center mb-[20px]">
                  <Img
                    src={images[0].url}
                    alt={variant?.product_variant?.title}
                    className="rounded-lg max-w-[300px] w-full h-auto mx-auto"
                  />
                </Section>
              )}

              {variant?.product_variant?.description && (
                <Section className="my-[32px] bg-gray-50 border border-solid border-gray-200 rounded-lg p-[20px]">
                  <Text className="text-[#212222] text-[16px] leading-[24px] m-0">
                    {variant.product_variant.description}
                  </Text>
                </Section>
              )}

              <Section className="my-[32px] bg-green-50 border border-solid border-green-200 rounded-lg p-[20px] text-center">
                <Text className="text-[#212222] text-[18px] font-semibold leading-[26px] m-0">
                  ✅ Produkt je nyní dostupný k objednání
                </Text>
              </Section>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[16px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={`${storefrontUrl}/products/${variant?.product_variant?.id}`}
              >
                Zobrazit produkt
              </Button>
            </Section>

            {/* Footer */}
            <Section className="mt-[32px] pt-[20px] border-t border-solid border-[#87986A]">
              <Text className="text-[#212222] text-[14px] leading-[20px] text-center">
                Tento e-mail jste obdrželi, protože jste si produkt přidali do oblíbených nebo wishlistu.
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

export const variantRestockEmail = (props: RestockEmailProps) => (
  <RestockEmailComponent {...props} />
)

// Mock data for preview/development
const mockVariant = {
  product_variant: {
    id: "variant-123",
    title: "Keramický hrnek - modrý",
    description: "Ručně malovaný keramický hrnek v krásné modré barvě. Ideální pro ranní kávu nebo čaj.",
    images: [
      { url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png" }
    ]
  }
}

export default () => <RestockEmailComponent variant={mockVariant} />