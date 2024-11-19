import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="w-full flex-none md:w-64">
        <div className="w-1/4 p-10 items-center text-lg">
          <h2 className="text-xl font-bold mb-4">Options</h2>
          <ul>
            <li className="mb-2 w-[4rem]">
              <a href="/dashboard/allsales" className="text-blue-500 hover:underline">All Sales</a>
            </li>
            <li className="mb-2 ">
              <a
                href="/dashboard/[marketplace]"
                className="text-blue-500 hover:underline"
              >
                Flipkart
              </a>
            </li>
            <li className="mb-2">
              <a href="#option2" className="text-blue-500 hover:underline">
                Amazon
              </a>
            </li>
            <li className="mb-2">
              <a href="#option3" className="text-blue-500 hover:underline">
                Meesho
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;