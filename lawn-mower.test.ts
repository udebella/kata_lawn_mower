import { describe, it } from 'https://deno.land/std@0.154.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.2.10/mod.ts'

class Position {
    constructor(public x: number, public y:number) {}
}

class LawnMower {
    constructor(private position: Position, private direction: "N" | "S" | typeof north) {
    }

    move() {
        if (this.direction === 'S') {
            return new LawnMower(south(this.position), "S")
        }
        return new LawnMower(north(this.position), "N")
    }
}

function south({y}: Position) {
    return new Position(0, y - 1);
}

function north({y}: Position) : Position {
    return new Position(0, y + 1);
}

describe('lawn mower', () => {
    it('can compare lawnmowers', () => {
        const lawnMower = new LawnMower(new Position(0, 0), north)

        expect(lawnMower).toEqual(new LawnMower(new Position(0, 0), north))
    })

    it('two mower in different spots should be different', () => {
        const lawnMower = new LawnMower(new Position(1, 0), north)

        expect(lawnMower).not.toEqual(new LawnMower(new Position(0, 0), north))
    })

    it('can move north', () => {
        const lawnMower = new LawnMower(new Position(0, 0), 'N')

        const moved = lawnMower.move()

        expect(moved).toEqual(new LawnMower(new Position(0, 1), 'N'))
    })

    it('can move south', () => {
        const lawnMower = new LawnMower(new Position(0, 1), 'S')

        const moved = lawnMower.move()

        expect(moved).toEqual(new LawnMower(new Position(0, 0), 'S'))
    })

})

