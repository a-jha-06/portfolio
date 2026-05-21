import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProductBySlug, getProducts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return {
    title: product?.title ?? "Product",
    description: product?.tagline ?? product?.excerpt,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
