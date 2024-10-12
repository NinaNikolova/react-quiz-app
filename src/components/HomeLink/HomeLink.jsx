import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeLink() {
    return (
        <div className="home-link-container">
            <Link to="/" className="home-link">
                <FaHome />
                <span className="tooltip">Home</span>
            </Link>
        </div>
    )
}
