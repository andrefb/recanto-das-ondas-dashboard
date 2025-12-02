import { Users, UserPlus, UserCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total de Clientes",
    value: "156",
    icon: Users,
    color: "bg-ocean-light text-ocean",
  },
  {
    label: "Novos este mês",
    value: "12",
    icon: UserPlus,
    color: "bg-seafoam text-seafoam-dark",
  },
  {
    label: "Clientes Ativos",
    value: "89",
    icon: UserCheck,
    color: "bg-sand text-sand-dark",
  },
  {
    label: "Aguardando Retorno",
    value: "23",
    icon: Clock,
    color: "bg-shell text-shell-dark",
  },
];

export const ClientStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-card rounded-2xl border border-border p-4 shadow-soft animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.color)}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-display font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
