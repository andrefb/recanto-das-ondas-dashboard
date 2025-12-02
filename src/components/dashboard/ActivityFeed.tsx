import { MessageSquare, Calendar, FileText, User, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "message" | "appointment" | "contract" | "client" | "view";
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "message",
    title: "Nova mensagem",
    description: "Carlos Silva perguntou sobre o apartamento na Praia Grande",
    time: "Agora",
  },
  {
    id: "2",
    type: "appointment",
    title: "Visita agendada",
    description: "Ana Costa - Cobertura Beira Mar às 15:00",
    time: "30 min",
  },
  {
    id: "3",
    type: "view",
    title: "Imóvel visualizado",
    description: "Casa Dunas do Sol teve 12 visualizações hoje",
    time: "1h",
  },
  {
    id: "4",
    type: "client",
    title: "Novo cliente",
    description: "Pedro Mendes se cadastrou pelo site",
    time: "2h",
  },
  {
    id: "5",
    type: "contract",
    title: "Contrato assinado",
    description: "Apartamento Maresia - R$ 850.000",
    time: "3h",
  },
];

const iconMap = {
  message: MessageSquare,
  appointment: Calendar,
  contract: FileText,
  client: User,
  view: Eye,
};

const iconBgMap = {
  message: "bg-ocean-light text-ocean",
  appointment: "bg-seafoam text-seafoam-dark",
  contract: "bg-sand text-sand-dark",
  client: "bg-accent text-accent-foreground",
  view: "bg-shell text-foreground",
};

export const ActivityFeed = () => {
  return (
    <div className="bg-card rounded-2xl border border-border/40 shadow-soft p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-semibold text-lg text-foreground">
          Atividade Recente
        </h2>
        <button className="text-sm text-ocean hover:text-ocean-dark transition-colors font-medium">
          Ver tudo
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type];
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group animate-slide-in-left"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div
                className={cn(
                  "p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105",
                  iconBgMap[activity.type]
                )}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
