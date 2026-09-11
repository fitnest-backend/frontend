"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { corporateFormSchema } from "@/schemas/schemas";
import { submitLandingContactMessage } from "@/lib/api/landing";
import { useI18n } from "@/lib/i18n/provider";
import ContactThemeIcon from "@/features/contact/ContactThemeIcon";
import HomeArrow from "@/features/home/components/HomeArrow";

type CorporateFormValues = z.infer<typeof corporateFormSchema>;

const fieldClass =
  "w-full rounded-xl border border-border-muted bg-surface px-4 py-4 text-base leading-6 text-ink outline-none placeholder:text-[#94979C] dark:placeholder:text-[#A6A6A6]";

const CorporateForm = () => {
  const { t } = useI18n();
  const copy = t.corporate;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [employeesOpen, setEmployeesOpen] = useState(false);
  const employeesRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const form = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateFormSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      employees: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (!employeesOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!employeesRef.current?.contains(event.target as Node)) {
        setEmployeesOpen(false);
      }
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [employeesOpen]);

  const selectedEmployees = copy.employeeOptions.find(
    (option) => option.value === form.watch("employees"),
  );

  async function onSubmit(values: CorporateFormValues) {
    setStatus("idle");
    const notes = values.notes?.trim();
    const message = [
      `Company: ${values.company.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Employees: ${values.employees}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const ok = await submitLandingContactMessage({
      name: values.name,
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
      id="corporate-offer"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-[684px] flex-col gap-7 rounded-2xl border border-border-muted bg-page p-7"
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-manrope text-xl font-extrabold leading-[30px] text-ink">
          {copy.formTitle}
        </h2>
        <p className="text-sm leading-5 text-title">{copy.formSubtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <input
              {...form.register("name")}
              autoComplete="name"
              placeholder={copy.name}
              className={fieldClass}
            />
            {form.formState.errors.name ? (
              <span className="text-sm text-energy">{form.formState.errors.name.message}</span>
            ) : null}
          </label>
          <label className="flex flex-col gap-1">
            <input
              {...form.register("company")}
              autoComplete="organization"
              placeholder={copy.company}
              className={fieldClass}
            />
            {form.formState.errors.company ? (
              <span className="text-sm text-energy">{form.formState.errors.company.message}</span>
            ) : null}
          </label>
        </div>

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

        <div ref={employeesRef} className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={employeesOpen}
            aria-controls={menuId}
            onClick={() => setEmployeesOpen((open) => !open)}
            className={`${fieldClass} flex items-center justify-between gap-3 text-left`}
          >
            <span className={selectedEmployees ? "text-ink" : "text-[#94979C] dark:text-[#A6A6A6]"}>
              {selectedEmployees?.label ?? copy.employees}
            </span>
            <ContactThemeIcon
              name="arrow-down"
              width={20}
              height={20}
              className={`size-5 shrink-0 transition-transform ${employeesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {employeesOpen ? (
            <ul
              id={menuId}
              role="listbox"
              className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border-muted bg-surface py-1 shadow-[0px_8px_24px_rgba(1,23,41,0.12)]"
            >
              {copy.employeeOptions.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={form.watch("employees") === option.value}
                    className="flex w-full px-4 py-2.5 text-left text-base text-ink hover:bg-page"
                    onClick={() => {
                      form.setValue("employees", option.value, { shouldValidate: true });
                      setEmployeesOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {form.formState.errors.employees ? (
            <span className="mt-1 block text-sm text-energy">
              {form.formState.errors.employees.message}
            </span>
          ) : null}
        </div>

        <label className="relative flex flex-col gap-1">
          <textarea
            {...form.register("notes")}
            rows={3}
            placeholder={copy.notes}
            className={`${fieldClass} min-h-[72px] resize-y pr-10 text-sm leading-5`}
          />
          <img
            src="/icons/contact/drag-handle.svg"
            alt=""
            width={18}
            height={18}
            className="pointer-events-none absolute bottom-3 right-3 size-[18px]"
          />
          {form.formState.errors.notes ? (
            <span className="text-sm text-energy">{form.formState.errors.notes.message}</span>
          ) : null}
        </label>
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
        className="group inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-button px-4 text-base font-semibold leading-6 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF6A42] hover:shadow-[0_8px_20px_rgba(20,35,75,0.25)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 dark:hover:shadow-[0_8px_20px_rgba(0,219,219,0.25)]"
      >
        {form.formState.isSubmitting ? copy.sending : copy.submit}
        <HomeArrow className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default CorporateForm;
