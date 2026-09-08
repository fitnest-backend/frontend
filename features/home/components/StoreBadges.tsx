import Image from "next/image";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants/app-links";

type StoreBadgesProps = {
  className?: string;
  dark?: boolean;
};

const StoreBadges = ({ className = "", dark = false }: StoreBadgesProps) => {
  const playSrc = dark
    ? "/icons/home/google-play.svg"
    : "/images/home/google-play.png";
  const appleSrc = dark
    ? "/icons/home/app-store.svg"
    : "/images/home/app-store.png";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play"
      >
        {dark ? (
          <img
            src={playSrc}
            alt="Get it on Google Play"
            width={135}
            height={40}
            className="h-10 w-[135px] object-contain"
          />
        ) : (
          <Image
            src={playSrc}
            alt="Get it on Google Play"
            width={135}
            height={40}
            className="h-10 w-[135px] object-contain"
          />
        )}
      </a>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store"
      >
        {dark ? (
          <img
            src={appleSrc}
            alt="Download on the App Store"
            width={120}
            height={40}
            className="h-10 w-[120px] object-contain"
          />
        ) : (
          <Image
            src={appleSrc}
            alt="Download on the App Store"
            width={120}
            height={40}
            className="h-10 w-[120px] object-contain"
          />
        )}
      </a>
    </div>
  );
};

export default StoreBadges;
