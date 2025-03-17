import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";


const Job = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className="flex items-center gap-2 my-2">
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://seeklogo.com/images/D/diu-university-logo-0C53AF6B5B-seeklogo.com.png" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-medium text-lg">Company Name</h1>
                    <p className="text-sm text-gray-500">Satarkul</p>
                </div>
            </div>
            <div>
                <h1 className="fot-bold text-lg my-2">Title</h1>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut veniam doloribus architecto magnam repellendus, tenetur corrupti cum maxime numquam.</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 positions</Badge>
                <Badge className={'text-[#f83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#6a38c2] font-bold'} variant="ghost">18000</Badge>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Button variant="outline">Details</Button>
                <Button className="bg-[#6a38c2]">Save for later</Button>
            </div>
        </div>
    )
}
export default Job