import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconBg?: string;
  delay?: number;
}

export const StatCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconBg = "bg-ocean-light",
  delay = 0,
}: StatCardProps) => {
  return (
    <div
      className="stat-card animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            {value}
          </p>
        </div>
        <div
          className={cn(
            "p-3 rounded-xl",
            iconBg
          )}
        >
          <Icon className="w-5 h-5 text-ocean" />
        </div>
      </div>

      {change && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
          {changeType === "positive" ? (
            <div className="flex items-center gap-1 text-seafoam-dark">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">{change}</span>
            </div>
          ) : changeType === "negative" ? (
            <div className="flex items-center gap-1 text-destructive">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">{change}</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">{change}</span>
          )}
          <span className="text-xs text-muted-foreground">vs. mês anterior</span>
        </div>
      )}
    </div>
  );
};
