import Image from "next/image";
import Container from "@/components/common/Container";
import StoreBadges from "@/features/home/components/StoreBadges";
import { getMessages } from "@/lib/i18n/server";

const QrDownloadBar = async () => {
  const { messages } = await getMessages();

  return (
    <section
      id="download"
      className="scroll-mt-28 border-y border-border-muted bg-surface py-10"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="size-[55px] overflow-hidden rounded-sm border border-border-muted bg-surface">
              <Image
                src="/icons/payment-options/qr.svg"
                alt=""
                width={55}
                height={55}
                className="size-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold leading-5 text-ink">
                {messages.home.qrDownloadTitle}
              </p>
              <p className="text-sm font-medium leading-5 text-title">
                {messages.home.qrDownloadSubtitle}
              </p>
            </div>
          </div>
          <StoreBadges />
        </div>
      </Container>
    </section>
  );
};

export default QrDownloadBar;
