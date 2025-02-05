import LoginFormComponent from "../folder/loginFormComponent";
import { LoginData } from "../types/globalTypes";
import { auth } from "./../hooks/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function LoginPage() {

    const navigate = useNavigate();

    const loginFormData = async (response: LoginData) => {
        console.log(response);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, response.email, response.password);
            console.log("User logged in:", userCredential.user);
            navigate('/hall')
        } catch (error) {
            console.error("Error logging in:", error);
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormComponent formSubmitted={loginFormData} />

            <div className="d-flex justify-content-center mt-3">
                <a  className="">
                    <Link to="/register">Crear cuenta</Link>
                </a>
            </div>



        </div>);
}

export default LoginPage;