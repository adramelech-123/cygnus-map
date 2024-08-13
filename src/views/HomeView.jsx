import {Navbar} from "../components/Navbar.jsx"
import { Footer } from "../components/Footer.jsx";
import MyMap from "../components/MyMap";
import "./Home.css"

const HomeView = () => {
  return (
    <div className="home">
        <Navbar/>
        <MyMap/>
        <Footer/>
    </div>
  );
};
export default HomeView;
