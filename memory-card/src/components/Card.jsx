import React from "react";
import styles from './Card.module.css'

const Card = (props) => {
    console.log(props)
    const { card, data, setData } = props
    const { imageURL, isClicked } = card
    
    return (
        <div className={styles.container}>
            <img src={imageURL}/>
        </div>
    )
}

export { Card }