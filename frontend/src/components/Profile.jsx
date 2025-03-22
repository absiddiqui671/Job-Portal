import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialogue from "./UpdateProfileDialogue";
import { useState } from "react";

const skills = ["Html", "Css", "Javascript", "React"]
const isResume = true;
const Profile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
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
                    <Button onClick={() => setOpen(true)} className="text-right hover:bg-[#6a38c2]" varient="outline"><Pen /></Button>
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
                <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label className="text-md font-bold">Resume</Label>
                        {
                            isResume ? <a target="blank" href="https://cv.com/abubakarsiddiqui" className="text-blue-500 w-full hover:underline cursor-pointer">Abu bakar siddiqui</a> : <span>NA</span>
                        }
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                        <AppliedJobTable/>
                </div>
                <UpdateProfileDialogue open={open} setOpen={setOpen}/>
        </div>
    )
}
export default Profile