import { ProductCard } from "@/components/products/ProductCard";
import { Section } from "@/components/shared/Section";
import { getProducts } from "@/lib/content";

export const metadata = {
  title: "Products",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Section
      eyebrow="Portfolio"
      title="Product ideas & SaaS concepts"
      description="App concepts, business opportunities, and commerce products — each with PRD-level depth."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </Section>
  );
}
