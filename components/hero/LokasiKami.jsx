"use client";

import React from "react";

const LokasiKami = () => {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="max-w-10xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-start text-gray-800 mb-10">
          Lokasi Kami
        </h2>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.648632392294!2d110.44126721432394!3d-7.829266679660496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5798e1b3f5a9%3A0x7c53642b0378394a!2sTlogo%20Putri!5e0!3m2!1sen!2sid!4v1715600000000"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            title="Lokasi Tlogo Putri"
            className="w-full h-[500px] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LokasiKami;
