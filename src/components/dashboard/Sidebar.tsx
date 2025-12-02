import { cn } from "@/lib/utils";
import { WaveIcon } from "@/components/icons/WaveIcon";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  MapPin,
  Heart,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Building2, label: "Imóveis", href: "#", badge: 24 },
  { icon: MapPin, label: "Localizações", href: "#" },
  { icon: Users, label: "Clientes", href: "/clientes", badge: 8 },
  { icon: Heart, label: "Favoritos", href: "#" },
  { icon: Calendar, label: "Agendamentos", href: "#", badge: 3 },
  { icon: MessageSquare, label: "Mensagens", href: "#", badge: 12 },
  { icon: TrendingUp, label: "Relatórios", href: "#" },
  { icon: FileText, label: "Contratos", href: "#" },
];

const bottomNavItems = [
  { icon: Settings, label: "Configurações", href: "#" },
];

export const Sidebar = ({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) => {
  const location = useLocation();
  
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col",
          collapsed ? "w-20" : "w-72",
          "max-lg:w-72 max-lg:-translate-x-full",
          mobileOpen && "max-lg:translate-x-0"
        )}
      >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-ocean flex items-center justify-center shadow-ocean">
            <WaveIcon className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <h1 className="font-display font-semibold text-foreground leading-tight">
                Recanto
              </h1>
              <span className="text-xs text-muted-foreground">das Ondas</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto scrollbar-thin">
        <div className="space-y-1">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "nav-item group",
                  isActive && "active",
                  "animate-slide-in-left"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 flex-shrink-0 transition-colors",
                    isActive ? "text-ocean" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-ocean/10 text-ocean">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {collapsed && item.badge && (
                  <span className="absolute right-2 top-1 w-2 h-2 rounded-full bg-ocean" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-3 border-t border-sidebar-border">
        {bottomNavItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-item group">
            <item.icon className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
            {!collapsed && <span className="flex-1">{item.label}</span>}
          </a>
        ))}

        {/* Collapse Button */}
        <button
          onClick={onToggle}
          className="nav-item group w-full mt-2 justify-center hidden lg:flex"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="flex-1 text-left">Recolher</span>
            </>
          )}
        </button>
      </div>
    </aside>
    </>
  );
};
