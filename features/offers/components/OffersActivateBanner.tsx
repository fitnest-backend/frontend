import StoreBadges from "@/features/home/components/StoreBadges";
import { getMessages } from "@/lib/i18n/server";

const OffersActivateBanner = async () => {
  const { messages } = await getMessages();

  return (
    <section
      id="activate"
      className="scroll-mt-28 rounded-2xl bg-brand-navy-800 p-7"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[539px] flex-col gap-3">
          <h2 className="text-2xl font-bold leading-9 text-white">
            {messages.offers.ctaTitle}
          </h2>
          <p className="text-base leading-6 text-desc">
            {messages.offers.ctaDescription}
          </p>
        </div>
        <StoreBadges />
      </div>
    </section>
  );
};

export default OffersActivateBanner;
