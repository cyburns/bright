import React from "react";
import { Cormorant_Garamond } from "next/font/google";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gridData = [
  {
    key: "01",
    title: "DESIGN",
    description:
      "Design is at the very core of everything we do. We balance form, function, and feeling to develop brands in the digital space.",
    attributes: [
      "Brand Identity",
      "UX Design",
      "UI Design",
      "Motion Design",
      "Illustration",
    ],
  },
  {
    key: "02",
    title: "DEVELOPMENT",
    description:
      "We develop websites and apps with user experience, modern technology and business strategy in mind.",
    attributes: [
      "Frontend",
      "Backend",
      "Custom Shopify Themes",
      "Headless Shopify",
      "Native Mobile",
    ],
  },
  {
    key: "03",
    title: "STRATEGY",
    description:
      "We are a strategy-driven studio. We utilize data, industry experience, and instinct to create branded experiences that perform.",
    attributes: [
      "Creative Direction",
      "Research",
      "Discovery",
      "Insights",
      "Analytics",
    ],
  },
];

export default function Services() {
  return (
    <section className="leading-8 scroll-mt-28 mt-32 w-full mb-0 sm:mb-10">
      <div className="border-b-2 border-black dark:border-white w-full">
        <h1 className="text-xl sm:text-4xl font-extralight sm:font-medium mb-1 mt-7">
          ✦ SERVICES
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mb-12 mt-5  w-full">
        {gridData.map((item) => (
          <div key={item.key} className="w-full  md:w-1/3  mb-8">
            <div className="flex  mt-4 text-2xl md:text-4xl  font-thin mb-10 md:mb-44">
              <span className="">{item.key}</span>
            </div>
            <h2 className="text-4xl font-thin">{item.title}</h2>
            <h3
              className={`${corm.className}  mt-7 text-xl font-thin max-w-sm`}
            >
              {item.description}
            </h3>

            <div className="block md:hidden w-full mb-16">
              {item.attributes.map((attribute) => (
                <table className="min-w-full text-left  w-full">
                  <tbody>
                    <tr className="border-b-[#c1c1c2] border-b-2">
                      <td className={`py-1 w-1/3`}>{attribute}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <table className="min-w-full text-left">
          <tbody>
            <tr className="border-b-[#c1c1c2] border-t-[#c1c1c2] border-b-2 border-t-2">
              <td className="py-1 w-1/3">Creative Direction</td>
              <td className="py-1 w-1/3">Brand Identity</td>
              <td className="py-1 w-1/3">Frontend</td>
            </tr>

            <tr className="border-b-[#c1c1c2] border-b-2">
              <td className="py-1 w-1/3">Research</td>
              <td className="py-1 w-1/3">UX Design</td>
              <td className="py-1 w-1/3">Backend</td>
            </tr>
            <tr className="border-b-[#c1c1c2] border-b-2">
              <td className="py-1 w-1/3">Discovery</td>
              <td className="py-1 w-1/3">UI Design</td>
              <td className="py-1 w-1/3">Custom Shopify Themes</td>
            </tr>
            <tr className="border-b-[#c1c1c2] border-b-2">
              <td className="py-1 w-1/3">Insights</td>
              <td className="py-1 w-1/3">Motion Design</td>
              <td className="py-1 w-1/3">Headless Shopify</td>
            </tr>
            <tr className="border-b-[#c1c1c2] border-b-2">
              <td className="py-1 w-1/3">Analytics</td>
              <td className="py-1 w-1/3">Illustration</td>
              <td className="py-1 w-1/3">Native Mobile</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
