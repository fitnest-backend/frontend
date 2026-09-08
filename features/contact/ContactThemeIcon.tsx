interface ContactThemeIconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

const ContactThemeIcon = ({
  name,
  className,
  width = 24,
  height = 24,
}: ContactThemeIconProps) => (
  <>
    <img
      src={`/icons/contact/${name}.svg`}
      alt=""
      width={width}
      height={height}
      className={`dark:hidden ${className ?? ""}`}
    />
    <img
      src={`/icons/contact/${name}-dark.svg`}
      alt=""
      width={width}
      height={height}
      className={`hidden dark:block ${className ?? ""}`}
    />
  </>
);

export default ContactThemeIcon;
