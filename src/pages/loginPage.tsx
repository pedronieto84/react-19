import LoginFormComponent from "../folder/loginFormComponent";
import { LoginData } from "../types/globalTypes";

function LoginPage() {

    const loginFormData =(response: LoginData) => {
        console.log(response);
    }
    return (
        <div>
            <LoginFormComponent formSubmitted={loginFormData} />
        </div>);
}

export default LoginPage;