import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";

const STEP_ICONS = [
  "/icons/home/user.svg",
  "/icons/home/layers.svg",
  "/icons/home/map-pin-how.svg",
  "/icons/home/qr.svg",
];

const HowItWorks = async () => {
  const { messages } = await getMessages();
  const t = messages.home;

  return (
    <section id="how-it-works" className="scroll-mt-28 py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={t.howEyebrow}
          title={t.howHeading}
          titleClassName="font-manrope text-heading"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.howItems.map((item, index) => {
            const isLast = index === t.howItems.length - 1;

            return (
              <article
                key={item.title}
                className={`flex min-h-[216px] flex-col gap-1 rounded-[20px] px-[26px] py-7 ${
                  isLast
                    ? "bg-energy text-white"
                    : "border border-border-muted bg-surface transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <IconBox tone={isLast ? "light" : "cyan"}>
                    <img src={STEP_ICONS[index]} alt="" width={22} height={22} />
                  </IconBox>
                  <span
                    className={`text-[15px] font-extrabold ${
                      isLast ? "text-white" : "text-[#85888E] dark:text-title"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3
                  className={`pt-3 font-manrope text-xl font-extrabold leading-[30px] ${
                    isLast ? "text-white" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`whitespace-pre-line text-sm leading-5 ${
                    isLast ? "text-white" : "text-title"
                  }`}
                >
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
