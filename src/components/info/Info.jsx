import {
  IoShieldCheckmarkOutline,
  IoBookmarksOutline,
  IoCalendarClearOutline,
} from "react-icons/io5";

const info = [
  {
    icon: <IoCalendarClearOutline />,
    title: "book & relax",
    desc: "you can also call airlines from your phone and book a flight ticket!",
  },
  {
    icon: <IoShieldCheckmarkOutline />,
    title: "smart checklist",
    desc: "you can also call airlines from your phone and book a flight ticket!",
  },
  {
    icon: <IoBookmarksOutline />,
    title: "save more",
    desc: "you can also call airlines from your phone and book a flight ticket!",
  },
];

const Info = () => {
  return (
    <div className="bg-gray-200 py-12">
      <header className="flex place-items-center gap-y-4 w-11/12 max-w-5xl m-auto place-content-between max-[900px]:flex-col">
        <h3 className="text-3xl text-center font-extrabold">
          Travel to make memories all around the world
        </h3>
        <button
          className="bg-blue-400 text-xl py-2 px-6 rounded-3xl transition-all duration-300 hover:px-8"
          type="button"
        >
          View all
        </button>
      </header>
      <main className="w-11/12 max-w-5xl m-auto flex place-items-center place-content-center gap-4 mt-8 max-[900px]:flex-col">
        {info.map((item) => {
          const { icon, title, desc } = item;
          return (
            <div
              className="bg-white grid place-items-center place-content-center text-center gap-3 p-8 capitalize rounded-[10rem]"
              key={title}
            >
              <span className="bg-orange-500 p-2 rounded-full text-white text-xl">{icon}</span>
              <p className="text-2xl font-extrabold">{title}</p>
              <p className="text-gray-500">{desc}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Info;
