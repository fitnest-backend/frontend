interface PartnerThemeIconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

const PartnerThemeIcon = ({
  name,
  className,
  width = 20,
  height = 20,
}: PartnerThemeIconProps) => (
  <>
    <img
      src={`/icons/partner/${name}.svg`}
      alt=""
      width={width}
      height={height}
      className={`dark:hidden ${className ?? ""}`}
    />
    <img
      src={`/icons/partner/${name}-dark.svg`}
      alt=""
      width={width}
      height={height}
      className={`hidden dark:block ${className ?? ""}`}
    />
  </>
);

export default PartnerThemeIcon;
