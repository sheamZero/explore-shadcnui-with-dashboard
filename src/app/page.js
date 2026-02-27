import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <div className="p-4 rounded-lg border bg-primary-foreground lg:col-span-2">
        <AppBarChart />
      </div>
      <div className="p-4 rounded-lg border bg-primary-foreground">test</div>
      <div className="p-4 rounded-lg border bg-primary-foreground">
        <AppPieChart/>
      </div>
      <div className="p-4 rounded-lg border bg-primary-foreground">test</div>
      <div className="p-4 rounded-lg border bg-primary-foreground lg:col-span-2">
        <AppAreaChart/>
      </div>
      <div className="p-4 rounded-lg border bg-primary-foreground">test</div>

    </div>
  );
}
