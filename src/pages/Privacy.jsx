/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const Privacy = () => {
  return (
    <motion.main
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="min-w-full text-blacky lg:py-0 py-10 font-display"
    >
      <section className="min-w-full xl:px-48 xl:py-14 md:py-14 py-20 px-10 md:px-10 xl:min-h-[80vh]">
        <h2 className="font-black xl:text-3xl w-full pb-3">Privacy Policy</h2>
        <p>Effective date: 18-09-2025</p>
        <p className="py-5">
          At SRI JVT College, we are committed to protecting the privacy of our
          students, staff, faculty, and visitors. This Privacy Policy outlines
          how we collect, use, disclose, and safeguard your information when you
          visit our website.
        </p>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Introduction
          </p>
          <p className="px-5">
            We value your privacy and aim to be transparent about what data we
            collect and how we use it. This policy outlines our practices
            regarding the handling of your information{" "}
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Information We Collect
          </p>
          <p className="px-5">
            We may collect the following types of personal information:
            <ul className="px-5 list-disc">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>IP address</li>
              <li>Academic records (for students)</li>
            </ul>
          </p>
          <p className="px-5">
            We may also collect non-personal information like browser type,
            referring website, time and date of visits, etc.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            How We Collect Information
          </p>
          <p className="px-5">
            <span>Your information is used for:</span>
            <ul className="px-5 list-disc">
              <li>Providing academic and administrative services</li>
              <li>Responding to inquiries</li>
              <li>Processing applications or forms</li>
              <li>Improving website performance and services</li>
              <li>Ensuring campus safety and compliance with regulations</li>
            </ul>
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Sharing Your Infomation
          </p>
          <p className="px-5">
            We do not sell, trade, or rent your personal information. We may
            share information:
            <ul className="px-5 list-disc">
              <li>With trusted service providers or contractors</li>
              <li>As required by law</li>
              <li>To protect the safety or rights of our community</li>
            </ul>
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Cookies and Tracking Technologies
          </p>
          <p className="px-5">
            Our website may use cookies or similar technologies to enhance your
            experience. You can choose to disable cookies through your browser
            settings.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Data Security
          </p>
          <p className="px-5">
            We implement appropriate technical and organizational security
            measures to protect your data. However, no method of transmission
            over the internet is 100% secure.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Third-Party Links
          </p>
          <p className="px-5">
            Our website may contain links to external sites. We are not
            responsible for the privacy practices of those websites.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Your Rights
          </p>
          <p className="px-5">
            You have the right to access, correct, or request deletion of your
            personal data where applicable under local laws.
          </p>
        </div>
        <div className="py-5">
          <h3 className="font-bold">Contact us</h3>
          <p>
            For questions regarding this Privacy Policy, please contact:&nbsp;
            <a href="mailto:info@jvtclg.com" className="text-primary underline">
              info@jvtclg.com
            </a>
            <a href="https://webbriid.com" className="text-primary underline">
              {" "}
              www.srijvt.com
            </a>
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default Privacy;
