"use client";

import { Card } from "@/components/ui/Card";

// Przykładowe dane, które w przyszłości będą pobierane z API
const statsData = {
  monthlyRevenue: 45231.89,
  dietsSoldToday: 78,
  activeOrders: 125,
  newClientsThisMonth: 24,
  activeClients: 112,
  loyalClients: 67,
};

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card 
        title="Przychód (miesiąc)" 
        value={`${statsData.monthlyRevenue.toFixed(2)} PLN`}
        description="Przychód w bieżącym miesiącu"
      />
      <Card 
        title="Sprzedane diety (dziś)" 
        value={statsData.dietsSoldToday}
        description="Liczba zamówionych diet dzisiaj"
      />
      <Card 
        title="Aktywne zamówienia" 
        value={statsData.activeOrders}
        description="Zamówienia w trakcie realizacji"
      />
      <Card 
        title="Nowi klienci (miesiąc)" 
        value={statsData.newClientsThisMonth}
        description="Liczba nowych klientów w tym miesiącu"
      />
      <Card 
        title="Aktywni klienci" 
        value={statsData.activeClients}
        description="Klienci z aktywną subskrypcją"
      />
      <Card 
        title="Stali klienci" 
        value={statsData.loyalClients}
        description="Klienci z więcej niż 3 zamówieniami"
      />
    </div>
    );
}