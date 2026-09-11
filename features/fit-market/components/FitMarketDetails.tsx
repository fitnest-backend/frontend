import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { discountDetailClassNames } from "../lib/fit-market-data";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import { getLandingStoreServer } from "@/lib/api/landing";
import { Reveal } from "@/components/animation";

interface FitMarketDetailsProps {
  slug: string;
}

const FitMarketDetails = async ({ slug }: FitMarketDetailsProps) => {
  const { messages, locale } = await getMessages();
  const store = await getLandingStoreServer(locale, slug);
  if (!store) notFound();

  const title = store.name;
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: title,
    address: {
      "@type": "PostalAddress",
      addressLocality: store.city ?? "Baku",
      streetAddress: store.addressText ?? "",
      addressCountry: "AZ",
    },
    telephone: store.phone ?? undefined,
    email: store.email ?? undefined,
  };

  return (
    <Container className="pb-16 pt-8 md:pb-24 md:pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <Reveal variant="blur" duration={0.8}>
        <section className="rounded-4xl border border-[#373A41] bg-[#111729] p-5 md:p-6">
        <div className="space-y-5 md:space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-bold leading-tight text-[#00B4CC] md:text-h3 md:leading-h3">
              {title}
            </h1>

            {store.discounts.length > 0 ? (
              <div className="flex items-center gap-4">
                {store.discounts.slice(0, 3).map((discount, index) => (
                  <span
                    key={`${discount}-${index}`}
                    className={`flex size-[60px] items-center justify-center rounded-full text-xl font-bold leading-s1 text-[#ECECED] ${discountDetailClassNames[index] ?? ""}`}
                  >
                    {discount}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <p className="text-base font-medium leading-7 text-[#F7F7F7] md:text-lg md:leading-7">
            {store.category || messages.fitMarket.detailsDescription}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#373A41] pt-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-1">
            <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
              <Phone className="size-4" /> {messages.fitMarket.contact}
            </p>
            <p className="text-xs font-medium text-white">{store.phone || "—"}</p>
          </div>

          <div className="space-y-1">
            <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
              <Mail className="size-4" /> Email
            </p>
            <p className="text-xs font-medium text-white">{store.email || "—"}</p>
          </div>

          <div className="space-y-1">
            <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
              <MapPin className="size-4" /> {messages.fitMarket.address}
            </p>
            <p className="text-xs font-medium text-white">
              {[store.addressText, store.city].filter(Boolean).join(", ") || "—"}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            asChild
            className="h-12 w-full rounded-4xl bg-[#00B4CC] px-6 text-base font-medium text-[#FAFAFA] hover:bg-[#00A5BC] md:w-[420px]"
          >
            <Link href={addLocaleToPathname("/fit-market", locale)}>
              {messages.fitMarket.visit}
            </Link>
          </Button>
        </div>
      </section>
      </Reveal>
    </Container>
  );
};

export default FitMarketDetails;
