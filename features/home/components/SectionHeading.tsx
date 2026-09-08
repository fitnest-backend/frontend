import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  action?: React.ReactNode;
  titleAs?: "h1" | "h2";
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  action,
  titleAs: TitleTag = "h2",
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p
        className={cn(
          "text-lg font-bold leading-7",
          eyebrowClassName ?? (light ? "text-cyan" : "text-turquoise"),
        )}
      >
        {eyebrow}
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <TitleTag
          className={cn(
            "max-w-3xl min-w-0 whitespace-pre-line font-manrope text-[28px] font-extrabold leading-[1.3] sm:text-[32px] md:text-[40px] md:leading-[60px]",
            titleClassName ?? (light ? "text-white" : "text-heading"),
          )}
        >
          {title}
        </TitleTag>
        {action}
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-[832px] whitespace-pre-line text-base leading-6",
            descriptionClassName ?? (light ? "text-desc" : "text-title"),
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
