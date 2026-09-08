import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";

const WhySubscribe = async () => {
  const { messages } = await getMessages();
  const t = messages.home;

  return (
    <section className="bg-surface py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={t.whyEyebrow}
          title={t.whyHeading}
          titleClassName="font-manrope text-heading"
        />
        <div className="relative mx-auto w-full max-w-[1036px]">
          <div className="flex flex-col gap-8 lg:h-[430px] lg:block lg:gap-0">
            <article className="min-h-[360px] w-full -rotate-2 rounded-[30px] border border-energy bg-surface p-8 shadow-[0px_28px_76px_rgba(0,157,166,0.24)] md:p-10 lg:absolute lg:top-6 lg:left-0 lg:w-[53.86%] dark:bg-page dark:shadow-none">
              <h3 className="mb-5 font-manrope text-[32px] font-extrabold leading-[1.3] text-ink md:text-[40px] md:leading-[60px]">
                {t.whyLeftTitle}
              </h3>
              <ul className="flex flex-col gap-4">
                {t.whyLeftItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <img
                      src="/icons/home/close-circle.svg"
                      alt=""
                      width={29}
                      height={29}
                      className="size-7 shrink-0"
                    />
                    <span className="text-base font-semibold leading-6 text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="min-h-[360px] w-full rotate-2 rounded-[30px] border border-cyan bg-[linear-gradient(315deg,#00DBDB_0%,#14234B_100%)] p-8 shadow-[0px_28px_76px_rgba(0,157,166,0.24)] md:p-10 lg:absolute lg:top-6 lg:left-[45.85%] lg:z-10 lg:w-[54.25%]">
              <h3 className="mb-5 font-manrope text-[32px] font-extrabold leading-[1.3] text-white md:text-[40px] md:leading-[60px]">
                {t.whyRightTitle}
              </h3>
              <ul className="flex flex-col gap-4">
                {t.whyRightItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-[27px] shrink-0 items-center justify-center rounded-full border border-white bg-[rgba(13,24,52,0.2)]">
                      <img
                        src="/icons/home/check-white.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-base font-semibold leading-6 text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhySubscribe;
