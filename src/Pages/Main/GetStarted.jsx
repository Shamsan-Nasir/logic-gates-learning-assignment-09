import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Authentication/AuthProvider";

const GetStartedAdventure = () => {

    let {user} = useContext(AuthContext);
    let navigate = useNavigate()
  function handleGetStarted(){
    if (!user){
        navigate('/login')
    } else{
        navigate('/explore')
    }

  }  

  return (
    <section className="py-5 md:py-10 px-2 md:px-8 bg-compass-sand">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-compass-forest px-6 py-16 md:px-16 text-center">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-green-700 opacity-50"></div>

          <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-green-700 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-green-200 font-semibold uppercase tracking-wider mb-3">
              Your Next Adventure Awaits
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-compass-sand mb-5">
              Ready to Explore the Wild?
            </h2>

            <p className="text-green-100 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Discover breathtaking destinations, connect with nature, and
              create unforgettable memories while traveling responsibly.
            </p>

            <button onClick={handleGetStarted}
              className="bg-compass-sand text-compass-forest font-semibold px-7 py-3 rounded-full hover:bg-green-100 transition duration-300 shadow-md cursor-pointer"
            >
              Start Your Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedAdventure;