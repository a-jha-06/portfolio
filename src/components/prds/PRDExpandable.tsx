"use client";

import { useState } from "react";
import Link from "next/link";
import { PortableText } from "@/components/shared/PortableText";
import type { PRD } from "@/types/content";

export function PRDExpandable({ prd }: { prd: PRD }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.02] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-white/[0.03]"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white">{prd.title}</h3>
            {prd.status && (
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs capitalize text-zinc-400">
                {prd.status}
              </span>
            )}
          </div>
          {prd.productTitle && (
            <p className="text-xs text-emerald-400/80">→ {prd.productTitle}</p>
          )}
          {prd.summary && (
            <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{prd.summary}</p>
          )}
        </div>
        <span
          className={`mt-1 shrink-0 text-emerald-400 transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="border-t border-white/8 px-5 pb-5 pt-4">
          {prd.body?.length ? (
            <PortableText value={prd.body} />
          ) : (
            <p className="text-sm text-zinc-500">
              Full PRD content is in Sanity CMS. Connect your project to edit.
            </p>
          )}
          <Link
            href={`/prds/${prd.slug}`}
            className="mt-4 inline-block text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            Open full PRD page →
          </Link>
        </div>
      )}
    </div>
  );
}
