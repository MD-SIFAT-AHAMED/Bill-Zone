import React, { use } from "react";
import { BsListNested } from "react-icons/bs";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { getBills, setBills } from "../DataBase/DataBase";
import { BalanceContext } from "../Context/BalanceContext";
import toast from "react-hot-toast";

const BillDetails = () => {
  const [balance, setBalance] = use(BalanceContext);
  const { cardId } = useParams();
  const allBills = useLoaderData();
  const billDetails = allBills.find((item) => item.id == cardId);
  const navigate = useNavigate();

  const handlerPayBill = (bill) => {
    const payBill = getBills();
    const isPayBill = payBill.find((existBill) => existBill.id === bill.id);
    if (isPayBill) {
      toast.error("Already Bill Pay Success");
      return;
    }

    setBills(bill);
    navigate("/bills");
    toast.success("Pay Bill Success");
    const newBalance = balance - bill.amount;
    setBalance(newBalance);
  };

  return (
    <div className="flex justify-center items-center min-h-md">
      <div className="max-w-3xl mx-auto p-4">
        <div className="card card-side bg-base-100 shadow-lg hover:border-gray-400 hover:border transition-transform transform duration-200 hover:scale-105">
          <figure className="p-4 relative">
            <img
              src={billDetails.icon}
              alt={billDetails.organization}
              className="w-50 h-24 object-contain"
            />
            <figure className="absolute z-10 top-18 left-22 ">
              <img
                src={billDetails.image}
                alt={billDetails.organization}
                className="w-15 h-24 object-contain"
              />
            </figure>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{billDetails.organization}</h2>
            <p className="text-sm text-gray-500">{billDetails.bill_type}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <span className="text-lg font-bold text-blue-800">
                ${billDetails.amount}
              </span>
              {billDetails.pro && (
                <div className="px-4 py-1 bg-green-500/25 rounded-4xl text-xs">
                  PRO
                </div>
              )}
              <span className="text-sm text-gray-600">
                Due: {new Date(billDetails["due-date"]).toLocaleDateString()}
              </span>
            </div>
            <div className="card-actions justify-end mt-2">
              <button
                onClick={() => handlerPayBill(billDetails)}
                className="btn text-white hover:bg-white hover:border hover:border-green-400 hover:text-black w-full bg-green-500 rounded-2xl btn-sm"
              >
                Pay Bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
