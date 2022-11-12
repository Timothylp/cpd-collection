import DeliveryCard from "./DeliveryCard";
import { Record } from "pocketbase";
import DeliveryBoy from "../../types/DeliveryBoy";

function Grid({ items }: { items: DeliveryBoy[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {items.map((item: DeliveryBoy, index: number) => (
        <DeliveryCard key={index} deliveryBoy={item} />
      ))}
    </div>
  );
}

export default Grid;
