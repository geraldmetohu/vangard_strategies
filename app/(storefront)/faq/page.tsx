import Image from "next/image";

export default function FAQs() {
  return (
    <div className="w-full bg-[#070F2B] text-white">
      <section className="py-16 px-6 bg-gradient-to-l from-[#070F2B] to-[#1B1A55]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#cbed8f] mb-6">Frequently Asked Questions</h1>
          <p className="text-xl mb-12">Everything you need to know about how Vangard supports your business from setup to success.</p>

          <div className="space-y-8 max-w-4xl mx-auto text-left">
            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">What services does Vangard provide?</h2>
              <p className="mt-2 text-lg">We offer end-to-end support for new business setup, certification, policy drafting, and helping clients secure tenders and contracts in both public and private sectors.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">Can you help me start a business from scratch?</h2>
              <p className="mt-2 text-lg">Yes. From company registration to branding, business emails, and compliance setup, we cover all aspects to help you launch professionally and legally.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">What industries do you work with?</h2>
              <p className="mt-2 text-lg">We work across multiple sectors including Construction, Transport, Translation, Security, Appliances, Laundry Services, and more.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">Do you help with policies and certifications?</h2>
              <p className="mt-2 text-lg">Absolutely. We prepare policies covering GDPR, Health & Safety, HR, IT, and provide guidance and support for ISO and industry-specific certifications.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">Can you support us with winning public or private sector contracts?</h2>
              <p className="mt-2 text-lg">Yes, we help identify opportunities, prepare tender documents, ensure compliance, and provide expert guidance to increase your success rate.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">Is Vangard suitable for freelancers or microbusinesses?</h2>
              <p className="mt-2 text-lg">Yes. Our services are fully scalable—from solo entrepreneurs to growing SMEs—tailored to match your size and stage of growth.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#cbed8f]">How do I get started?</h2>
              <p className="mt-2 text-lg">You can reach out via <a href="mailto:info@vangardconsulting.com" className="underline text-blue-300">info@vangardconsulting.com</a> or call us at <span className="font-semibold">+44 7777 277507</span> to book your consultation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
