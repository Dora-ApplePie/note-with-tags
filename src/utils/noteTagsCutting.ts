export const noteTagsCutting = (noteText: string) => {
    let tagsArray: Array<string> = [];
    noteText.split(" ").forEach((word: string) => {
        if (word[0] === "#") {
            tagsArray.push(word.split(/[.,;%$:'!?()]/g)[0])
        } else {
            return tagsArray
        }
    })
    return tagsArray
}
