type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  action?: React.ReactNode;
  titleAs?: "h1" | "h2";
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  action,
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p
        className={`text-lg font-bold leading-7 ${
          light ? "text-cyan" : "text-turquoise"
        }`}
      >
        {eyebrow}
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <TitleTag
          className={`max-w-3xl whitespace-pre-line font-sora text-[32px] font-extrabold leading-[1.3] md:text-[40px] md:leading-[60px] ${
            light ? "text-white" : "text-heading"
          }`}
        >
          {title}
        </TitleTag>
        {action}
      </div>
      {description ? (
        <p
          className={`max-w-[832px] whitespace-pre-line text-base leading-6 ${
            light ? "text-desc" : "text-title"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
