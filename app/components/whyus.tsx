import Image from 'next/image';
import React from 'react'

function WhyUs() {
    return (
        <section id="whyus" className="bg-gradient-to-b from-navy to-midnavy">
            <div className="flex flex-col pt-14 pb-8 gap-8">
                <h2 className='text-3xl text-center font-bold'>KENAPA KAMI?</h2>
                <div className="flex items-center gap-6 flex-col justify-center md:flex-row ">
                    <div className="flex md:w-3/12 flex-col gap-2 justify-center items-center">
                        <div className="w-[70px]">
                            <Image
                                src="/assets/img/aki.png"
                                width={1920}
                                height={1080}
                                className='object-cover'
                                alt="aki"
                            />
                        </div>
                        <p className='md:w-6/12 lg:w-4/12 font-mont text-center font-bold text-sm'>SPESIALIS AKI KOTA SAMARINDA</p>
                    </div>
                    <div className="flex md:w-3/12 flex-col gap-2 justify-center items-center">
                        <div className="w-[80px]">
                            <Image
                                src="/assets/img/freedelivery.png"
                                width={1920}
                                height={1080}
                                className='object-cover'
                                alt="aki"
                            />
                        </div>
                        <p className='md:w-6/12 lg:w-4/12 font-mont text-center font-bold text-sm'>PENGIRIMAN GRATIS</p>
                    </div>
                    <div className="flex md:w-3/12 flex-col gap-2 justify-center items-center">
                        <div className="w-[50px]">
                            <Image
                                src="/assets/img/original.png"
                                width={1920}
                                height={1080}
                                className='object-cover'
                                alt="aki"
                            />
                        </div>
                        <p className='md:w-5/12 lg:w-3/12 font-mont text-center font-bold text-sm'>PRODUK ORIGINAL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;
