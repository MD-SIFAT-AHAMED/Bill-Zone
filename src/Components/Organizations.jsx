import React from 'react';
import desco from '../assets/desco.png';
import wasa from '../assets/wasa.png';
import nesco from '../assets/nesco.png';
import btcl from '../assets/btcl.png';
import pdb from '../assets/pdb.png';

const Organizations = () => {
  const orgIcons = [
    { id: 1, name: "DESCO", logo: desco },
    { id: 2, name: "WASA", logo: wasa },
    { id: 3, name: "NESCO", logo: nesco },
    { id: 4, name: "BTCL", logo: btcl },
    { id: 5, name: "PDB", logo: pdb },
  ];

  return (
    <section className="bg-base-200 rounded-2xl py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Our Partner Organizations
        </h3>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          {orgIcons.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-lg p-6 w-full max-w-[180px] transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-600">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;
