import './card.css'
import React from 'react'

export default function Card({ logo, title, author, img, description, btn }){
    
        return (
            
            <div className="card-container">
              <div className="card">
                  <section className="card-row">
                      <img className="logo" src={logo} alt="logo-img"/>
                      <div className="title"><b>{title}</b></div>
                  </section>
                  <div className="auther">{author}</div>
                  <section className="card-row">
                      <img src={img} alt="" className="card-img" />
                  </section>
                  <div className="description">
                      <p>{description}</p>
                  </div>
                  <footer>
                      <button className="btn-functional">
                          {btn}
                      </button>
                  </footer>
              </div>
            </div>
        )

}