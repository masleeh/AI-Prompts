import { ILogin } from "@/types/login"


const LoginForm:React.FC<ILogin> = (props) => {
    return (
        <div className="login-container">
            <div className="login">
                <h1 className="login-title">{props.t("header")}</h1>
                <input className="login-input" placeholder={props.t("username")} value={props.login} onChange={(event) => props.setLogin(event)}/>
                <input className="login-input" placeholder={props.t("password")} type="password" value={props.password} onChange={(event) => props.setPassword(event)}
                onKeyDown={(event) => props.handleKey(props.sendLoginData, event)}
                />
                {props.isWarn && <h3 className="login-error">User not found, try again</h3>}
                <button className="login-button" onClick={() => props.sendLoginData()}>{props.t("login")}</button>
            </div>
        </div>
    )
}

export default LoginForm