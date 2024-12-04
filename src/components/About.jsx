import React from "react";
const aboutDatas = [
  {
    id: 0,
    title: "What is Hackamandufest?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim recusandae non eum nesciunt. Facere consectetur a debitis omnis reprehenderit eveniet provident. Esse, nobis?",
    img: "https://www.kuhackfest.com/Frame.png",
  },
  {
    id: 1,
    title: "Our Vision",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim recusandae non eum nesciunt. Facere consectetur a debitis omnis reprehenderit eveniet provident. Esse, nobis?",
    img: "https://www.kuhackfest.com/Frame.png",
  },
  {
    id: 2,
    title: "Why Participate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim recusandae non eum nesciunt. Facere consectetur a debitis omnis reprehenderit eveniet provident. Esse, nobis?",
    img: "https://www.kuhackfest.com/Frame.png",
  },
];
const About = () => {
  return (
    <section className="mt-40 md:mt-60">
      <div className="title py-4 text-center text-3xl font-extrabold">
        About Us
      </div>
      <div className="about-us m-auto lg:max-w-[80%]">
        {aboutDatas.map((item) => (
          <div
            key={item.id}
            className="about-content mx-6 flex items-center justify-between"
          >
            <div className="about-content-left mt-20">
              <div className="about-content-title p-2 text-2xl font-semibold">
                {item.title}
              </div>
              <div className="about-content-description max-w-full p-2 lg:max-w-[70%]">
                {item.desc}
              </div>
            </div>
            <div className="about-content-right">
              <img src={item.img} alt="" className="hidden w-3/4 lg:block" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
