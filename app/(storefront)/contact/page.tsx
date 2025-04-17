"use client";
export const dynamic = "force-dynamic";


import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const sectorName = searchParams.get("msg") || "";

  // Generate a detailed message template using the sector name
  const generateDetailedMessage = (sector: string): string => {
    return `Hi Vangard Strategies,

I am interested in ${sector} services. I would like to receive detailed information about available packages, pricing, and how your solutions can be tailored to meet my business needs.

Thank you,
[Your Name]`;
  };

  const initialDetailedMessage = sectorName
    ? generateDetailedMessage(sectorName)
    : "Hi,\n\nI would like to inquire about your services.\n\nThank you,\n[Your Name]";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState(initialDetailedMessage);

  useEffect(() => {
    // Update the message when the query parameter changes.
    setMessage(initialDetailedMessage);
  }, [initialDetailedMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your actual submission logic (e.g. API call)
    console.log({ fullName, email, address, message });
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070F2B] to-[#1B1A55] text-white py-16 px-6">
      <div className="container mx-auto max-w-2xl">
        {/* Title changes to the sector name if provided */}
        <h1 className="text-5xl font-bold text-center">
          {sectorName ? sectorName : "Contact Us"}
        </h1>
        {sectorName && (
          <p className="mt-4 text-xl text-center">
            Get more information about {sectorName}
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium">
              Address (Optional)
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
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
            ></textarea>
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
