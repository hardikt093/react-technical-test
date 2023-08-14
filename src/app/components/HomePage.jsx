import Card from "./Card";
import "../styles/css/homePage.css";
import jsonData from "../constants/data.json";
import Image from "next/image";
import AllImages from "../constants/Images";


const HomePage = () => {
    return (
        <div className="container">
            <Image src={AllImages?.Right_Gradient} className="right-gradient" alt="right-gradient" />
            <Image src={AllImages?.Left_Gradient} className="mobile-left-gradient" alt="left-gradient" />
            <div className="homepage-container">
                {jsonData.map(((item, index) => <Card key={index} data={item} />))}
            </div>
            <Image src={AllImages?.Right_Gradient} className="mobile-right-gradient" alt="right-gradient" />
            <Image src={AllImages?.Left_Gradient} className="left-gradient" alt="left-gradient" />
        </div>
    )
};

export default HomePage;