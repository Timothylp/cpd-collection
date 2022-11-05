import DeliveryCard from "./deliveryCard";

interface DeliveryBoy {
  id: number;
  title: string;
  image: string;
  family: string;
  rarity: number;
  deliveryPower: number;
}

function Inventory({ deliveryBoys }: { deliveryBoys: DeliveryBoy[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {deliveryBoys.map((item: DeliveryBoy, index: number) => (
        <DeliveryCard key={index} deliveryBoy={item} />
      ))}
    </div>
  );
}

export default Inventory;
