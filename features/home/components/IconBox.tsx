import { cn } from "@/lib/utils";

type IconBoxProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  tone?: "cyan" | "navy" | "light";
};

const IconBox = ({
  children,
  className,
  size = "md",
  tone = "cyan",
}: IconBoxProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        size === "md" ? "size-12" : "size-10",
        tone === "cyan" && "bg-cyan/15 text-turquoise",
        tone === "navy" && "bg-cyan/15 text-cyan",
        tone === "light" && "bg-page text-turquoise",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default IconBox;
