"use client";

import { useState } from "react";
import { contactItems } from "@/data/businessAIData";
import MotionWrapper from "./MotionWrapper";

type FormData = {
  name: string;
  email: string;
  website: string;
  goal: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  website: "",
  goal: "",
  message: "",
};

export default function BusinessAIContact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const whatsappNumber = "8801XXXXXXXXX";

  const validateField = (name: keyof FormData, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = "This field is required";
    }

    if (name === "name" && value.trim().length < 3) {
      error = "Name must be at least 3 characters";
    }

    if (name === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "website" && value.trim()) {
      try {
        new URL(value);
      } catch {
        error = "Enter a valid website URL";
      }
    }

    if (name === "message" && value.trim().length < 10) {
      error = "Message must be at least 10 characters";
    }

    return error;
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    Object.entries(form).forEach(([key, value]) => {
      const fieldName = key as keyof FormData;

      const error = validateField(fieldName, value);

      if (error) {
        newErrors[fieldName] = error;
      }
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
New Business AI Request

Name: ${form.name}
Email: ${form.email}
Website: ${form.website}
Automation Goal: ${form.goal}

Business Details:
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
    <section id="contact" className="bg-[#f8fffb] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionWrapper>
          <div className="h-full rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 md:p-9">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
              Request your automation audit
            </h2>

            <p className="mb-8 leading-8 text-slate-500">
              Send your business details and we will review your workflows,
              repetitive tasks, tools, lead process, and automation
              opportunities.
            </p>

            <div className="grid gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#d1fae5] text-[#10b981]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="mb-1 text-lg font-extrabold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="text-slate-500">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.14}>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 md:p-9"
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

            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full rounded-2xl border px-4 py-4 outline-none transition focus:ring-4 ${
                  errors.name
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-[#dbe4f0] focus:border-[#10b981] focus:ring-emerald-100"
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full rounded-2xl border px-4 py-4 outline-none transition focus:ring-4 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-[#dbe4f0] focus:border-[#10b981] focus:ring-emerald-100"
                }`}
              />

              {errors.email && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="Website URL"
                className={`w-full rounded-2xl border px-4 py-4 outline-none transition focus:ring-4 ${
                  errors.website
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-[#dbe4f0] focus:border-[#10b981] focus:ring-emerald-100"
                }`}
              />

              {errors.website && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.website}
                </p>
              )}
            </div>

            <div>
              <select
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-4 outline-none transition focus:ring-4 ${
                  errors.goal
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-[#dbe4f0] focus:border-[#10b981] focus:ring-emerald-100"
                }`}
              >
                <option value="">Select your automation goal</option>

                <option>Automate Lead Follow-up</option>
                <option>Build AI Chatbot</option>
                <option>Connect Business Tools</option>
                <option>Improve CRM Workflow</option>
                <option>Reduce Manual Admin Work</option>
              </select>

              {errors.goal && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.goal}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your business, current tools, repetitive tasks, and automation goals"
                className={`min-h-36 w-full resize-y rounded-2xl border px-4 py-4 outline-none transition focus:ring-4 ${
                  errors.message
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-[#dbe4f0] focus:border-[#10b981] focus:ring-emerald-100"
                }`}
              />

              {errors.message && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#10b981] px-7 py-4 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#059669]"
            >
              Send Automation Request
            </button>
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
}
