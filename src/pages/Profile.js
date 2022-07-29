import React, { useEffect } from 'react'
import Myphoto from '../Assets/Myphoto.png'

const Profile = () => {

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <section className='section'>
        <h1 className='section-title'>Profile</h1>
        <p className='section-description'>Halo namaku <b>Farhan</b>, Aku seorang Frontend Dev yang suka membaca, main game, dan main sosmed.</p>
        <img src={Myphoto} className='rotate' alt='foto profil'/>
    </section>
  )
}

export default Profile