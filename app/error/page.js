"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error");

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold text-center">ERROR, {error}</h2>

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
