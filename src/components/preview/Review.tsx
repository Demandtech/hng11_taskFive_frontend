"use client";
import { useState } from "react";
import LinkCard from "./LinkCard";
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";


const Review = () => {
  const { links, user } = useAppContext();
  const totalCards = 5;
  const numberOfEmptyCards = Math.max(totalCards - links.length, 0);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="bg-[#EEEEEE] w-24 h-24 rounded-full mb-5 relative overflow-hidden">
           {
            user.img && <Image layout="fill" src={user.img} alt="display image"/>
           }
        </div>
        <div className="flex flex-col items-center gap-2 mb-12">
          <div
            className={`${
              user.first_name
                ? "max-w-[230px] text-ellipsis whitespace-nowrap overflow-hidden"
                : "bg-[#EEEEEE] h-4 w-[120px] rounded-xl z-50"
            } font-bold text-3xl `}
          >
            {user.first_name} {user.last_name}
          </div>
          <div
            className={`${
              user.email ? "" : "bg-[#EEEEEE]  h-2 w-[100px] rounded-xl z-50"
            } text-grey text-sm`}
          >
            {user.email}
          </div>
        </div>
      </div>
      <div className="space-y-4 z-50">
        {links.map((link, index) => (
          <LinkCard link={link} key={index} />
        ))}
        {Array.from({ length: numberOfEmptyCards }).map((_, index) => (
          <div
            className="bg-[#EEEEEE] h-12 rounded-lg z-50"
            key={index + links.length} 
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Review;
