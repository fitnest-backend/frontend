import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import Reveal from "../components/Reveal";

const BmiPreviewSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;

  const scale = [
    { label: t.bmiLow, color: "#68B9FF", darkColor: "#68B9FF", active: false },
    { label: t.bmiNormal, color: "#0FAD17", darkColor: "#22B52C", active: true },
    { label: t.bmiOver, color: "#FF9D02", darkColor: "#D98208", active: false },
    { label: t.bmiObese, color: "#CC0D0D", darkColor: "#B83232", active: false },
  ];

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="relative lg:min-h-[630px]">
        <img
          src="/images/home/bmi-visual.svg"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block dark:!hidden"
        />
        <img
          src="/images/home/bmi-visual-dark.svg"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-center dark:lg:block"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-surface from-0% via-surface/20 via-45% to-transparent lg:block" />

        <Container className="relative z-10 grid grid-cols-1 items-start gap-8 py-12 sm:gap-10 sm:py-16 lg:min-h-[630px] lg:grid-cols-[minmax(0,411px)_minmax(140px,1fr)_auto] lg:items-center lg:py-20">
          <Reveal variant="left" className="flex w-full max-w-[411px] flex-col">
            <div className="flex w-full max-w-[411px] flex-col gap-8 lg:gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold leading-7 text-turquoise">
                  {t.bmiEyebrow}
                </p>
                <h2 className="whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
                  {t.bmiHeading}
                </h2>
                <p className="text-base leading-6 text-title">{t.bmiDescription}</p>
              </div>
              <Link
                href={addLocaleToPathname("/bmi", locale)}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-button px-4 text-base font-semibold text-white transition-colors hover:bg-[#FF6A42] sm:w-fit"
              >
                {t.bmiCta}
                <img
                  src="/icons/home/arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:items-center lg:gap-[35px]">
            <div className="flex h-[104px] w-full items-center justify-center gap-2.5 rounded-2xl border border-border-muted bg-cyan/15 px-3 sm:h-[116px] sm:gap-3 sm:px-4 lg:max-w-[194px] dark:bg-[#205B7D]">
              <img
                src="/icons/home/person.svg"
                alt=""
                width={56}
                height={56}
                className="size-10 shrink-0 sm:size-14"
              />
              <div>
                <p className="text-base font-medium leading-6 text-title sm:text-xl sm:leading-[30px]">
                  {t.heightLabel}
                </p>
                <p className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xl font-bold leading-8 text-ink sm:text-2xl sm:leading-9">
                    178
                  </span>
                  <span className="text-sm font-medium text-title sm:text-base">cm</span>
                </p>
              </div>
            </div>
            <div className="flex h-[104px] w-full items-center justify-center gap-2.5 rounded-2xl border border-border-muted bg-cyan/15 px-3 sm:h-[116px] sm:gap-3 sm:px-4 lg:max-w-[194px] dark:bg-[#205B7D]">
              <img
                src="/icons/home/scale.svg"
                alt=""
                width={40}
                height={40}
                className="size-8 shrink-0 sm:size-10"
              />
              <div>
                <p className="text-base font-medium leading-6 text-title sm:text-xl sm:leading-[30px]">
                  {t.weightLabel}
                </p>
                <p className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xl font-bold leading-8 text-ink sm:text-2xl sm:leading-9">
                    65
                  </span>
                  <span className="text-sm font-medium text-title sm:text-base">kg</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-6 lg:flex lg:flex-col lg:justify-center">
            {scale.map((item) => (
              <div key={item.label} className="flex items-center gap-3 lg:gap-6">
                <span
                  className={`rounded-full dark:hidden ${
                    item.active
                      ? "size-3.5 ring-4 ring-[rgba(15,173,23,0.25)]"
                      : "size-3"
                  }`}
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className={`hidden rounded-full dark:inline-block ${
                    item.active
                      ? "size-3.5 ring-4 ring-[rgba(34,181,44,0.25)]"
                      : "size-3"
                  }`}
                  style={{ backgroundColor: item.darkColor }}
                />
                <span
                  className={
                    item.active
                      ? "text-base font-bold leading-6 text-ink dark:text-heading lg:text-lg lg:leading-7"
                      : "text-sm font-medium leading-5 text-title dark:text-heading lg:text-base lg:leading-6"
                  }
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BmiPreviewSection;
