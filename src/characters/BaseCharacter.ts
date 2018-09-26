export abstract class BaseCharacter {

    protected constructor(health:number) {
        this.health = health;
        this.nameValue = Date.now().toString();
    }


    get isAlive(): boolean {
        return this.isAliveValue;
    }

    get name(): string {
        return this.nameValue;
    }

    get health(): number {
        return this.healthValue;
    }

    // TODO: disable public setting of health
    set health(value: number) {
        this.healthValue = value;
        this.isAliveValue = (this.healthValue > 0)
    }

    private readonly nameValue : string;
    private healthValue : number;
    private isAliveValue : boolean;
}