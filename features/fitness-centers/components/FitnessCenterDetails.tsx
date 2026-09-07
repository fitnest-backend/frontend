import Container from "@/components/common/Container";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { notFound } from "next/navigation";
import { getMessages } from "@/lib/i18n/server";
import FitnessGallery from "./FitnessGallery";
import { getLandingGymServer, gymImageSrc } from "@/lib/api/landing";

interface FitnessCenterDetailsProps {
  slug: string;
}

const FitnessCenterDetails = async ({ slug }: FitnessCenterDetailsProps) => {
  const { messages, locale } = await getMessages();
  const gym = await getLandingGymServer(locale, slug);
  if (!gym) notFound();

  const name = gym.name;
  const gallery = [gymImageSrc(gym.coverImageUrl)];
  const gymSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name,
    address: {
      "@type": "PostalAddress",
      addressLocality: gym.city ?? "Baku",
      streetAddress: gym.location ?? "",
      addressCountry: "AZ",
    },
    telephone: gym.phone ?? undefined,
    email: gym.email ?? undefined,
  };

  return (
    <Container className="pb-16 pt-8 md:pb-24 md:pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
      />
      <section className="space-y-8 md:space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-[#F5F8FF] md:text-h3 md:leading-h3">
            {name}
          </h1>
          <p className="text-base font-medium leading-6 text-[#F5F8FF] md:text-2xl md:leading-9">
            {messages.centers.detailsSubtitle}
          </p>
        </div>

        <FitnessGallery images={gallery} name={name} />

        <div className="space-y-6 rounded-4xl border border-[#373A41] bg-[#111729] p-5 md:p-6">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-h4 md:leading-h4">
            {messages.centers.aboutGym}
          </h2>

          <div className="space-y-4">
            <p className="text-xl font-medium leading-10 text-[#00B4CC] md:text-t1">
              {name}
            </p>
            {gym.description ? (
              <p className="text-sm font-medium leading-6 text-[#FAFAFA] md:text-base">
                {gym.description}
              </p>
            ) : (
              <p className="text-sm font-medium leading-6 text-[#FAFAFA] md:text-base">
                {messages.centers.aboutText}
              </p>
            )}
            {gym.category ? (
              <p className="text-sm font-bold leading-5 text-[#00B4CC]">
                {gym.category}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-[#373A41] pt-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <Phone className="size-4" /> {messages.centers.contact}
              </p>
              <p className="text-xs font-medium text-white">{gym.phone || "—"}</p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <Mail className="size-4" /> Email
              </p>
              <p className="text-xs font-medium text-white">{gym.email || "—"}</p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <MapPin className="size-4" /> {messages.centers.address}
              </p>
              <p className="text-xs font-medium text-white">
                {[gym.location, gym.city].filter(Boolean).join(" ") || "—"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <Clock3 className="size-4" /> {messages.centers.workHoursTitle}
              </p>
              <p className="text-xs font-medium text-white">
                {gym.workHoursText || "—"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FitnessCenterDetails;
