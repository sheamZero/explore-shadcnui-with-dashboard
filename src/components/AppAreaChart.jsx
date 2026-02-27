"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
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
    label: "React JS",
    color: "var(--chart-1)",
  },
  nextjs: {
    label: "Next JS",
    color: "var(--chart-2)",
  },
}

export default function AppAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technology Growth Trend</CardTitle>
        <CardDescription>
          React JS vs Next JS adoption (Jan - Jun 2026)
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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

            <defs>
              <linearGradient id="fillReact" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-reactjs)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-reactjs)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillNext" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-nextjs)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-nextjs)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="nextjs"
              type="natural"
              fill="url(#fillNext)"
              stroke="var(--color-nextjs)"
              stackId="1"
            />

            <Area
              dataKey="reactjs"
              type="natural"
              fill="url(#fillReact)"
              stroke="var(--color-reactjs)"
              stackId="1"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              React ecosystem growing steadily{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2026
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}