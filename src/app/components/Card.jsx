import Ratings from "./Ratings";
import Image from "next/image";
import AllImages from "../constants/Images";
import "../styles/css/card.css";


const Card = ({ data }) => {
    return (
        <div className="card-container">
            <Ratings rating={data?.rating} />
            <div className="mt-30 card-description">
                <span>{data?.description}</span>
            </div>
            <div className="card-footer">
                <Image src={AllImages[data?.profileImage]} height={43} width={43} alt={data?.id} />
                <div className="profile-container">
                    <span className="username">{data?.fullName}</span>
                    <span className="designation">{data?.designation}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;