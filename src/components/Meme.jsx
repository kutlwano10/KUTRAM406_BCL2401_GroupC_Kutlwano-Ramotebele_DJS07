
import React from "react";

export const Meme = () => {
    return (
        <main>
            <form className="form">
                <input className="form--input" type="text" placeholder="Top text" />
                <input className="form--input" type="text" placeholder="Bottom text"/>
                <button className="form--botton">
                    Get a new Meme image 🖼
                </button>
            </form>
        </main>
    )
}