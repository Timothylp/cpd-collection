import type { NextPage } from "next";
import Layout from "../components/layout";
import Inventory from "../components/inventory";

const Home: NextPage = () => {
  const deliveryBoys = [
    {
      id: 1,
      title: "Delivery Boy 1",
      image:
        "https://storage.googleapis.com/imagina-prod-storage/uploads/page/cropped/thumbnail/200x200-cfd3e48f77e1686163b422562b24f04d7fcc04c1.png",
      family: "",
      rarity: 0,
      deliveryPower: 1000,
    },
    {
      id: 2,
      title: "Delivery Boy 2",
      image:
        "https://storage.googleapis.com/imagina-prod-storage/uploads/page/cropped/thumbnail/200x200-6335dd46ef48d041121e9ca03e2a9a47509ad35c.png",
      family: "",
      rarity: 1,
      deliveryPower: 1200,
    },
    {
      id: 3,
      title: "Delivery Boy 3",
      image:
        "https://storage.googleapis.com/imagina-prod-storage/uploads/page/cropped/thumbnail/200x200-9e5e75f548d9be7eaa447875498f6a9c55e2dc67.png",
      family: "",
      rarity: 2,
      deliveryPower: 800,
    },
    {
      id: 4,
      title: "Delivery Boy 4",
      image:
        "https://storage.googleapis.com/imagina-prod-storage/uploads/page/cropped/thumbnail/200x200-b01c07b34646ac4ec9277416ffbcdf71bb0777d6.png",
      family: "",
      rarity: 1,
      deliveryPower: 1000,
    },
    {
      id: 5,
      title: "Delivery Boy 5",
      image:
        "https://storage.googleapis.com/imagina-prod-storage/uploads/page/cropped/thumbnail/200x200-f9d41428a7fd30460df4df78c4c370ab96e0a3c4.png",
      family: "",
      rarity: 0,
      deliveryPower: 1200,
    },
    {
      id: 6,
      title: "Delivery Boy 6",
      image:
        "https://storage.googleapis.com/imagina-prod-storage/uploads/page/cropped/thumbnail/200x200-073dcf4c833894982e87bea223eab22631d2d4cb.png",
      family: "",
      rarity: 4,
      deliveryPower: 800,
    },
    {
      id: 7,
      title: "Delivery Boy 7",
      image: "/minougris.jpg",
      family: "",
      rarity: 3,
      deliveryPower: 800,
    },
  ];

  return <Inventory deliveryBoys={deliveryBoys} />;
};

export default Home;
