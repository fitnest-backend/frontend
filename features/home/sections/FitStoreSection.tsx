import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import {
  getLandingStoresServer,
  storeImageSrc,
} from "@/lib/api/landing";

const FitStoreSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;
  const items = await getLandingStoresServer(locale, 1, 3);

  return (
    <section className="py-16 md:py-20">
      <Container className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <div className="flex w-full max-w-[411px] flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold leading-7 text-turquoise">
              {t.storeEyebrow}
            </p>
            <h2 className="font-sora text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
              {t.storeHeading}
            </h2>
            <p className="text-base leading-6 text-title">{t.storeDescription}</p>
          </div>
          <Link
            href={addLocaleToPathname("/fit-market", locale)}
            className="inline-flex h-12 w-fit items-center gap-2 rounded-lg bg-brand px-4 text-base font-semibold text-white"
          >
            {t.storeCta}
            <ArrowRight className="size-5" />
          </Link>
        </div>
        {items.length === 0 ? null : (
          <div className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((item, index) => (
              <article
                key={item.storeId}
                className={`flex h-full flex-col gap-5 rounded-2xl border border-border-muted bg-surface p-5 ${
                  index === 0 ? "shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" : ""
                }`}
              >
                <div className="relative h-[156px] overflow-hidden rounded-xl">
                  <Image
                    src={storeImageSrc(item.coverImageUrl)}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="265px"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold leading-6 text-ink">
                    {item.name}
                  </h3>
                  <p className="text-xs leading-[18px] text-title">
                    {item.discounts[0] ?? item.city ?? item.addressText ?? ""}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default FitStoreSection;
