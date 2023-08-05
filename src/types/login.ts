import { TAllBlocks } from "@/pages/register";

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

export interface IRegister {
    username: string,
    password: string,
    keyV: string,
    handleChangeUsername: Function,
    handleChangePassword: Function,
    handleChangeKey: Function,
    error: string,
    sendRegisterData: Function;
    allBlocks: TAllBlocks[];
    selectedBlocks: number[];
    handleSelectBlock: (item: TAllBlocks) => void;
}