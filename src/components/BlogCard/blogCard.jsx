import React from "react";
import Image from "next/image";

const BlogCard = ({ image, imageAlt, title, description, date }) => {
  return (
    <div className="md:h-[350px] md:flex mx-3">
      <div className="md:w-1/2 content-center flex p-2">
        <Image
          src={image}
          alt={imageAlt}
          width={"100%"}
          // layout="responsive"
          style={{ objectFit: 'cover', borderRadius: 5 }}
        />
      </div>

      <div
        className="md:w-1/2 flex flex-col justify-center items-center text-center"
        // style={{ height: "20%" }}
      >
        {/* <h className="font-sans text-base font-medium">{title}</h> */}
        <h className="titleText">{title}</h>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-400">{`Published on ${date}`}</p>
      </div>
    </div>
  );
};

export default BlogCard;
