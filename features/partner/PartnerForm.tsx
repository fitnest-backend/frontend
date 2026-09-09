"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { partnerFormSchema } from "@/schemas/schemas";
import { submitLandingContactMessage } from "@/lib/api/landing";
import { useI18n } from "@/lib/i18n/provider";
import PartnerThemeIcon from "./PartnerThemeIcon";

type PartnerFormValues = z.infer<typeof partnerFormSchema>;

const fieldClass =
  "w-full rounded-xl border border-border-muted bg-surface px-4 py-4 text-base leading-6 text-ink outline-none placeholder:text-[#94979C] dark:placeholder:text-[#A6A6A6]";

const PartnerForm = () => {
  const { t } = useI18n();
  const copy = t.partner;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [activityOpen, setActivityOpen] = useState(false);
  const activityRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      gymName: "",
      contactName: "",
      phone: "",
      email: "",
      activity: "",
    },
  });

  useEffect(() => {
    if (!activityOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!activityRef.current?.contains(event.target as Node)) {
        setActivityOpen(false);
      }
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [activityOpen]);

  const selectedActivity = copy.activityOptions.find(
    (option) => option.value === form.watch("activity"),
  );

  async function onSubmit(values: PartnerFormValues) {
    setStatus("idle");
    const activityLabel =
      copy.activityOptions.find((option) => option.value === values.activity)?.label ??
      values.activity;
    const message = [
      `Gym: ${values.gymName.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Activity: ${activityLabel}`,
    ].join("\n");

    const ok = await submitLandingContactMessage({
      name: values.contactName,
      email: values.email,
      topic: "partnership",
      message,
    });
    if (ok) {
      form.reset();
      setStatus("success");
      return;
    }
    setStatus("error");
  }

  return (
    <form
      id="partner-apply"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-[684px] flex-col gap-7 rounded-2xl border border-border-muted bg-page p-7"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="font-manrope text-xl font-extrabold leading-[30px] text-ink">
          {copy.formTitle}
        </h2>
        <p className="text-sm leading-5 text-title">{copy.formSubtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <input
              {...form.register("gymName")}
              autoComplete="organization"
              placeholder={copy.gymName}
              className={fieldClass}
            />
            {form.formState.errors.gymName ? (
              <span className="text-sm text-energy">{form.formState.errors.gymName.message}</span>
            ) : null}
          </label>
          <label className="flex flex-col gap-1">
            <input
              {...form.register("contactName")}
              autoComplete="name"
              placeholder={copy.contactName}
              className={fieldClass}
            />
            {form.formState.errors.contactName ? (
              <span className="text-sm text-energy">
                {form.formState.errors.contactName.message}
              </span>
            ) : null}
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <input
              {...form.register("phone")}
              type="tel"
              autoComplete="tel"
              placeholder={copy.phone}
              className={fieldClass}
            />
            {form.formState.errors.phone ? (
              <span className="text-sm text-energy">{form.formState.errors.phone.message}</span>
            ) : null}
          </label>
          <label className="flex flex-col gap-1">
            <input
              {...form.register("email")}
              type="email"
              autoComplete="email"
              placeholder={copy.email}
              className={fieldClass}
            />
            {form.formState.errors.email ? (
              <span className="text-sm text-energy">{form.formState.errors.email.message}</span>
            ) : null}
          </label>
        </div>

        <div ref={activityRef} className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={activityOpen}
            aria-controls={menuId}
            onClick={() => setActivityOpen((open) => !open)}
            className={`${fieldClass} flex items-center justify-between gap-3 text-left`}
          >
            <span className={selectedActivity ? "text-ink" : "text-[#94979C] dark:text-[#A6A6A6]"}>
              {selectedActivity?.label ?? copy.activity}
            </span>
            <PartnerThemeIcon
              name="arrow-down"
              width={20}
              height={20}
              className={`size-5 shrink-0 transition-transform ${activityOpen ? "rotate-180" : ""}`}
            />
          </button>
          {activityOpen ? (
            <ul
              id={menuId}
              role="listbox"
              className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border-muted bg-surface py-1 shadow-[0px_8px_24px_rgba(1,23,41,0.12)]"
            >
              {copy.activityOptions.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={form.watch("activity") === option.value}
                    className="flex w-full px-4 py-2.5 text-left text-base text-ink hover:bg-page"
                    onClick={() => {
                      form.setValue("activity", option.value, { shouldValidate: true });
                      setActivityOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {form.formState.errors.activity ? (
            <span className="mt-1 block text-sm text-energy">
              {form.formState.errors.activity.message}
            </span>
          ) : null}
        </div>
      </div>

      {status === "success" ? (
        <p className="text-sm leading-5 text-turquoise">{copy.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm leading-5 text-energy">{copy.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-button px-4 text-base font-semibold leading-6 text-white transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] disabled:opacity-60"
      >
        {form.formState.isSubmitting ? copy.sending : copy.submit}
      </button>
    </form>
  );
};

export default PartnerForm;
