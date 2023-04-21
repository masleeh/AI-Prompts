export interface IFeedback {
    handleChangeEmail: Function,
    handleChangeMessage: Function,
    email: string,
    message: string,
    error: string,
    isShown: boolean,
    sendData: Function,
    success: boolean
}