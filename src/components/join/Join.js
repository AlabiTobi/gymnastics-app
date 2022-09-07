import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('service_4ty2r5z', 'template_1a9c9fc', form.current, 'DAlo_hUol4HWHuVxE')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div className='Join' id ='join-us'>
        <div className='left-join '>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-join '>
          <form ref={form} className='email-container' onSumit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter your Email address'/>
          
          <button className='btn btn-join'>Join Now</button>
          </form>  
        </div>

    </div>
  )
}

export default Join