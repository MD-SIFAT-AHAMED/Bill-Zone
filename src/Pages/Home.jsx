import React from "react";
import Banner from "../Components/Banner";
import Organizations from "../Components/Organizations";
import TransactionsCard from "../Components/TransactionsCard";
import ReviewSection from "../Components/ReviewSection";
import ImportantInfo from "../Components/ImportantInfo";

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

      <section className="my-10">
        <ImportantInfo/>
      </section>

      <section className="my-10">
        <ReviewSection/>
      </section>
    </div>
  );
};

export default Home;
