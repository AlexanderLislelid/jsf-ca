import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 mt-20">
      <h1 className="text-2xl font-bold px-4">Contact us</h1>
      <ContactForm />
    </div>
  );
}
