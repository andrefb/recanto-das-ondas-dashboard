import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { StatCard } from "@/components/dashboard/StatCard";
import { PropertyCard } from "@/components/dashboard/PropertyCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { Building2, Users, Eye, TrendingUp } from "lucide-react";

const properties = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Apartamento Vista Mar",
    location: "Praia Grande, Ubatuba",
    price: "R$ 1.250.000",
    beds: 3,
    baths: 2,
    area: "120m²",
    featured: true,
    status: "available" as const,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Cobertura Duplex Beira Mar",
    location: "Praia do Tenório, Ubatuba",
    price: "R$ 2.800.000",
    beds: 4,
    baths: 3,
    area: "220m²",
    status: "reserved" as const,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Casa Dunas do Sol",
    location: "Praia das Toninhas",
    price: "R$ 980.000",
    beds: 3,
    baths: 2,
    area: "150m²",
    status: "available" as const,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    title: "Studio Maresia",
    location: "Centro, Ubatuba",
    price: "R$ 450.000",
    beds: 1,
    baths: 1,
    area: "45m²",
    status: "available" as const,
  },
];

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-sand">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Topbar */}
      <Topbar
        sidebarCollapsed={sidebarCollapsed}
        onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Main Content */}
      <main
        className={cn(
          "pt-16 min-h-screen transition-all duration-300",
          sidebarCollapsed ? "lg:pl-20" : "lg:pl-72"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Welcome Header */}
          <WelcomeHeader />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              title="Imóveis Ativos"
              value="24"
              change="+3"
              changeType="positive"
              icon={Building2}
              iconBg="bg-ocean-light"
              delay={100}
            />
            <StatCard
              title="Clientes"
              value="156"
              change="+12"
              changeType="positive"
              icon={Users}
              iconBg="bg-seafoam"
              delay={150}
            />
            <StatCard
              title="Visitas do Mês"
              value="89"
              change="+23%"
              changeType="positive"
              icon={Eye}
              iconBg="bg-sand"
              delay={200}
            />
            <StatCard
              title="Vendas do Mês"
              value="R$ 3.2M"
              change="+18%"
              changeType="positive"
              icon={TrendingUp}
              iconBg="bg-shell"
              delay={250}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart */}
            <div className="lg:col-span-2">
              <SalesChart />
            </div>

            {/* Quick Actions */}
            <div>
              <QuickActions />
            </div>
          </div>

          {/* Properties Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Imóveis em Destaque
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Seus imóveis mais recentes e populares
                </p>
              </div>
              <button className="text-sm text-ocean hover:text-ocean-dark transition-colors font-medium">
                Ver todos →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {properties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  delay={300 + index * 100}
                />
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActivityFeed />

            {/* Summary Card */}
            <div
              className="bg-gradient-ocean rounded-2xl p-6 text-primary-foreground animate-fade-in relative overflow-hidden"
              style={{ animationDelay: "500ms" }}
            >
              {/* Wave decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-display font-semibold mb-2">
                  Resumo do Mês
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-6">
                  Você está indo muito bem! Continue assim.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-display font-bold">8</p>
                    <p className="text-sm text-primary-foreground/80">
                      Vendas fechadas
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-display font-bold">34</p>
                    <p className="text-sm text-primary-foreground/80">
                      Visitas realizadas
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 rounded-xl bg-primary-foreground text-ocean font-medium hover:bg-primary-foreground/90 transition-colors">
                  Ver relatório completo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
