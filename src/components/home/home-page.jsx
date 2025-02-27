import Image from "next/image";
import Script from "next/script";

import logo from "../../../public/mole-logo.jpg";
import gopher from "../../../public/gopher.jpg";
import mole from "../../../public/mole.jpg";
import vole from "../../../public/vole.jpg";

import List_of_cities from "../Cities/List-of-Cities-Component";

const HomePage = ({ data }) => {
  return (
    <div className="">
      <Script
        src="https://molebusters.infusionsoft.app/app/webTracking/getTrackingCode"
        strategy="afterInteractive"
      />
      <div className="flex justify-evenly items-evenly p-1 md:h-[500px] sm:h-[600]">
        <div className="w-1/3 ">
          <div className="h-1/5">
            <h2 className="text-3xl text-green-700 font-bold font-sans-serif text-center">
              At Mole Busters, We Are the Experts for:
            </h2>
          </div>

          <div className="h-4/5 flex flex-col justify-evenly">
            <div className="flex items-center m-1 justify-evenly">
              <Image
                src={mole}
                alt="Mole Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <div className="pl-3">
                <p className="font-bold font-sans-serif text-2xl">Moles</p>
              </div>
            </div>
            <div className="flex items-center m-1 justify-evenly">
              <Image
                src={vole}
                alt="Vole Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <div className="pl-3">
                <p className="font-bold font-sans-serif text-2xl">Voles</p>
              </div>
            </div>
            <div className="flex items-center m-1 justify-evenly">
              <Image
                src={gopher}
                alt="Gopher Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <div className="">
                <p className="font-bold font-sans-serif text-2xl">Gophers</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" justify-items-center bg-green-700 rounded-lg p-1 md:w-1/3 flex flex-col flex-grow-2 bg-green-700">
          <div className="h-[40px]">
            <h2 className="text-3xl text-white font-bold font-sans-serif text-center">
              Schedule a Free Inspection Today!
            </h2>
          </div>

          <div className="h-4/5  p-4">
            <form className="space-y-2 flex flex-col justify-between h-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <span className="block text-md font-bold text-center text-white">
                  I'm having issues with:
                </span>
                <div className="mt-2 space-y-1">
                  <div>
                    <input
                      type="radio"
                      id="option1"
                      name="options"
                      value="Moles"
                      className="mr-2"
                    />
                    <label htmlFor="option1" className="text-white">
                      Moles
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="option2"
                      name="options"
                      value="Voles"
                      className="mr-2"
                    />
                    <label htmlFor="option2" className="text-white">
                      Voles
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="option3"
                      name="options"
                      value="Gophers"
                      className="mr-2"
                    />
                    <label htmlFor="option3" className="text-white">
                      Gophers
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="option4"
                      name="options"
                      value="Unknown"
                      className="mr-2"
                    />
                    <label htmlFor="option4" className="text-white">
                      I'm Not Sure Yet
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type=""
                  onClick={console.log("submit")}
                  className="w-full py-2 px-4 border border-transparent mb-0 rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="justify-center justify-items-center p-1 w-1/3">
          <div className="h[60px]">
            <h2 className="text-3xl text-green-700 font-bold font-sans-serif text-center">
              Housecall Pro Reviews
            </h2>
          </div>

          <div className="h-full">
            <iframe
              src="https://client.housecallpro.com/reviews/Mole-Busters-SERVICE-TICKET-ONLY/52e8b8de-3869-4d9a-a1f3-a187affddeb7/"
              width="100%"
              height="450"
            />
          </div>

          {/* <div className="h-4/5 flex flex-col justify-between">
            <div className="h-[150px] bg-gray-100 border-2 rounded-lg text-center">
              <p className="font-bold">rachelle cuny</p>
              <p className="font-bold text-yellow-400">★★★★★</p>
              <p className="font-medium">January 17, 2025</p>
              <div>
                Mole Busters were very professional. They called me back right
                away. They came out and gave me an estimate. They were neat and
                had shirts with their business name on them. "
              </div>
            </div>
            <div className="h-[150px] bg-gray-100 border-2 rounded-lg text-center">
              <p className="font-bold">Susan c</p>
              <p className="font-bold text-yellow-400">★★★★★</p>
              <p className="font-medium">December 10, 2024</p>
              <div>"Service is always prompt and available when needed"</div>
            </div>
            <div className="h-[150px] bg-gray-100 border-2 rounded-lg text-center">
              <p className="font-bold">garrett foshay</p>
              <p className="font-bold text-yellow-400">★★★★★</p>
              <p className="font-medium">October 28, 2024</p>
              <div>
                "I've worked with John at Mole Busters for years. He and his
                team provide great service and results. They are always my first
                call."
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="">
        <h2 className="text-4xl text-green-700 font-bold text-center font-sans-serif m-3">
          The Bay Area's Trusted Source for Mole, Vole, and Gopher control.
        </h2>
        <div className="mx-10 gap-8">
          <p className="text-lg font-medium">
            At Mole Busters, we specialize in providing top-notch gopher control
            services to homes and businesses throughout the Bay Area. Our team
            of experienced professionals uses humane and effective methods to
            ensure your property is gopher-free.
          </p>

          <div className="my-5 space-y-1">
            <p className="font-bold text-green-700 text-xl my-1">
              Key benefits
            </p>
            <p className="font-bold text-l text-green-700">Humane Solutions</p>
            <p>
              We prioritize the safety and well-being of both your property and
              the gophers.
            </p>

            <p className="font-bold text-l text-green-700">Ethical Practices</p>
            <p>
              We adhere to stringent ethcial standards in all our operations.
            </p>

            <p className="font-bold text-l text-green-700">
              Eco-friendly Methods
            </p>
            <p>
              Our non-toxic and eco-friendly solutions are safe for your family
              and pets.
            </p>

            <p className="font-bold text-l text-green-700">Fast Response</p>
            <p>
              With our rapid response time, we act quickly to address gopher
              issues before they escalate.
            </p>

            <p className="font-bold text-l text-green-700">
              Comprehensive Services
            </p>
            <p>
              From inspection to removal and prevention, we handle every aspect
              of gopher control.
            </p>
          </div>
        </div>
      </div>

      <List_of_cities />
    </div>
  );
};

export default HomePage;
