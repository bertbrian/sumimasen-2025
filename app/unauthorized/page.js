import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold text-center">
        You are not admin
        <br />
        We&apos;re sorry👋
      </h2>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary-800 px-6 py-3 mt-4 text-lg border rounded"
      >
        <ArrowLeftIcon className="w-6" />
        <span>Go back home</span>
      </Link>
    </div>
  );
}
