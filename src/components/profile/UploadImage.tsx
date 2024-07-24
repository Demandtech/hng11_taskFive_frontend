import React from "react";
import { ImageIcon } from "../Svgs";

const UploadImage = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between p-5 bg-lightGrey rounded-xl mt-4 mb-3">
      <div className="flex-1">
        <p className="text-grey">Profile picture</p>
      </div>
      <div className="flex-1 ">
        <div className="!bg-lightPurple py-16  w-[193px] rounded-xl">
          <label htmlFor="profile-img h-full cursor-pointer">
            <div className="flex flex-col h-full items-center justify-center">
              <ImageIcon className="fill-purple" />
              <span className="text-purple font-semibold">+ Upload Image</span>
            </div>
          </label>
        </div>
        <input hidden type="file" id="profile-img" name="profile-img" />
      </div>
      <div className="text-xs text-grey flex-1">
        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </div>
    </div>
  );
};

export default UploadImage;
