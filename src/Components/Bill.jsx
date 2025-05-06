import React from "react";
import { Link } from "react-router";

const Bill = ({ bill }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
    <div className="card card-side bg-base-100 shadow-lg hover:border-orange-400 hover:border transition-transform transform duration-200 hover:scale-105">
      <figure className="p-4">
        <img
          src={bill.icon}
          alt={bill.organization}
          className="w-50 h-24 object-contain"
        />
      </figure>
      <div className="card-body">
        {bill.paid && <p className="w-fit text-white px-3 py-1 rounded-2xl bg-green-400">Already Paid</p>}
        <h2 className="card-title">{bill.organization}</h2>
        <p className="text-sm text-gray-500">{bill.bill_type}</p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <span className="text-lg font-bold text-orange-400">
            ${bill.amount}
          </span>
          {bill.pro && <div className="px-4 py-1 bg-green-500/25 rounded-4xl text-xs">PRO</div>}
          <span className="text-sm text-gray-600">
            Due: {new Date(bill['due-date']).toLocaleDateString()}
          </span>
        </div>
        <div className="card-actions mt-2">
          <Link to={`/details/${bill.id}`} className="w-full">
            <button className="btn text-white hover:bg-white hover:border hover:border-orange-400 hover:text-black w-full bg-orange-400 rounded-2xl btn-sm">Pay</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Bill;
