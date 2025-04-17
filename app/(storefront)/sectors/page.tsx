import { Hero } from "@/app/componets/storefront/Hero";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface Sector {
  id: string;
  name: string;
  description: string;
  image: string;
}

const sectors: Sector[] = [
  {
    id: "supply-chain",
    name: "Supply Chain",
    description:
      "Our supply chain solutions streamline logistics and optimize operations for maximum efficiency and cost savings.",
    image: "/supply.jpg",
    },
  {
    id: "appliances",
    name: "Appliances",
    description:
      "We provide modern solutions for appliance manufacturing and aftersales support to ensure sustainability and innovation.",
    image: "/appliances.jpeg",
    },
  {
    id: "security-services",
    name: "Security Services",
    description:
      "Our security strategies combine technology and expertise to protect your assets and deliver peace of mind.",
    image: "/security.jpg",
    },
  {
    id: "construction",
    name: "Construction",
    description:
      "We tackle today's construction challenges with innovative techniques and tailored technologies.",
    image: "/construction.jpeg",
    },
  {
    id: "transport-services",
    name: "Transport Services",
    description:
      "Our transport solutions are designed for efficiency and sustainability, ensuring timely delivery of goods.",
   image: "/transport.jpg",
    },
  {
    id: "translation",
    name: "Translation & Interpreting",
    description:
      "We break language barriers with professional translation and localization services, enabling global communication.",
    image: "/translation.png",
  },
  {
    id: "laundry-linen",
    name: "Laundry & Linen",
    description:
      "Our laundry and linen services adhere to industry standards, providing reliable and comprehensive solutions.",
    image: "/linen.jpg",
    },
  {
    id: "travel-services",
    name: "Travel Services",
    description:
      "From corporate travel to leisure, our travel services offer customised solutions ensuring a seamless experience.",
    image: "/travel.jpg",
    },
];


export default function SectorsPage() {
  const sectorList = useMemo(() => sectors, []);

  return (
    <div className="w-full bg-[#070F2B]">
      {/* HERO SECTION */}
      <Hero
        title="Our Sectors"
        subtitle="Explore the industries we serve with tailored, outcome-driven solutions."
        imageUrl="/sectors2.jpg"
      />

      {/* SECTORS OVERVIEW */}
      <section className="py-16 px-6 bg-gradient-to-l from-[#070F2B] to-[#1B1A55] text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Side */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">Why Vangard Sectors?</h2>
            <p className="mb-4 leading-relaxed">
              At Vangard, our deep industry expertise ensures tailored, innovative
              solutions across every sector. Whether you need supply chain optimization,
              advanced security protocols, or cutting-edge construction insights, we
              deliver precision and professionalism to help your business excel.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Customized strategies for each industry’s unique challenges</li>
              <li>Compliance and risk management at every stage</li>
              <li>Data-driven insights to propel growth</li>
              <li>Dedicated support from sector experts</li>
            </ul>
            <Link
              href="/services"
              className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
            >
              View Our Service Packages
            </Link>
          </div>
          {/* Illustration Side */}
          <div className="order-1 md:order-2">
            <img
              src="VS3.jpeg"
              alt="Sector Overview Illustration"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

{/* SECTOR SECTIONS */}
{sectorList.map((sector, index) => {
  const isEven = index % 2 === 0;
  const gradient = isEven ? "bg-gradient-to-r" : "bg-gradient-to-l";
  return (
    <section
      key={sector.id}
      id={sector.id}
      className={`${gradient} from-[#070F2B] to-[#1B1A55] py-8 transition hover:scale-105 md:min-h-[90vh]`}
    >
      <div className="flex flex-col md:flex-row items-center h-full">
        {/* desktop image on left */}
        {isEven && (
          <div className="hidden md:flex w-full md:w-1/2 justify-center items-center px-0 mx-0">
            <Image
              src={sector.image}
              alt={sector.name}
              width={800}
              height={600}
              className="w-4/5 h-auto object-cover"
            />
          </div>
        )}

        {/* text + mobile image */}
        <div className="w-full md:w-1/2 p-8 md:p-14 text-white text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-yellow-300">{sector.name}</h2>
          {/* mobile image below title */}
          <div className="md:hidden mb-6 px-0 mx-0">
            <Image
              src={sector.image}
              alt={sector.name}
              width={600}
              height={400}
              className="w-3/4 mx-auto object-cover"
            />
          </div>
          <p className="text-lg leading-relaxed mb-6">{sector.description}</p>
          <Link
            href={`/contact?msg=${encodeURIComponent(`Contact about ${sector.name}`)}`}
            className="inline-block px-8 py-3 bg-green-500 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* desktop image on right */}
        {!isEven && (
          <div className="hidden md:flex w-full md:w-1/2 justify-center items-center px-0 mx-0">
            <Image
              src={sector.image}
              alt={sector.name}
              width={800}
              height={600}
              className="w-4/5 h-auto object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
})}

    </div>
  );
}
