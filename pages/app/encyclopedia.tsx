import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/app/layout";
import { getDeliveryCards } from "../../utils/pocketbase";
import { Record } from "pocketbase";

const EncyclopediaPage: NextPage = () => {
  const [deliveryBoys, setDeliveryBoys] = useState<Record[]>([]);

  useEffect(() => {
    getDeliveryCards().then((data: Record[]) => {
      if (data) {
        setDeliveryBoys(data);
      }
    });
  }, []);

  return deliveryBoys && deliveryBoys.length > 0 ? (
    <Layout>
      <div>ça marche</div>
    </Layout>
  ) : (
    <Layout>
      <div>Chargement...</div>
    </Layout>
  );
};

export default EncyclopediaPage;
