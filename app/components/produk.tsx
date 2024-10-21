'use client'
import React, { useState } from 'react';
import menuItems from "./menuItems.json"
import MenuCard from './menuCard';

function Produk() {
    const Items = menuItems.aki;
    return (
        <div id="produk" className='py-6 md:py-0 bg-gradient-to-b from-midnavy to-tosca flex mx-auto items-center flex-col gap-2'>
            <div className='py-14'>
                <h2 className='text-3xl text-center font-bold mb-8'>PRODUK KAMI</h2>
                <div className='w-11/12 flex flex-col'>
                    <div className='transition-opacity duration-500 '>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {Items.map(item => (
                                <MenuCard
                                    key={item.title}
                                    title={item.title}
                                    img={item.img}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produk;