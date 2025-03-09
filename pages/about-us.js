import React from "react";
import Head from "next/head";
import Image from "next/image";

import image from "../public/mole-busters-banner.jpg";

const Page = () => {
  return (
    <div className="py-1 mx-5">
      <Head>
        <title>
          About Mole Busters: The Mole, Vole, and Gopher Specialists
        </title>
        <meta
          name="description"
          content="About Mole Busters: The Mole, Vole, and Gopher Specialists"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="icon.ico" type="image/ico" sizes="16x16" />

      <div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt='Mole Busters business card'
            // layout="responsive"
            width={"20%"}
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        </div>
        <p className="text-lg md:text-2xl font-semibold text-green-800">
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
        <p class="text-green-700 text-lg font-semibold">Reliablity</p>
        <p>We stick to our schedules and deliver on our promises.</p>

        <p class="text-green-700 text-lg font-semibold">Ethical Practices</p>
        <p>We adhere to stringent ethcial standards in all our operations.</p>

        <p class="text-green-700 text-lg font-semibold">Customer Satisfaction</p>
        <p>
          Your satisfaction is our ultimate goal. We won't stop until your
          property
        </p>
      </div>

      <p className="font-medium">
        Learn more about our services or get in touch with us today. Let's work
        together to exterminate your gopher problem.
      </p>
    </div>
  );
};

export default Page;
