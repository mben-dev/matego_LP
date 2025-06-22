/* eslint-disable @next/next/no-img-element */
import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <p>contact@mategodrinks.com </p>
        <img src="/images/mail.png" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <p>MATEGO SAS, Alsace, France </p>
        <img src="/images/map-pin.png" alt="" />
      </div>
    </div>
  );
};

export default Contacts;
