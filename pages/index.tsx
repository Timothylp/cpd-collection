import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Cent Percent Delivery</h1>
      <p className="text-gray-500">We deliver 100% of the time.</p>
    </Layout>
  );
};

export default Home;
