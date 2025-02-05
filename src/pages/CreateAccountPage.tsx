import { auth } from "./../hooks/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginFormComponent from "../folder/loginFormComponent";
import { LoginData } from '../types/globalTypes';
import { useNavigate} from 'react-router-dom'

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
            <h1>Login</h1>
            <LoginFormComponent formSubmitted={loginFormData} />
            <div className="container bg-light">
            <div className="col-md-12 text-center mt-20">
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning">Cancel</button>
        </div>
</div>
        </div>
     );
}

export default CreateAccountPage;