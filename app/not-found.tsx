import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-full content-center text-center">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="text-primary-800 mt-4 inline-flex items-center gap-2 rounded border px-6 py-3 text-lg"
      >
        <ArrowLeftIcon className="w-6" />
        <span>Go back home</span>
      </Link>
    </div>
  );
}

export default NotFound;
