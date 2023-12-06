import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
const brandsData = [
  {
    id: 1,
    name: "GooglePay",
    href: "https://uideck.com",
    image:
      "https://global-uploads.webflow.com/5eb83629a119283a8908371b/6303de382897f9e89e4b8a5c_Forbes%20png.png",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image:
      "https://global-uploads.webflow.com/5eb83629a119283a8908371b/6303de38bb4b84d9f2d6f561_Business%20Insider.png",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image:
      "https://global-uploads.webflow.com/5eb83629a119283a8908371b/6303ddbcab194d0e482473d9_image.png",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image:
      "https://global-uploads.webflow.com/5eb83629a119283a8908371b/63a35389d3a2896d7e4ba2a2_The_business_journals.png",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image:
      "data:image/png;base64,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",
  },
];

const Brands = () => {
  return (
    <section className="pt-16 mb-20 ">
      <div className="container ml-20">
        <div className="mx-4   flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className=" h-64 pb-10 mt-[20] fadeInUp flex flex-wrap items-center justify-center rounded-md bg-gray-200 gap-12 hover:text-[#0369a1]   sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
      >
        <img src={image} alt={name}  />
      </a>  
    </div>
  );
};
