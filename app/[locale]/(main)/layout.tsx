import type { Metadata } from "next";
import Navbar from "../../(layout)/navbar/Navbar";
import Footer from "../../(layout)/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "FitNest",
    template: "%s | FitNest",
  },
};

export default function LocaleMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-page">
        <Navbar />
        <main className="grow flex flex-col w-full mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
}
