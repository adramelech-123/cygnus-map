import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import DatabaseView from "./views/DatabaseView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/database" element={<DatabaseView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
