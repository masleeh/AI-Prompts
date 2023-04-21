export const cutString = (str: any, lan: any, count:number):any => {
    if (str) {
        if (lan === "en") {
            if (str.length > count) return str.slice(0, count - 3) + "..."
        }
        else if (str.length > count - 5) return str.slice(0, count - 8) + "..."
        return str
    }
}