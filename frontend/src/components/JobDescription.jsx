import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


const JobDescription = () => {
    const isApplied = false;
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-bold mx-auto my-10">Frontend Developer</h1>
                    <div className="flex items-center gap-2 mt-4">
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 positions</Badge>
                        <Badge className={'text-[#f83002] font-bold'} variant="ghost">Part Time</Badge>
                        <Badge className={'text-[#6a38c2] font-bold'} variant="ghost">18000</Badge>
                    </div>
                </div>
                <Button
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-[#f83002] cursor-not-allowed' : 'bg-gray-500 hover:bg-[#6a38c2]'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
        <div className="my-4">
            <h1 className="font-bold my-1">Role:    <span className="pl-4 font-normal text-gray-800">Frontend Developer   </span></h1>
            <h1 className="font-bold my-1">Location:    <span className="pl-4 font-normal text-gray-800">Satarkul   </span></h1>
            <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, earum.   </span></h1>
            <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 YRS    </span></h1>
            <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">20000    </span></h1>
            <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">4  </span></h1>
            <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">17-03-25   </span></h1>
        </div>
        </div>
    )
}
export default JobDescription