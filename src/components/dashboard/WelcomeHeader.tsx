import { Sun, CloudSun, Waves } from "lucide-react";

export const WelcomeHeader = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl bg-gradient-wave">
          {hour < 12 ? (
            <Sun className="w-6 h-6 text-ocean animate-wave" />
          ) : hour < 18 ? (
            <CloudSun className="w-6 h-6 text-ocean animate-wave" />
          ) : (
            <Waves className="w-6 h-6 text-ocean animate-wave" />
          )}
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            {greeting}, Marina! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Veja o que está acontecendo no Recanto das Ondas hoje.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-xl bg-seafoam/50 border border-seafoam-dark/20">
          <p className="text-xs text-muted-foreground">Temperatura</p>
          <p className="text-lg font-semibold text-seafoam-dark">28°C ☀️</p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-ocean-light/50 border border-ocean/20">
          <p className="text-xs text-muted-foreground">Ondas</p>
          <p className="text-lg font-semibold text-ocean">1.2m 🏄</p>
        </div>
      </div>
    </div>
  );
};
