import { Plus, Users, Calendar, FileText, Camera, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { icon: Plus, label: "Novo Imóvel", color: "bg-ocean text-primary-foreground" },
  { icon: Users, label: "Add Cliente", color: "bg-seafoam text-seafoam-dark" },
  { icon: Calendar, label: "Agendar", color: "bg-sand text-foreground" },
  { icon: Camera, label: "Upload Fotos", color: "bg-shell text-foreground" },
  { icon: Send, label: "Enviar Proposta", color: "bg-accent text-accent-foreground" },
  { icon: FileText, label: "Gerar Relatório", color: "bg-ocean-light text-ocean" },
];

export const QuickActions = () => {
  return (
    <div className="bg-card rounded-2xl border border-border/40 shadow-soft p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <h2 className="font-display font-semibold text-lg text-foreground mb-4">
        Ações Rápidas
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-all hover:-translate-y-0.5 group animate-fade-in"
            style={{ animationDelay: `${400 + index * 50}ms` }}
          >
            <div
              className={cn(
                "p-3 rounded-xl transition-transform group-hover:scale-110",
                action.color
              )}
            >
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
