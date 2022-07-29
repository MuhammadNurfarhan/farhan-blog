import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <section className='section'>
        <h1 className='section-title'>Selamat Datang Di Websiteku</h1>
        <p className='section-description'>Halo semua, Ini website <i>Single Page Application</i> terbaruku. Kamu bisa mendapatkan informasi seputar spaceflight disini, salam kenal ya.</p>
    </section>
  )
}

export default Home