import './botton.css';
import './Portfolio.css'
import { useState } from 'react'
import Capture7 from '../Images/Capture7.PNG'
import Capture6 from '../Images/Capture6.PNG'
import Dice from '../Images/Dice.jpg';
import payTax from '../Images/payTax.PNG'
import { Project1, Project2, Project3, Project4 } from './ProjectDetails';

export default function Portfolio() {

    const [showProject1, setShowProject1] = useState(false)
    const [showProject2, setShowProject2] = useState(false)
    const [showProject3, setShowProject3] = useState(false)
    const [showProject4, setShowProject4] = useState(false)



    const handelClickProject1 = () => {
        setShowProject1(true)
    }

    const handelClickProject2 = () => {
        setShowProject2(true)
    }
    const handelClickProject3 = () => {
        setShowProject3(true)
    }
    const handelClickProject4 = () => {
        setShowProject4(true)
    }

    const handelHideProject1 = () => {
        setShowProject1(false)
    }
    const handelHideProject2 = () => {
        setShowProject2(false)
    }
    const handelHideProject3 = () => {
        setShowProject3(false)
    }
    const handelHideProject4 = () => {
        setShowProject4(false)
    }
    return (
        <div className='design border-div'>
            <h1> Projects </h1>

            <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className='carousel-inner'>
                    <div className="carousel-item active container-fluid">
                        <img src={Capture6} alt="my_picture" className='img-thumbnail' />

                        <h4> Guess Number Game </h4>
                        <button className='btn_design' onClick={handelClickProject1}> {" "} More Details {" "} </button>
                        {showProject1 && (

                            <div> {" "} <Project1 onHide1={handelHideProject1} /> {" "} </div>
                        )}

                    </div>
                    <div className="carousel-item  container-fluid">
                        <img src={Dice} alt="my_picture" className='img-thumbnail' />
                        <h4> Roll Dice Game </h4>
                        <button className='btn_design' onClick={handelClickProject2}> {" "} More Details {" "}</button>
                        {showProject2 && (
                            <div> {" "} <Project2 onHide2={handelHideProject2} /> {" "} </div>
                        )}

                    </div>
                    <div className="carousel-item  container-fluid">
                        <img src={Capture7} alt="my_picture" className='img-thumbnail' />

                        <h4>  Expenses Project </h4>
                        <button className='btn_design' onClick={handelClickProject3}> {" "} More Details {" "} </button>
                        {showProject3 && (
                            <div> {" "} <Project3 onHide3={handelHideProject3} /> {" "} </div>
                        )}
                    </div>
                    <div className="carousel-item  container-fluid">
                        <img src={payTax} alt="my_picture" className='img-thumbnail' />
                        <h4> PayTax Project (team work)</h4>
                        <button className='btn_design' onClick={handelClickProject4}> {" "} More Details {" "}</button>
                        {showProject4 && (
                            <div> {" "} <Project4 onHide4={handelHideProject4} /> {" "} </div>
                        )}

                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#testimonial-carousel" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" data-bs-target="#testimonial-carousel" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}