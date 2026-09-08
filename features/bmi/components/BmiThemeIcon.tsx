interface BmiThemeIconProps {
  name: string;
  className?: string;
}

const BmiThemeIcon = ({ name, className }: BmiThemeIconProps) => (
  <>
    <img
      src={`/icons/bmi/${name}.svg`}
      alt=""
      className={`dark:hidden ${className ?? ""}`}
    />
    <img
      src={`/icons/bmi/${name}-dark.svg`}
      alt=""
      className={`hidden dark:block ${className ?? ""}`}
    />
  </>
);

export default BmiThemeIcon;
