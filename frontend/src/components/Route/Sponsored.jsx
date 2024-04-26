import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/65c7a1b9e1462b00014351da/picture"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://d33i2jw1rbe4t6.cloudfront.net/uploads/company/logo/256/medium_6501d949-f039-4eaf-8f54-dc651187ad5b.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://pbs.twimg.com/profile_images/1681657575312437249/Wx38-VyI_400x400.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://app.fide.com/upload/24121/0c049d8e866ff4c585565382d806e6f7.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        
      </div>
    </div>
  );
};

export default Sponsored;
