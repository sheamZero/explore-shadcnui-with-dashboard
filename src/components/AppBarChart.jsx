
"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
    { month: "January", reactjs: 186, nextjs: 80 },
    { month: "February", reactjs: 305, nextjs: 200 },
    { month: "March", reactjs: 237, nextjs: 120 },
    { month: "April", reactjs: 73, nextjs: 190 },
    { month: "May", reactjs: 209, nextjs: 130 },
    { month: "June", reactjs: 214, nextjs: 140 },
];

const chartConfig = {
    reactjs: {
        label: "React JS",
        color: "#2563eb",
    },
    nextjs: {
        label: "Next JS",
        color: "#60a5fa",
    },
};


export default function AppBarChart() {

    return (
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="reactjs" fill="var(--chart-2)" radius={4} />
                <Bar dataKey="nextjs" fill="var(--chart-3)" radius={4} />
            </BarChart>
        </ChartContainer>

    )
};
