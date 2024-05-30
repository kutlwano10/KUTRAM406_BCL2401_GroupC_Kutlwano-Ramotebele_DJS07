
import React from "react";
import memeData from "../../memeData";
export const Meme = () => {
    let url ;

    const getMemeImages = () => {
        const memeArray = memeData.data.memes 
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input id="top--left" className="form--input" type="text" placeholder="Top text" />
                <input id="top--right" className="form--input" type="text" placeholder="Bottom text"/>
                
                <button onClick={getMemeImages} className="form--button">
                    Get a new Meme image 🖼
                </button>
            </div>
        </main>
    )
}