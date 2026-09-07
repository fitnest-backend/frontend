"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactFormSchema } from "@/schemas/schemas";
import { submitLandingContactMessage } from "@/lib/api/landing";
import { useI18n } from "@/lib/i18n/provider";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fieldClass =
  "w-full rounded-xl border border-border-muted bg-surface px-4 py-4 text-base leading-6 text-ink outline-none placeholder:text-[#94979C]";

const ContactForm = () => {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [topicOpen, setTopicOpen] = useState(false);
  const topicRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!topicOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!topicRef.current?.contains(event.target as Node)) setTopicOpen(false);
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [topicOpen]);

  const selectedTopic = t.contact.topics.find(
    (topic) => topic.value === form.watch("topic"),
  );

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const ok = await submitLandingContactMessage(values);
    if (ok) {
      form.reset();
      setStatus("success");
      return;
    }
    setStatus("error");
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-[684px] flex-col gap-7 rounded-2xl border border-border-muted bg-page p-7"
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-sora text-xl font-extrabold leading-[30px] text-ink">
          {t.contact.formTitle}
        </h2>
        <p className="text-sm leading-5 text-title">{t.contact.formSubtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <input
              {...form.register("name")}
              autoComplete="name"
              placeholder={t.contact.name}
              className={fieldClass}
            />
            {form.formState.errors.name ? (
              <span className="text-sm text-energy">{form.formState.errors.name.message}</span>
            ) : null}
          </label>
          <label className="flex flex-col gap-1">
            <input
              {...form.register("email")}
              type="email"
              autoComplete="email"
              placeholder={t.contact.email}
              className={fieldClass}
            />
            {form.formState.errors.email ? (
              <span className="text-sm text-energy">{form.formState.errors.email.message}</span>
            ) : null}
          </label>
        </div>

        <div ref={topicRef} className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={topicOpen}
            aria-controls={menuId}
            onClick={() => setTopicOpen((open) => !open)}
            className={`${fieldClass} flex items-center justify-between gap-3 text-left`}
          >
            <span className={selectedTopic ? "text-ink" : "text-[#94979C]"}>
              {selectedTopic?.label ?? t.contact.topic}
            </span>
            <img
              src="/icons/contact/arrow-down.svg"
              alt=""
              width={20}
              height={20}
              className={`size-5 shrink-0 transition-transform ${topicOpen ? "rotate-180" : ""}`}
            />
          </button>
          {topicOpen ? (
            <ul
              id={menuId}
              role="listbox"
              className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border-muted bg-surface py-1 shadow-[0px_8px_24px_rgba(1,23,41,0.12)]"
            >
              {t.contact.topics.map((topic) => (
                <li key={topic.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={form.watch("topic") === topic.value}
                    className="flex w-full px-4 py-2.5 text-left text-base text-ink hover:bg-page"
                    onClick={() => {
                      form.setValue("topic", topic.value, { shouldValidate: true });
                      setTopicOpen(false);
                    }}
                  >
                    {topic.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {form.formState.errors.topic ? (
            <span className="mt-1 block text-sm text-energy">
              {form.formState.errors.topic.message}
            </span>
          ) : null}
        </div>

        <label className="relative flex flex-col gap-1">
          <textarea
            {...form.register("message")}
            rows={3}
            placeholder={t.contact.message}
            className={`${fieldClass} min-h-[72px] resize-y pr-10`}
          />
          <img
            src="/icons/contact/drag-handle.svg"
            alt=""
            width={18}
            height={18}
            className="pointer-events-none absolute bottom-3 right-3 size-[18px]"
          />
          {form.formState.errors.message ? (
            <span className="text-sm text-energy">{form.formState.errors.message.message}</span>
          ) : null}
        </label>
      </div>

      {status === "success" ? (
        <p className="text-sm leading-5 text-turquoise">{t.contact.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm leading-5 text-energy">{t.contact.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-heading px-4 text-base font-semibold leading-6 text-white transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] disabled:opacity-60"
      >
        {form.formState.isSubmitting ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
};

export default ContactForm;
