import { useState } from "react";
import LinkCard from "./LinkCard";
import { useAppContext } from "@/app/contexts/AppContext";

const Review = () => {
  const { links, user } = useAppContext();
  const [emptyCard, setEmptyCard] = useState(5);


  
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="bg-[#EEEEEE] w-24 h-24 rounded-full mb-6 z-50"></div>
        <div className="flex flex-col items-center gap-2 mb-14">
          <div
            className={`${
              user.name ? "" : "bg-[#EEEEEE]  h-4 w-[120px] rounded-xl z-50"
            }`}
          ></div>
          <div
            className={`${
              user.email ? "" : "bg-[#EEEEEE]  h-2 w-[100px] rounded-xl z-50"
            }`}
          ></div>
        </div>
      </div>
      <div className="space-y-4 z-50">
        {!links.length > 0
          ? links.map((link, index) => {
              return <LinkCard link={link} key={index} />;
            })
          : ["", "", "", "", ""].map((_, index) => {
              return (
                <div className="bg-[#EEEEEE] h-12 rounded-lg z-50" key={index}></div>
              );
            })}
      </div>
    </div>
  );
};

export default Review;
