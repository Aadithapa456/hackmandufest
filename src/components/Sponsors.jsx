import React from "react";
const sponsorsList = [
  {
    id: 1,
    name: "Bisup",
    img: "https://media.discordapp.net/attachments/1289504656556556308/1313916309209354291/logo.png?ex=6751df6b&is=67508deb&hm=3d65e8cea04e66c5cd24a9d2c02c5096f234bbddc402b64534b0bd922490c3bb&=&format=webp&quality=lossless",
  },
];
const Sponsors = () => {
  return (
    <section className="sponsors-wrapper mt-40">
      <div className="sponsors-wrapper-title text-center text-3xl font-extrabold">
        Our Sponsors
      </div>
      <div className="sponsors-container lg:grid-cols-auto md:grid-cols-auto mt-4 grid grid-cols-1 gap-10 p-4 md:gap-20 lg:gap-32">
        {sponsorsList.map((item) => (
          <div className="sponsors-list flex flex-col items-center">
            <img src={item.img} alt="" className="w-36 py-10" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
