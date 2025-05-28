import "./MuscularSystemLabel.css";

import ScannerImg from "../../assets/scann.svg"; 

function Lable({imgURL, name, backColor, textColor, top, left, scannerPosition}){
    return (
        <div className="completeLable" style={{color:textColor, top:top, left:left}}>
            {scannerPosition==="left" && 
                <div className="lableWithScanner" >
                    <img src={ScannerImg} height="30" width="30" />
                    <div className="lable" style={{backgroundColor: backColor}} >
                        <img src={imgURL} height="15" width="15" />
                        <p className="lablePara" >{name}</p>
                    </div>
                </div>
            }

            {scannerPosition==="right" && 
                <div className="lableWithScanner" >
                    <div className="lable" style={{backgroundColor: backColor}} >
                        <img src={imgURL} height="15" width="15" />
                        <p className="lablePara" >{name}</p>
                    </div>
                    <img src={ScannerImg} height="30" width="30" />
                </div>
            }
        </div>
    )
}

export default Lable;  