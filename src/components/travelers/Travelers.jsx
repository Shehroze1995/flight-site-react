import { useState } from "react";
import london from "../../assets/london.jpg";
import europe from "../../assets/europe.jpg";
import dubai from "../../assets/dubai.jpg";
import france from "../../assets/france.jpg";
import male1 from "../../assets/male1.jpg";
import male2 from "../../assets/male2.jpg";
import female1 from "../../assets/female1.jpg";
import female2 from "../../assets/female2.jpg";

const travelers = [
  {
    id: 1,
    cityImg: london,
    personImg: male1,
    personName: "Mark",
    personID: "@mark.com",
  },
  {
    id: 2,
    cityImg: europe,
    personImg: male2,
    personName: "John",
    personID: "@john.com",
  },
  {
    id: 3,
    cityImg: dubai,
    personImg: female1,
    personName: "Clarke",
    personID: "@clarke.com",
  },
  {
    id: 4,
    cityImg: france,
    personImg: female2,
    personName: "Kaley",
    personID: "@kaley.com",
  },
];

const Travelers = () => {
  const [currentPerson, setCurrentPerson] = useState(0);

  const showPersonData = (id) => {
    setCurrentPerson(id);
  };

  const hideData = () => {
    setCurrentPerson(0);
  };

  return (
    <div className="py-20">
      <h2 className="text-center text-3xl font-extrabold">
        Top Travelers of this Month!
      </h2>
      <section className="grid gridCols place-items-center gap-y-8 mt-12">
        {travelers.map((traveler) => {
          const { id, cityImg, personImg, personName, personID } = traveler;
          return (
            <div
              onMouseOver={() => showPersonData(id)}
              onMouseLeave={() => hideData()}
              className="h-80 w-60 rounded-[10rem] relative overflow-hidden"
              key={id}
            >
              <img
                className="h-full w-full object-cover rounded-[10rem]"
                src={cityImg}
              />
              <img
                className={`w-16 h-16 object-cover border-4 border-white rounded-full absolute left-[40%] translate-x-[-50%] bounceAnimate transition-all duration-500 ${
                  currentPerson == id ? "bottom-20" : "bottom-10"
                }`}
                src={personImg}
                alt={personName}
              />
              <div
                className={`bg-white text-center py-3 transition-all duration-500 ${
                  currentPerson == id ? "-translate-y-16" : "translate-y-0 invisible"
                }`}
              >
                <p>{personName}</p>
                <p className="text-gray-500">{personID}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Travelers;
