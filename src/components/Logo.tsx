import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`} aria-label="SIMCO Informática, página inicial">
      <Image src="/img/simco-logo.png" alt="" width={500} height={250} priority className="h-12 w-auto md:h-[3.75rem]" />
    </Link>
  );
}
