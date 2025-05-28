import "./DashBoard.css";

import SerchImg from "../../assets/search.png";
import BellImg from "../../assets/bell.svg";
import DownArrowImg from "../../assets/downArrow.svg";
import LungsImg from "../../assets/lungs.png";
import TeethImg from "../../assets/teeth.png";
import BoneImg from "../../assets/bone.png";
import RightArrow from "../../assets/rightArrow.svg";

import DashBoardCard from "./DashBoardCard.jsx";
import MuscularSystem from "./MuscularSystem.jsx";
import ActivityGraph from "./ActivityGraph.jsx";


function DashBoard(){
    const cards=[
    {
        imageUrl: LungsImg,
        date: "Date: 25 may 2025",
        nameOfThePart: "Lungs",
        barColor: "#b34847",
    },
    {
        imageUrl: TeethImg,
        date: "Date: 25 may 2025",
        nameOfThePart: "Teeth",
        barColor: "#74d3c2",
    },
    {
        imageUrl: BoneImg,
        date: "Date: 25 may 2025",
        nameOfThePart: "Bone",
        barColor: "#ff7a5a",
    }
    ];

    return (
        <div className="dashBoard">
            <div className="dashBoardSearchBar">
                <div className="dashBoardSearch">
                    <img src={SerchImg} height="40" width="40" />
                    <input className="dashBoardInput" name="search" type="text" placeholder="Search" />
                </div>
                <div className="dashBoardNotificationBell">
                    <img src={BellImg} height="20" width="20" />
                </div>
            </div>

            <div className="dashBoardHeader">
                <h1 className="dashBoardHeading">Dashboard</h1>
                <div className="dashBoardThisWeek">
                    <p className="ThisWeekPara">This Week</p>
                    <img src={DownArrowImg} height="8" width="8" />
                </div>
            </div>

            <div className="cardAndChart">
                <MuscularSystem />
                <div className="dashboardCardsDetails">
                    <div className="dashBoardCards">
                        {cards.map((card, index)=>(<DashBoardCard key={index} imageUrl={card.imageUrl} date={card.date} nameOfThePart={card.nameOfThePart} barColor={card.barColor} />))}
                    </div>
                   
                    <div className="dashboardDetails">
                        <p className="dashboardDetailsPara">Details</p>
                        <img src={RightArrow} height="10" width="10" />
                    </div>
                </div>
            </div>

            <ActivityGraph />
    
        </div>
    )
}

export default DashBoard;