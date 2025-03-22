import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";


const AppliedJobTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of Your recent applied jobs</TableCaption>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
                <TableBody>
                    {
                        [1,2,3,4].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>17-07-25</TableCell>
                                <TableCell>Frontend Developer</TableCell>
                                <TableCell>Dhaka International University</TableCell>
                                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
export default AppliedJobTable