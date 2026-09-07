import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";

const BmiPreviewSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;

  const scale = [
    { label: t.bmiLow, color: "#68B9FF", active: false },
    { label: t.bmiNormal, color: "#0FAD17", active: true },
    { label: t.bmiOver, color: "#FF9D02", active: false },
    { label: t.bmiObese, color: "#CC0D0D", active: false },
  ];

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="relative min-h-[520px] md:min-h-[630px]">
        <Image
          src="/images/home/bmi-visual.png"
          alt=""
          fill
          className="hidden object-cover object-center md:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-surface from-0% via-surface/20 via-45% to-transparent md:block" />

        <Container className="relative z-10 grid min-h-[520px] grid-cols-1 items-center gap-10 py-16 md:min-h-[630px] md:py-20 lg:grid-cols-[411px_minmax(194px,1fr)_auto]">
          <div className="flex max-w-[411px] flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold leading-7 text-turquoise">
                {t.bmiEyebrow}
              </p>
              <h2 className="whitespace-pre-line font-sora text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
                {t.bmiHeading}
              </h2>
              <p className="text-base leading-6 text-title">{t.bmiDescription}</p>
            </div>
            <Link
              href={addLocaleToPathname("/bmi", locale)}
              className="inline-flex h-12 w-fit items-center gap-2 rounded-lg bg-brand px-4 text-base font-semibold text-white"
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

          <div className="flex flex-col items-start gap-[35px] lg:items-center">
            <div className="flex h-[116px] w-full max-w-[194px] items-center justify-center gap-3 rounded-2xl border border-border-muted bg-cyan/15 px-4">
              <img
                src="/icons/home/person.svg"
                alt=""
                width={56}
                height={56}
                className="size-14 shrink-0"
              />
              <div>
                <p className="text-xl font-medium leading-[30px] text-title">
                  {t.heightLabel}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-2xl font-bold leading-9 text-ink">
                    178
                  </span>
                  <span className="text-base font-medium text-title">cm</span>
                </p>
              </div>
            </div>
            <div className="flex h-[116px] w-full max-w-[194px] items-center justify-center gap-3 rounded-2xl border border-border-muted bg-cyan/15 px-4">
              <img
                src="/icons/home/scale.svg"
                alt=""
                width={40}
                height={40}
                className="size-10 shrink-0"
              />
              <div>
                <p className="text-xl font-medium leading-[30px] text-title">
                  {t.weightLabel}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-2xl font-bold leading-9 text-ink">
                    65
                  </span>
                  <span className="text-base font-medium text-title">kg</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            {scale.map((item) => (
              <div key={item.label} className="flex items-center gap-6">
                <span
                  className={`rounded-full ${
                    item.active
                      ? "size-3.5 ring-4 ring-[rgba(15,173,23,0.25)]"
                      : "size-3"
                  }`}
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className={
                    item.active
                      ? "text-lg font-bold leading-7 text-ink"
                      : "text-base font-medium leading-6 text-title"
                  }
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Container>

        <div className="relative mx-auto h-[240px] w-full max-w-[640px] md:hidden">
          <Image
            src="/images/home/bmi-visual.png"
            alt=""
            fill
            className="object-contain object-right"
            sizes="640px"
          />
        </div>
      </div>
    </section>
  );
};

export default BmiPreviewSection;
