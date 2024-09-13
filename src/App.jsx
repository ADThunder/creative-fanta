import {
  Banner,
  BannerText,
  Blogs,
  FAQ,
  Footer,
  Hero,
  Products,
} from "./components/index";
import { UpdateFollower } from "react-mouse-follower";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
        <Products />
        <Banner />
        <BannerText />
        <Blogs />
        <FAQ />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
