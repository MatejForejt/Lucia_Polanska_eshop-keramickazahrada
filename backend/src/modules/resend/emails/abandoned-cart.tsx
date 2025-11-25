
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

interface AbandonedCartEmailProps {
  customer?: {
    first_name?: string;
  };
  cart_id?: string;
  items?: Array<{
    thumbnail?: string;
    product_title?: string;
    quantity?: number;
    unit_price?: number;
  }>;
}

function AbandonedCartEmailComponent({
  customer,
  cart_id = "sample-cart-id",
  items = []
}: AbandonedCartEmailProps) {
  const storefrontUrl = process.env.MEDUSA_STOREFRONT_URL || "https://yourstore.com";

  return (
    <Html>
      <Head />
      <Preview>Dobrý den, {customer?.first_name || "zákazník"}, Váš košík čeká! </Preview>
      <Tailwind>
        <Body className="bg-[#87986A] my-auto mx-auto font-sans">
          {/* Header */}
          <Section className="border-b border-solid border-[#212222]">
            <div className="bg-[#ffff] text-white py-3 flex align-center justify-center">
              <img style={{ width: "80px", height: "80px", margin: "6px 0" }} src="https://c3studium.com/assets/icons/logo.svg" alt="Logo" className="w-[40px] h-[40px]" />
              <Heading className="text-[#212222] text-[26px] font-normal text-center p-0 my-[30px] mx-2">
                Keramická Zahrada
              </Heading>
            </div>
          </Section>

          <Container className="border border-solid border-[#212222] rounded-3xl my-[40px] mx-auto p-[20px] max-w-[600px] bg-white">

            {/* Main Message */}
            <Section className="border-b border-solid border-[#212222] mt-10">
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[0px] mx-2">
                Dobrý den, {customer?.first_name || "zákazník"},
              </Heading>
              <Heading className="text-[#212222] text-[36px] font-normal text-left p-0 my-[0px] mx-2">
                 váš košík čeká! 🛍️
              </Heading>
              <Text className="text-[#212222] text-[20px] leading-[24px] text-left m-0 my-5 mx-2">
                Nechali jste si v košíku skvělé položky. Dokončete svůj nákup, než budou pryč!
              </Text>
            </Section>

            {/* Cart Items */}
            <Section className="my-[32px]">
              <Heading style={{ borderBottom: "1px solid #212222" }} className="text-[#212222] text-[24px] font-semibold mb-[0px] w-full pb-4">
                Položky ve vašem košíku
              </Heading>

              {items?.map((item, idx) => (
                <Section key={idx} className="border-b border-solid border-[#87986A] py-[16px]">
                  <div className="flex items-center">
                    {item.thumbnail && (
                      <Img
                        src={item.thumbnail}
                        alt={item.product_title}
                        className="w-[80px] h-[80px] mr-4 rounded-lg object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <Text className="text-[#212222] text-[18px] font-semibold leading-[24px] m-0 mt-2">
                        {item.product_title}
                      </Text>
                      <Text className="text-[#87986A] text-[14px] leading-[20px] m-0 mt-1">
                        Množství: <span className="font-semibold">{item.quantity}</span>
                      </Text>
                      <Text className="text-[#212222] text-[16px] font-bold leading-[24px] m-0 mt-1">
                        {(item.unit_price || 0) / 100} Kč
                      </Text>
                    </div>
                  </div>
                </Section>
              ))}
            </Section>

            {/* Call to Action */}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#87986A] rounded-3xl text-white text-[14px] font-semibold no-underline text-center px-5 py-3 hover:bg-[#212222] transition-colors"
                href={`${storefrontUrl}/cart/recover/${cart_id}`}
              >
                Vrátit se do košíku
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

export const abandonedCartEmail = (props: AbandonedCartEmailProps) => (
  <AbandonedCartEmailComponent {...props} />
);


// Mock data for preview/development
const mockCustomer = {
  first_name: "Jan"
};

const mockItems = [
  {
    thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
    product_title: "Keramický hrnek",
    quantity: 2,
    unit_price: 25000 // 250 Kč
  },
  {
    thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
    product_title: "Keramický talíř",
    quantity: 1,
    unit_price: 45000 // 450 Kč
  }
];

export default () => (
  <AbandonedCartEmailComponent
    customer={mockCustomer}
    cart_id="sample-cart-123"
    items={mockItems}
  />
);