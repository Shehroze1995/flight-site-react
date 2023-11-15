import video from "../../assets/home-video.mp4";
import plane from "../../assets/plane.png";

const Home = () => {
  return (
    <main className="mt-40">
      <h1 className="text-5xl font-extrabold w-max m-auto text-center max-[500px]:text-3xl max-[320px]:text-2xl">
        Create Ever-Lasting <br /> Memories With Us
      </h1>
      <section>
        <div className="w-11/12 max-w-2xl m-auto relative my-12">
          <video className=" h-" autoPlay muted loop src={video}></video>
          <img className="absolute -top-10" src={plane} alt="plane png" />
        </div>
      </section>
    </main>
  );
};

export default Home;
