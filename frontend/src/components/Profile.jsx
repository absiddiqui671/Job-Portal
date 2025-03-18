import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";

const skills = ["Html", "Css", "Javascript", "React"]

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://seeklogo.com/images/D/diu-university-logo-0C53AF6B5B-seeklogo.com.png" />
                        </Avatar>
                        <div>
                            <h1 className="font-medium text-xl">Full Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, architecto?</p>
                        </div>
                    </div>
                    <Button className="text-right" varient="outline"><Pen /></Button>
                </div>
                <div>
                    <div className="flex items-center gap-3 my-2">
                        <Mail />
                        <span>absiddiqui671@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <Contact />
                        <span>01711648714</span>
                    </div>
                </div>
                <div className="my-5">
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1 my-2">
                        {
                            skills.length != 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile