import { ChevronDown, Filter, Grid3x3, List } from "lucide-react";
import { Button } from "./ui/button";

export default function ProductGridHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold">Каталог обуви</h2>
        <p className="text-sm text-muted-foreground">
          **кол-во товаров** товаров
        </p>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <select className="w-full sm:w-auto appearance-none bg-muted rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="popular">По популярности</option>
            <option value="price-asc">По возрастанию цены</option>
            <option value="price-desc">По убыванию цены</option>
            <option value="rating">По рейтингу</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>

        <div className="flex bg-muted rounded-lg p-1">
          <Button className={`p-2 rounded-md transition-colors `}>
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button className={`p-2 rounded-md transition-colors `}>
            <List className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" />
          Фильтры
        </Button>
      </div>
    </div>
  );
}
