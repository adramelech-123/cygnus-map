import {Navbar} from "../components/Navbar.jsx"
import MyMap from "../components/MyMap";
import "./Home.css"

const HomeView = () => {
  return (
    <div className="home">
        <Navbar/>
        <MyMap/>
    </div>
  );
};
export default HomeView;
