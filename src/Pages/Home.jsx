import React from "react";
import Banner from "../Components/Banner";
import Organizations from "../Components/Organizations";
import TransactionsCard from "../Components/TransactionsCard";

const Home = () => {
  return (
    <div>
      <section className="w-full overflow-hidden">
        <Banner />
      </section>

      <section className="my-10">
        <Organizations/>
      </section>

      <section className="my-10">
        <TransactionsCard/>
      </section>
    </div>
  );
};

export default Home;
