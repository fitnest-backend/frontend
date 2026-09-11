import { getMessages } from "@/lib/i18n/server";
import { Reveal } from "@/components/animation";

const OffersActivateBanner = async () => {
  const { messages } = await getMessages();

  return (
    <section id="activate" className="scroll-mt-28">
      <Reveal variant="scale" duration={0.8}>
        <div className="rounded-2xl bg-brand-navy-800 p-7 dark:bg-[#012438]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[539px] flex-col gap-3">
            <h2 className="text-2xl font-bold leading-9 text-white">
              {messages.offers.ctaTitle}
            </h2>
            <p className="text-base leading-6 text-desc">
              {messages.offers.ctaDescription}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-[55px] overflow-hidden rounded-sm border border-white/20 bg-white p-1">
              <img
                src="/icons/home/app-qr.svg"
                alt=""
                width={47}
                height={47}
                className="size-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-bold leading-5 text-white">
                {messages.home.qrDownloadTitle}
              </p>
              <p className="text-sm font-medium leading-5 text-desc">
                {messages.home.qrDownloadSubtitle}
              </p>
            </div>
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
};

export default OffersActivateBanner;
