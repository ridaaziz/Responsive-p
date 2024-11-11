import React from 'react'
import "../style/contact.css"

const Contact = () => {
  return (
    <div  className='main-container'>
        <div id='contact' className="contact-container">
            <h2  className='h2'>Contact Me</h2>
            <p className='para'>I d love to hear from you! Please fill out the form below, and I will get back to you as soon as possible.</p>
            <form action="mailto:sm6928234@gmail.com" method="POST">
                <div className="form-group1">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Full Name" required/>
                </div>
                <div className="form-group2">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
                </div>
                <div className="form-group3">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows={4} cols={20} required></textarea>
                </div>
                <div className="form-group4">
                <button type="submit" className="btn-submit">Send Message</button>
                </div>
            </form>
        </div>
        
    </div>

  )
}

export default Contact