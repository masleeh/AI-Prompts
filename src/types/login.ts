export interface ILogin {
    login: string,
    password: string,
    setLogin: Function,
    setPassword: Function,
    sendLoginData: Function,
    isWarn: boolean,
    t: any,
    handleKey: Function
}