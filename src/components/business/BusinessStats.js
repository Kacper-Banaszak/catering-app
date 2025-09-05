// components/biznes/BusinessStats.js
import { Card } from "@/components/ui/Card";

export function BusinessStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Aktywne diety">56</Card>
      <Card title="Zawieszone">4</Card>
      <Card title="Średnia ocena">4.6</Card>
    </div>
  );
}
