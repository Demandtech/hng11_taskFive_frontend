import LinkCard from "./LinkCard";
import { useAppContext } from "@/app/contexts/AppContext";

const Review = () => {
  const { links, user } = useAppContext();
  // console.log(useAppContext())

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="bg-[#EEEEEE] w-24 h-24 rounded-full mb-6"></div>
        <div className="flex flex-col items-center gap-2 mb-14">
          <div
            className={`${
              user.name ? "" : "bg-[#EEEEEE]  h-4 w-[120px] rounded-xl"
            }`}
          ></div>
          <div
            className={`${
              user.email ? "" : "bg-[#EEEEEE]  h-2 w-[100px] rounded-xl"
            }`}
          ></div>
        </div>
      </div>
      <div className="space-y-4">
        {!links.length > 0
          ? links.map((link, index) => {
              return <LinkCard link={link} key={index} />;
            })
          : ["", "", "", "", ""].map((_, index) => {
              return (
                <div className="bg-[#EEEEEE] h-12 rounded-lg" key={index}></div>
              );
            })}
      </div>
    </div>
  );
};

export default Review;
