import FitnessCenterCard from "../components/FitnessCenterCard";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import {
  getLandingGymsServer,
  gymImageSrc,
  type LandingGym,
} from "@/lib/api/landing";
import type { Membership } from "../lib/fitness-centers-data";

const toMembership = (membership: LandingGym["membership"]): Membership => {
  if (
    membership === "silver" ||
    membership === "gold" ||
    membership === "platinum"
  ) {
    return membership;
  }
  return "bronze";
};

const FitnessCentersListSection = async () => {
  const { locale } = await getMessages();
  const gyms = await getLandingGymsServer(locale, 1, 24);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {gyms.map((gym) => (
        <FitnessCenterCard
          key={gym.gymId}
          name={gym.name}
          location={gym.location || gym.city || "—"}
          phone={gym.phone || "—"}
          workHours={gym.workHoursText || "—"}
          image={gymImageSrc(gym.coverImageUrl)}
          category={gym.category || "—"}
          membership={toMembership(gym.membership)}
          href={addLocaleToPathname(`/fitness-centers/${gym.gymId}`, locale)}
        />
      ))}
    </div>
  );
};

export default FitnessCentersListSection;
