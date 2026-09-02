import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, "Full name is required, (3 characters minimum)"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject is required (3 characters minimum)"),
  email: z.email("Enter a valid email address"),
  message: z.string().trim().min(10, "A minimum of 10 characters is required"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
