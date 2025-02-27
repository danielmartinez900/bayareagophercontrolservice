import React from "react";
import Head from "next/head";
import Image from "next/image";

import image from "../public/mole-busters-banner.jpg";

const Page = () => {
  return (
    <div className="p-2 mx-20 h-auto">
      <Head>
        <title>About Mole Busters: Your Bay Area Gopher Experts</title>
        <meta
          name="about-us"
          content="About Mole Busters: Your Bay Area Gopher Experts"
        />
      </Head>

      <div>
        {/* <h1 className="text-2xl font-bold text-green-700 my-2 h-[50] content-center">
          About Mole Busters: Your Bay Area Gopher Experts
        </h1>
        <h1 className="text-xl font-medium text-green-700 my-2 h-[50] content-center">
          Dedicated to Exceptional Gopher Control
        </h1> */}
        <div className=" flex">
          <Image
            src={image}
            width={"20%"}
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        </div>
        <p className="text-2xl font-bold text-green-800">
          At Mole Busters, we are passionate about providing exceptional gopher
          control services accross the Bay Area. Our mission is to offer
          hummane, eco-friendly, and effective solutions to our clients.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">Our Story</p>
        <p>
          Mole Busters was founded with a commitment to solving gopher problems
          in the most caring and effective way possible. We understand the
          challenges gophers can pose to residental and commercial properties,
          and we are here to tackle those issues head-on.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">Our Team</p>
        <p>
          Our team of trained and certified professionals is dedicated to
          providing top-notch services. We continually invest in the latest
          training and tools to ensure the best results for our clients.
        </p>
      </div>

      <div className="my-5 space-y-1">
        <p className="font-bold text-green-700 text-xl my-1">Our Promise</p>
        <p>With Mole Busters, you can expect:</p>
        <p class="font-medium text-l text-green-700">Reliablity</p>
        <p>We stick to our schedules and deliver on our promises.</p>

        <p class="font-medium text-l text-green-700">Ethical Practices</p>
        <p>We adhere to stringent ethcial standards in all our operations.</p>

        <p class="font-medium text-l text-green-700">Customer Satisfaction</p>
        <p>Your
        satisfaction is our ultimate goal. We won't stop until your property</p>
      </div>

      <p className="font-medium">
        Learn more about our services or get in touch with us today. Let's work
        together to exterminate your gopher problem.
      </p>
    </div>
  );
};

export default Page;
