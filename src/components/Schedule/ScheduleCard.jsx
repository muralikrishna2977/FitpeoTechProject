import "./ScheduleCard.css";

function ScheduleCard({name, imgUrl, timeRange, docterName, time, isSelected, width}){

    return (
        <div className={`scheduleCard ${isSelected===name ? "selectedColor": "defaultColor"}`} style={{width: width}}>
            <div className="scheduleCardHeading">
                <p className="scheduleCardName" >{name}</p>
                <img src={imgUrl} height="20" width="20" />
            </div>
            {timeRange&& <p className="scheduleTimeRange">{timeRange}</p>}
            {docterName && <p className="scheduleDocterName">{docterName}</p>}
            {time && <p className="scheduleTime">{time}</p>}
        </div>
    )
}
 
export default ScheduleCard; 