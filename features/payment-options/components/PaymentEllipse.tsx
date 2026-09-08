import { cn } from "@/lib/utils";

type PaymentEllipseProps = {
  src: string;
  className?: string;
};

const PaymentEllipse = ({ src, className }: PaymentEllipseProps) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-y-0 right-0 hidden justify-end lg:flex",
      className,
    )}
  >
    <img
      src={src}
      alt=""
      className="h-full w-auto max-w-none object-contain object-right"
    />
  </div>
);

export default PaymentEllipse;
