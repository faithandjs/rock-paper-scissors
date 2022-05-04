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
export enum status {
    WIN = 'you win', 
    LOSE = 'you lose' ,
    DRAW = 'draw' 
}
export interface contextType {
    settingChoices: (num: number) => void, 
    choices: choices,
    reset: () => void
    compute: (action: status) => void
}