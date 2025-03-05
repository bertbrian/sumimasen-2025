import Image from "next/image";
import Link from "next/link";

export default function LinkNewTab({ href, icon, onClick, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="rounded-md py-4 transition hover:bg-slate-400/20"
      >
        <Image
          src={icon}
          alt={icon}
          width={100}
          height={100}
          className="mx-auto aspect-square"
        />
        <span className="p-4">{children}</span>
      </a>
    </Link>
  );
}
