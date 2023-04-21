
const useKeyEnter = () => {
    const handleKey = (onClickFunction: Function, event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onClickFunction()
        }
    }

    return {handleKey}
}

export default useKeyEnter