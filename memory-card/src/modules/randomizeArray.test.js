import { describe, expect, it } from 'vitest'
import { randomizeArray } from './randomizeArray'

it('randomizeArray =>', ()=>{
    expect(randomizeArray([1,2,3,4,5,6]) !== randomizeArray([1,2,3,4,5,6])).toBe(true)
})