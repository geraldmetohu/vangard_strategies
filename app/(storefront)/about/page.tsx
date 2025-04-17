import { Hero } from "@/app/componets/storefront/Hero";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full bg-[#070F2B]">
      {/* Hero Section: Full Screen Impact */}
 
        <Hero
            title="About Vangard"
            subtitle="Expert consultancy for procurement, tendering and contract acquisition.."
            imageUrl="/VS.jpeg"
        />

      {/* Who We Are Section: Image on Left, Text on Right */}
      <section className="py-16 px-6 bg-gradient-to-l from-[#070F2B] to-[#1B1A55] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image 
              src="/VS2.jpeg" 
              alt="Our Office & Team" 
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl font-bold text-yellow-300">Who We Are</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Vangard is an expert consultancy providing end-to-end support in procurement, tendering, and contract acquisition. Our team comprises professionals with extensive experience in both UK and international procurement environments — including public sector frameworks, private sector supply chains, and cross-border contracting.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              We offer a comprehensive range of services designed to assist organisations through each stage of the procurement lifecycle — from initial compliance and accreditation to bid preparation, submission, and post-award obligations. Our approach is tailored, methodical, and rooted in a thorough understanding of procurement regulations and industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section: Alternating Layout (Text on Left, Image on Right) */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#070F2B] to-[#1B1A55] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-bold text-yellow-300">Our Process</h2>
            <p className="mt-4 text-lg leading-relaxed">
              We ensure each client’s submission is accurate, timely, and reflects the technical and commercial strengths of their business. Our process is designed to maximise your chance of success while maintaining full compliance with procurement standards.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image 
              src="/VS1.jpeg" 
              alt="Process Overview" 
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-16 px-6 bg-gradient-to-l from-[#070F2B] to-[#1B1A55] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-wide text-yellow-300">
            Our Sectors
          </h2>
          <p className="mt-4 text-xl">
            We serve a wide range of industries with custom, innovative solutions.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Supply Chain",
              "Appliances",
              "Security Services",
              "Construction",
              "Transport Services",
              "Translation & Interpreting",
              "Laundry & Linen",
              "Other Industries",
            ].map((sector) => (
              <div
                key={sector}
                className="bg-white bg-opacity-20 p-3 rounded-full text-white font-medium shadow-sm transform transition hover:scale-105 duration-300"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#070F2B] to-[#1B1A55] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-300">Meet Our Team</h2>
          <p className="mt-4 text-xl">
            Our dedicated professionals drive our success.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#070F2B] p-6 rounded-xl shadow-lg">
              <div className="flex justify-center">
                <Image 
                  src="/team1.jpg" 
                  alt="" 
                  width={150} 
                  height={150} 
                  className="rounded-full" 
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Krenar</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="bg-[#070F2B] p-6 rounded-xl shadow-lg">
              <div className="flex justify-center">
                <Image 
                  src="/team2.jpg" 
                  alt="" 
                  width={150} 
                  height={150} 
                  className="rounded-full" 
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Gerald</h3>
              <p>Head of Operations</p>
            </div>
            <div className="bg-[#070F2B] p-6 rounded-xl shadow-lg">
              <div className="flex justify-center">
                <Image 
                  src="/team3.jpg" 
                  alt="" 
                  width={150} 
                  height={150} 
                  className="rounded-full" 
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Alex</h3>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
