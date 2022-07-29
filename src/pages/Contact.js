import React, { useEffect } from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { GrMail, GrFacebook } from "react-icons/gr"

const Contact = () => {
  
  useEffect(() => {
    document.title = 'Contact';
  }, [])

  return (
    <section className='section'>
        <h1 className='section-title'>Contact Page</h1>
        <p className='section-description'>Kamu dapat menghubungiku di bawah ini :</p>
        <ul>
            <li><FaWhatsapp /> Whatsapp : 085775452609</li>
            <li><GrMail /> Email : mnfarhanz29@gmail.com</li>
        </ul>
        <p className='section-description'>Atau kamu dapat melihatku di media sosial :</p>
        <ul>
            <li><a href='https://facebook.com/MuhammadNurfarhan29/' target='_blank' rel="noopener noreferrer"><GrFacebook /> Facebook</a></li>
        </ul>
    </section>
  )
}

export default Contact