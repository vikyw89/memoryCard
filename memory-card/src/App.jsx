import { useEffect, useState, useRef } from 'react'
import styles from './App.module.css'
import { Card } from './components/Card'
import { getRandomCat, getRandomImagesURL } from './modules/getRandomCat'
import { catStorage, setCatStorage } from './modules/localStorage'
import { randomizeArray } from './modules/randomizeArray'
import loadingGIF from './assets/loading.gif'

function App() {
  const [record, setRecord] = useState({score:0, bestScore:localStorage.getItem('bestScore') ?? 0})
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const {score, bestScore} = record
  const [collection, setCollection] = useState(localStorage.getItem('collection') ?? [])

  useEffect(()=>{
    localStorage.setItem('bestScore', record.bestScore)
    setTimeout(async()=>{
      const newURLS = await getRandomCat(1)
      newURLS.forEach(newURL=>{
        const newData = {
          imageURL:newURL,
          isClicked:false
        }
        setData(randomizeArray(data.concat(newData)))
      })
      setLoading(false)
    })
  },[record])
  const displayData = [...data]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Find the new CAT !
      </div>
      <div className={styles.stats}>
        <div>Current Score :{score}</div>
        <div>Best Score :{bestScore}</div>
      </div>
      <div className={styles.main}>
        {
          loading ? (
            <img src={loadingGIF} />
          ) : (
            <div className={styles.cardContainer}>
            {
            displayData.map((item,index)=>{
              return <Card key={index} index={index} card={item} data={data} setData={setData} record={record} setRecord={setRecord} setLoading={setLoading} collection={collection} setCollection={setCollection}/>
            })
            }
            </div>
          )
        }
      </div>
      <div className={styles.collection}>
        {

        }
      </div>
      <div className={styles.footer}>
        Made by Viky for The Odin Project 2023
      </div>
    </div>
  )
}

export default App
