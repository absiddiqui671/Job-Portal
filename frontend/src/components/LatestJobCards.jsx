import { Badge } from "./ui/badge";
import React from "react";



const LatestJobCards = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-700 cursor-pointer">
            <div>
                <h1 className="font-medium text-lg">Company Name</h1>
                <p className="text-sm text-gray-500">Satarkul</p>
            </div>
            <div>
                <h1 className="font-bold text-lg mt-4">Job Title</h1>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nihil!</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 positions</Badge>
                <Badge className={'text-[#f83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#6a38c2] font-bold'} variant="ghost">18000</Badge>
            </div>
        </div>
    )
}
export default LatestJobCards;