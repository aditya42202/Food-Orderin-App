import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../slice/authSlice";
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () =>{
        dispatch(login());
        navigate("/cart");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;