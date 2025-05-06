import React from 'react';
import trans from '../assets/lock.png';
import book from '../assets/book.png';
import search from '../assets/search.png';
const TransactionsCard = () => {
    const allCard =[
        {
            id:1,
            title:"Secure Transactions",
            des:"Your payments are encrypted and protected with top-level security—peace of mind in every click.",
            image:trans
        },
        {
            id:2,
            title:"Fast Payment Process",
            des:"Pay your bills in seconds with a streamlined, user-friendly interface designed for speed.",
            image:book
        },
        {
            id:3,
            title:"Transaction History & Tracking",
            des:"Easily view, filter, and track all past payments—stay in control of your finances anytime.",
            image:search
        }
    ]
    return (
        <>
        <h3 className='text-center font-semibold text-2xl md:text-4xl my-10'>Features</h3>
        <div className='flex flex-wrap justify-around items-center gap-5'>
            {
                allCard.map((item)=>
                    <div className='transition-transform duration-300 transform hover:scale-105 hover:border-amber-700 cursor-pointer place-items-center text-center border rounded-2xl w-[300px] h-[450px] py-5 px-2 space-y-3'>
                        <img src={item.image} alt="img" />
                        <h3 className='text-2xl font-semibold '>{item.title}</h3>
                        <p className='text-gray-700'>{item.des}</p>
                    </div>
                )
            }
        </div>
    </>
    );
};

export default TransactionsCard;