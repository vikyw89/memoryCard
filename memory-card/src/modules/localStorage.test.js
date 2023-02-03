import { describe, expect, it } from 'vitest'


it('setLocalStorage', ()=>{
    localStorage.setItem('cat', JSON.stringify([1,2,3,4]))
    expect(localStorage.getItem('cat')).toEqual(JSON.stringify([1,2,3,4]))
})