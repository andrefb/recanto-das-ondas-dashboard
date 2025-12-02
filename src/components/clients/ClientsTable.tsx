import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Phone, Mail, Eye, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "lead";
  interests: string[];
  lastContact: string;
  avatar?: string;
}

interface ClientsTableProps {
  clients: Client[];
}

const statusStyles = {
  active: "bg-seafoam/20 text-seafoam-dark border-seafoam/30",
  inactive: "bg-muted text-muted-foreground border-border",
  lead: "bg-ocean/10 text-ocean border-ocean/30",
};

const statusLabels = {
  active: "Ativo",
  inactive: "Inativo",
  lead: "Lead",
};

export const ClientsTable = ({ clients }: ClientsTableProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden animate-fade-in">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="text-muted-foreground font-medium">Cliente</TableHead>
            <TableHead className="text-muted-foreground font-medium hidden md:table-cell">Contato</TableHead>
            <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">Interesses</TableHead>
            <TableHead className="text-muted-foreground font-medium">Status</TableHead>
            <TableHead className="text-muted-foreground font-medium hidden sm:table-cell">Último Contato</TableHead>
            <TableHead className="text-muted-foreground font-medium text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow
              key={client.id}
              className="border-border hover:bg-muted/30 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean to-seafoam flex items-center justify-center text-primary-foreground font-medium text-sm flex-shrink-0">
                    {client.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{client.name}</p>
                    <p className="text-sm text-muted-foreground md:hidden">{client.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{client.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{client.phone}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <div className="flex flex-wrap gap-1.5">
                  {client.interests.slice(0, 2).map((interest) => (
                    <span
                      key={interest}
                      className="px-2 py-0.5 text-xs rounded-full bg-sand/50 text-sand-dark"
                    >
                      {interest}
                    </span>
                  ))}
                  {client.interests.length > 2 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                      +{client.interests.length - 2}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn("rounded-full font-medium", statusStyles[client.status])}
                >
                  {statusLabels[client.status]}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm hidden sm:table-cell">
                {client.lastContact}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40 rounded-xl">
                    <DropdownMenuItem className="rounded-lg cursor-pointer">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver detalhes
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg cursor-pointer">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg cursor-pointer text-destructive focus:text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
