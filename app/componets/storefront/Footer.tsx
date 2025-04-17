import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info with Updated Brand Name and Slogan */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/logo_v.png"
              alt="Vangard Strategies Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <div>
              <h2 className="text-xl font-semibold">Vangard Strategies</h2>
              <p className="text-sm text-green-400 italic">"Charting Your Path to Success"</p>
            </div>
          </div>
          <p className="text-gray-400">
            Comprehensive consultancy in procurement, tendering, and strategic growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/sectors" className="text-gray-400 hover:text-white transition">
                Sectors
              </Link>
            </li>
            <li>
              <Link href="/contracts" className="text-gray-400 hover:text-white transition">
                Contracts Register
              </Link>
            </li>
            <li>
              <Link href="/partners" className="text-gray-400 hover:text-white transition">
                Our Partners
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund" className="text-gray-400 hover:text-white transition">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: info@vangardstrategies.com</p>
          <p className="text-gray-400">Phone: +44 7777 277 507</p>
          <p className="text-gray-400">
            Location: Building 3, North London Business Park, London, N11 1GN, UK
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <Facebook size={24} />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <Twitter size={24} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <Linkedin size={24} />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <Instagram size={24} />
        </Link>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Vangard Strategies. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
