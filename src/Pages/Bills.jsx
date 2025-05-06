import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Bill from "../Components/Bill";
import { getBills } from "../DataBase/DataBase";

const Bills = () => {
  const billss = useLoaderData();
  const [bills,setBills] =useState([]);

  useEffect(() => {
    const storedBills = getBills(); // array from localStorage

    const updatedBills = billss.map((bill) => {
      const isPaid = storedBills.find((stored) => stored.id === bill.id);
      if (isPaid) {
        return { ...bill, paid: true }; // change paid to true if matched
      }
      return bill;
    });

    setBills(updatedBills);
  }, [billss]);

  return (
    <div>
      <div className="space-y-10">
        {bills.map((bill) => (
          <Bill key={bill.id} bill={bill}></Bill>
        ))}
      </div>
    </div>
  );
};

export default Bills;
