import React from 'react';
interface MenuCardProps {
    title?: string;
    img: string;
    description?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, img, description, }) => {
    return (
        <div className=" relative flex justify-between w-full lg:w-full px-4 py-3 mx-auto overflow-hidden">
            <div className='flex flex-col items-center'>
                <img className="hover:scale-110 transition-all rounded-xl w-96 h-40 lg:h-72 object-cover object-center" src={img} alt="" />
                <h4 className="text-xl font-mont mt-5 font-semibold">{title}</h4>
             </div>
        </div>
    );
};

export default MenuCard;