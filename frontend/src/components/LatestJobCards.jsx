import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";
import React from "react";



const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className="p-5 rounded-md shadow-xl bg-white border border-gray-700 cursor-pointer">
            <div>
                <h1 className="font-medium text-lg">{job?.company?.name}</h1>
                <p className="text-sm text-gray-500">{job?.location}</p>
            </div>
            <div>
                <h1 className="font-bold text-lg mt-4">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}positions</Badge>
                <Badge className={'text-[#f83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#6a38c2] font-bold'} variant="ghost">{job?.salary}TK</Badge>
            </div>
        </div>
    )
}
export default LatestJobCards;