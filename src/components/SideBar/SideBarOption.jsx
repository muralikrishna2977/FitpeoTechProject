import "./SideBarOption.css";

function SideBarOption({imgurl, option, activeOption}){
    return (
        <div className="sideBarOption">
            <img height="15" width="15" src={imgurl}/>
            <p className={`SideBarOptionName${option===activeOption ? " SideBarOptionNameActive": ""}`}>{option}</p>
        </div>
    )
}

export default SideBarOption; 