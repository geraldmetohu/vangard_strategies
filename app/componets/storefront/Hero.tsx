"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
};

export function Hero({
  title = "Empowering Your Growth with Vangard Strategies",
  subtitle = "Comprehensive consultancy in procurement, tendering, and contract acquisition tailored to your success.",
  imageUrl = "/VS.jpeg",
}: HeroProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <header ref={ref} className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full">
        <Image
          src={imageUrl}
          alt="Hero Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Overlay with Positioned Animated Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full">
        {/* Title - Center Justified */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          initial="hidden"
          animate={controls}
          className="absolute top-1/4 left-2/8 transform -translate-x-1/2 -translate-y-1/2 text-[#fef9c3] drop-shadow-lg font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full px-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle - Bottom Left Justified */}
        <motion.p
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
          }}
          initial="hidden"
          animate={controls}
          className="absolute bottom-28 left-10 text-left text-[#879299] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-md"
        >
          {subtitle}
        </motion.p>
      </div>
    </header>
  );
}
