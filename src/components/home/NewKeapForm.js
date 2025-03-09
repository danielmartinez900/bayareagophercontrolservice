import React from "react";

function NewKeapForm() {
  return (
    <div className="flex flex-col m-1 h-full overflow-scroll justify-around">
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
          <div  className="flex justify-between my-1">
            <label
              htmlFor="inf_field_FirstName"
              className="font-bold text-md lg:text-lg text-white"
            >
              First Name*
            </label>
            <input
              id="inf_field_FirstName"
              name="inf_field_FirstName"
              placeholder="First Name"
              type="text"
              className="rounded-sm p-1 lg:p2"
            />
          </div>

          <div className="flex justify-between my-1">
            <label
              htmlFor="inf_field_LastName"
              className="font-bold text-md lg:text-lg  text-white"
            >
              Last Name*
            </label>
            <input
              id="inf_field_LastName"
              name="inf_field_LastName"
              placeholder="Last Name"
              type="text"
              className="rounded-sm p-1 lg:p2"
            />
          </div>
          <div className="flex justify-between my-1">
            <label
              htmlFor="inf_field_Email"
              className="font-bold text-md lg:text-lg  text-white"
            >
              Email*
            </label>
            <input
              id="inf_field_Email"
              name="inf_field_Email"
              placeholder="Email"
              type="text"
              className="rounded-sm p-1 lg:p2"
            />
          </div>
          <div className="flex justify-between my-1">
            <label
              htmlFor="inf_field_Phone1"
              className="font-bold text-md lg:text-lg  text-white"
            >
              Phone*
            </label>
            <input
              id="inf_field_Phone1"
              name="inf_field_Phone1"
              placeholder="Phone"
              type="text"
              className="rounded-sm p-1 lg:p2"
            />
          </div>
          <div className="flex justify-between my-1">
            <label
              htmlFor="inf_custom_Address"
              className="font-bold text-md lg:text-lg text-white"
            >
              Address*
            </label>
            <input
              id="inf_custom_Address"
              name="inf_custom_Address"
              placeholder="Address"
              type="text"
              className="rounded-sm p-1 lg:p2"
            />
          </div>
          <div className="flex justify-between my-1">
            <label
              htmlFor="inf_custom_City1"
              className="font-bold lg:text-lg  text-white"
            >
              City*
            </label>
            <input
              id="inf_custom_City1"
              name="inf_custom_City1"
              placeholder="City"
              type="text"
              className="rounded-sm p-1 lg:p2"
            />
          </div>
        </div>

        <div className="">
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
              <div className="infusion-radio flex flex-col">
                <span >
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
                <span >
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
                <span >
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
            className="infusion-recaptcha font-bold space-x-1 text-lg text-white w-full bg-red-600 rounded-md"
            id="recaptcha_047203016e92829fa4f4088317b821ff"
            type="submit"
          >
            Submit
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
  );
}

export default NewKeapForm;
