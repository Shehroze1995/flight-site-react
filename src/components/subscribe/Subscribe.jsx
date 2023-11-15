import { HiOutlineMail } from "react-icons/hi";

const Subscribe = () => {
  return (
    <div className="py-20 bg-gray-200">
      <h2 className="text-4xl font-extrabold text-center max-[377px]:text-2xl">
        Subscribe Newsletter <br />& Get Latest News
      </h2>
      <div className="w-11/12 max-w-2xl m-auto relative my-6">
        <HiOutlineMail className="text-3xl text-blue-500 absolute left-2 top-[50%] translate-y-[-50%] max-[377px]:text-xl" />
        <input
          className="border border-gray-400 py-3 pl-12 rounded-3xl w-full outline-none text-xl max-[377px]:pl-8 max-[377px]:text-sm"
          type="email"
          name=""
          id=""
          placeholder="email@email.com"
        />
        <button
          className="bg-blue-500 py-2 px-6 text-xl text-white rounded-3xl absolute right-1 top-[50%] translate-y-[-50%] max-[377px]:px-2 max-[377px]:text-base"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
