"use client";

import { Hero } from "@/app/componets/storefront/Hero";
import Image from "next/image";
import Link from "next/link";

const partnerLogos = [
  { name: "Blimey Solutions", logo: "/blimey.svg" },
  { name: "Compliance Experts Ltd.", logo: "/logo_v.png" },
  { name: "Tender Support Inc.", logo: "/logo_v.png" },
  { name: "Workforce Dev Group", logo: "/logo_v.png" },
  { name: "Logistics Alliance", logo: "/logo_v.png" },
  { name: "Quality Management Partners", logo: "/logo_v.png" },
  { name: "Legal Consultancy Ltd.", logo: "/logo_v.png" },
  { name: "Tech Innovators", logo: "/logo_v.png" },
];

export default function PartnersPage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <Hero
        title="Our Partners"
        subtitle="Joining forces with industry leaders to drive innovation and impact."
        imageUrl="/VS4.jpeg"
      />

      {/* PARTNERS INTRO: Two-Column Highlight */}
      <section className="py-16 px-6 bg-gradient-to-l from-[#070F2B] to-[#1B1A55]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/VS2.jpeg"
              alt="Collaboration Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-extrabold mb-4 text-[#cbed8f]">Why Partner with Vangard?</h2>
            <p className="mb-4 leading-relaxed">
              We forge alliances with accreditation bodies, legal experts, and leading firms
              to build a robust network. Our partners gain priority access to projects,
              co-branding opportunities, and collaborative initiatives that accelerate growth.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-white">
              <li>Exclusive subcontracting & joint venture opportunities</li>
              <li>Shared expertise in compliance and tendering</li>
              <li>Co-developed solutions for complex challenges</li>
              <li>Visibility across our global client base</li>
            </ul>
            <Link
              href="/contact?msg=I%20would%20like%20to%20become%20a%20partner%20with%20Vangard"
              className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
            >
              Join Our Network
            </Link>
          </div>
        </div>
      </section>

      {/* LOGOS GRID */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#070F2B] to-[#1B1A55] text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12  text-[#cbed8f]">
          Trusted by Leading Organizations
        </h2>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {partnerLogos.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center space-y-4 p-4 bg-white bg-opacity-10 rounded-xl transition transform hover:scale-105"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={80}
                className="object-contain"
              />
              <span className="text-center font-semibold">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1B1A55] to-[#070F2B] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#cbed8f]">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Streamlining Public Tenders</h3>
              <p className="text-lg leading-relaxed">
                Prepared compliant bid documents for a government contract,
                resulting in a 25% higher evaluation score and project award.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Accreditation Success</h3>
              <p className="text-lg leading-relaxed">
                Guided a manufacturing client through ISO certifications in under four months,
                boosting market credibility and opening new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#070F2B] to-[#1B1A55] text-white">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lime-600 transition transform hover:scale-105">Become a Vangard Partner</h2>
          <p className="text-lg leading-relaxed mb-8">
            Join our network to collaborate on transformative projects and expand your reach.
          </p>
          <Link
            href="/contact?msg=I%20would%20like%20to%20become%20a%20partner%20with%20Vangard"
            className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* OUTRO QUOTE */}
      <section className="bg-gradient-to-r from-[#1B1A55] to-[#070F2B] text-white py-24 px-6">
        <blockquote className="max-w-3xl mx-auto text-2xl italic text-center transition transform hover:scale-105">
          “Together, we help businesses access new markets, meet procurement standards, and deliver with confidence.”
        </blockquote>
      </section>
    </div>
  );
}
