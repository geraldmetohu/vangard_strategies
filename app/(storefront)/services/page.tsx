import { Hero } from "@/app/componets/storefront/Hero";

export default function ServicesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title="Our Services"
        subtitle="Discover tailored solutions for every stage of your business journey."
        imageUrl="/services.jpg"
      />

      {/* SERVICES INTRO */}
      <section
        id="services-intro"
        className="py-16 px-4 sm:px-6 bg-gradient-to-tl from-[#2b7674] to-[#1B1A55] text-white"
      >
        <div className="container mx-auto max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed text-justify sm:text-left">
            "At Vangard, we empower your business at every stage. Whether you're launching
            a new venture, upgrading an established enterprise, or expanding into new markets,
            our expert solutions ensure compliance, efficiency, and sustainable growth. Explore
            the categories below to find the strategic support you need".
          </p>
        </div>
        <div className="container mx-auto text-center pt-10">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "#new-business-setup", label: "New Business Set Up" },
              { href: "#existing-business-upgrade", label: "Existing Business Upgrade" },
              { href: "#expansion-development", label: "Expansion & Development" },
            ].map((btn) => (
              <a
                key={btn.href}
                href={btn.href}
                className="px-6 py-3 bg-green-500 rounded-full font-semibold shadow-lg hover:bg-green-600 transition"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-black w-full py-1" />

      {/* NEW BUSINESS SET UP */}
      <section
        id="new-business-setup"
        className="relative py-20 px-4 sm:px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/startup.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#070F2B]/80 to-[#1B1A55]/80" />

        <div className="relative container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-bold text-yellow-300">
            New Business Set Up
          </h2>
          <p className="text-lg leading-relaxed text-justify sm:text-left">
            Launch your venture with confidence using our comprehensive service.
            We manage every vital step to get you started—ensuring all legal and
            branding elements are impeccably in place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Initial Setup</h3>
              <ul className="list-disc list-inside text-lg text-justify sm:text-left">
                <li>Companies House Registration</li>
                <li>Corporation Tax Registration</li>
                <li>VAT Registration</li>
                <li>PAYE System</li>
                <li>Self-Assessment Registration</li>
                <li>Business Bank Account Set Up</li>
              </ul>
            </div>
            <div className="p-6 bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Branding</h3>
              <ul className="list-disc list-inside text-lg text-justify sm:text-left">
                <li>Business Logo Creation</li>
                <li>Website & Emails</li>
                <li>Landline Telephone Number</li>
                <li>Custom Mobile Number</li>
              </ul>
            </div>
          </div>
          <a
            href="/contact?msg=New%20Business%20Set%20Up"
            className="inline-block mt-8 px-8 py-3 bg-green-500 rounded-full font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* EXISTING BUSINESS UPGRADE */}
      <section
        id="existing-business-upgrade"
        className="relative py-20 px-4 sm:px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/VS4.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F2B]/80 to-[#1B1A55]/80" />

        <div className="relative container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-bold text-yellow-300">
            Existing Business Upgrade
          </h2>
          <p className="text-lg leading-relaxed text-justify sm:text-left">
            Elevate and modernize your established business. Our upgrade service
            blends streamlined operations with strategic enhancements, ensuring
            your business stays compliant and competitive.
          </p>
          <div className="space-y-8 text-justify sm:text-left">
            <div className="p-6 bg-white bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold text-emerald-400">Core Upgrades</h3>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>Trademark Registration & ICO Registration</li>
                <li>Business Insurances, Licencing, Accreditations, Memberships</li>
                <li>Terms and Conditions & Policies</li>
              </ul>
            </div>
            <div className="p-6 bg-white bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold text-emerald-400">Insurances</h3>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>Public Liability Insurance</li>
                <li>Employers’ Liability Insurance</li>
                <li>Professional Indemnity Insurance</li>
                <li>Product Liability Insurance</li>
                <li>Business Interruption Insurance</li>
                <li>Property & Equipment-related Insurance</li>
                <li>Cyber & Data Insurance</li>
                <li>Other Sector-Specific Insurance</li>
              </ul>
            </div>
            <div className="p-6 bg-white bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold text-emerald-400">Accreditations & Policies</h3>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>ISO Accreditations & Quality Management</li>
                <li>Cybersecurity & Data Protection Standards</li>
                <li>Environmental, Social & Ethical Standards</li>
                <li>Health & Safety Regulations</li>
                <li>Privacy Policy, Employment & HR Policies</li>
                <li>IT, GDPR, Financial, Operational, and Compliance Policies</li>
                <li>Customer & Service Delivery Policies</li>
              </ul>
            </div>
          </div>
          <a
            href="/contact?msg=Existing%20Business%20Upgrade"
            className="inline-block mt-8 px-8 py-3 bg-green-500 rounded-full font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* EXPANSION & DEVELOPMENT */}
      <section
        id="expansion-development"
        className="relative py-20 px-4 sm:px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/VS4.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F2B]/80 to-[#1B1A55]/80" />

        <div className="relative container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-bold text-yellow-300">
            Expansion & Development
          </h2>
          <p className="text-lg leading-relaxed text-justify sm:text-left">
            Propel your business to new heights with strategic expansion services. We
            offer expert guidance through every stage—contract drafting, securing
            partnerships, and managing tendering processes—ensuring your business
            grows in today’s competitive market.
          </p>
          <div className="space-y-8 text-justify sm:text-left">
            <div className="p-6 bg-white bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold text-emerald-400">Contract Drafting</h3>
              <p className="mt-2 text-lg">
                Clear, well-drafted contracts are the foundation of successful business
                relationships. Our tailored approach covers commercial, service,
                employment, and confidentiality agreements.
              </p>
              <ul className="list-disc list-inside text-lg mt-2">
                <li>B2B and commercial contracts</li>
                <li>Service and consultancy agreements</li>
                <li>Employment and subcontractor agreements</li>
                <li>NDAs, partnership and joint venture agreements</li>
                <li>Franchise, licensing & distribution agreements</li>
              </ul>
            </div>
            <div className="p-6 bg-white bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold text-emerald-400">Contracting & Partnerships</h3>
              <p className="mt-2 text-lg">
                We assist in securing lucrative contracts and forming strategic
                partnerships in public and private sectors.
              </p>
              <ul className="list-disc list-inside text-lg mt-2">
                <li>Respond to tenders and bid effectively</li>
                <li>Prepare winning proposals and certifications</li>
                <li>Establish subcontracting relationships and joint ventures</li>
                <li>Develop public-private partnerships (PPPs)</li>
                <li>Ensure compliance with procurement requirements</li>
              </ul>
            </div>
            <div className="p-6 bg-white bg-opacity-30 rounded shadow-inner transition transform hover:scale-105 md:hover:scale-110 hover:bg-[#070F2B]/80 bg-[#1B1A55]/80">
              <h3 className="text-2xl font-bold text-emerald-400">
                Tendering & Procurement Management
              </h3>
              <p className="mt-2 text-lg">
                Our end-to-end tendering service guides you from initial consultation
                through to bid submission.
              </p>
              <ol className="list-decimal list-inside text-lg mt-2">
                <li>Initial Consultation</li>
                <li>Opportunity Identification</li>
                <li>Compliance & Pre-Qualification Preparation</li>
                <li>Tender Strategy & Documentation</li>
                <li>Final Review & Submission</li>
              </ol>
            </div>
          </div>
          <a
            href="/contact?msg=Expansion%20and%20Development"
            className="inline-block mt-8 px-8 py-3 bg-green-500 rounded-full font-semibold shadow-lg hover:bg-green-600 transition"  
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  );
}
