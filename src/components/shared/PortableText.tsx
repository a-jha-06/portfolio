"use client";

import { PortableText as PortableTextRenderer } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-8 mb-3 text-xl font-semibold text-white">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-6 mb-2 text-lg font-medium text-white">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-zinc-300 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-4 border-l-2 border-emerald-500/60 pl-4 text-zinc-400 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4 list-disc space-y-1 pl-5 text-zinc-300">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 list-decimal space-y-1 pl-5 text-zinc-300">{children}</ol>
    ),
  },
};

export function PortableText({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null;
  return <PortableTextRenderer value={value} components={components} />;
}
