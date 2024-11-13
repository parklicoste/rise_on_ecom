'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'chart.js/auto';



// data that we will receive from API
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Line Chart for products sold per months',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0,
    },
  ],
};
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

export default async function MarketPlace({
    params,
  }: {
    params: Promise<{ marketplace: string }>
  }) {
    const slug = (await params).marketplace
    return (
    <div className="flex pt-8 h-full w-full">
      {/* Left Column */}
      

      {/* Right Column */}
      <div className="w-3/4 p-4 ">
        <div id="option1" className="mb-4 p-4 border rounded shadow h-[600px]">
          <h3 className="font-bold">Total Inventory: 100</h3>
          <p>Total items Sold 50</p>
          <Line data={data}/>
        </div>
      </div>
    </div>
  );
};
