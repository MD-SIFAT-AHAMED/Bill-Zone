import React from 'react';
import { useLoaderData } from 'react-router';
import Bill from '../Components/Bill';

const Bills = () => {
    const bills = useLoaderData();
    return (
        <div>
            <div className='space-y-10'>
                {
                    bills.map(bill=> <Bill key={bill.id} bill={bill}></Bill>)
                }
            </div>
        </div>
    );
};

export default Bills;