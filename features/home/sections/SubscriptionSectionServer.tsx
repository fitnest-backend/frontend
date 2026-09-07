import SubscriptionSection from "./SubscriptionSection";
import { getSubscriptionPackagesServerCached } from "@/features/offers/api/subscription-packages";
import { getMessages } from "@/lib/i18n/server";

const SubscriptionSectionServer = async () => {
  const { locale } = await getMessages();
  let items: Awaited<ReturnType<typeof getSubscriptionPackagesServerCached>>["items"] = [];

  try {
    const data = await getSubscriptionPackagesServerCached(locale);
    items = data.items;
  } catch {
    // Keep the page streamable even if the packages API is temporarily unavailable.
  }

  return <SubscriptionSection packages={items} />;
};

export default SubscriptionSectionServer;
