import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { getUserDeliveryCards } from "../../utils/pocketbase";
import { Record } from "pocketbase";

import Grid from "../../components/app/Grid";
import Layout from "../../components/app/Layout";
import DeliveryBoy from "../../types/DeliveryBoy";

const InventoryPage: NextPage = () => {
  const [deliveryBoys, setDeliveryBoys] = useState<DeliveryBoy[]>([]);

  useEffect(() => {
    getUserDeliveryCards().then((data: DeliveryBoy[]) => {
      if (data) {
        setDeliveryBoys(data);
      }
    });
  }, []);

  return <Layout>{deliveryBoys && deliveryBoys.length > 0 ? <Grid items={deliveryBoys} /> : <div>Chargement...</div>}</Layout>;
};

export default InventoryPage;
