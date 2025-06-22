"use client";
import React from "react";
import { Button } from "../ui/button";

const clientForm = {
  nomPrenom: "",
  email: "",
  message: "",
  uploadedFile: null as File | null,
};

const ContactForm = () => {
  const [formData, setFormData] = React.useState(clientForm);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData?.nomPrenom || !formData?.email || !formData?.message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    //submit to an API endpointi
    console.log("Form data submitted:", formData);

    //REset form data after submission
    setFormData(clientForm);

    // Reset file input field
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <form
      className="flex flex-col gap-3 mt-8 max-w-[340px] pt-2"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="nomPrenom" className="font-semibold">
          Nom et Prénom
        </label>
        <input
          placeholder="Nom et Prénom"
          type="text"
          name="nomPrenom"
          id="nomPrenom"
          className="border border-[#1D1D1B1C] border-opacity-25  rounded-sm px-2 py-2 text-sm"
          value={formData.nomPrenom}
          onChange={(e) =>
            setFormData({ ...formData, nomPrenom: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          placeholder="Email"
          type="text"
          name="email"
          id="email"
          className="border border-[#1D1D1B1C] border-opacity-25  rounded-sm px-2 py-2 text-sm"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-semibold">
          Votre message
        </label>
        <textarea
          placeholder="Message..."
          name="message"
          id="message"
          className="border border-[#1D1D1B1C] border-opacity-25  rounded-sm px-2 py-2 text-sm "
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>{" "}
      <div className="flex justify-start items-center w-full">
        <input
          ref={fileInputRef}
          type="file"
          name="uploadedFile"
          id="uploadedFile"
          className="bg-[#BBBFC1] bg-opacity-10 text-[#050708] py-2 pl-3 file:border-0 file:bg-[#BBBFC1] file:bg-opacity-5 file:text-primary  file:font-semibold rounded-sm text-sm cursor-pointer"
          onChange={(e) =>
            setFormData({
              ...formData,
              uploadedFile: e.target.files?.[0] || null,
            })
          }
        />
      </div>
      <div className="text-white">
        <Button>Envoyer</Button>
      </div>
    </form>
  );
};

export default ContactForm;
