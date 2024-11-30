"use client";

import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
import InventoryCard from "@/components/InventoryCard";
import { CiMoneyBill } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiHardDrive } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Line Chart for products sold per months",
      data: [65, 59, 80, 81, 56, 90, 72, 88, 60, 95, 85, 75],
      fill: false,
      tension: 0,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const inventoryData = [
  { header: "Collection", figure: "Rs 1234.56", icon: CiMoneyBill },
  { header: "Pending", figure: "Rs 1634,56.00", icon: CiClock2 },
  { header: "Total Invoices", figure: "15", icon: CiHardDrive },
  { header: "Total Customers", figure: "12", icon: MdPeopleAlt },
];

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

export default function MarketPlace({
  params,
}: {
  params: { marketplace: string };
}) {
  const slug = params.marketplace;

  return (
    <div className="flex flex-col pt-8  w-full">
      <div className="w-full">
        <h1>Inventory</h1>
        <div className="relative grid lg:grid-cols-4 gap-5 grid-cols-1 md:grid-cols-2">
          {inventoryData.map((ele, index) => (
            <div key={index}>
              <InventoryCard
                icon={React.createElement(ele.icon)}
                title={ele.header}
                number={ele.figure}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-3">
        <div
          id="option1"
          className="mb-4 p-4 shadow flex justify-center items-center overflow-y-auto"
        >
          <div className="relative w-full h-[500px]  flex-grow overflow-y-hidden">
            <h3 className="font-bold">Total Inventory: 100</h3>
            <p>Total items Sold: 50</p>
            <div className="h-full">
              <Bar
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false, // Ensure the chart scales properly
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
