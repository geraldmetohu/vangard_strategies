import { Hero } from "../componets/storefront/Hero";

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
        className="py-20 px-6 h-screen bg-gradient-to-r from-[#070F2B] to-[#1B1A55] text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-yellow-300">
            Our Services
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Empowering your business growth with innovative solutions.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card: New Business Set Up */}
            <div className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">New Business Set Up</h3>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Initial Setup:
                </li>
                <li className="ml-6 text-gray-300">
                  Companies House, Corporation Tax, VAT, PAYE, Self-Assessment & Bank Account
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Branding:
                </li>
                <li className="ml-6 text-gray-300">
                  Business Logo, Website, Emails, Landline & Custom Mobile
                </li>
              </ul>
              <a
                href="/services/new-business-setup"
                className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
              >
                Explore
              </a>
            </div>

            {/* Service Card: Existing Business Upgrade */}
            <div className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Existing Business Upgrade</h3>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Trademark Registration & ICO Registration
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Insurances (Public Liability, Employers’, Professional, etc.)
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Licencing, Accreditations & Policies
                </li>
              </ul>
              <a
                href="/services/existing-upgrade"
                className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
              >
                Discover More
              </a>
            </div>

            {/* Service Card: Expansion & Development */}
            <div className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Expansion & Development</h3>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Contract Drafting
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Tendering & Procurement Management
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Public/Private Sector Partnerships
                </li>
              </ul>
              <a
                href="/services/expansion-development"
                className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Sectors Section */}
<section
  id="sectors"
  className="relative py-20 px-6 text-white h-screen overflow-hidden"
>
  {/* full‑bleed fixed background */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/VS1.jpeg')" }}
  />
  {/* semi‑transparent gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#070F2B]/80 to-[#1B1A55]/80" />

  {/* content */}
  <div className="relative container mx-auto max-w-3xl space-y-6 text-center">
    <h2 className="text-4xl font-bold tracking-wide text-yellow-300">Sectors</h2>
    <p className="mt-4 text-xl leading-relaxed">
      Vangard serves an extensive range of industries—including Supply Chain, Appliances,
      Security Services, Construction, Transport Services, Translation & Interpreting,
      Laundry & Linen, and Travel—with tailored procurement, tendering, and contract
      solutions that drive efficiency, compliance, and growth.
    </p>
    <div className="mt-12 flex flex-wrap justify-center gap-6">
      {[
        "Supply Chain",
        "Appliances",
        "Security Services",
        "Construction",
        "Transport Services",
        "Translation",
        "Laundry & Linen",
        "Travel",
      ].map((sector) => (
        <span
          key={sector}
          className="inline-block px-5 py-2 bg-white rounded-full shadow-lg font-semibold text-gray-800"
        >
          {sector}
        </span>
      ))}
    </div>
    <a
      href="/sectors"
      className="mt-8 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
    >
      View All Sectors
    </a>
  </div>
</section>

{/* Our Partners Section */}
<section
  id="partners"
  className="relative h-screen py-20 px-6 text-white overflow-hidden"
>
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/sectors2.jpg')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#070F2B]/80 to-[#1B1A55]/80" />

  <div className="relative container mx-auto max-w-3xl space-y-6 text-center">
    <h2 className="text-4xl font-bold tracking-wide text-yellow-300">Our Partners</h2>
    <p className="mt-4 text-lg leading-relaxed">
      We believe strong partnerships are essential to delivering outcome-driven solutions.
      Vangard collaborates with accreditation bodies, legal compliance experts, tender
      support specialists, framework holders, and prime contractors to build an ecosystem
      that drives innovation and reliability.
    </p>
    <p className="text-lg leading-relaxed">
      Our network ensures clients access top‑tier expertise and trusted delivery partners,
      enabling you to navigate complex procurement landscapes with confidence.
    </p>
    <a
      href="/partners"
      className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
    >
      Discover Partners
    </a>
  </div>
</section>

{/* About Us Section */}
<section
  id="about-us"
  className="relative h-screen py-20 px-6 text-white overflow-hidden"
>
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/VS2.jpeg')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-tl from-[#070F2B]/80 to-[#1B1A55]/80" />

  <div className="relative container mx-auto max-w-3xl space-y-6 text-center">
    <h2 className="text-4xl font-bold tracking-wide text-yellow-300">About Us</h2>
    <p className="mt-4 text-xl leading-relaxed">
      Vangard is an expert consultancy providing end-to-end support in procurement,
      tendering, and contract acquisition. Our team draws on deep experience in both UK
      and international procurement environments—including public sector frameworks,
      private sector supply chains, and cross-border contracting.
    </p>
    <p className="text-xl leading-relaxed">
      We guide organizations through every procurement lifecycle stage—from compliance
      and accreditation to bid preparation, submission, and post-award management—ensuring
      professional, reliable, and results-driven delivery.
    </p>
    <a
      href="/about"
      className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
    >
      Read More
    </a>
  </div>
</section>

{/* Our Work / Portfolio Section */}
<section
  id="work"
  className="relative  h-screen py-20 px-6 text-white overflow-hidden object-center"
>
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover "
    style={{ backgroundImage: "url('/VS3.jpeg')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#070F2B]/80 to-[#1B1A55]/80" />

  <div className="relative container mx-auto max-w-3xl object-center text-center">
    <h2 className="text-4xl font-bold tracking-wide text-yellow-300">Our Work</h2>
    <p className="mt-4 text-xl leading-relaxed">
      Our track record includes helping clients win major public and private sector
      contracts, achieve ISO certifications, and optimize procurement strategies—
      driving measurable impact and sustainable growth.
    </p>
    <a
      href="/partners"
      className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
    >
      Explore Case Studies
    </a>
  </div>
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

  <div className="relative container mx-auto max-w-3xl space-y-6 text-center">
    <h2 className="text-4xl font-bold tracking-wide text-yellow-300">Get In Touch</h2>
    <p className="mt-4 text-xl leading-relaxed">
      Ready to accelerate your growth? Contact Vangard to discuss your procurement
      and contract needs. Our expert consultants are here to guide you every step
      of the way.
    </p>
    <p className="text-xl leading-relaxed">
      Email us at info@vangardconsulting.com or call +44 7777 277 507 to start the conversation.
    </p>
    <a
      href="/contact"
      className="mt-4 inline-block px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
    >
      Contact Us
    </a>
  </div>
</section>

    </>
  );
}
