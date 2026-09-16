import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const WhyChooseEcoCompass = () => {
  const benefits = [
    {
      icon: "🌿",
      title: "Eco-Friendly Adventures",
      description:
        "Explore beautiful destinations while making responsible choices that help protect nature.",
    },
    {
      icon: "🧭",
      title: "Expert Guidance",
      description:
        "Discover carefully selected adventures and get guidance to make your outdoor experience safer and easier.",
    },
    {
      icon: "🌎",
      title: "Connect With Nature",
      description:
        "Escape the ordinary and experience forests, mountains, rivers, and wildlife up close.",
    },
    {
      icon: "🤝",
      title: "Local Communities",
      description:
        "Support local communities and experience authentic adventures while traveling responsibly.",
    },
  ];

  

  return (
    <section className="py-10 md:py-12 bg-green-50 px-5 md:px-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-wider mb-2">
            Why Eco Compass?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-compass-forest mb-4">
            Adventure With a Purpose
          </h2>

          <p className="text-compass-forestpas">
            Eco Compass helps you discover unforgettable outdoor experiences
            while encouraging responsible and sustainable travel.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-compass-sand rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300 border border-compass-mist"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center text-3xl">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-semibold text-compass-forest mb-3">
                {benefit.title}
              </h3>

              <p className="text-compass-forest leading-relaxed ">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEcoCompass;