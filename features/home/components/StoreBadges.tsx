import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants/app-links";

type StoreBadgesProps = {
  className?: string;
  dark?: boolean;
};

const StoreBadges = ({ className = "", dark = false }: StoreBadgesProps) => {
  const playLight = "/images/home/google-play.svg";
  const appleLight = "/images/home/app-store.svg";
  const playDark = "/icons/home/google-play.svg";
  const appleDark = "/icons/home/app-store.svg";

  const badges = (playSrc: string, appleSrc: string, extraClass: string) => (
    <div className={`flex items-center gap-3 ${extraClass}`}>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play"
      >
        <img
          src={playSrc}
          alt="Get it on Google Play"
          width={135}
          height={40}
          className="h-10 w-[135px] object-contain"
        />
      </a>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store"
      >
        <img
          src={appleSrc}
          alt="Download on the App Store"
          width={120}
          height={40}
          className="h-10 w-[120px] object-contain"
        />
      </a>
    </div>
  );

  if (dark) {
    return (
      <div className={className}>{badges(playDark, appleDark, "")}</div>
    );
  }

  return (
    <div className={className}>
      {badges(playLight, appleLight, "dark:hidden")}
      {badges(playDark, appleDark, "hidden dark:flex")}
    </div>
  );
};

export default StoreBadges;
