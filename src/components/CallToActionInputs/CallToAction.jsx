import Link from 'next/link'

function CallToAction({ title }) {
  return (
    <section className="my-3">
        <p className="text-black font-semibold text-xl">Visit our full page at <Link href='http://www.mymolebusters.com' className='text-blue-500 underline'>mymolebusters.com</Link>  or call us at
        866.960.6653 Ext. 0 for more information!</p>

      <div className="flex flex-col p-2  overflow-scroll justify-around bg-green-700 rounded-md">
        <form
          acceptCharset="UTF-8"
          action="https://molebusters.infusionsoft.com/app/form/process/047203016e92829fa4f4088317b821ff"
          className="h-full justify-between flex flex-col justify-evenly"
          id="inf_form_047203016e92829fa4f4088317b821ff"
          method="POST"
        >
          <input
            name="inf_form_xid"
            type="hidden"
            value="047203016e92829fa4f4088317b821ff"
          />
          <input name="inf_form_name" type="hidden" value="New Form opt-in" />
          <input
            name="infusionsoft_version"
            type="hidden"
            value="1.70.0.784947"
          />

          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col justify-between my-1">
              <label
                htmlFor="inf_field_FirstName"
                className="font-semibold text-md lg:text-lg text-white"
              >
                First Name*
              </label>
              <input
                id="inf_field_FirstName"
                name="inf_field_FirstName"
                placeholder="First Name"
                type="text"
                className="rounded-lg p-1 lg:p2 border-2 border-gray-300 bg-gray-100"
              />
              <label
                htmlFor="inf_field_LastName"
                className="font-semibold text-md lg:text-lg  text-white"
              >
                Last Name*
              </label>
              <input
                id="inf_field_LastName"
                name="inf_field_LastName"
                placeholder="Last Name"
                type="text"
                className="rounded-lg p-1 lg:p2 border-2 border-gray-300 bg-gray-100"
              />
            </div>

            <label
              htmlFor="inf_field_Email"
              className="font-semibold text-md lg:text-lg  text-white"
            >
              Email*
            </label>
            <input
              id="inf_field_Email"
              name="inf_field_Email"
              placeholder="Email"
              type="text"
              className="rounded-lg p-1 lg:p2 border-2 border-gray-300 bg-gray-100"
            />
            <label
              htmlFor="inf_field_Phone1"
              className="font-semibold text-md lg:text-lg  text-white"
            >
              Phone*
            </label>
            <input
              id="inf_field_Phone1"
              name="inf_field_Phone1"
              placeholder="Phone"
              type="text"
              className="rounded-lg p-1 lg:p2 border-2 border-gray-300 bg-gray-100"
            />
            <label
              htmlFor="inf_custom_Address"
              className="font-semibold text-md lg:text-lg text-white"
            >
              Address*
            </label>
            <input
              id="inf_custom_Address"
              name="inf_custom_Address"
              placeholder="Address"
              type="text"
              className="rounded-lg p-1 lg:p2 border-2 border-gray-300 bg-gray-100"
            />
            <label
              htmlFor="inf_custom_City1"
              className="font-semibold lg:text-lg text-white"
            >
              City*
            </label>
            <input
              id="inf_custom_City1"
              name="inf_custom_City1"
              placeholder="City"
              type="text"
              className="rounded-lg p-1 lg:p2 border-2 border-gray-300 bg-gray-100"
            />
          </div>

          <div className="my-2">
            <div className="justify-center">
              <div>
                <div className="text-center">
                  <label
                    htmlFor="inf_option_Radio"
                    className="text-lg text-bold text-white font-bold"
                  >
                    I'm having issues with:
                  </label>
                </div>
                <div className="flex flex-col">
                  <span>
                    <input
                      id="inf_option_Radio_1427"
                      name="inf_option_Radio"
                      type="radio"
                      value="1427"
                    />
                    <label
                      htmlFor="inf_option_Radio_1427"
                      className="text-white pl-1 md:pl-2 text-semibold"
                    >
                      Moles
                    </label>
                  </span>
                  <span>
                    <input
                      id="inf_option_Radio_1429"
                      name="inf_option_Radio"
                      type="radio"
                      value="1429"
                    />
                    <label
                      htmlFor="inf_option_Radio_1429"
                      className="text-white pl-1 md:pl-2 text-semibold"
                    >
                      Voles
                    </label>
                  </span>
                  <span>
                    <input
                      id="inf_option_Radio_1435"
                      name="inf_option_Radio"
                      type="radio"
                      value="1435"
                    />
                    <label
                      htmlFor="inf_option_Radio_1435"
                      className="text-white pl-1 md:pl-2 text-semibold"
                    >
                      Gophers
                    </label>
                  </span>
                  <span>
                    <input
                      id="inf_option_Radio_1437"
                      name="inf_option_Radio"
                      type="radio"
                      value="1437"
                    />
                    <label
                      htmlFor="inf_option_Radio_1437"
                      className="text-white pl-1 md:pl-2 text-semibold"
                    >
                      I'm not sure
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center flex justify-center">
            <button
              className="infusion-recaptcha font-smibold space-x-1 text-md md:text-lg text-white w-full bg-red-600 rounded-md"
              id="recaptcha_047203016e92829fa4f4088317b821ff"
              type="submit"
            >
              Schedule a Free Inspection!
            </button>
          </div>
        </form>

        <script
          type="text/javascript"
          src="https://molebusters.infusionsoft.app/app/webTracking/getTrackingCode"
        ></script>
        <script
          type="text/javascript"
          src="https://molebusters.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.784947"
        ></script>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit"
          async="async"
          defer="defer"
        ></script>
        <script
          type="text/javascript"
          src="https://molebusters.infusionsoft.com/app/timezone/timezoneInputJs?xid=047203016e92829fa4f4088317b821ff"
        ></script>
        <script
          type="text/javascript"
          src="https://molebusters.infusionsoft.com/js/jquery/jquery-3.3.1.js"
        ></script>
        <script
          type="text/javascript"
          src="https://molebusters.infusionsoft.app/app/webform/overwriteRefererJs"
        ></script>
      </div>
    </section>
  );
}

export default CallToAction;
