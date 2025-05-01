"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Hero } from "@/app/componets/storefront/Hero";

const sectors = [
  { id: "supply-chain", name: "Supply Chain", image: "/supply.jpg" },
  { id: "appliances", name: "Appliances", image: "/appliances.jpeg" },
  { id: "security-services", name: "Security Services", image: "/security.jpg" },
  { id: "construction", name: "Construction", image: "/construction.jpeg" },
  { id: "transport-services", name: "Transport Services", image: "/transport.jpg" },
  { id: "translation", name: "Translation & Interpreting", image: "/translation.png" },
  { id: "laundry-linen", name: "Laundry & Linen", image: "/linen.jpg" },
  { id: "travel-services", name: "Travel Services", image: "/travel.jpg" },
];

function AnimatedSection({ children, isEven }: { children: React.ReactNode; isEven: boolean }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: isEven ? -100 : 100 });
    }
  }, [inView, controls, isEven]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={controls}
      transition={{ duration: 1 }}
      className={`w-full ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-[#070F2B] to-[#1B1A55] py-16 px-6`}
    >
      {children}
    </motion.section>
  );
}

export default function SectorsPage() {
  return (
    <div className="w-full bg-[#070F2B]">
      <Hero
        title="Our Sectors"
        subtitle="Explore the industries we serve with tailored, outcome-driven solutions."
        imageUrl="/sectors2.jpg"
      />

      {sectors.map((sector, index) => {
        const isEven = index % 2 === 0;
        return (
          <AnimatedSection key={sector.id} isEven={isEven}>
            <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl mx-auto">
              {/* Mobile Image */}
              <div className="md:hidden w-full mb-4">
                <Image src={sector.image} alt={sector.name} width={600} height={400} className="w-full h-auto object-cover rounded-lg" />
              </div>

              {/* Desktop Image Left */}
              {isEven && (
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <Image src={sector.image} alt={sector.name} width={800} height={600} className="w-4/5 h-auto object-cover" />
                </div>
              )}

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center text-white p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#cbed8f] mb-4">
                  {sector.name}
                </h2>
                <a
                  href={`/contact?msg=${encodeURIComponent(`Contact about ${sector.name}`)}`}
                  className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600"
                >
                  Learn More
                </a>
              </div>

              {/* Desktop Image Right */}
              {!isEven && (
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <Image src={sector.image} alt={sector.name} width={800} height={600} className="w-4/5 h-auto object-cover" />
                </div>
              )}
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}