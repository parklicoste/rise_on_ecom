import React from 'react';

const NestedLayout = () => {
  return (
    <div className="flex pt-8 h-full w-full">
      {/* Left Column */}
      <div className="w-1/4 bg-white-100 p-4">
        <h2 className="font-bold mb-4">Options</h2>
        <ul>
          <li className="mb-2">
            <a href="#option1" className="text-blue-500 hover:underline">Flipkart</a>
          </li>
          <li className="mb-2">
            <a href="#option2" className="text-blue-500 hover:underline">Amazon</a>
          </li>
          <li className="mb-2">
            <a href="#option3" className="text-blue-500 hover:underline">Meesho</a>
          </li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="w-3/4 p-4 ">
        <div id="option1" className="mb-4 p-4 border rounded shadow h-[400px]">
          <h3 className="font-bold">Total Inventory: 100</h3>
          <p>Total items Sold 50</p>
        </div>
      </div>
    </div>
  );
};

export default NestedLayout;
