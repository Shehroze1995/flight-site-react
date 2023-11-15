import { useState } from "react";
import {
  FaLocationDot,
  FaRegCircleUser,
  FaCalendarDays,
} from "react-icons/fa6";

const classes = ["economy", "business class", "first class"];
const searchLinks = [
  { name: "from", icon: <FaLocationDot /> },
  { name: "to", icon: <FaLocationDot /> },
  { name: "travelers", icon: <FaRegCircleUser /> },
  { name: "check in", icon: <FaCalendarDays /> },
  { name: "check out", icon: <FaCalendarDays /> },
];

const Search = () => {
  const [activeBtn, setActiveBtn] = useState(classes[0]);
  return (
    <main className="py-16 bg-gray-200">
      <header className="flex place-items-center place-content-center gap-2 text-2xl mb-8 max-[326px]:text-xs max-[360px]:text-sm max-[393px]:text-base max-[520px]:text-lg ">
        {classes.map((item) => (
          <button
            onClick={() => setActiveBtn(item)}
            className={`capitalize px-4 py-2 rounded-3xl transition-all duration-300 ${
              activeBtn == item && "bg-blue-400"
            } ${
              activeBtn !== item && "hover:bg-blue-300"
            } max-[326px]:px-2 max-[520px]:py-1 max-[520px]:px-3`}
            key={item}
          >
            {item}
          </button>
        ))}
      </header>
      <section className="grid gridCols gap-4 w-11/12 max-w-7xl m-auto text-xl">
        {searchLinks.map((link) => (
          <div key={link.name}>
            <div className="flex items-center mb-2">
              {link.icon && (
                <span className="opacity-50 mr-2">{link.icon}</span>
              )}
              <p className="capitalize font-extrabold">{link.name}</p>
            </div>
            <input
              placeholder={
                link.name == "from"
                  ? "Departure.."
                  : link.name == "to"
                  ? "Arrival.."
                  : link.name == "travelers"
                  ? "Add Names.."
                  : "Add Date.."
              }
              className="border border-gray-400 w-full py-1 pl-4 outline-none rounded-xl"
              type="text"
              name=""
              id=""
            />
            {link.name == "check in" || link.name == "check out" ? (
              <span className="text-base ml-1 opacity-70">
                Format DD/MM/YYYY
              </span>
            ) : null}
          </div>
        ))}
        <div className="flex place-items-center">
          <button
            className="bg-blue-400 py-2 px-6 rounded-3xl transition-all duration-300 hover:px-8"
            type="button"
          >
            Search Flights
          </button>
        </div>
      </section>
    </main>
  );
};

export default Search;
