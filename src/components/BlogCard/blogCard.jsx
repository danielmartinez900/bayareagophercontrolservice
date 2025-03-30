import React from "react";
import Image from "next/image";

const BlogCard = ({ image, imageAlt, title, description, date }) => {
  return (
    <section className="md:h-[350px] md:flex mx-3">
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
      >
        <h className="titleText">{title}</h>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-400">{`Published on ${date}`}</p>
      </div>
    </section>
  );
};

export default BlogCard;
