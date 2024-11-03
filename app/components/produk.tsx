"use client";
import React, { useState } from "react";
import menuItems from "./menuItems.json";
import MenuCard from "./menuCard";

function Produk() {
  const Items = menuItems.aki;
  return (
    <div
      id="produk"
      className="py-6 w-full md:py-0 bg-gradient-to-b from-midnavy to-tosca flex mx-auto items-center flex-col gap-2"
    >
      <div className="py-14">
        <h2 className="text-3xl text-center font-bold mb-8">PRODUK KAMI</h2>
        <div className="w-11/12 mx-auto justify-center items-center flex flex-col">
          <div className="transition-opacity duration-500 ">
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Items.map((item) => (
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

      
      <div className="pb-5 px-5 ">
      <h2 className="text-3xl text-center font-bold mb-8">MERK</h2>
      <div className="scale-75 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <img
          className="hover:scale-110 mx-auto transition-all rounded-xl w-60 object-cover"
          src={"/assets/img/amaron_logo.png"}
          alt=""
        />
        <img
          className="hover:scale-110 mx-auto transition-all w-40"
          src={"/assets/img/yuasa_logo.png"}
          alt=""
        />
        <img
          className="hover:scale-110 mx-auto transition-all rounded-xl w-40"
          src={"/assets/img/gforce_logo.png"}
          alt=""
        />
        <img
          className="hover:scale-110 mx-auto transition-all rounded-xl w-40"
          src={"/assets/img/gs_logo.png"}
          alt=""
        />
        <img
          className="hover:scale-110 mx-auto md:col-span-1 col-[1_/_span_2] transition-all rounded-xl w-40"
          src={"/assets/img/incoe_logo.png"}
          alt=""
        />
        
      </div>
      </div>
    </div>
  );
}

export default Produk;
