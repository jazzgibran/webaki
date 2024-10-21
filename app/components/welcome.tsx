import Image from 'next/image'
import React from 'react'

function Welcome() {
  return (
    <section id='welcome' className=" bg-cover bg-center h-screen">
      <div className="w-full h-full bg-gradient-to-b from-transparent to-navy absolute -z-10">
      </div>
      <div className='w-full -z-20 h-full absolute'>
        <Image
          src="/assets/img/welcome.png"
          width={1920}
          height={1080}
          className='w-full h-full opacity-30 object-cover'
          alt="welcome bg"
          />
      </div>
          

      {/* mobile text and cta */}
      <div className="flex md:hidden flex-col w-11/12 mx-auto justify-center h-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">AKI ANDA BERMASALAH?</h1>
        <p className="text-justify text-sm font-mont mb-8">Segera ganti aki kendaraan Anda untuk performa maksimal. Jangan biarkan performa kendaraan Anda terganggu karena aki yang lemah. Dapatkan aki berkualitas tinggi yang siap menunjang perjalanan Anda setiap hari. Pesan sekarang dan nikmati perjalanan tanpa khawatir.</p>
        <div className="text-center flex flex-col">
        <a href="#contact" className="px-6 py-3 text-navy rounded-3xl bg-cyan mr-2 hover:bg-opacity-75 mb-4">HUBUNGI KAMI</a>
            <a href="#produk" className="px-6 py-3 h-fit rounded-3xl outline outline-1 bg-cyan bg-opacity-0 hover:bg-opacity-25 outline-cyan">PELAJARI LEBIH BANYAK</a>
          </div>
      </div>

      {/* desktop text, cta andd gallery */}
      <div className="w-10/12 mx-auto md:flex hidden h-full justify-evenly gap-x-10 items-center">
        <div className="flex flex-col w-7/12 justify-center h-full text-white">
          <h1 className=" md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">AKI ANDA BERMASALAH?</h1>
          <p className="text-justify text-sm font-mont mb-8">Segera ganti aki kendaraan Anda untuk performa maksimal. Jangan biarkan performa kendaraan Anda terganggu karena aki yang lemah. Dapatkan aki berkualitas tinggi yang siap menunjang perjalanan Anda setiap hari. Pesan sekarang dan nikmati perjalanan tanpa khawatir.</p>
           <div className="flex flex-wrap">
            <a href="#contact" className="px-6 py-3 text-navy rounded-3xl bg-cyan mr-2 hover:bg-opacity-75 mb-4">HUBUNGI KAMI</a>
            <a href="#produk" className="px-6 py-3 h-fit rounded-3xl outline outline-1 bg-cyan bg-opacity-0 hover:bg-opacity-25 outline-cyan">PELAJARI LEBIH BANYAK</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Welcome
