import React, {useEffect} from "react"
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'



// Let me import the image so we dont have this error on the browser.
 import img1 from '../../Assets/img.jpg'
 import img2 from '../../Assets/img (3).jpg'
 import img3 from '../../Assets/img (4).jpg'
 import img4 from '../../Assets/img (2).jpg'
 import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
// Let me paste the array named data

const Data =[
    {
        id:1,
        imgSrc: img1,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$700',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:3,
       imgSrc: img3,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:4,
       imgSrc: img4,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:5,
       imgSrc: img5,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:6,
       imgSrc: img6,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:7,
       imgSrc: img7,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:8,
       imgSrc: img8,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    },

    {
        id:9,
       imgSrc: img9,
        destTitle: 'bora bora',
        location: 'new india',
        grade: 'cultrual',
        fees: '$800',
        description: 'ghfhjhdytuioiknjbhfrrrejioklk.'

    }


    
] 

const Main = () => {
    // Lets create a react hook to add a scroll anomation...
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])



    return(
        <section className="main container section">

            <div className="secTitle">
            <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
            </div>

          <div className="secContent grid">
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                    
                    <div key={id} data-aos="fade-up" className="singleDestination">

                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                         <div className="cardInfo">

                            <h4 className="destTitle">{destTitle}</h4>

                            <span className="contient flex">
                                <HiOutlineLocationMarker className="icon" />
                                <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>

                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>

                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                Details <HiOutlineClipboardCheck className="icon" />
                            </button>

                        </div>
                    </div>
                    )
            })
            }
          </div>
      </section>
        
    )
}

export default Main