type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  action?: React.ReactNode;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  action,
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
        <h2
          className={`max-w-3xl font-sora text-[32px] font-extrabold leading-[1.3] md:text-[40px] md:leading-[60px] ${
            light ? "text-white" : "text-heading"
          }`}
        >
          {title}
        </h2>
        {action}
      </div>
      {description ? (
        <p
          className={`max-w-[832px] text-base leading-6 ${
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
