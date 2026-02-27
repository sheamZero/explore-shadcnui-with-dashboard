"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"
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
  { tech: "reactjs", visitors: 320, fill: "var(--chart-1)" },
  { tech: "nextjs", visitors: 260, fill: "var(--chart-2)" },
  { tech: "typescript", visitors: 210, fill: "var(--chart-3)" },
  { tech: "html", visitors: 180, fill: "var(--chart-4)" },
  { tech: "css", visitors: 150, fill: "var(--chart-5)" },
  { tech: "php", visitors: 120, fill: "var(--chart-6)" },
]

const chartConfig = {
  visitors: {
    label: "Usage",
  },
  reactjs: {
    label: "React JS",
    color: "var(--chart-1)",
  },
  nextjs: {
    label: "Next JS",
    color: "var(--chart-2)",
  },
  typescript: {
    label: "TypeScript",
    color: "var(--chart-3)",
  },
  html: {
    label: "HTML",
    color: "var(--chart-4)",
  },
  css: {
    label: "CSS",
    color: "var(--chart-5)",
  },
  php: {
    label: "PHP",
    color: "var(--chart-6)",
  },
}

export default function AppPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Technology Usage Distribution</CardTitle>
        <CardDescription>Project Stack Overview</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-72"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="tech" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="tech">
              <LabelList
                dataKey="tech"
                className="fill-background"
                stroke="none"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Growing adoption across full-stack technologies{" "}
          <TrendingUp className="h-4 w-5 text-green-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Represents overall project ecosystem distribution
        </div>
      </CardFooter>
    </Card>
  )
}