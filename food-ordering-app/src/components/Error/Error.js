import { Link } from "react-router-dom";
import "./Error.css";
import errorImage from "../../public/images/404-error.png"
const Error = () =>{
    return (
        <div className="error-container">
            <div className="error-content">
                <h1>404</h1>
                <h2>OOPS! Page Not Found</h2>
                <p>
                    The page you are trying for, doesn't exist!
                </p>
                <Link to="/" className="home-button">Go Back Home</Link>
            </div>
            <div className="error-image">
                <img src={errorImage} alt="404 error"/>
            </div>
        </div>
    );
};

export default Error;