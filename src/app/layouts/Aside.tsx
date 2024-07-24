import React from "react";
import Review from "@/components/preview/Review";
import img from "../../../public/preview-section.png";
import Image from "next/image";

const Aside = () => {
  const imgUrl = "/subtract.png";
  const imgUrl2 = "/rectangle.png";
  return (
    <div className="bg-white h-full  flex flex-col rounded-xl">
      <div className="w-[350px] relative h-[650px]  px-5 mx-auto mt-24">
        <div
          style={{
            background: `url(${imgUrl2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute top-0 left-0 right-0 bottom-0"
        ></div>
        <div
          className="absolute top-0 pt-16 px-6 left-0 right-0 bottom-0 z-10"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "contaun",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        > <div className="z-[1000] px-5">
          <Review />
        </div></div>
       
      </div>
    </div>
  );
};

export default Aside;
