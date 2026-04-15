import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { getMessages } from "@/lib/i18n/server";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("paymentSuccess", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/payment/success",
    locale,
    keywords: seo.keywords,
    noIndex: true,
  });
}

const LocalizedPaymentSuccessPage = async ({ params, searchParams }: Props) => {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const { messages } = await getMessages(locale);

  return (
    <div className="w-full min-h-screen p-4 flex justify-center items-center bg-primary-1000">
      <Card className="max-w-4xl flex flex-col items-center">
        <div className="w-18 h-18 rounded-full bg-primary-950 flex items-center justify-center mb-2">
          <CheckCircle className="text-green-500" size={40} strokeWidth={1.5} />
        </div>

        <h1 className="text-h2 leading-h2 text-center font-semibold text-primary-700">
          Fitnest
        </h1>
        <p className="text-t2 leading-t2">{messages.payment.success}</p>
      </Card>
    </div>
  );
};

export default LocalizedPaymentSuccessPage;
