import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSquareWhatsapp, faInstagramSquare, } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id="contact" className="py-12 font-mont bg-navy">
      <div className="">
        <h2 className="text-3xl text-center font-bold mb-4">KONTAK KAMI</h2>
        <div className="flex flex-col items-center gap-6 justify-center md:flex-row w-9/12 mx-auto ">
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-lg md:text-2xl text-left font-semibold mb-2"> Alamat</h3>
            <div className="w-full h-64">
              <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.470696942735!2d117.20367445!3d-0.47043145000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5d5d93a7610b5%3A0xbb459b1be43a8122!2sMugirejo%2C%20Sungai%20Pinang%2C%20Samarinda%20City%2C%20East%20Kalimantan!5e0!3m2!1sen!2sid!4v1729236430290!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <p className='flex gap-1 mb-2 flex-col'>Jalan Mugirejo, Samarinda</p>
          </div>

          <div className="md:w-1/3 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Telepon dan WA</h3>
            <div className="gap-2 flex items-start flex-col">
                <div className="flex items-center justify-center"><FontAwesomeIcon className='w-5 mr-2' icon={faPhone} /> <p>082121212121</p></div>
                <div className="flex items-center justify-center"><FontAwesomeIcon icon={faSquareWhatsapp} className="w-5 mr-2" /> <a href="https://wa.link/mwngy4" ><p>wa.link/abcde</p></a></div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
