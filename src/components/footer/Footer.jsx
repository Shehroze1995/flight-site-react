import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaHeart,
} from "react-icons/fa";

const footerInfo = [
  "Information",
  "Home",
  "Explore",
  "Flight Status",
  "Travel",
  "Check-in",
  "Manage your Booking",
];

const footerGuide = [
  "Quick Guide",
  "FAQ",
  "Features",
  "Baggage",
  "Route Map",
  "Communities",
  "Help",
];

const footerMore = [
  "More",
  "Chauffeur",
  "Our Partners",
  "Destination",
  "Careers",
  "Transportation",
  "Rules & Regulations",
];

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white pt-16">
      <section className="grid gridCols place-items-start place-content-center w-11/12 max-w-6xl m-auto gap-6">
        <div className="grid gap-3">
          <h3 className="text-3xl text-red-500 font-extrabold">Flights</h3>
          <p className="text-gray-400">
            Your mind should be stronger than your feelings. Fly!
          </p>
          <div className="flex gap-3">
            <FaFacebookF className="text-blue-500 border w-8 h-8 p-1 rounded-full" />
            <FaTwitter className="text-blue-300 border w-8 h-8 p-1 rounded-full" />
            <FaYoutube className="text-red-500 border w-8 h-8 p-1 rounded-full" />
            <FaPinterestP className="text-pink-500 border w-8 h-8 p-1 rounded-full" />
          </div>
        </div>
        <div>
          {footerInfo.map((info) => (
            <p
              key={info}
              className={`${
                info == "Information" &&
                "text-2xl font-extrabold text-blue-500 mb-3"
              } ${info !== "Information" && "cursor-pointer w-max"}`}
            >
              {info}
            </p>
          ))}
        </div>
        <div>
          {footerGuide.map((guide) => (
            <p
              key={guide}
              className={`${
                guide == "Quick Guide" &&
                "text-2xl font-extrabold text-blue-500 mb-3"
              } ${guide !== "Quick Guide" && "cursor-pointer w-max"}`}
            >
              {guide}
            </p>
          ))}
        </div>
        <div>
          {footerMore.map((more) => (
            <p
              key={more}
              className={`${
                more == "More" && "text-2xl font-extrabold text-blue-500 mb-3"
              } ${more !== "More" && "cursor-pointer w-max"}`}
            >
              {more}
            </p>
          ))}
        </div>
      </section>
      <div className="py-1 mt-16 bg-white text-black text-center">
        <p className="flex items-center gap-1 leading-none justify-center my-1">
          Developed with <FaHeart className="text-red-500" />
          By{" "}
          <a
            className="tracking-widest text-blue-500 font-extrabold"
            href="https://github.com/Shehroze1995"
            target="_blank"
            rel="noreferrer"
          >
            Shehroze
          </a>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Shehroze1995/flight-site-react"
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
