import "./Schedule.css";

import ProfileImg from "../../assets/profile.png";
import PlusImg from "../../assets/plus.svg";
import RightLeftImg from "../../assets/left_right.svg";
import TeethImg from "../../assets/teeth.png";
import MusseleArmImg from "../../assets/muscle_arm.svg";
import InjectionImg from "../../assets/injection.svg";
import EyeImg from "../../assets/eye.png";
import HeartImg from "../../assets/heart.png";
import DocterImg from "../../assets/docter.png";

import Calendar from "./Calendar.jsx";
import ScheduleCard from "./ScheduleCard.jsx";


function Schedule(){
    return (
        <div className="schedule">
            <div className="profileButtonAndPlus">
                <div className="profileButton">
                    <img src={ProfileImg} height="25" width="25" />
                </div>
                <div className="plusButton">
                    <img src={PlusImg} height="25" width="30" />
                </div>
            </div>

            <div className="dateAndArrow">
                <p className="dateInSchedule">May 2025</p>
                <img src={RightLeftImg} height="40" width="40" />
            </div>

            <Calendar />

            <div className="cardsList1">
                <ScheduleCard name="Dentist" imgUrl={TeethImg} timeRange="09:00-11:00" docterName="Dr. Cameron Williamsom" time="" isSelected="Dentist" width="120px" />
                <ScheduleCard name="Physiotherapy Appointment" imgUrl={MusseleArmImg} timeRange="11:00-12:00" docterName="Dr. Kevin Djones" time="" isSelected="" width="250px" />
            </div>

            <p className="upcomingSchedule">The Upcoming Schedule</p>

            <div className="onTuesdayInjectionEye">
                <p className="onThursday">On Thursday</p>
                <div className="InjectionEye">
                    <ScheduleCard name="Health checkup complete" imgUrl={InjectionImg} timeRange="" docterName="" time="11:00 AM" isSelected="" width="220px" />
                    <ScheduleCard name="Ophthalmologist" imgUrl={EyeImg} timeRange="" docterName="" time="14:00 PM" isSelected="" width="180px" />
                </div>
            </div>
            <div>
                <p className="onSaturday">On Saturday</p>
                <div className="heartDocter">
                    <ScheduleCard name="Cardiologist" imgUrl={HeartImg} timeRange="" docterName="" time="12:00 AM" isSelected="" width="150px" />
                    <ScheduleCard name="Neurologist" imgUrl={DocterImg} timeRange="" docterName="" time="16:00 PM" isSelected="" width="150px" />
                </div>
            </div>
        </div>
    )
}
 
export default Schedule;