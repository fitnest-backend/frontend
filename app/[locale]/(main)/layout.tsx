import type { Metadata } from "next";
import Navbar from "../../(layout)/navbar/Navbar";
import Footer from "../../(layout)/footer/Footer";
import { getLandingContactServer } from "@/lib/api/landing";

export const metadata: Metadata = {
  title: {
    default: "FitNest",
    template: "%s | FitNest",
  },
};

export const revalidate = 120;

export default async function LocaleMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contact = await getLandingContactServer();
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-page">
        <Navbar />
        <main className="grow flex flex-col w-full mx-auto">{children}</main>
      </div>
      <Footer email={contact.email} phone={contact.phone} />
    </>
  );
}
