import React from "react";
import { Cormorant_Garamond } from "next/font/google";
import { gridDataSmall, gridDataLarge } from "@/lib/data";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Services() {
  return (
    <section className="leading-8 scroll-mt-28 mt-32 w-full mb-0 sm:mb-10">
      <div className="border-b-2 border-black dark:border-white w-full">
        <h1 className="text-xl sm:text-4xl font-extralight sm:font-medium mb-1 mt-7">
          ✦ SERVICES
        </h1>
      </div>

      {/* SMALL SCREENS */}
      <div className="flex flex-col md:flex-row mb-12 mt-5  w-full">
        {gridDataSmall.map((item) => (
          <div key={item.key} className="w-full  md:w-1/3  mb-8">
            <div className="flex  mt-4 text-2xl md:text-4xl  font-thin mb-10 md:mb-44">
              <span className="">{item.key}</span>
            </div>
            <h2 data-value={item.title} className="text-4xl font-thin">
              {item.title}
            </h2>
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

      {/* LARGE SCREENS */}
      <div className="hidden md:block text-white  mix-blend-difference">
        <table className="min-w-full text-left">
          <tbody>
            {gridDataLarge.map((item) => (
              <tr className="border-b-[#c1c1c2] border-t-[#c1c1c2] border-b-2 border-t-2">
                {item.attributes.map((attribute) => (
                  <td className="py-1 w-1/3">{attribute}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
