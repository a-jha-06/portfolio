import { Section } from "@/components/shared/Section";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's build something merchants need"
      description="Replace this section with your email, Calendly, or LinkedIn."
    >
      <div className="max-w-md space-y-4">
        <a
          href="mailto:amishajha06@gmail.com"
          className="block rounded-xl border border-white/10 bg-white/[0.02] p-5 text-white transition hover:border-emerald-500/30"
        >
          <span className="text-sm text-zinc-500">Email</span>
          <span className="mt-1 block font-medium">amishajha06@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/amisha-jha-06999s/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-white/10 bg-white/[0.02] p-5 text-white transition hover:border-emerald-500/30"
        >
          <span className="text-sm text-zinc-500">LinkedIn</span>
          <span className="mt-1 block font-medium">Connect on LinkedIn →</span>
        </a>
      </div>
    </Section>
  );
}
