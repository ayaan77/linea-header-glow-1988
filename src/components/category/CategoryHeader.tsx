import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface CategoryHeaderProps {
  category: string;
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
}

const CategoryHeader = ({ category, filtersOpen, setFiltersOpen }: CategoryHeaderProps) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  const categories = ["Earrings", "Bracelets", "Rings", "Necklaces"];
  const priceRanges = ["Under €1,000", "€1,000 - €2,000", "€2,000 - €3,000", "Over €3,000"];
  const materials = ["Gold", "Silver", "Rose Gold", "Platinum"];

  return (
    <section className="w-full px-6 py-4">
      {/* Mobile: Centered title */}
      <div className="md:hidden text-center mb-3">
        <h1 className="text-[11px] font-light uppercase tracking-[0.2em]">
          Women · {capitalizedCategory}
        </h1>
      </div>

      <div className="flex justify-between items-center">
        {/* Desktop only breadcrumb */}
        <div className="hidden md:block">
          <Breadcrumb>
            <BreadcrumbList className="text-xs gap-1.5">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-muted-foreground font-light">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="[&>svg]:hidden after:content-['·'] after:text-muted-foreground after:mx-1" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground font-light text-xs">
                  {capitalizedCategory}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Mobile: push filter to right */}
        <div className="md:hidden flex-1" />

        <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-light hover:bg-transparent hover:underline px-0"
            >
              Filter By +
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background border-none shadow-none">
            <SheetHeader className="mb-6 border-b border-border pb-4">
              <SheetTitle className="text-lg font-light">Filters</SheetTitle>
            </SheetHeader>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-light mb-4 text-foreground">Category</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center space-x-3">
                      <Checkbox id={cat} className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" />
                      <Label htmlFor={cat} className="text-sm font-light text-foreground cursor-pointer">
                        {cat}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="border-border" />

              <div>
                <h3 className="text-sm font-light mb-4 text-foreground">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <div key={range} className="flex items-center space-x-3">
                      <Checkbox id={range} className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" />
                      <Label htmlFor={range} className="text-sm font-light text-foreground cursor-pointer">
                        {range}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="border-border" />

              <div>
                <h3 className="text-sm font-light mb-4 text-foreground">Material</h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center space-x-3">
                      <Checkbox id={material} className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" />
                      <Label htmlFor={material} className="text-sm font-light text-foreground cursor-pointer">
                        {material}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="border-border" />

              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="sm" className="w-full border-none hover:bg-transparent hover:underline font-normal text-left justify-start">
                  Apply Filters
                </Button>
                <Button variant="ghost" size="sm" className="w-full border-none hover:bg-transparent hover:underline font-light text-left justify-start">
                  Clear All
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default CategoryHeader;
