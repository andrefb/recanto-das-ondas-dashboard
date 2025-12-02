import { Search, Bell, Plus, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopbarProps {
  sidebarCollapsed: boolean;
  onMenuClick: () => void;
}

export const Topbar = ({ sidebarCollapsed, onMenuClick }: TopbarProps) => {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 h-16 bg-card/80 backdrop-blur-md border-b border-border/50 transition-all duration-300 left-0",
        sidebarCollapsed ? "lg:left-20" : "lg:left-72"
      )}
    >
      <div className="h-full px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Search */}
          <div className="hidden sm:flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-2.5 w-64 md:w-80 focus-within:ring-2 focus-within:ring-ocean/20 focus-within:bg-card transition-all">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar imóveis, clientes..."
              className="bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground flex-1 text-foreground"
            />
            <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium text-muted-foreground bg-background rounded border border-border">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Add Button */}
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-ocean text-primary-foreground rounded-xl text-sm font-medium hover:shadow-ocean transition-all hover:-translate-y-0.5">
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline">Novo Imóvel</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl hover:bg-muted transition-colors group">
            <Bell className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-coral rounded-full animate-pulse-soft" />
          </button>

          {/* User Avatar */}
          <button className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-muted transition-colors group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean to-seafoam-dark flex items-center justify-center text-primary-foreground font-medium text-sm">
              AA
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-foreground leading-tight">
                Aline Ane
              </p>
              <p className="text-xs text-muted-foreground">Corretora</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
