import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", vendas: 4, visitas: 24 },
  { month: "Fev", vendas: 3, visitas: 18 },
  { month: "Mar", vendas: 5, visitas: 32 },
  { month: "Abr", vendas: 7, visitas: 45 },
  { month: "Mai", vendas: 6, visitas: 38 },
  { month: "Jun", vendas: 8, visitas: 52 },
];

export const SalesChart = () => {
  return (
    <div className="bg-card rounded-2xl border border-border/40 shadow-soft p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display font-semibold text-lg text-foreground">
            Desempenho
          </h2>
          <p className="text-sm text-muted-foreground">
            Vendas e visitas dos últimos 6 meses
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-ocean" />
            <span className="text-xs text-muted-foreground">Vendas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-seafoam-dark" />
            <span className="text-xs text-muted-foreground">Visitas</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(200, 45%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(200, 45%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorVisitas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(175, 40%, 40%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(175, 40%, 40%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(35, 20%, 90%)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(210, 15%, 50%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(210, 15%, 50%)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(35, 20%, 90%)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(210, 25%, 20%)", fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="visitas"
              stroke="hsl(175, 40%, 40%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorVisitas)"
            />
            <Area
              type="monotone"
              dataKey="vendas"
              stroke="hsl(200, 45%, 45%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorVendas)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
