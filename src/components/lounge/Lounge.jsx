import loungeSvg from "../../assets/lounge.svg";

const loungeTitles = [
  "help through the airport",
  "priority boarding",
  "care on the flight",
  "chauffeur-drive service",
];

const Lounge = () => {
  return (
    <div className="py-12">
      <div className="w-11/12 max-w-6xl m-auto flex max-[900px]:flex-col">
        <section className="flex-1">
          <h1 className="text-3xl font-extrabold">Unaccompanied Minor Lounge</h1>
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
        <section className="flex-1">
          <img src={loungeSvg} alt="loungeSvg" />
        </section>
      </div>
    </div>
  );
};

export default Lounge;
