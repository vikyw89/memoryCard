import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Card } from './components/Card'
import { getRandomImagesURL } from './modules/getRandomImagesURL'

function App() {
  const [record, setRecord] = useState({score:0, bestScore:0})
  const {score, bestScore} = record
  const [data, setData] = useState(new Set())

  useEffect(()=>{
    const availableCard = data.size - score
    if (availableCard === 0) {
      setTimeout(async()=>{
        const randomImageURL = await getRandomImagesURL(100)
        const newCard = {
          imageURL: randomImageURL,
          isClicked: false
        }
        setData(data.add(newCard))
      })
    }
  })
  const displayData = [...data]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Memory Card
      </div>
      <div className={styles.main}>
        <div className={styles.stats}>
          <div>Current Score :{score}</div>
          <div>Best Score :{bestScore}</div>
        </div>
        <div className={styles.cardContainer}>
          {
          displayData.map((item,index)=>{
            return <Card key={index} card={item} data={data} setData={setData}/>
          })
          }
        </div>
      </div>
      <div className={styles.footer}>
        Made by Viky for The Odin Project 2023
      </div>
    </div>
  )
}

export default App
