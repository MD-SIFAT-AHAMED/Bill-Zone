import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Bill from "../Components/Bill";
import { getBills } from "../DataBase/DataBase";

const Bills = () => {
  const billss = useLoaderData();
  const [bills, setBills] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const storedBills = getBills();

    const updatedBills = billss.map((bill) => {
      const isPaid = storedBills.find((stored) => stored.id === bill.id);
      if (isPaid) {
        return { ...bill, paid: true };
      }
      return bill;
    });
    setBills(updatedBills);
  }, [billss]);

  const filterdBills = selectedType
    ? bills.filter((bill) => bill.bill_type === selectedType.toUpperCase())
    : bills;

    
  return (
    <div>
      <div className="w-8/10 mx-auto">
        {/* Filter Dropdown */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Filter by bill type</option>
          <option value="electricity">Electricity</option>
          <option value="gas">Gas</option>
          <option value="internet">Internet</option>
          <option value="water">Water</option>
        </select>
      </div>
      <div className="space-y-10">
        {filterdBills.length > 0
          ? filterdBills.map((bill) => <Bill key={bill.id} bill={bill}></Bill>)
          : ""}
      </div>
    </div>
  );
};

export default Bills;
