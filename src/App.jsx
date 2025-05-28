import "./App.css";
import SideBar from "./components/SideBar/SideBar.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";

function App() {

  return (
    <div className="appContainer">
      <div className="sidebarDashboard">
       <SideBar />
        <DashBoard />
      </div>
       
        <Schedule />
    </div>
  )
  
}

export default App;
