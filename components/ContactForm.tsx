"use client";

import type { ContactForm } from "@/types/contactForm";
import { useState } from "react";

const initialForm: ContactForm = {
  fullname: "",
  subject: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}
      className="flex flex-col gap-1 p-4 max-w-md"
    >
      <label htmlFor="fullname">Full name</label>
      <input
        type="text"
        id="fullname"
        value={form.fullname}
        onChange={(e) => setForm({ ...form, fullname: e.target.value })}
        className="px-4 py-2 rounded-md border mb-2"
      />

      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        className="px-4 py-2 rounded-md border mb-2"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="px-4 py-2 rounded-md border mb-2"
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="px-4 py-2 rounded-md border mb-2"
      />

      <button
        type="submit"
        className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground"
      >
        Send
      </button>
    </form>
  );
}
