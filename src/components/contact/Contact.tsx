"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const serviceOptions = [
  "SEO",
  "Meta Pro Ads",
  "Google Ads",
  "TikTok Ads",
  "Full Stack Digital Marketing",
  "Website Design & Development",
  "Business AI & Automation",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const contactInfo: [typeof Mail, string, string][] = [
  [Mail, "Email", "info@pixelroute.com"],
  [Phone, "Phone", "+1 347 337 0881"],
  [MapPin, "Office", "520 Quinn Ln, Woodbridge, VA, United States, 22193"],
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const whatsappNumber = "13473370881"; // ekhane tomar WhatsApp number dao

  const validateField = (name: keyof FormData, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = "This field is required";
    }

    if (name === "name" && value.trim() && value.trim().length < 3) {
      error = "Name must be at least 3 characters";
    }

    if (name === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Enter a valid email address";
    }

    if (name === "phone" && value.trim()) {
      const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
      if (!phoneRegex.test(value)) error = "Enter a valid phone number";
    }

    if (name === "message" && value.trim() && value.trim().length < 10) {
      error = "Project details must be at least 10 characters";
    }

    return error;
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    Object.entries(form).forEach(([key, value]) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, value);
      if (error) newErrors[fieldName] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setForm((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [fieldName]: validateField(fieldName, value),
    }));

    setSuccessMsg("");
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setSuccessMsg("");
      setErrorMsg("Please fix the errors before submitting.");
      return;
    }

    const text = `
New Contact Form Submission

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service Needed: ${form.service}

Project Details:
${form.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    setErrorMsg("");
    setSuccessMsg("Form validated successfully. Opening WhatsApp...");

    window.open(whatsappUrl, "_blank");

    setForm(initialForm);
    setErrors({});
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
          <span className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-extrabold text-violet-700">
            Contact
          </span>

          <h2 className="mb-4 text-4xl font-extrabold text-slate-950">
            Ready to grow your business?
          </h2>

          <p className="mb-8 text-slate-500">
            Send us your details and we will contact you to discuss your
            project.
          </p>

          {contactInfo.map(([Icon, title, value]) => (
            <div
              key={title}
              className="flex gap-4 border-t border-slate-200 py-5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-700">
                <Icon size={22} />
              </div>

              <div>
                <strong className="block text-slate-950">{title}</strong>
                <span className="text-slate-500">{value}</span>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5"
        >
          {successMsg && (
            <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              {successMsg}
            </p>
          )}

          {errorMsg && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {errorMsg}
            </p>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Your Name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              error={errors.name}
              onChange={handleChange}
            />

            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter your phone"
              value={form.phone}
              error={errors.phone}
              onChange={handleChange}
            />

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Service Needed
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3.5 outline-none transition focus:ring-4 ${
                  errors.service
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-200 focus:border-violet-600 focus:ring-violet-100"
                }`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {errors.service && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.service}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-800">
              Project Details
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`min-h-36 w-full rounded-2xl border px-4 py-3.5 outline-none transition focus:ring-4 ${
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-violet-600 focus:ring-violet-100"
              }`}
              placeholder="Tell us about your business and goals"
            />

            {errors.message && (
              <p className="mt-2 text-sm font-medium text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            className="rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5"
            type="submit"
          >
            Send Message with WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormData;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border px-4 py-3.5 outline-none transition focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-slate-200 focus:border-violet-600 focus:ring-violet-100"
        }`}
      />

      {error && (
        <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}
