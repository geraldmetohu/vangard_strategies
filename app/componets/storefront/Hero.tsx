"use client";
import { prisma } from "@/app/lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from 'framer-motion';

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

/* export async function Hero() {
  const data = await getData();
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative w-full h-screen">
              <Image
                alt="Banner Image"
                src={item.imageString}
                fill
                className="object-cover w-full h-full"
              />
              {// Full overlay covering the image }
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-black bg-opacity-30">
                // { Overlay text container with pulse animation }
                <div className="bg-black bg-opacity-60 text-white p-4 rounded-lg shadow-lg animate-pulse">
                  <h1 className="text-3xl lg:text-6xl font-bold">{item.title}</h1>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation buttons positioned vertically centered }
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
} */




type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
};

export function Hero({
  title = 'Empowering Your Growth with Vangard Strategies',
  subtitle = 'Comprehensive consultancy in procurement, tendering, and contract acquisition tailored to your success.',
  imageUrl = '/VS.jpeg',
}: HeroProps) {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay and Animated Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </header>
  );
}
