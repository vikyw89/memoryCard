const catStorage = () =>{
    return JSON.parse(window.localStorage.getItem('catStorage') ?? [])
}
const setCatStorage = (arg) => {
    window.localStorage.setItem('catStorage', JSON.stringify(arg))
    return true
}

export { catStorage, setCatStorage }