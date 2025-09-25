/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const TermsConditions = () => {
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
        <h2 className="font-black xl:text-3xl w-full pb-3">
          Terms and Conditions - Sri JVT College
        </h2>
        <p>Effective date: 18-09-2025</p>
        <p className="py-5">
          These Terms and Conditions govern your use of the Sri JVT College
          website. By accessing this site, you agree to comply with these terms.
        </p>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Use of Website
          </p>
          <p className="px-5">
            You agree to use the website only for lawful purposes and in a
            manner that does not infringe the rights of others or restrict their
            use of the site.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Intellectual Property
          </p>
          <p className="px-5">
            All content, including logos, text, images, and software, is the
            property of Sri JVT College and protected by applicable copyright
            and trademark laws. Unauthorized use is prohibited.
          </p>
          <p className="px-5">
            We may also collect non-personal information like browser type,
            referring website, time and date of visits, etc.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Website Access
          </p>
          <p className="px-5">
            We strive to keep the website up and running. However, we are not
            liable for temporary unavailability due to technical issues.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            User Submissions
          </p>
          <p className="px-5">
            Any content submitted to the site (e.g., forms, applications,
            comments) becomes the property of SRI JVT College, and we may use it
            for educational or administrative purposes unless otherwise stated.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Limitation of Liability
          </p>
          <p className="px-5">
            We make no warranties or guarantees about the accuracy or
            completeness of website content. SRI JVT College is not liable for
            any damages arising from the use or inability to use the site.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Third-Party Links
          </p>
          <p className="px-5">
            The website may include links to external sites for your
            convenience. We are not responsible for their content or practices.
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
            Modifications
          </p>
          <p className="px-5">
            We may revise these Terms and Conditions at any time. Continued use
            of the site implies acceptance of any changes.
          </p>
        </div>
        <div className="py-5">
          <p className="font-semibold flex items-center gap-1 pb-3">
            Governing Law
          </p>
          <p className="px-5">
            These terms are governed by the laws of Northern Province, Sri
            Lanka.
          </p>
        </div>
        <div className="py-5">
          <h3 className="font-bold">Contact us</h3>
          <p>
            For questions about these Terms, please contact:&nbsp;
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

export default TermsConditions;
