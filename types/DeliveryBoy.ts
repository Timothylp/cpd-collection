import { Record } from "pocketbase";
import { getDeliveryCardById } from "../utils/pocketbase";

export default interface DeliveryBoy {
  id: string;
  title: string;
  power: number;
  rarity: number;
  image: string;
}

export function convertRecordToDeliveryBoy(record: Record, url: string = ""): DeliveryBoy {
  const deliveryBoy: DeliveryBoy = {
    id: record.id,
    title: record.title || record["@expand"].deliveryCard.title,
    power: record.deliveryPower || 0,
    rarity: 0,
    image: url,
  };

  return deliveryBoy;
}
