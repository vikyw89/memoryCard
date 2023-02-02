const getRandomImagesURL = async(size)=>{
    try {
        const response = await fetch(`https://random.imagecdn.app/${size}/${size}`)
        const imageURL = response.url
        return imageURL
    } catch (err) {
        console.log(err)
    }
}

export { getRandomImagesURL }