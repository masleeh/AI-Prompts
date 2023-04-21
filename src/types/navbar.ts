
export interface INav {
    lan: string,
    setLan: Function,
    dropdown: boolean,
    setDropdown: Function,
    switchLanguage: Function,
    t?: any,
    blocks: any,
    router: any
}

export interface IDropdown {
    blocks: any,
    dropdown: boolean,
    setDropdown: Function,
    router: any
}