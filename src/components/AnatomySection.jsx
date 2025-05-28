import "../styles/AnatomySection.css";
import bodyImg from "../assets/human-body.png";
import { FaHeart } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";

function AnatomySection() {
    return (
        <div className="anatomy-container">
            <div className="anatomy-image">
                <img src={bodyImg} alt="Human Anatomy" className="anatomy-img" />
                <span className="label heart">
                    <FaHeart className="label-icon" /> Healthy Heart
                </span>
                <span className="label leg">
                    <GiLeg className="label-icon" /> Healthy Leg
                </span>
            </div>
        </div>
    );
}

export default AnatomySection;