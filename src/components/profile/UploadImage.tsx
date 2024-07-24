import React, { useState, ChangeEvent } from "react";
import { ImageIcon } from "../Svgs";
import { useAppContext } from "@/app/contexts/AppContext";

const UploadImage = () => {
  const { user, updateUser } = useAppContext();
  const [img, setImg] = useState(user.img);
  const [imgUrl, setImgUrl] = useState<string | null>(user.img);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];

    const image = URL.createObjectURL(file);

    setImg(image);

    const newUser = {
      ...user,
      imgFile: file,
      img: image,
    };

    updateUser(newUser);

    setImgUrl(image);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between p-5 bg-lightGrey rounded-xl mt-4 mb-3">
      <div className="flex-1">
        <p className="text-grey">Profile picture</p>
      </div>
      <div className="flex-1 ">
        <div
          style={{
            background: `${
              imgUrl
                ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgUrl})`
                : "#EFEBFF"
            }`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" py-16  w-[193px] rounded-xl"
        >
          <label htmlFor="profile-img">
            <div className="h-full cursor-pointer flex flex-col items-center justify-center">
              <ImageIcon className={`${img ? "fill-white" : "fill-purple"}`} />
              <span
                className={`${
                  img ? "text-white" : "text-purple"
                } font-semibold`}
              >
                + Upload Image
              </span>
            </div>
          </label>
        </div>
        <input
          accept=".jpeg, .jpg, .png"
          hidden
          type="file"
          id="profile-img"
          name="profile-img"
          onChange={handleChange}
        />
      </div>
      <div className="text-xs text-grey flex-1">
        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </div>
    </div>
  );
};

export default UploadImage;
