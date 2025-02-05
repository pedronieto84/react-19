import LoginFormComponent from "../folder/loginFormComponent";
import { LoginData } from "../types/globalTypes";

function LoginPage() {

    const loginFormData =(response: LoginData) => {
        console.log(response);
    }
    return (
        <div>
            <LoginFormComponent formSubmitted={loginFormData} />
            <div className="container bg-light">
            <div className="col-md-12 text-center mt-20">
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning">Cancel</button>
        </div>
</div>
        </div>);
}

export default LoginPage;