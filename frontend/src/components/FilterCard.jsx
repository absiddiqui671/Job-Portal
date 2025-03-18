import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
    {
        filterType: "Location",
        array: ["Old Campus", "New Campus"]
    },
    {
        filterType: "JobType",
        array: ["Frontend Developer", "Backend Developer", "Graphic Designer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-15k", "15k-20k", "20k-40k"]
    },
];

const FilterCard = () => {
    return (
        <div className="w-full bg-white p-3 rounded-md">
            <h1 className="font-bold text-lg">Filter Jobs</h1>
            <hr className="mt-3" />
            <RadioGroup>
                {filterData.map((data, sectionIndex) => (
                    <div key={`section-${sectionIndex}`}>
                        <h1 className="font-bold text-lg">{data.filterType}</h1>
                        {data.array.map((item, itemIndex) => (
                            <div key={`item-${sectionIndex}-${itemIndex}`} className="flex items-center space-x-2 my-2">
                                <RadioGroupItem
                                    value={item}
                                    id={`radio-${sectionIndex}-${itemIndex}`}
                                />
                                <Label htmlFor={`radio-${sectionIndex}-${itemIndex}`}>{item}</Label>
                            </div>
                        ))}
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
