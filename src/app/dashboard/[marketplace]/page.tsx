"use client";
import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
import InventoryCard from "@/components/InventoryCard";
import { CiMoneyBill } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiHardDrive } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";

// data that we will receive from API
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
  { header: "collection", figure: 'Rs 1234.56' },
  { header: "Pending", figure: 'Rs 1634,56.00' },
  { header: "Total Invoices", figure: '15' },
  { header: "Total Customers", figure: '12' },
];

const icons = [<CiMoneyBill/>, <CiClock2/>, <CiHardDrive/>, <MdPeopleAlt/>];

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

export default async function MarketPlace({
  params,
}: {
  params: Promise<{ marketplace: string }>;
}) {
  const slug = (await params).marketplace;
  return (
    <div className="flex flex-col pt-8 h-full w-full">
      {/* Left Column */}
      {/* Invertory */}
      <div className="w-full">
        <h1>Invertory</h1>
        <div className="grid lg:grid-cols-4 gap-4 grid-cols-1 md:grid-cols-2">
          {inventoryData.map((ele, index) => {
            return (
              <>
                <div key={index+"-"+index}>
                  <InventoryCard
                    icon={icons[index]}
                    title={ele.header}
                    number={ele.figure}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-3/4 p-4 ">
        <div id="option1" className="mb-4 p-4 border rounded shadow h-[600px]">
          <h3 className="font-bold">Total Inventory: 100</h3>
          <p>Total items Sold 50</p>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
}
