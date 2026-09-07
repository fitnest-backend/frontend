import Container from "@/components/common/Container";
import IconBox from "@/features/home/components/IconBox";
import SectionHeading from "@/features/home/components/SectionHeading";
import { getMessages } from "@/lib/i18n/server";

const VALUE_ICONS = [
  "/icons/about/user.svg",
  "/icons/about/eye.svg",
  "/icons/about/flash.svg",
  "/icons/about/house.svg",
] as const;

const AboutValuesSection = async () => {
  const { messages } = await getMessages();
  const t = messages.about;

  return (
    <section className="bg-surface py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={t.valuesEyebrow} title={t.valuesTitle} />
        <div className="grid grid-cols-1 items-stretch gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
          {t.values.map((value, index) => (
            <article
              key={value.title}
              className="flex flex-col gap-1.5 rounded-[20px] border border-border-muted bg-page p-6 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <IconBox className="size-[46px] rounded-[13px]">
                <img
                  src={VALUE_ICONS[index]}
                  alt=""
                  width={24}
                  height={24}
                />
              </IconBox>
              <h3 className="pt-2.5 text-lg font-bold leading-7 text-ink">
                {value.title}
              </h3>
              <p className="text-sm leading-5 text-title">{value.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutValuesSection;
