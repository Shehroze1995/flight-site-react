import { useEffect } from "react";
import supportSvg from "../../assets/support.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const support = [
  "travel requirements for dubai",
  "chauffeur service at your arrival",
  "multi-risk travel insurance",
];

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-center my-12">
      <p className="uppercase tracking-[.7rem]">travel support</p>
      <h2 className="text-3xl font-extrabold">
        Plan your travel with confidence
      </h2>
      <p className="text-gray-500">
        Find help with booking and travel plans. See what to expect along the
        journey.
      </p>
      <section className="grid grid-cols-2 gap-y-4 place-items-start text-left my-12 w-11/12 max-w-7xl m-auto max-[800px]:grid-cols-1">
        <div className="grid gap-6">
          {support.map((item, index) => (
            <div data-aos="fade-down" data-aos-duration="2500" key={item}>
              <p className="bg-blue-700 w-8 py-1 flex place-items-center place-content-center rounded-full leading-none text-white">
                0{index + 1}
              </p>
              <p className="capitalize text-2xl font-extrabold">{item}</p>
              <p className="text-gray-500">
                Find help with booking and travel plans. See what to expect
                along the journey.
              </p>
            </div>
          ))}
        </div>
        <div className="h-[22rem] w-full flex items-center justify-center">
          <img
            data-aos="fade-up"
            data-aos-duration="3500"
            className="h-full"
            src={supportSvg}
            alt="supportSvg"
          />
        </div>
      </section>
    </div>
  );
};

export default Support;
