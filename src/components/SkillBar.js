import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import './SkillBar.css'
export default function SkillBar() {

    return (
        <div>
            <div className="container inline">
                <h2 className="title-text"> Programming Skills  </h2>
                <div className="skill-box">
                    <span className="title"> HTML </span>
                    <div>
                        <ProgressBar completed={95} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

            
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"> CSS </span>
                    <div >
                        <ProgressBar completed={90} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                     
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"> Bootstrap  </span>
                    <div >
                        <ProgressBar completed={70} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"> JavaScript </span>
                    <div >
                        <ProgressBar completed={85} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                      
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"> React JS</span>
                    <div >
                        <ProgressBar completed={75} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                    </div>
                </div>

            </div>
            <div className="container inline">
                <h2 className="title-text"> Art Skills </h2>
                <div className="skill-box">
                    <span className="title"> Painting </span>
                    <div >
                        <ProgressBar completed={90} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                      
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"> Adobe Photoshop </span>
                    <div >
                        <ProgressBar completed={50} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">Adobe Illistrator  </span>
                    <div >
                        <ProgressBar completed={40} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"> Drawing  </span>
                    <div >
                        <ProgressBar completed={80} animateOnRender={true} bgColor="rgb(31, 83, 179)" />

                    </div>
                </div>
                <div className="skill-box">
                    <span className="title"> Graphic design  </span>
                    <div >
                        <ProgressBar completed={40} animateOnRender={true} bgColor="rgb(31, 83, 179)" />
                    </div>
                </div>
            </div>

        </div>
    )
}