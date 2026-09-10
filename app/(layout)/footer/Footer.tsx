"use client";

import Image from "next/image";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import tiktokIcon from "@/public/icons/tiktok.svg";
import yticon from "@/public/icons/youtube.svg";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import ToTopBtn from "./ToTopBtn";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname, stripLocaleFromPathname } from "@/lib/i18n/config";
import { usePathname } from "next/navigation";
import StoreBadges from "@/features/home/components/StoreBadges";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  toMailtoHref,
  toTelHref,
} from "@/lib/constants/app-links";

type FooterProps = {
  email?: string | null;
  phone?: string | null;
};

const Footer = ({ email, phone }: FooterProps) => {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const currentPath = stripLocaleFromPathname(pathname);
  const homePath = addLocaleToPathname("/", locale);
  const contactEmail = email?.trim() || CONTACT_EMAIL;
  const contactPhone = phone?.trim() || CONTACT_PHONE;
  const footerLinkClass = (href: string) =>
    stripLocaleFromPathname(href) === currentPath
      ? "text-cyan"
      : "hover:text-cyan";

  const platformLinks = [
    { label: t.footer.howItWorks, href: `${homePath}#how-it-works` },
    { label: t.footer.halls, href: addLocaleToPathname("/fitness-centers", locale) },
    { label: t.footer.plans, href: addLocaleToPathname("/offers", locale) },
    { label: t.footer.fitStore, href: addLocaleToPathname("/fit-market", locale) },
    { label: t.footer.bmi, href: addLocaleToPathname("/bmi", locale) },
  ];

  const companyLinks = [
    { label: t.footer.about, href: addLocaleToPathname("/about", locale) },
    { label: t.footer.privacy, href: addLocaleToPathname("/privacy", locale) },
    { label: t.footer.terms, href: addLocaleToPathname("/terms", locale) },
    { label: t.footer.news, href: addLocaleToPathname("/faq", locale) },
    { label: t.footer.contact, href: addLocaleToPathname("/contact", locale) },
  ];

  const partnershipLinks = [
    { label: t.footer.corporate, href: addLocaleToPathname("/corporate", locale) },
    { label: t.footer.becomePartner, href: addLocaleToPathname("/partner", locale) },
    { label: t.footer.specialOffers, href: addLocaleToPathname("/payment-options", locale) },
    { label: t.footer.faq, href: addLocaleToPathname("/faq", locale) },
  ];

  const socials = [
    {
      href: "https://www.instagram.com/fitnest_azerbaijan?igsh=MWFvaG9yM3l3cHlhbQ%3D%3D&utm_source=qr",
      icon: instagramIcon,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61584857837005",
      icon: facebookIcon,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/fitnest-school/?viewAsMember=true",
      icon: linkedinIcon,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@FitNestAzerbaijan",
      icon: yticon,
      label: "YouTube",
    },
    {
      href: "https://www.tiktok.com/@fitnest.azerbaijan?_r=1&_t=ZS-950g0A0nvjJ",
      icon: tiktokIcon,
      label: "TikTok",
    },
  ];

  return (
    <footer id="download-app" className="relative z-50 scroll-mt-28 bg-[#011729] text-white dark:bg-[#012438]">
      <ToTopBtn />
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[18px] px-5 py-8 md:px-20 md:pt-20 md:pb-5">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex min-h-[220px] flex-col justify-between gap-8">
            <div className="flex flex-col gap-[18px]">
              <Link href={homePath} className="inline-flex h-[38px] w-[110px]">
                <img
                  src="/icons/home/logo-white.svg"
                  alt="FitNest"
                  width={110}
                  height={38}
                  className="h-[38px] w-[110px] object-contain"
                />
              </Link>
              <p className="max-w-[300px] text-sm leading-5 text-desc">
                {t.footer.tagline}
              </p>
            </div>
            <StoreBadges dark />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:flex lg:gap-16">
            <div className="flex w-[118px] flex-col gap-4">
              <p className="text-xs font-bold leading-[18px] text-title">
                {t.footer.platform}
              </p>
              <ul className="flex flex-col gap-3 text-sm font-medium leading-5">
                {platformLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={footerLinkClass(item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-[118px] flex-col gap-4">
              <p className="text-xs font-bold leading-[18px] text-title">
                {t.footer.company}
              </p>
              <ul className="flex flex-col gap-3 text-sm font-medium leading-5">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={footerLinkClass(item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-[118px] flex-col gap-4">
              <p className="text-xs font-bold leading-[18px] text-title">
                {t.footer.partnership}
              </p>
              <ul className="flex flex-col gap-3 text-sm font-medium leading-5">
                {partnershipLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={footerLinkClass(item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-full max-w-[227px] flex-col gap-4">
            <p className="text-xs font-bold leading-[18px] text-title">
              {t.footer.contact}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={toTelHref(contactPhone)}
                className="inline-flex items-center gap-2 text-sm font-medium leading-5"
              >
                <Phone className="size-4 text-cyan" />
                {contactPhone}
              </a>
              <a
                href={toMailtoHref(contactEmail)}
                className="inline-flex items-center gap-2 text-sm font-medium leading-5"
              >
                <Mail className="size-4 text-cyan" />
                {contactEmail}
              </a>
              <div className="flex items-center gap-2 pt-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-[38px] items-center justify-center rounded-[11px] border border-desc-2 transition-all duration-200 hover:scale-105 hover:border-cyan hover:bg-cyan/10"
                    aria-label={social.label}
                  >
                    <Image
                      src={social.icon}
                      width={16}
                      height={16}
                      className="size-4"
                      alt=""
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 h-px w-full bg-brand" />
        <p className="py-3 text-center text-xs leading-[18px] text-white">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
