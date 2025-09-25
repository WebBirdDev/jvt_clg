import React, { useState } from "react";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 focus:outline-none ${
          isOpen ? "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white" : ""
        }`}
      >
        <span>{title}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-2xl mx-auto my-10">
      <AccordionItem
        title="What is Flowbite?"
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      >
        <p className="mb-2">
          Flowbite is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p>
          Check out this guide to learn how to{" "}
          <a
            href="/docs/getting-started/introduction/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            get started
          </a>{" "}
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </AccordionItem>

      <AccordionItem
        title="Is there a Figma file available?"
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        <p className="mb-2">
          Flowbite is first conceptualized and designed using the Figma software
          so everything you see in the library has a design equivalent in our
          Figma file.
        </p>
        <p>
          Check out the{" "}
          <a
            href="https://flowbite.com/figma/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Figma design system
          </a>{" "}
          based on the utility classes from Tailwind CSS and components from
          Flowbite.
        </p>
      </AccordionItem>

      <AccordionItem
        title="What are the differences between Flowbite and Tailwind UI?"
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      >
        <p className="mb-2">
          The main difference is that the core components from Flowbite are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Flowbite relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2">
          However, we actually recommend using both Flowbite, Flowbite Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p className="mb-2">Learn more about these technologies:</p>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://flowbite.com/pro/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Flowbite Pro
            </a>
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </AccordionItem>
    </section>
  );
};

export default Accordion;
