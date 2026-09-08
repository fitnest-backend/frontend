type HomeArrowProps = {
  className?: string;
};

const HomeArrow = ({ className }: HomeArrowProps) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden
  >
    <path
      d="M12.025 4.94189L17.0834 10.0002L12.025 15.0586"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.91669 10H16.9417"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeArrow;
