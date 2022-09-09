import { describe, it } from 'https://deno.land/std@0.154.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.2.10/mod.ts'

class LawnMower {
    constructor(private x: number, private y: number, private direction: 'N' | 'S') {
    }

    move() {
        if (this.direction === 'S') {
            return new LawnMower(0, this.y - 1, "S")
        }
        return new LawnMower(0, this.y + 1, "N")
    }
}

describe('lawn mower', () => {
    it('can compare lawnmowers', () => {
        const lawnMower = new LawnMower(0, 0, 'N')

        expect(lawnMower).toEqual(new LawnMower(0, 0, 'N'))
    })
    it('two mower in different spots should be different', () => {
        const lawnMower = new LawnMower(1, 0, 'N')

        expect(lawnMower).not.toEqual(new LawnMower(0, 0, 'N'))
    })
    it('can move', () => {
        const lawnMower = new LawnMower(0, 0, 'N')

        const moved = lawnMower.move()

        expect(moved).toEqual(new LawnMower(0, 1, 'N'))
    })

    it('can move 2', () => {
        const lawnMower = new LawnMower(0, 1, 'N')

        const moved = lawnMower.move()

        expect(moved).toEqual(new LawnMower(0, 2, 'N'))
    })

    it('can move south', () => {
        const lawnMower = new LawnMower(0, 1, 'S')

        const moved = lawnMower.move()

        expect(moved).toEqual(new LawnMower(0, 0, 'S'))
    })

    it('can move south 2', () => {
        const lawnMower = new LawnMower(0, 2, 'S')

        const moved = lawnMower.move()

        expect(moved).toEqual(new LawnMower(0, 1, 'S'))
    })

})

