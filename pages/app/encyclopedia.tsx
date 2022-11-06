import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Inventory from "../../components/app/inventory";
import Layout from "../../components/app/layout";
import { client } from "../../utils/pocketbase";

export async function getServerSideProps() {
  const res = await client.records.getList("deliveryCard", 1, 50);
  const data = JSON.stringify(res);

  return {
    props: {
      data,
    },
  };
}

const EncyclopediaPage: NextPage = ({ data }) => {
  const [deliveryBoys, setDeliveryBoys] = useState(JSON.parse(data).items);

  useEffect(() => {
    console.log(deliveryBoys);
  }, [deliveryBoys]);

  return deliveryBoys && deliveryBoys.length > 0 ? (
    <Layout>
      <Inventory deliveryBoys={deliveryBoys} />
    </Layout>
  ) : (
    <Layout>
      <div>Chargement...</div>
    </Layout>
  );
};

export default EncyclopediaPage;
