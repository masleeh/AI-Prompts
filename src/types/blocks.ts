type language = "en" | "ru"

export interface IBlocks {
    title: string,
    articles: IArticle[],
    lan: language,
    blockId: number,
    userId: number,
    goToArticle: Function,
    index: number,
    isAvailable: boolean;
    handleOpenLockModal: () => void;
    handleCloseLockModal: () => void;
}

export interface IArticle {
    title: string,
    iconId: any,
    id: number
}