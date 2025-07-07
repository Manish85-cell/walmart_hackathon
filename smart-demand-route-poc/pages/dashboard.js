import InventoryCard from "@/components/InventoryCard";
import ForecastChart from "@/components/ForecastChart";
import RouteMap from "@/components/RouteMap";



export default function Dashboard() {
    const inventory = [
      { product: "Milk", quantity: 10 },
      { product: "Bread", quantity: 25 },
      { product: "Rice", quantity: 15 },
    ];
    return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Inventory Overview</h1>
        {inventory.map((item, index) => (
            <InventoryCard key={index} product={item.product} quantity={item.quantity} />
        ))}

      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Demand Forecast</h1>
        <ForecastChart />
      </div>
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-2">Optimized Delivery Route</h1>
        <RouteMap />
      </div>
    </div>
  );
}
