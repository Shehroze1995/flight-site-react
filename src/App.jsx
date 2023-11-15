import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Info from "./components/info/Info";
import Lounge from "./components/lounge/Lounge";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Subscribe from "./components/subscribe/Subscribe";
import Support from "./components/support/Support";
import Travelers from "./components/travelers/Travelers";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
