"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  Package,
  Globe2,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { VEGETABLE_POWDERS, FRUIT_POWDERS } from "@/lib/products";

const allProducts = [
  ...VEGETABLE_POWDERS,
  ...FRUIT_POWDERS,
].map((item) => item.name);

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Netherlands",
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
  "Australia", "New Zealand", "Canada", "Singapore", "Malaysia",
  "Thailand", "Indonesia", "Vietnam", "Philippines", "Japan", "South Korea",
  "China", "Bangladesh", "Sri Lanka", "Nepal", "South Africa", "Kenya",
  "Nigeria", "Egypt", "Turkey", "Poland", "Sweden", "Denmark", "Norway",
  "Other",
];

export default function RequestSample({ open, setOpen }) {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!form.product.trim()) {
      newErrors.product = "Product name is required";
    }

    if (!form.quantity.trim()) {
      newErrors.quantity = "Sample quantity is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your requirements";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);

        setForm({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          product: "",
          quantity: "",
          message: "",
        });
      }, 2500);
    }
  };

  const inputClass = (field) => {
    if (errors[field]) {
      return "border-red-500 ";
    }

    if (activeField === field) {
      return "border-green-500 bg-[#edf7f0]";
    }

    return "border-[#d7d2c3]";
  };

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 w-full border-2 border-[#14422d] text-[#14422d] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-[#14422d]/5 active:scale-95"
      >
        Request Sample

        <Send className="h-4 w-4" />
      </button>

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/30 p-4 backdrop-blur-md"
          >
            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[470px] rounded-[1.8rem] bg-[#f5f2e8] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-8"
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-[#414943] transition-all hover:rotate-90"
              >
                <X className="h-7 w-7" />
              </button>

              {/* SUCCESS */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-[2.8rem] bg-[#14422d]/95 backdrop-blur-xl"
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#14422d]">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>

                    <h2 className="mt-6 text-4xl font-extrabold text-white">
                      Request Submitted
                    </h2>

                    <p className="mt-4 max-w-md text-center text-white/70">
                      Our export team will contact you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* HEADER */}
              <div>
                <h2 className="text-[32px] font-extrabold leading-none tracking-[-0.04em] text-[#14422d]">
                  Request Samples
                </h2>

                <p className="mt-2 text-[15px] leading-relaxed text-[#414943]/80">
                  Fill this form to request product samples.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-5 space-y-2">
                {/* NAME */}
                <Field
                  icon={User}
                  placeholder="Full Name"
                  value={form.fullName}
                  error={errors.fullName}
                  className={inputClass("fullName")}
                  onFocus={() => setActiveField("fullName")}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => {
                    setForm({ ...form, fullName: e.target.value });

                    if (errors.fullName) {
                        setErrors((prev) => ({
                        ...prev,
                        fullName: "",
                        }));
                    }
                    }}
                />

                {/* EMAIL */}
                <Field
                  icon={Mail}
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  error={errors.email}
                  className={inputClass("email")}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });

                    if (errors.email) {
                        setErrors((prev) => ({
                        ...prev,
                        email: "",
                        }));
                    }
                    }}
                />

                {/* PHONE */}
                <Field
                  icon={Phone}
                  placeholder="Phone Number"
                  value={form.phone}
                  error={errors.phone}
                  className={inputClass("phone")}
                  onFocus={() => setActiveField("phone")}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });

                    if (errors.phone) {
                        setErrors((prev) => ({
                        ...prev,
                        phone: "",
                        }));
                    }
                    }}
                />

                {/* COUNTRY */}
                <SelectField
                  icon={Globe2}
                  value={form.country}
                  error={errors.country}
                  className={inputClass("country")}
                  onFocus={() => setActiveField("country")}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => {
                    setForm({ ...form, country: e.target.value });

                    if (errors.country) {
                        setErrors((prev) => ({
                        ...prev,
                        country: "",
                        }));
                    }
                    }}
                  options={countries}
                  placeholder="Select Country"
                />

                {/* PRODUCT DROPDOWN */}
                <SelectField
                    icon={Package}
                    value={form.product}
                    error={errors.product}
                    className={inputClass("product")}
                    onFocus={() => setActiveField("product")}
                    onBlur={() => setActiveField("")}
                    onChange={(e) => {
                    setForm({ ...form, product: e.target.value });

                    if (errors.product) {
                        setErrors((prev) => ({
                        ...prev,
                        product: "",
                        }));
                    }
                    }}
                    options={allProducts}
                    placeholder="Select Product"
                />

                {/* QUANTITY */}
                <Field
                  icon={Package}
                  placeholder="Sample Quantity (Example: 250g)"
                  value={form.quantity}
                  error={errors.quantity}
                  className={inputClass("quantity")}
                  onFocus={() => setActiveField("quantity")}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => {
                  setForm({ ...form, quantity: e.target.value });

                    if (errors.quantity) {
                        setErrors((prev) => ({
                        ...prev,
                        quantity: "",
                        }));
                    }
                  }}
                />

                {/* MESSAGE */}
                <div>
                  <div
                    className={`flex overflow-hidden rounded-[2rem] border bg-[#f0ede2] transition-all duration-300 focus-within:border-[#14422d] ${inputClass(
                      "message"
                    )}`}
                  >
                    <div className="flex items-start px-5 pt-5 text-[#14422d]">
                      <MessageSquare className="h-5 w-5" />
                    </div>

                    <textarea
                      rows={5}
                      placeholder="Tell us your requirements..."
                      value={form.message}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField("")}
                      onChange={(e) => {
                      setForm({ ...form, message: e.target.value });

                        if (errors.message) {
                            setErrors((prev) => ({
                            ...prev,
                            message: "",
                            }));
                        }
                      }}
                      className="w-full resize-none bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-[#717973]/60"
                    />
                  </div>

                  {errors.message && (
                    <p className="mt-1 ml-3 text-xs font-small text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#14422d] px-8 py-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0f3122]"
                >
                  Submit Request

                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* FIELD */
function Field({ icon: Icon, error, className, ...props }) {
  return (
    <div>
      <div
        className={`flex items-center overflow-hidden rounded-full border bg-[#f0ede2] transition-all duration-300 focus-within:border-[#14422d] ${className}`}
      >
        <div className="flex items-center px-5 text-[#14422d]">
          <Icon className="h-5 w-5" />
        </div>

        <input
          {...props}
          className="w-full bg-transparent px-1 py-2.5 text-sm outline-none placeholder:text-[#717973]/60"
        />
      </div>

      {error && (
        <p className="mt-1 ml-3 text-xs font-small text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

/* SELECT FIELD */
function SelectField({
  icon: Icon,
  error,
  className,
  options,
  placeholder,
  ...props
}) {
  return (
    <div>
      <div
       className={`flex items-center overflow-hidden rounded-full border bg-[#f0ede2] transition-all duration-300 focus-within:border-[#14422d] ${className}`}
      >
        <div className="flex items-center px-5 text-[#14422d]">
          <Icon className="h-5 w-5" />
        </div>

        <select
          {...props}
          className="w-full appearance-none bg-transparent px-1 py-2.5 text-sm outline-none"
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="mt-1 ml-3 text-xs font-small text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}