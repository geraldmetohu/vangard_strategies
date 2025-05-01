"use client";
import { Hero } from "../componets/storefront/Hero";
import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="w-full relative">
        <Hero
          title="Welcome to Vangard Strategies"
          subtitle="Empowering your business with tailored procurement, tendering, and contract solutions."
          imageUrl="/VS3.jpeg"
        />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 min-h-screen bg-gradient-to-r from-[#070F2B] to-[#1B1A55] text-white"
      >
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-[#cbed8f]"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl"
          >
            Empowering your business growth with innovative solutions.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col justify-between h-full p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {[
                      "New Business Set Up",
                      "Existing Business Upgrade",
                      "Expansion & Development",
                    ][i]}
                  </h3>
                  <ul className="text-left space-y-2 text-sm text-gray-300">
                    {[
                      [
                        "Initial Setup including Companies House, Corporation Tax, VAT, PAYE, Self-Assessment",
                        "Branding such as Logo, Website, Emails, Landline, and Mobile",
                        "Business bank account setup guidance",
                        "HMRC registration and support",
                      ],
                      [
                        "Trademark and ICO Registration",
                        "Public Liability, Employers’, Professional Insurance",
                        "Licencing and accreditations",
                        "Policy compliance and annual renewal",
                      ],
                      [
                        "Contract drafting",
                        "Tender and procurement management",
                        "Partnerships with public/private entities",
                        "Bid documentation support",
                      ],
                    ][i].map((line, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-1" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={
                    [
                      "/services/new-business-setup",
                      "/services/existing-upgrade",
                      "/services/expansion-development",
                    ][i]
                  }
                  className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
                >
                  {[
                    "Explore",
                    "Discover More",
                    "Learn More",
                  ][i]}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section
        id="sectors"
        className="relative py-20 px-6 text-white min-h-screen overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/VS1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F2B]/80 to-[#1B1A55]/80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto space-y-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-wide text-[#cbed8f]"
          >
            Sectors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Vangard supports multiple industries:
            <br />
            Supply Chain, Appliances, Security Services, Construction, Transport,
            Translation, Laundry & Linen, and Travel—delivering solutions that ensure
            efficiency, compliance, and growth.
          </motion.p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {[
              "Supply Chain",
              "Appliances",
              "Security Services",
              "Construction",
              "Transport Services",
              "Translation",
              "Laundry & Linen",
              "Travel",
            ].map((sector, idx) => (
              <motion.span
                key={sector}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="px-5 py-2 bg-white rounded-full shadow-lg font-semibold text-gray-800 text-sm sm:text-base"
              >
                {sector}
              </motion.span>
            ))}
          </div>
          <motion.a
            href="/sectors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            View All Sectors
          </motion.a>
        </motion.div>
      </section>
      <section
        id="partners"
        className="relative min-h-screen py-20 px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/sectors2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070F2B]/80 to-[#1B1A55]/80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto max-w-3xl space-y-6 text-center"
        >
          <h2 className="text-4xl font-bold tracking-wide text-[#cbed8f]">Our Partners</h2>
          <p className="mt-4 text-lg leading-relaxed">
            We believe strong partnerships are essential to delivering higher performing solutions. Vangard collaborates with accreditation bodies, legal compliance experts, tender support specialists, framework holders, and prime contractors to build an ecosystem that drives innovation and reliability.
          </p>
          <p className="text-lg leading-relaxed">
            Our network ensures clients access top‑tier expertise and trusted delivery partners, enabling you to navigate complex procurement landscapes with confidence.
          </p>
          <a
            href="/partners"
            className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            Discover Partners
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about-us"
        className="relative min-h-screen py-20 px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/VS2.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#070F2B]/80 to-[#1B1A55]/80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto max-w-3xl space-y-6 text-center"
        >
          <h2 className="text-4xl font-bold tracking-wide text-[#cbed8f]">About Us</h2>
          <p className="mt-4 text-xl leading-relaxed">
            Vangard is an expert consultancy providing end-to-end support in procurement, tendering, and contract acquisition. Our team draws on deep experience in both UK and international procurement environments: including public sector frameworks, private sector supply chains, and border crossing contracting.
          </p>
          <p className="text-xl leading-relaxed">
            We guide businesses through every procurement lifecycle stage, starting from compliance and accreditation to bid preparation, submission, while remaining professional, reliable, and satisfactionary.
          </p>
          <a
            href="/about"
            className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            Read More
          </a>
        </motion.div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="relative min-h-screen py-20 px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/VS3.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F2B]/80 to-[#1B1A55]/80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-wide text-[#cbed8f]">Our Work</h2>
          <p className="mt-4 text-xl leading-relaxed">
            Our track record includes helping clients win major public and private sector contracts, achieve ISO certifications, and optimize procurement strategies, resulting on measurable impact and sustainable growth.
          </p>
          <a
            href="/partners"
            className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            Explore Case Studies
          </a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-6 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/sectors2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#070F2B]/80 to-[#1B1A55]/80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto max-w-3xl space-y-6 text-center"
        >
          <h2 className="text-4xl font-bold tracking-wide text-[#cbed8f]">Get In Touch</h2>
          <p className="mt-4 text-xl leading-relaxed">
            Ready to accelerate your growth? Contact Vangard to discuss your procurement and contract needs. Our expert consultants are here to guide you every step of the way.
          </p>
          <p className="text-xl leading-relaxed">
            Email us at <a href="mailto:info@vangardconsulting.com" className="font-bold text-[#fef9c3]">info@vangardconsulting.com</a> or call <a href="tel:+447777277507" className="font-bold text-[#fef9c3]">+44 7777 277 507</a> to start the conversation.
          </p>

          <a
            href="/contact"
            className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </>
  );
}

