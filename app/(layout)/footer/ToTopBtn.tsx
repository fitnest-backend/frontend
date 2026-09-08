"use client";

const ToTopBtn = () => {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="absolute -top-[30px] right-10 flex size-[60px] cursor-pointer items-center justify-center rounded-full border border-cyan bg-brand-navy text-cyan sm:right-20"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 20V4M18 10L12 4L6 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ToTopBtn;
