import React from 'react';
import desco from '../assets/desco.png';
import wasa from '../assets/wasa.png';
import nesco from '../assets/nesco.png';
import btcl from '../assets/btcl.png';
import pdb from '../assets/pdb.png';
const Organizations = () => {
    const orgIcons = [
        {
          id: 1,
          name: "DESCO",
          logo: desco,
        },
        {
          id: 2,
          name: "WASA",
          logo: wasa,
        },
        {
          id: 3,
          name: "NESCO",
          logo: nesco,
        },
        {
          id: 4,
          name: "BTCL",
          logo: btcl,
        },
        {
          id: 5,
          name: "PDB",
          logo: pdb,
        },
      ];
      
    return (
        <div>
            <h3 className='text-2xl md:text-4xl font-semibold my-6 text-gray-700 text-center'>Organization</h3>
            <div className='flex gap-10 flex-wrap justify-around items-center'>
                {
                    orgIcons.map((item)=>
                        <div 
                        key={item.id} 
                        className='border hover:border-amber-500 rounded-2xl border-gray-500 place-items-center space-y-4 p-3 min-h-[200px] w-[200px] transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                            <img className='w-[120px]' src={item.logo} alt={item.name} />
                            <h4 className='text-xl font-semibold text-gray-500'>{item.name}</h4>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Organizations;