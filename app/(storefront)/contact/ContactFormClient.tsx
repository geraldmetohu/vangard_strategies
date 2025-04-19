// app/(storefront)/contact/ContactFormClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const sectorName = searchParams.get("msg") || "";

  const generateDetailedMessage = (sector: string) =>
    `Hi Vangard Strategies,

I am interested in ${sector} services. I would like to receive detailed information about available packages, pricing, and how your solutions can be tailored to meet my business needs.

Thank you,
[Your Name]`;

  const initialMessage = sectorName
    ? generateDetailedMessage(sectorName)
    : "Hi,\n\nI would like to inquire about your services.\n\nThank you,\n[Your Name]";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    setMessage(initialMessage);
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, address, message });
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070F2B] to-[#1B1A55] text-white py-16 px-6">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-5xl font-bold text-center">
          {sectorName || "Contact Us"}
        </h1>
        {sectorName && (
          <p className="mt-4 text-xl text-center">
            Get more information about {sectorName}
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-lg font-medium">
              Address (Optional)
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
