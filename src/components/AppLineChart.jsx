"use client";

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "ReactJS vs NextJS line chart"

const chartData = [
  { month: "January", reactjs: 186, nextjs: 80 },
  { month: "February", reactjs: 305, nextjs: 200 },
  { month: "March", reactjs: 237, nextjs: 120 },
  { month: "April", reactjs: 173, nextjs: 190 },
  { month: "May", reactjs: 209, nextjs: 230 },
  { month: "June", reactjs: 264, nextjs: 240 },
]

const chartConfig = {
  reactjs: {
    label: "ReactJS",
    color: "var(--chart-1)",
  },
  nextjs: {
    label: "NextJS",
    color: "var(--chart-2)",
  },
}

export default function AppLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ReactJS vs NextJS</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line
              dataKey="reactjs"
              type="monotone"
              stroke="var(--color-reactjs)"
              strokeWidth={2}
              dot={false}
            />

            <Line
              dataKey="nextjs"
              type="monotone"
              stroke="var(--color-nextjs)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              ReactJS trending 8.4% higher this month
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Comparison of ReactJS and NextJS usage (6 months)
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}