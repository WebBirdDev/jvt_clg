/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import uk from '../assets/countries/uk.jpg'
import germany from '../assets/countries/germany.jpg'
import nl from '../assets/countries/netherlands.jpg'
import ca from '../assets/countries/canada.jpg'
import aus from '../assets/countries/australia.jpg'
import nz from '../assets/countries/newzealand.jpg'
import ire from '../assets/countries/uk.jpg'
import fr from '../assets/countries/france.jpg'
import sw from '../assets/countries/swedan.jpg'
import usa from '../assets/countries/usa.jpg'
import dubai from '../assets/countries/dubai.png'
import poland from '../assets/countries/poland.jpg'

const countryDetails = {
  "united-kingdom": {
    name: "United Kingdom",
    hero: uk,
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "London School of Economics",
      "King's College London",
    ],
    courses: [
      "Medicine",
      "Law",
      "Artificial Intelligence",
      "Finance",
      "Engineering",
      "Business Management",
    ],
  },
  germany: {
    name: "Germany",
    hero: germany,
    universities: [
      "Technical University of Munich",
      "Heidelberg University",
      "RWTH Aachen University",
      "LMU Munich",
      "University of Freiburg",
      "University of Stuttgart",
    ],
    courses: [
      "Mechanical Engineering",
      "Automotive Engineering",
      "Renewable Energy",
      "Computer Science",
      "Biotechnology",
      "Business Administration",
    ],
  },
  netherlands: {
    name: "Netherlands",
    hero: nl,
    universities: [
      "University of Amsterdam",
      "Delft University of Technology",
      "Leiden University",
      "Erasmus University Rotterdam",
      "Utrecht University",
      "Maastricht University",
    ],
    courses: [
      "International Business",
      "Data Science",
      "Sustainable Engineering",
      "Psychology",
      "Logistics & Supply Chain",
      "Economics",
    ],
  },
  canada: {
    name: "Canada",
    hero: ca,
    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Alberta",
      "McMaster University",
      "Queen's University",
    ],
    courses: [
      "Computer Science",
      "Business Administration",
      "Engineering",
      "Health Sciences",
      "Finance",
      "Environmental Studies",
    ],
  },
  australia: {
    name: "Australia",
    hero: aus,
    universities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "University of Queensland",
      "Monash University",
      "University of New South Wales",
    ],
    courses: [
      "Business Management",
      "Engineering",
      "Information Technology",
      "Medicine",
      "Finance",
      "Environmental Science",
    ],
  },
  "new-zealand": {
    name: "New Zealand",
    hero: nz,
    universities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "University of Waikato",
    ],
    courses: [
      "Environmental Science",
      "Tourism & Hospitality",
      "Engineering",
      "Business Management",
      "Computer Science",
      "Agricultural Science",
    ],
  },
  ireland: {
    name: "Ireland",
    hero: ire,
    universities: [
      "Trinity College Dublin",
      "University College Dublin",
      "University College Cork",
      "Dublin City University",
      "National University of Ireland Galway",
      "Maynooth University",
    ],
    courses: [
      "Software Engineering",
      "Business Analytics",
      "Pharmaceutical Sciences",
      "Finance",
      "International Relations",
      "Law",
    ],
  },
  france: {
    name: "France",
    hero: fr,
    universities: [
      "Sorbonne University",
      "École Polytechnique",
      "HEC Paris",
      "Sciences Po Paris",
      "Université PSL",
      "Université Paris-Saclay",
    ],
    courses: [
      "Luxury Management",
      "International Business",
      "Engineering",
      "Law",
      "Arts & Design",
      "Economics",
    ],
  },
  sweden: {
    name: "Sweden",
    hero: sw,
    universities: [
      "KTH Royal Institute of Technology",
      "Lund University",
      "Uppsala University",
      "Chalmers University of Technology",
      "Stockholm University",
      "Linköping University",
    ],
    courses: [
      "Sustainable Engineering",
      "Computer Science",
      "Business Management",
      "Industrial Design",
      "Environmental Science",
      "Finance",
    ],
  },
  "united-states": {
    name: "United States",
    hero: usa,
    universities: [
      "Harvard University",
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of California, Berkeley",
      "Yale University",
      "Princeton University",
    ],
    courses: [
      "Computer Science",
      "Business Administration",
      "Medicine",
      "Law",
      "Artificial Intelligence",
      "Finance",
    ],
  },
  "dubai-uae": {
    name: "Dubai / UAE",
    hero: dubai,
    universities: [
      "University of Dubai",
      "American University in Dubai",
      "Heriot-Watt University Dubai",
      "Middlesex University Dubai",
      "Zayed University",
      "University of Sharjah",
    ],
    courses: [
      "Business Administration",
      "Engineering",
      "Computer Science",
      "Finance",
      "Hospitality Management",
      "Law",
    ],
    services:
      "Visit visas, employment visas, and family visit applications with quick turnaround.",
  },
  poland: {
    name: "Poland",
    hero: poland,
    universities: [
      "University of Warsaw",
      "Jagiellonian University",
      "Warsaw University of Technology",
      "AGH University of Science and Technology",
      "Adam Mickiewicz University",
      "University of Wroclaw",
    ],
    courses: [
      "IT & Computer Science",
      "Engineering",
      "Business Management",
      "Medicine",
      "Economics",
      "Tourism & Hospitality",
    ],
    services:
      "Seasonal and general work visas with employer coordination support.",
  },
};

const CountryDetail = () => {
  const { countrySlug } = useParams();
  const country = countryDetails[countrySlug];

  if (!country) {
    return <div className="p-20 text-center">Country not found</div>;
  }

  return (
    <section>
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img
          src={country.hero}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Study in {country.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Universities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8">
              Top Universities
            </h2>
            <ul className="space-y-4 text-lg">
              {country.universities.map((uni, i) => (
                <li key={i} className="border-b pb-3">
                  {uni}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8">
              Popular Courses
            </h2>
            <ul className="space-y-4 text-lg">
              {country.courses.map((course, i) => (
                <li key={i} className="border-b pb-3">
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link to={'/contact'}>
            <button className="system-btn transition">
              Apply With Consultant
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;