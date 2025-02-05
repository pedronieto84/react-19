import { auth } from "./../hooks/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginFormComponent from "../components/loginFormComponent";
import { LoginData } from '../types/globalTypes';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { db } from "./../hooks/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function CreateAccountPage() {

  const navigate = useNavigate();


  const addData = async (formLoginData: LoginData) => {
    try {
      await addDoc(collection(db, "users"), { email: formLoginData.email });
      console.log("Document added!");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const loginFormData = async (response: LoginData) => {
    console.log(response);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, response.email, response.password);
      const createUser = await addData(response);
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

        <Link to="/login">Ya tengo cuenta, ir al Login</Link>

      </div>
    </div>
  );
}

export default CreateAccountPage;