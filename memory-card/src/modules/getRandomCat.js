import { v4 as uuidv4 } from 'uuid';

const getRandomCat = async(quantity=1,hash=uuidv4())=>{
    try{
        let output = []
        for (let i = 0; i < quantity; i++) {
            const response = await fetch(`https://robohash.org/set_set4/${hash}/size_200x200/.jpg`)
            const imageURL = URL.createObjectURL(await (await fetch(response.url)).blob())
            // const response = await fetch(`https://api.allorigins.win/raw?url=http://cat-avatars.vercel.app/api/cat?name=${hash}`)
            // const imageURL = URL.createObjectURL(await response.blob())
            output.push(imageURL)
        }
        return output
    } catch(err){
        console.log(err)
    }
}

const oldgetRandomImagesURL = async(size)=>{
    try {
        const response = await fetch(`https://random.imagecdn.app/${size}`)
        const imageURL = response.url
        return imageURL
    } catch (err) {
        console.log(err)
    }
}

const getRandomImagesURL = async(quantity = 1)=>{
    const catsArray = []
    for (let i = 0; i< quantity; i++) {
        catsArray.push(getRandomCat())
    }
    const output = Promise.all(catsArray)
    return output
}

export { getRandomImagesURL,getRandomCat }