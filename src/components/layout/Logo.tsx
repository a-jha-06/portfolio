import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
};

const sizes = {
  sm: { img: 32, class: "h-8 w-8" },
  md: { img: 40, class: "h-10 w-10" },
  lg: { img: 72, class: "h-16 w-16 sm:h-20 sm:w-20" },
};

export function Logo({
  href = "/",
  size = "md",
  showName = true,
  className = "",
}: LogoProps) {
  const { img, class: imgClass } = sizes[size];

  const content = (
    <>
      <Image
        src="/logo.png"
        alt="Amisha Jha"
        width={img}
        height={img}
        className={`${imgClass} shrink-0 object-contain`}
        priority={size !== "sm"}
      />
      {showName && (
        <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
          Amisha Jha
        </span>
      )}
    </>
  );

  const wrapClass = `group flex items-center gap-2.5 ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapClass}>
        {content}
      </Link>
    );
  }

  return <div className={wrapClass}>{content}</div>;
}
