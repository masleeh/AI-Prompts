type language = "en" | "ru"

export interface IBlocks {
    title: string,
    articles: IArticle[],
    lan: language,
    blockId: number,
    userId: number,
    goToArticle: Function,
    index: number,
}

export interface IArticle {
    title: string,
    iconId: any,
    id: number
}