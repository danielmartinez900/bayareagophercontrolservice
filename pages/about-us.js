import React from "react";
import Head from "next/head";
import Image from "next/image";

import CallToAction from "@/src/components/CallToActionInputs/CallToAction";
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

      <section>
        <div className="flex justify-center">
          <Image
            src={image}
            alt='Mole Busters business card'
            // layout="responsive"
            width={"20%"}
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        </div>
        <h className="text-lg md:text-2xl font-semibold text-green-800">
          At Mole Busters, we are passionate about providing exceptional gopher
          control services accross the Bay Area. Our mission is to offer
          hummane, eco-friendly, and effective solutions to our clients.
        </h>
      </section>

      <section className="my-5">
        <h1 className="font-bold text-green-700 text-xl my-1">Our Story</h1>
        <p>
          Mole Busters was founded with a commitment to solving gopher problems
          in the most caring and effective way possible. We understand the
          challenges gophers can pose to residental and commercial properties,
          and we are here to tackle those issues head-on.
        </p>
      </section>

      <section className="my-5">
        <h1 className="font-bold text-green-700 text-xl my-1">Our Team</h1>
        <p>
          Our team of trained and certified professionals is dedicated to
          providing top-notch services. We continually invest in the latest
          training and tools to ensure the best results for our clients.
        </p>
      </section>

      <section className="my-5 space-y-1">
        <h1 className="font-bold text-green-700 text-xl my-1">Our Promise</h1>
        <p>With Mole Busters, you can expect:</p>
        <h2 class="text-green-700 text-lg font-semibold">Reliablity</h2>
        <p>We stick to our schedules and deliver on our promises.</p>

        <h2 class="text-green-700 text-lg font-semibold">Ethical Practices</h2>
        <p>We adhere to stringent ethcial standards in all our operations.</p>

        <h2 class="text-green-700 text-lg font-semibold">Customer Satisfaction</h2>
        <p>
          Your satisfaction is our ultimate goal. We won't stop until your
          property
        </p>
      </section>

      <p className="font-medium">
        Learn more about our services or get in touch with us today. Let's work
        together to exterminate your gopher problem.
      </p>
      <CallToAction />
    </div>
  );
};

export default Page;
