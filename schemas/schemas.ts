import { z } from "zod";

export const corporateFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Ad ən azı 2 simvol olmalıdır" })
    .max(80, { message: "Ad ən çox 80 simvol olmalıdır" }),
  company: z
    .string()
    .min(2, { message: "Şirkət adı ən azı 2 simvol olmalıdır" })
    .max(120, { message: "Şirkət adı ən çox 120 simvol olmalıdır" }),
  phone: z
    .string()
    .min(7, { message: "Telefon nömrəsi tələb olunur" })
    .max(40, { message: "Telefon nömrəsi çox uzundur" }),
  email: z
    .string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  employees: z.string().min(1, { message: "Əməkdaş sayı seçin" }),
  notes: z
    .string()
    .max(2000, { message: "Qeyd ən çox 2000 simvol olmalıdır" })
    .optional()
    .or(z.literal("")),
});

export const partnerFormSchema = z.object({
  gymName: z
    .string()
    .min(2, { message: "Zalın adı ən azı 2 simvol olmalıdır" })
    .max(120, { message: "Zalın adı ən çox 120 simvol olmalıdır" }),
  contactName: z
    .string()
    .min(2, { message: "Ad ən azı 2 simvol olmalıdır" })
    .max(80, { message: "Ad ən çox 80 simvol olmalıdır" }),
  phone: z
    .string()
    .min(7, { message: "Telefon nömrəsi tələb olunur" })
    .max(40, { message: "Telefon nömrəsi çox uzundur" }),
  email: z
    .string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  activity: z.string().min(1, { message: "Fəaliyyət növü seçin" }),
});

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Ad ən azı 2 simvol olmalıdır" })
    .max(80, { message: "Ad ən çox 80 simvol olmalıdır" }),
  email: z
    .string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  topic: z
    .string()
    .refine((value) => ["question", "support", "partnership", "other"].includes(value), {
      message: "Mövzu seçin",
    }),
  message: z
    .string()
    .min(2, { message: "Mesaj ən azı 2 simvol olmalıdır" })
    .max(2000, { message: "Mesaj ən çox 2000 simvol olmalıdır" }),
});

export const feedbackSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Ad soyad ən azı 2 simvol olmalıdır" })
    .max(50, { message: "Ad soyad ən çox 50 simvol olmalıdır" }),
  email: z
    .string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  type: z.string().min(1, { message: "Feedback növü tələb olunur" }),
  message: z
    .string()
    .min(2, { message: "Mesaj ən azı 2 simvol olmalıdır" })
    .max(500, { message: "Mesaj ən çox 500 simvol olmalıdır" }),
});

export const LoginSchema = z.object({
  email: z.email({ message: "Düzgün email ünvanı daxil edin" }),
  password: z.string({ message: "Şifrə tələb olunur" }),
});

export const ForgetPassSchema = z.object({
  email: z.email({ message: "Düzgün email ünvanı daxil edin" }),
});

export const ResetPassSchema = z
  .object({
    email: z.email({ message: "Düzgün email ünvanı daxil edin" }),
    password: z
      .string()
      .min(8, { message: "Şifrə ən azı 8 simvol olmalıdır" })
      .max(20, { message: "Şifrə ən çox 20 simvol olmalıdır" })
      .regex(/[A-Z]/, { message: "Şifrə ən azı 1 böyük hərf olmalıdır" })
      .regex(/[0-9]/, { message: "Şifrə ən azı 1 rəqəm olmalıdır" }),
    passwordRepeat: z.string(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Şifrələr eyni deyil",
    path: ["passwordRepeat"],
  });

export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Ad ən azı 2 simvol olmalıdır" })
      .max(50, { message: "Ad ən çox 50 simvol olmalıdır" })
      .regex(/^[a-zA-ZəğüşıöçƏĞÜŞİÖÇ\s]+$/, {
        message: "Ad yalnız hərflərdən ibarət olmalıdır",
      }),
    surname: z
      .string()
      .min(2, { message: "Soyad ən azı 2 simvol olmalıdır" })
      .max(50, { message: "Soyad ən çox 50 simvol olmalıdır" })
      .regex(/^[a-zA-ZəğüşıöçƏĞÜŞİÖÇ\s]+$/, {
        message: "Soyad yalnız hərflərdən ibarət olmalıdır",
      }),
    email: z.string().email({ message: "Düzgün email ünvanı daxil edin" }),
    password: z
      .string()
      .min(8, { message: "Şifrə ən azı 8 simvol olmalıdır" })
      .max(20, { message: "Şifrə ən çox 20 simvol olmalıdır" })
      .regex(/[A-Z]/, { message: "Şifrə ən azı 1 böyük hərf olmalıdır" })
      .regex(/[0-9]/, { message: "Şifrə ən azı 1 rəqəm olmalıdır" }),
    passwordRepeat: z.string(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Şifrələr eyni deyil",
    path: ["passwordRepeat"],
  });
