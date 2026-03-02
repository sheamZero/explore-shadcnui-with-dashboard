"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { Calendar1Icon } from "lucide-react"
import { format } from "date-fns"
import { Checkbox } from "./ui/checkbox"
import { Field } from "./ui/field"
import { Label } from "./ui/label"

const tech = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "MongoDB",
    "Express",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "NodeJS",
    "MongoDB",
    "Express",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "PostgreSQL",
    "Redux",
    "NodeJS",
    "MongoDB",
    "Express",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "PostgreSQL",
    "Redux"
]

export default function AppScrollArea() {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState(
        tech.map(() => false) // initialize all to false
    );
    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="flex items-center w-full p-2 gap-2 mb-4">
                        <Calendar1Icon className="h-4 w-4" />
                        <span>
                            {date ? format(date, "PPP") : "Pick a date"}
                        </span>
                    </Button>
                </PopoverTrigger>

                <PopoverContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                        className="rounded-lg border"
                        captionLayout="dropdown"
                    />
                </PopoverContent>

            </Popover>
            <div>
                <ScrollArea className="h-100 w-full rounded-md border">
                    <div className="space-y-2 p-4">
                        {
                            tech.map((item, idx) => (
                                <div key={idx}>
                                    <Field orientation="horizontal" className="flex items-center">
                                        <Checkbox
                                            checked={checkedItems[idx]}
                                            onCheckedChange={(value) => {
                                                const newChecked = [...checkedItems];
                                                newChecked[idx] = value;
                                                setCheckedItems(newChecked);
                                            }}
                                            id={`tech-${idx}`}
                                            name={`tech-checkbox-${idx}`}
                                        />
                                        <Label htmlFor={`tech-${idx}`}>{item}</Label>
                                    </Field>
                                    <Separator className="my-4" />
                                </div>
                            ))
                        }
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}