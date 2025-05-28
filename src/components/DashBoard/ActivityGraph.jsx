import "./ActivityGraph.css";

import SingleActivityBars from "./SingleActivityBars";


function ActivityGraph() {

  const weeks=["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];

  const bars=[
    {type:"1", color1:"#dee4ed"},
    {type:"2", color1:"rgb(0, 237, 237)"},
    {type:"3", color1:"#dee4ed", color2:"#dee4ed"},
    {type:"4", color1:"#dee4ed"},

    {type:"5", color1:"rgb(0, 237, 237)", color2:"#5d67bd"},
    {type:"2", color1:"#5d67bd"},
    {type:"3", color1:"#dee4ed", color2:"#dee4ed"},
    {type:"4", color1:"rgb(0, 237, 237)"},

    {type:"1", color1:"#dee4ed"},
    {type:"2", color1:"#dee4ed"},
    {type:"3", color1:"rgb(0, 237, 237)", color2:"#5d67bd"},
    {type:"4", color1:"#5d67bd"},

    {type:"5", color1:"#dee4ed", color2:"#dee4ed"},
    {type:"2", color1:"rgb(0, 237, 237)"},
    {type:"3", color1:"rgb(0, 237, 237)", color2:"#5d67bd"},
    {type:"4", color1:"#dee4ed"},

    {type:"1", color1:"#dee4ed"},
    {type:"2", color1:"#5d67bd"},
    {type:"3", color1:"#dee4ed", color2:"#dee4ed"},
    {type:"4", color1:"#dee4ed"},

    {type:"5", color1:"rgb(0, 237, 237)", color2:"#5d67bd"},
    {type:"2", color1:"rgb(0, 237, 237)" },
    {type:"3", color1:"rgb(0, 237, 237)", color2:"#5d67bd" },
    {type:"4", color1:"#dee4ed"},

    {type:"1", color1:"#dee4ed"},
    {type:"2", color1:"#5d67bd"},
    {type:"3", color1:"#dee4ed", color2:"#dee4ed"},
    {type:"4", color1:"#dee4ed"},

    {type:"5", color1:"#dee4ed", color2:"#dee4ed" },
    {type:"2", color1:"rgb(0, 237, 237)"},
    {type:"3", color1:"#dee4ed", color2:"#dee4ed"},
    {type:"4", color1:"#5d67bd"},
  ]

  return (
    <div className="activityContainer">
      <div className="activityHeader">
        <span className="title">Activity</span>
        <span className="subtitle">3 appointment on this week</span>
      </div>
      <div className="activityBarsContainer">
        {bars.map((bar, index)=>(<SingleActivityBars key={index} type={bar.type} color1={bar.color1} color2={bar.color2} />))}
      </div>

      <div className="ActivityWeeks">
        {weeks.map((week, index)=>(<p key={index} className="ActivityWeek">{week}</p>))}
      </div>

    </div>
  );
}

export default ActivityGraph;
