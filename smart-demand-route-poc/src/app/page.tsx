"use client";
import RouteMap from "@/components/RouteMap";
import InventoryCard from "@/components/InventoryCard";
import ForecastChart from "@/components/ForecastChart";
import { useState, useEffect } from "react";

// 1. Define a type for inventory items
type InventoryItem = {
  product: string;
  quantity: number;
};

export default function Dashboard() {
  // 2. Use the InventoryItem[] type in useState
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  // 3. Use useEffect to load mock data once
  useEffect(() => {
    const mockInventory: InventoryItem[] = [
      { product: "Milk", quantity: 10 },
      { product: "Bread", quantity: 25 },
      { product: "Rice", quantity: 15 },
    ];

    setInventory(mockInventory);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Smart Demand Forecasting Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {inventory.map((item, index) => (
          <InventoryCard
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
{/* "text-3xl font-bold mb-6  */}
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Demand Forecast</h2>
      <ForecastChart />
      <h2 className="text-2xl font-semibold mb-3 mt-8 text-gray-800">Optimized Delivery Route</h2>
      <RouteMap />

    </div>
  );
}
