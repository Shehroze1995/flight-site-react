import { useEffect } from "react";
import loungeSvg from "../../assets/lounge.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const loungeTitles = [
  "help through the airport",
  "priority boarding",
  "care on the flight",
  "chauffeur-drive service",
];

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-24">
      <div className="w-11/12 max-w-6xl m-auto flex max-[900px]:flex-col">
        <section data-aos="fade-up" data-aos-duration="3500" className="flex-1 overflow-hidden">
          <h1 className="text-3xl font-extrabold">
            Unaccompanied Minor Lounge
          </h1>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8 max-[500px]:grid-cols-1">
            {loungeTitles.map((title) => (
              <div className="" key={title}>
                <h3 className="capitalize font-extrabold text-xl">{title}</h3>
                <p className="text-gray-500">
                  You can also call airlines from your phone and book a flight
                  ticket to book one of your favorite destinations
                </p>
              </div>
            ))}
          </div>
        </section>
        <section data-aos="fade-down" data-aos-duration="4000" className="flex-1 overflow-hidden">
          <img src={loungeSvg} alt="loungeSvg" />
        </section>
      </div>
    </div>
  );
};

export default Lounge;
