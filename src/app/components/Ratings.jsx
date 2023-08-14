import Image from "next/image";
import AllImages from "../constants/Images";

const Ratings = ({ rating }) => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => {
                if ((index) < rating) {
                    return <Image key={index} className="mr-5" src={AllImages?.Full_Star} alt="Full_Star" />
                } else {
                    return <Image key={index} className="mr-5" src={AllImages?.Empty_Star} alt="Empty_Star" />
                }
            })}
        </>
    )
};

export default Ratings;