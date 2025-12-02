import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { ClientsTable } from "@/components/clients/ClientsTable";
import { ClientStats } from "@/components/clients/ClientStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Download } from "lucide-react";

const clients = [
  {
    id: "1",
    name: "Carlos Eduardo Silva",
    email: "carlos.silva@email.com",
    phone: "(12) 99876-5432",
    status: "active" as const,
    interests: ["Apartamento", "Vista Mar", "3 quartos"],
    lastContact: "Hoje",
  },
  {
    id: "2",
    name: "Ana Paula Ferreira",
    email: "ana.ferreira@email.com",
    phone: "(12) 98765-4321",
    status: "lead" as const,
    interests: ["Casa", "Praia Grande"],
    lastContact: "Ontem",
  },
  {
    id: "3",
    name: "Roberto Mendes",
    email: "roberto.m@email.com",
    phone: "(11) 97654-3210",
    status: "active" as const,
    interests: ["Cobertura", "Luxo", "Beira Mar"],
    lastContact: "3 dias atrás",
  },
  {
    id: "4",
    name: "Juliana Costa",
    email: "juliana.costa@email.com",
    phone: "(12) 96543-2109",
    status: "inactive" as const,
    interests: ["Studio", "Investimento"],
    lastContact: "1 semana atrás",
  },
  {
    id: "5",
    name: "Fernando Gomes",
    email: "fernando.g@email.com",
    phone: "(11) 95432-1098",
    status: "active" as const,
    interests: ["Casa", "4 quartos", "Piscina"],
    lastContact: "2 dias atrás",
  },
  {
    id: "6",
    name: "Mariana Oliveira",
    email: "mariana.o@email.com",
    phone: "(12) 94321-0987",
    status: "lead" as const,
    interests: ["Apartamento", "2 quartos"],
    lastContact: "Hoje",
  },
  {
    id: "7",
    name: "Pedro Henrique Santos",
    email: "pedro.santos@email.com",
    phone: "(11) 93210-9876",
    status: "active" as const,
    interests: ["Terreno", "Construção"],
    lastContact: "4 dias atrás",
  },
  {
    id: "8",
    name: "Camila Rodrigues",
    email: "camila.r@email.com",
    phone: "(12) 92109-8765",
    status: "lead" as const,
    interests: ["Apartamento", "Vista Mar", "Novo"],
    lastContact: "Ontem",
  },
];

const Clients = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-sand">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <Topbar
        sidebarCollapsed={sidebarCollapsed}
        onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main
        className={cn(
          "pt-16 min-h-screen transition-all duration-300",
          sidebarCollapsed ? "lg:pl-20" : "lg:pl-72"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Clientes
            </h1>
            <p className="text-muted-foreground mt-1">
              Gerencie sua base de clientes e leads
            </p>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <ClientStats />
          </div>

          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar clientes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-border bg-card h-11"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl h-11 border-border">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" className="rounded-xl h-11 border-border">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button className="rounded-xl h-11 bg-ocean hover:bg-ocean-dark text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Novo Cliente
              </Button>
            </div>
          </div>

          {/* Table */}
          <ClientsTable clients={filteredClients} />

          {/* Pagination hint */}
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <p>Mostrando {filteredClients.length} de {clients.length} clientes</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clients;
