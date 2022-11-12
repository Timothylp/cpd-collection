import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { getDeliveryCards } from "../../utils/pocketbase";
import { Record } from "pocketbase";

import Layout from "../../components/app/Layout";
import Grid from "../../components/app/Grid";

const EncyclopediaPage: NextPage = () => {
  const [deliveryBoys, setDeliveryBoys] = useState<Record[]>([]);

  useEffect(() => {
    getDeliveryCards().then((data: Record[]) => {
      if (data) {
        setDeliveryBoys(data);
      }
    });
  }, []);

  return <Layout>{deliveryBoys && deliveryBoys.length > 0 ? <Grid items={deliveryBoys} /> : <div>Chargement...</div>}</Layout>;
};

export default EncyclopediaPage;
