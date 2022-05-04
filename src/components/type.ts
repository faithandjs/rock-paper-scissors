export interface choices {
    you: options
    computer: number
}
export enum options {
    scissors = 1,
    paper,
    rock,
    lizard,
    spock 
}
export interface contextType {
    settingChoices: (num: number) => void, 
    choices: choices
}