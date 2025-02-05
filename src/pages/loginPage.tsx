import LoginFormComponent from "../components/loginFormComponent";
import { LoginData } from "../types/globalTypes";
import { auth } from "./../hooks/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function LoginPage() {

    const navigate = useNavigate();

    const loginFormData = async (response: LoginData) => {
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
            <LoginFormComponent formSubmitted={loginFormData} type={'login'} />

            <div className="d-flex justify-content-center mt-3">

                <Link to="/register">Crear cuenta</Link>

            </div>



        </div>);
}

export default LoginPage;