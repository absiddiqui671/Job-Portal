import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Herosection = () => {
    return (
        <div className="text-center">
            <div className="flex flex-col gap-5 my-10">
            <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium ">Best portal for job placement</span>
            <h1 className="text-5xl font-bold">Search, Apply & Get Your <span className="text-[#6a38c2]">Job</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt beatae aliquid nemo. Excepturi, ducimus vitae.</p>
            <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3   rounded-full items-center gap-4 mx-auto">
                <input
                type="text"
                placeholder="Find your jobs"
                className="outline-none border-none w-full" 
                />
                <Button className="rounded-r-full bg-[#6a38c2]">
                    <Search className="h-5 w-5"/>
                </Button>
            </div>
            </div>
        </div>
    )
}
export default Herosection