import { Record } from "pocketbase";
import DeliveryBoy from "../../types/DeliveryBoy";

import Image from "next/image";

function DeliveryCard({ deliveryBoy }: { deliveryBoy: DeliveryBoy }) {
  const rarityColors = ["outline-stone-300", "outline-blue-400", "outline-purple-500", "outline-orange-500", "outline-red-500"];

  return (
    <div
      className={`min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-md outline outline-4 outline-offset-[-4px] ${
        rarityColors[deliveryBoy.rarity]
      } delivery-boy-card dark:border-gray-700 dark:bg-gray-800`}
    >
      <div className="relative px-4 pt-4">
        <Image className="rounded-lg" src={deliveryBoy.image} alt={deliveryBoy.title} width={500} height={500} />
      </div>

      <div className="p-5 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        <h5>{deliveryBoy.title}</h5>
        {deliveryBoy.power ? <p>{deliveryBoy.power} DP</p> : null}
      </div>
    </div>
  );
}

export default DeliveryCard;
