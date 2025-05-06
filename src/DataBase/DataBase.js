export const getBills = () => {
  const storedData = localStorage.getItem("bill-card");
  if (storedData) return JSON.parse(storedData);
  else return [];
};

export const setBills = (bill) => {
  const storedData = getBills();
  const isExistData = storedData.find((billData) => billData?.id === bill.id);
  if (isExistData) return;
  storedData.push(bill);
  localStorage.setItem("bill-card", JSON.stringify(storedData));
};
