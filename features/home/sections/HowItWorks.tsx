import { Download, Layers, MapPin, QrCode } from "lucide-react";
import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";

const icons = [Download, Layers, MapPin, QrCode];

const HowItWorks = async () => {
  const { messages } = await getMessages();
  const t = messages.home;

  return (
    <section id="how-it-works" className="scroll-mt-28 py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={t.howEyebrow} title={t.howHeading} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.howItems.map((item, index) => {
            const Icon = icons[index];
            const isLast = index === t.howItems.length - 1;

            return (
              <article
                key={item.title}
                className={`flex min-h-[216px] flex-col gap-1 rounded-[20px] px-[26px] py-7 ${
                  isLast
                    ? "bg-energy text-white"
                    : "border border-border-muted bg-surface shadow-[0px_4px_4px_rgba(0,0,0,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <IconBox tone={isLast ? "light" : "cyan"}>
                    <Icon className="size-[22px]" />
                  </IconBox>
                  <span
                    className={`text-[15px] font-extrabold ${
                      isLast ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3
                  className={`pt-3 font-sora text-xl font-extrabold leading-[30px] ${
                    isLast ? "text-white" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-5 ${
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
