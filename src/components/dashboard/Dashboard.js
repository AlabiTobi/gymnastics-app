import React from 'react'
import './Dashboard.css'
import dashboard_image from "../../assets/dashboard_image.png"
import dashboard_image_back from "../../assets/dashboard_image_back.png"
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Header from '../header/Header'
import {motion} from 'framer-motion'

const Dashboard = () => {
  const transition={type:'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='dashboard' id='home'>
      <div className='blur dashboard-blur'></div>
        <div className='left-dashboard'>
            <Header />
            <div className='the-ads'>
                <motion.div
                initial={{left: mobile? "165 px": '238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}>
                </motion.div>
                <span>best fitness in semicolon</span>
            </div>

            {/* Dashboard Heading */}
                <div className='dashboard-text'>
                  <div>
                    <span className='stroke-text'>Shape  </span>

                    <span>Your</span>
                  </div> 
                    <div><span>
                        Ideal body
                    </span></div> 
                      <div>
                        <span>
                        In here we will help you shape your body ideal back to normal and then to your taste
                        </span>
                      </div>
                </div>
                 
                {/* Figures */}
                <div className='figures'>
                  <div>
                    <span>+140</span>
                    <span>expert</span>
                  </div>
                  <div>
                    <span>+900</span>
                    <span>members joined</span>
                  </div>
                  <div>
                    <span>+50</span>
                    <span>fitness prgrams</span>
                  </div>
                </div>
                {/* Dashboard buttons */}
                <div className='dashboard-buttons'>
                  <buttons className='btn'>Get Started</buttons>
                  <buttons className='btn'>Learn More</buttons> 
                </div>
        </div>
        <div className='right-dashboard'>
             <button className='btn'>Join Now</button>
          <motion.div 
          initial={{right:'-1rem'}}
            whileInView={{right: '4rem'}}
            translate={transition} 
            className='heart-rate'>
            <img src={Heart} alt=""/>
            <span>Heart Rate </span>
            <span>116 bpm</span>
          </motion.div>

          {/* Dashboard images */}
          <img src={dashboard_image} alt="" className="dashboard-image" />
          <motion.img
             initial={{right:'11rem'}}
             whileInView={{right: '30rem'}}
             translate={transition}  
           src={dashboard_image_back} alt="" className="dashboard-image-back" />

          {/* Calories */}
          <motion.div 
          initial={{right:'15rem'}}
          whileInView={{right: '38rem'}}
          translate={transition} 
          className='calories'>
            <img src={Calories} alt="" />   
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>  
            </div>     
          </motion.div>
        </div>
    </div>
  )
}

export default Dashboard