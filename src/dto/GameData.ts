export class GameData {

    constructor() {
        this.characterCount = new Map<any, number>();
    }

    get characterCount(): Map<any, number> {
        return this.characterCountValue;
    }

    set characterCount(value: Map<any, number>) {
        this.characterCountValue = value;
    }

    get countOfDays(): number {
        return this.daysValue;
    }

    set countOfDays(value: number) {
        this.daysValue = value;
    }

    get countOfActionsPerDay(): number {
        return this.actionsPerDayValue;
    }

    set countOfActionsPerDay(value: number) {
        this.actionsPerDayValue = value;
    }

    private characterCountValue : Map<any, number>; //TODO: Can be type somehow limited?
    private daysValue : number;
    private actionsPerDayValue : number;
}