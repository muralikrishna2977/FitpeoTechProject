import "./DashBoardCard.css";

function DashBoardCard({imageUrl, date, nameOfThePart, barColor}){
    return (
        <div className="dashBoardCard">
            <div className="dashBoardOrgan">
                <img src={imageUrl} height="30" width="30" />
                <p className="dashBoardCardName">{nameOfThePart}</p> 
            </div>
            <p className="dashBoardDate">{date}</p>
            <div className="bigBar">
                <div className="loadingBar" style={{backgroundColor: barColor}}></div>
            </div>
        </div>
    )
}

export default DashBoardCard; 