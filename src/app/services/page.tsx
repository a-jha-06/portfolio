import Link from "next/link";
import { Section } from "@/components/shared/Section";
import {
  commerceServices,
  serviceIntro,
  techStackCategories,
} from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "Tech stack and commerce services — React, Next.js, Shopify, Liquid, integrations, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Tech stack & commerce capabilities"
        description={serviceIntro}
      >
      

        <div className="space-y-14">
          {techStackCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-zinc-400">
                {category.description}
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-xl border border-white/8 bg-white/[0.02] p-4 transition hover:border-emerald-500/25"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && (
                        <span className="text-lg" aria-hidden>
                          {item.icon}
                        </span>
                      )}
                      <span className="font-medium text-white">{item.name}</span>
                    </div>
                    {item.description && (
                      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What I deliver"
        title="Commerce services"
        description="End-to-end Shopify and frontend work — from theme builds to integrations and product-minded consulting."
        className="bg-white/[0.02]"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {commerceServices.map((service) => (
            <li
              key={service.title}
              className="rounded-xl border border-white/8 p-5"
            >
              <h3 className="font-semibold text-emerald-300">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {service.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-[#0b0f0d] hover:bg-emerald-400"
          >
            View product work →
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
          >
            Get in touch
          </Link>
        </div>
      </Section>
    </>
  );
}
