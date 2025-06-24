/* eslint-disable @next/next/no-img-element */
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-9">
      {" "}
      {/* LinkedIn */}
      <a
        href="#"
        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3 p-1 hover:shadow-xl hover:shadow-blue-500/25 hover:drop-shadow-lg"
        aria-label="Suivez MATEGO sur LinkedIn"
      >
        <img
          src="/images/linkedin-logo.png"
          alt="LinkedIn MATEGO"
          className="transition-all duration-300 group-hover:brightness-110 group-hover:contrast-125 group-hover:drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] rounded-lg group-hover:shadow-inner"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
      </a>
      {/* Vim (placeholder link) */}
      <a
        href="#"
        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3 p-1 hover:shadow-xl hover:shadow-green-500/25 hover:drop-shadow-lg"
        aria-label="Lien Vim MATEGO"
      >
        <img
          src="/images/vim-logo.png"
          alt="Vim MATEGO"
          className="transition-all duration-300 group-hover:brightness-110 group-hover:contrast-125 group-hover:drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/30 to-green-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] rounded-lg group-hover:shadow-inner"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/mategodrinks/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3 p-1 hover:shadow-xl hover:shadow-pink-500/25 hover:drop-shadow-lg"
        aria-label="Suivez MATEGO sur Instagram @mategodrinks"
      >
        <img
          src="/images/instagram-logo.png"
          alt="Instagram MATEGO @mategodrinks"
          className="transition-all duration-300 group-hover:brightness-110 group-hover:contrast-125 group-hover:drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-400/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] rounded-lg group-hover:shadow-inner"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
      </a>
    </div>
  );
};

export default Socials;
