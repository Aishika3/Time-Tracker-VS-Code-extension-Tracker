import './card.css'
import React, { useState } from 'react'

export default function Card(props){
    // console.log(props)

        const [isFlipped,setisFlipped] = useState(false);
        const handleFlip = ()=>{
            setisFlipped(!isFlipped);
        }

        return (
            <>
            <div className="card-container">
                    <div className={`card ${isFlipped == true ? "rotate" : ""}`}>
                        <div className="frontside">
                                    <section className="card-row">
                                        <img className="logo" src={props.logo} alt="logo-img"/>
                                        <div className="title"><b>{props.title}</b></div>
                                    </section>
                                    <div className="auther">{props.auther}</div>
                                    <section className="card-row">
                                        <img src={props.img} alt="" className="card-img" />
                                        <button type="button" onClick={handleFlip} className="flip-btn">FLIP</button>
                                    </section>
                                    <div className="description">
                                        <p>{props.description}</p>
                                    </div>
                                    <footer>
                                            <button className="btn-functional" type='button'>Check out {props.btn}</button>
                                    </footer>
                        </div>
                        <div className="backside">
                                <div className="card-row">
                                <button type="button" onClick={handleFlip} className="back-btn">
                                    &larr; &nbsp; Back
                                </button>
                                </div>
                                <div className="back-content">
                                    {props.backContent}
                                </div>
                        </div>
                    </div>

            </div>
            </>
        )

}