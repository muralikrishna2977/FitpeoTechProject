import "./MuscularSystem.css";

import MuscularSystemImg from "../../assets/muscularSystem.png";
import MagnifyImg from "../../assets/zoom.png";
import RotateImg from "../../assets/rotate.png";
import LegImg from "../../assets/leg.png";
import HeartImg from "../../assets/heart.png";

import Lable from "./MuscularSystemLabel.jsx";

function DashBoardChart(){
    return (
        <div className="dashBoardChartAndRotation">
            <div className="dashBoardChart">
                <img className="dashBoardMuscular" height="240px" width="" src={MuscularSystemImg} />
                <img className="dashBoardZoom" src={MagnifyImg} height="20" width="20" />
                <Lable imgURL={LegImg} name="Healthy Leg" backColor="#00e1f0" textColor="#1c51a9" top="160px" left="-50px" scannerPosition="right" />
                <Lable imgURL={HeartImg} name="Healthy Heart" backColor="#3835aa" textColor="#ffffff" top="50px" left="80px" scannerPosition="left" />
            </div>
            <div>
                <img src={RotateImg} height="15" width="170px" />
            </div>
            
        </div>
    )
}

export default DashBoardChart;  