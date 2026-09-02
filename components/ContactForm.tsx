"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validation/contactForm";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 p-4"
      noValidate
    >
      <div className="mb-2">
        <label htmlFor="fullame">Full name</label>
        <input
          type="text"
          id="fullname"
          {...register("fullName")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.fullName && (
          <p id="fullname-error" role="alert" className="text-sm text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-sm text-red-600">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <button type="submit" className="mt-2 px-4 py-2 rounded-md">
        Send
      </button>
    </form>
  );
}
