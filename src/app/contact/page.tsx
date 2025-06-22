import ContactForm from "@/components/contact/ContactForm";
import Contacts from "@/components/contact/Contacts";
import Map from "@/components/contact/Map";
import Socials from "@/components/contact/Socials";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="flex flex-col  absolute top-[10%] left-[5%] max-w-[500px]">
        <h1 className="text-5xl font-bold">CONTACTEZ-NOUS</h1>
        <p className="text-base mt-4 text-[#1D1D1B87] opacity-65 max-w-[450px]">
          N’hésitez pas à nous contacter si vous voulez du Matego. Nous mettrons
          tout en œuvre pour vous satisfaire. Particuliers, professionnels,
          associations…
        </p>
        <ContactForm />
      </div>
      <div className="fixed left-[5.9%] bottom-[5%] z-20">
        <Socials />
      </div>
      <div className="fixed right-[3%] bottom-[4%] z-20">
        <Contacts />
      </div>
      <Map />
    </div>
  );
};

export default ContactPage;
