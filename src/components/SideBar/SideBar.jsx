import "./SideBar.css";

import DashboardImg from "../../assets/dashboard.png";
import HistoryImg from "../../assets/history.svg";
import CalendarImg from "../../assets/calendar.svg"; 
import AppointmentsImg from "../../assets/appointments.png";
import StatisticsImg from "../../assets/statistics.svg";
import ChatImg from "../../assets/chat.png";
import SupportImg from "../../assets/support.jpg";
import SettingsImg from "../../assets/settings.png";

import SideBarOption from "./SideBarOption";

const generalOptionsArray=[
    {imgurl: DashboardImg, option: "Dashboard"},
    {imgurl: HistoryImg, option: "History"},
    {imgurl: CalendarImg, option: "Calendar"},
    {imgurl: AppointmentsImg, option: "Appointments"},
    {imgurl: StatisticsImg, option: "Statistics"}
]

const toolsOptionsArray=[
    {imgurl: ChatImg, option: "Chat"},
    {imgurl: SupportImg, option: "Support"}
]

function SideBar(){
    return ( 
        <div className="sideBar">
            <div className="sideBarNoSettings"> 
                <div className="sideBarHeading">
                    <h2 className="HeadingPart1">Health</h2>
                    <h2 className="HeadingPart2">care.</h2>
                </div>

                <p className="general">General</p>
                {generalOptionsArray.map((optionObject, index)=>(<SideBarOption key={index} imgurl={optionObject.imgurl} option={optionObject.option} activeOption="Dashboard" />))}

                <p className="tools">Tools</p>
                {toolsOptionsArray.map((optionObject, index)=>(<SideBarOption key={index} imgurl={optionObject.imgurl} option={optionObject.option} activeOption="" />))}
            </div>

            <div className="sideBarSettings">
                <SideBarOption imgurl={SettingsImg} option={"Settings"} activeOption="" />
            </div>
        </div>
    )
}

export default SideBar;