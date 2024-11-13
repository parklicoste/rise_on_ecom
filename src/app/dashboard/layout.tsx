import { AiOutlineMenu } from "react-icons/ai"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='text-black relative bg-gray-100'>
                <div className='font-bold text-center pt-8'>
                    <h1 className='text-4xl text-[#000]'>Dashboard</h1>
                </div>
            <div className={"flex fixed left-0 top-0 z-50 w-full" }>
                    <div className="flex-none px-4 py-2 cursor-pointer">
                        <div className=" fixed top-12 right-5 border rounded text-black/70 border-black/70 p-2 z-50">
                            <AiOutlineMenu size={30} />
                        </div>
                    </div>
            </div>

        <div className=" flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100">
            <div className="w-full flex-none md:w-64">
                <div className="w-1/4 p-10 items-center text-lg">
                    <h2 className="text-xl font-bold mb-4">Options</h2>
                    <ul>
                    <li className="mb-2 ">
                        <a href="/dashboard/[marketplace]" className="text-blue-500 hover:underline">Flipkart</a>
                    </li>
                    <li className="mb-2">
                        <a href="#option2" className="text-blue-500 hover:underline">Amazon</a>
                    </li>
                    <li className="mb-2">
                        <a href="#option3" className="text-blue-500 hover:underline">Meesho</a>
                    </li>
                    </ul>
                </div>
            </div>
   
        <div className="flex-grow p-6 md:p-12"> {children} </div>
      </div>
      </div>
    )
  }