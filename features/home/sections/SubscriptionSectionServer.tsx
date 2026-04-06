import SubscriptionSection from "./SubscriptionSection";
import { getSubscriptionPackagesServerCached } from "@/features/offers/api/subscription-packages";

const SubscriptionSectionServer = async () => {
  let items: Awaited<ReturnType<typeof getSubscriptionPackagesServerCached>>["items"] = [];

  try {
    const data = await getSubscriptionPackagesServerCached();
    items = data.items;
  } catch {
    // Keep the page streamable even if the packages API is temporarily unavailable.
  }

  return <SubscriptionSection packages={items} />;
};

export default SubscriptionSectionServer;
