import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Market Masters",
  description:
    "Get in touch with the Market Masters team for support, questions, or feedback about our crypto analytics platform.",
};

export default function ContactUs() {
  return (
    <div className="container mx-auto max-w-5xl py-8 sm:py-12">
      <h1 className="mb-6 text-center text-3xl font-semibold text-white sm:text-4xl">
        Contact Us
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-center text-zinc-400">
        Have a question or feedback? We&apos;d love to hear from you. Fill out
        the form below and our team will get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
