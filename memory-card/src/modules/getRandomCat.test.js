import { describe, expect, it } from 'vitest'
import { getRandomCat } from './getRandomCat'

describe('getRandomCat =>', ()=>{
    it('get 1 random cat', async ()=>{
        expect((await getRandomCat()).length).toBe(1)
    })

    it('get 2 random cats', async()=>{
        expect((await getRandomCat(2)).length).toBe(2)
    })
})