import React from "react";

const KeapForm = () => {
  return (
    <div className="h-full mx-2 overflow-auto">
      <form
        acceptCharset="UTF-8"
        action="https://molebusters.infusionsoft.com/app/form/process/9088e83cf91b2b79de5177cf4d858f39"
        className="infusion-form text-white h-full justify-evenly flex flex-col items-between"
        id="inf_form_9088e83cf91b2b79de5177cf4d858f39"
        method="POST"
      >
        <input
          name="inf_form_xid"
          type="hidden"
          value="9088e83cf91b2b79de5177cf4d858f39"
        />
        <input name="inf_form_name" type="hidden" value="Copy of New Lead" />
        <input
          name="infusionsoft_version"
          type="hidden"
          value="1.70.0.781449"
        />
        {/* <div>
          <div>
            <div className="title text-center font-bold text-xl">Person Information</div>
          </div>
        </div> */}
        <div className="infusion-field flex justify-between">
          <label htmlFor="inf_field_FirstName" className="font-bold text-lg">
            First Name*
          </label>
          <input
            id="inf_field_FirstName"
            name="inf_field_FirstName"
            placeholder="First Name "
            type="text"
            className="text-black rounded-md border border-white shadow-sm w-4/5 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div className="infusion-field flex justify-between">
          <label htmlFor="inf_field_LastName" className="font-bold text-lg">
            Last Name*
          </label>
          <input
            id="inf_field_LastName"
            name="inf_field_LastName"
            placeholder="Last Name "
            type="text"
            className="text-black rounded-md border border-white shadow-sm w-4/5 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div className="infusion-field flex justify-between">
          <label htmlFor="inf_field_Email" className="font-bold text-lg">
            Email*
          </label>
          <input
            id="inf_field_Email"
            name="inf_field_Email"
            placeholder="Email "
            type="text"
            className="text-black rounded-md border border-white shadow-sm w-4/5 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div className='flex justify-center bg-indigo-500 h-8 items-center font-bold rounded-md shadow-md border border-black'>
          <div className="infusion-submit">
            <button
              className="infusion-recaptcha"
              id="recaptcha_9088e83cf91b2b79de5177cf4d858f39"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <script
        type="text/javascript"
        src="https://molebusters.infusionsoft.app/app/webTracking/getTrackingCode"
      ></script>
      <script
        type="text/javascript"
        src="https://molebusters.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.781449"
      ></script>
      <script
        src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit"
        async="async"
        defer="defer"
      ></script>
      <script
        type="text/javascript"
        src="https://molebusters.infusionsoft.com/app/timezone/timezoneInputJs?xid=9088e83cf91b2b79de5177cf4d858f39"
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
};

export default KeapForm;
