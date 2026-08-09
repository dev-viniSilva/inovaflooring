import { useState, type FormEvent } from "react";
import { services } from "../data/services";
import { site } from "../data/site";

type Status = "idle" | "submitting" | "success" | "error";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  squareFootage: string;
  message: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  projectType: "",
  squareFootage: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const setField = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.firstName.trim()) nextErrors.firstName = "Required.";
    if (!values.lastName.trim()) nextErrors.lastName = "Required.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!emailPattern.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!values.projectType) nextErrors.projectType = "Please select a project type.";
    if (!values.message.trim()) nextErrors.message = "Please tell us a bit about your project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        setValues(initialValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center px-8 py-16 text-center animate-fade-in">
        <p className="font-display text-2xl font-extrabold text-charcoal">Request received.</p>
        <p className="mt-2 text-[15px] text-charcoal-soft">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full border border-line bg-ivory px-4 py-3.5 text-[15px] text-charcoal outline-none transition-colors placeholder:text-stone focus:border-clay";
  const labelClasses = "mb-2 block text-[12px] font-bold uppercase tracking-[0.1em] text-charcoal-soft";
  const errorClasses = "mt-1.5 text-[13px] text-clay";

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="firstName" className={labelClasses}>
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          autoComplete="given-name"
          value={values.firstName}
          onChange={setField("firstName")}
          aria-invalid={Boolean(errors.firstName)}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          className={inputClasses}
        />
        {errors.firstName && <p id="firstName-error" className={errorClasses}>{errors.firstName}</p>}
      </div>

      <div>
        <label htmlFor="lastName" className={labelClasses}>
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          autoComplete="family-name"
          value={values.lastName}
          onChange={setField("lastName")}
          aria-invalid={Boolean(errors.lastName)}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          className={inputClasses}
        />
        {errors.lastName && <p id="lastName-error" className={errorClasses}>{errors.lastName}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={setField("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses}
        />
        {errors.email && <p id="email-error" className={errorClasses}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={setField("phone")}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={inputClasses}
        />
        {errors.phone && <p id="phone-error" className={errorClasses}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className={labelClasses}>
          Project Type
        </label>
        <select
          id="projectType"
          value={values.projectType}
          onChange={setField("projectType")}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className={inputClasses}
        >
          <option value="">Select a project type</option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.projectType && <p id="projectType-error" className={errorClasses}>{errors.projectType}</p>}
      </div>

      <div>
        <label htmlFor="squareFootage" className={labelClasses}>
          Approximate Square Footage <span className="normal-case text-[#34302bb3]">(optional)</span>
        </label>
        <input
          id="squareFootage"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 800"
          value={values.squareFootage}
          onChange={setField("squareFootage")}
          className={inputClasses}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={setField("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your space and what you're hoping to achieve."
        />
        {errors.message && <p id="message-error" className={errorClasses}>{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="sm:col-span-2">
          <p className="text-[13px] text-clay" role="alert">
            {endpoint
              ? "Something went wrong sending your request. Please try again, or call us directly."
              : "The contact form isn't fully configured yet. Please call or email us directly."}{" "}
            <a href={site.phoneHref} className="underline underline-offset-2">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-clay px-7 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-clay-dim disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Request a Free Estimate"}
        </button>
      </div>
    </form>
  );
}
