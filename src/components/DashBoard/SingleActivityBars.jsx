import "./SingleActivityBars.css"; 

function ActivityBars({type, color1, color2}){
    const types={
        type1:  <div className="ActivityBar1" style={{backgroundColor: color1}}> </div>,

        type2:  <div className="ActivityBar2">
                    <div className="ActivityBar2part2" style={{backgroundColor: color1}}></div>
                </div>,

        type3:  <div className="ActivityBar3">
                    <div className="ActivityBar3Bar1" style={{backgroundColor: color1}}></div>
                    <div className="ActivityBar3Bar2" style={{backgroundColor: color2}}></div> 
                </div>,

        type4:  <div className="ActivityBar4">
                    <div className="ActivityBar4Bar1" style={{backgroundColor: color1}}></div>
                </div>,

        type5:  <div className="ActivityBar5">
                    <div className="ActivityBar5Bar1" style={{backgroundColor: color1}}></div>
                    <div className="ActivityBar5Bar2" style={{backgroundColor: color2}}></div>
                </div>,
        
    }
    return (
       types["type"+type]
    )
}

export default ActivityBars;


