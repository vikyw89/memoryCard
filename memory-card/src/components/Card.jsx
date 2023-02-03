import React from "react";
import { catStorage, setCatStorage } from "../modules/localStorage";
import styles from './Card.module.css'

const Card = (props) => {
    const { card, index, data, setData, record, setRecord, setLoading, collection, setCollection } = props
    const { imageURL, isClicked } = card
    
    const clickHandler = (e) => {
        e.stopPropagation()
        setLoading(true)
        const newRecord = {...record}

        // record card to collection
        const oldCollection = JSON.parse(localStorage.getItem('collection') ?? JSON.stringify([]))
        const newCollection = [...new Set(oldCollection.concat(card))]
        localStorage.setItem('collection', JSON.stringify(newCollection))
        setCollection(newCollection)
        switch(true){
            case isClicked === true:
                // reset score
                newRecord.score = 0
                setRecord(newRecord)

                // reset data
                setData([])
                break
            case isClicked === false:
                // update score
                newRecord.score++
                newRecord.bestScore = newRecord.bestScore > newRecord.score ? newRecord.bestScore : newRecord.score
                setRecord(newRecord)

                // update data
                const newData = [...data]
                newData[index] = {
                    imageURL:imageURL,
                    isClicked: true
                }
                setData(newData)
                break
        }
    }

    return (
        <div className={styles.container} onClick={clickHandler}>
            <img src={imageURL}/>
        </div>
    )
}

export { Card }