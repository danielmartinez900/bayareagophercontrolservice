import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import logo from "../../../public/mole-logo.jpg";
import gopher from "../../../public/gopher.jpg";
import mole from "../../../public/mole.jpg";
import vole from "../../../public/vole.jpg";

import List_of_cities from "../Cities/List-of-Cities-Component";
import NewKeapForm from "./NewKeapForm";

const HomePage = ({ data }) => {
  return (
    <div className="mt-2">
      <Head>
        <title>Bay Area Gopher Control</title>
        <meta name="description" content="Bay Area Gopher Control" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="icon.ico" type="image/ico" sizes="16x16" />
      <Script
        src="https://molebusters.infusionsoft.app/app/webTracking/getTrackingCode"
        strategy="afterInteractive"
      />

      <section className="flex flex-col md:flex-row mx-2 md:mx-1">
        <div className="flex flex-col md:w-1/3">
          <h className="text-2xl md:text-3xl sm:text-lg sm:text-black-200 text-green-700 font-bold font-sans-serif text-center">
            At Mole Busters, We Are the Experts for:
          </h>

          <div className="flex md:flex-col justify-evenly h-full">
            <div className="flex flex-col md:flex-row items-center justify-around px-2">
              <Image
                src={mole}
                alt="Mole Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <h1 className="font-bold self-center font-sans-serif lg:text-2xl sm:text-lg">
                Moles
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around px-2">
              <Image
                src={vole}
                alt="Vole Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <h1 className="font-bold font-sans-serif lg:text-2xl sm:text-lg">
                Voles
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around px-2">
                <Image
                  src={gopher}
                  alt="Gopher Image"
                  width={175}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
                <h1 className="font-bold font-sans-serif lg:text-2xl sm:text-lg">
                  Gophers
                </h1>
            </div>
          </div>
        </div>

        <div className=" justify-items-center bg-green-700 rounded-lg p-1 md:w-1/3 flex flex-col flex-grow-2 bg-green-700">
          <h1 className="text-2xl md:text-3xl text-white font-bold font-sans-serif text-center">
            Schedule a Free Inspection Today!
          </h1>
          <NewKeapForm />
        </div>

        <div className="h-full justify-end px-1 md:w-1/3  md:mx-1 bg-gray-100 md:bg-white">
          <h1 className="text-2xl md:text-3xl text-green-700 font-bold font-sans-serif text-center">
            Housecall Pro Reviews
          </h1>

          <div className="w-full">
            <iframe
              src="https://client.housecallpro.com/reviews/Mole-Busters-SERVICE-TICKET-ONLY/52e8b8de-3869-4d9a-a1f3-a187affddeb7/"
              width="100%"
              height="444"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-4xl text-green-700 font-bold text-center font-sans-serif my-2 mx-1">
          The Bay Area's Trusted Source for Mole, Vole, and Gopher Control.
        </h2>
        <div className="mx-5 gap-8">
          <p className="text-md font-medium">
            At Mole Busters, we specialize in providing top-notch gopher control
            services to homes and businesses throughout the Bay Area. Our team
            of experienced professionals uses humane and effective methods to
            ensure your property is gopher-free.
          </p>

          <div className="my-5 space-y-1">
            <h1 className="font-bold text-green-700 text-xl md:text-2xl my-1">
              What sets us apart from other pest control services in the Bay Area?
            </h1>
            <h2 className="font-bold text-l text-green-700">Humane Solutions</h2>
            <p>
              We prioritize the safety and well-being of both your property and
              the gophers.
            </p>

            <h2 className="font-bold text-l text-green-700">Ethical Practices</h2>
            <p>
              We adhere to stringent ethcial standards in all our operations.
            </p>

            <h2 className="font-bold text-l text-green-700">
              Eco-friendly Methods
            </h2>
            <p>
              Our non-toxic and eco-friendly solutions are safe for your family
              and pets.
            </p>

            <h2 className="font-bold text-l text-green-700">Fast Response</h2>
            <p>
              With our rapid response time, we act quickly to address gopher
              issues before they escalate.
            </p>

            <h2 className="font-bold text-l text-green-700">
              Comprehensive Services
            </h2>
            <p>
              From inspection to removal and prevention, we handle every aspect
              of gopher control.
            </p>
          </div>
        </div>
      </section>

      <List_of_cities />
    </div>
  );
};

export default HomePage;
