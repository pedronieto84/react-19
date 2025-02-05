import { auth } from "./../hooks/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginFormComponent from "../folder/loginFormComponent";
import { LoginData } from '../types/globalTypes';
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

function CreateAccountPage() {

    const navigate = useNavigate();

      const loginFormData =async (response: LoginData) => {
            console.log(response);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, response.email, response.password);
                navigate('/hall')
                console.log("User logged in:", userCredential.user);
              } catch (error) {
                console.error("Error logging in:", error);
              }
        }
    return ( 
     <div>
            <h1>Crear cuenta</h1>
            <LoginFormComponent formSubmitted={loginFormData} type={'register'} />
            <div className="d-flex justify-content-center mt-3">
                <a  className="">
                    <Link to="/login">Ya tengo cuenta, ir al Login</Link>
                </a>
            </div>
        </div>
     );
}

export default CreateAccountPage;