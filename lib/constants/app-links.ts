export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=az.fitnest&hl=az";
export const APP_STORE_URL =
  "https://apps.apple.com/az/app/fitnest-gym-health/id6768059768";
export const CONTACT_PHONE = "+994 70 852 24 25";
export const CONTACT_PHONE_HREF = "tel:+994708522425";
export const CONTACT_EMAIL = "fitnestazerbaijan@gmail.com";
export const CONTACT_EMAIL_HREF = "mailto:fitnestazerbaijan@gmail.com";

export function toTelHref(phone: string): string {
  const compact = phone.replace(/[^\d+]/g, "");
  return compact ? `tel:${compact}` : CONTACT_PHONE_HREF;
}

export function toMailtoHref(email: string): string {
  return email.includes("@") ? `mailto:${email.trim()}` : CONTACT_EMAIL_HREF;
}
