import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center h-full content-center">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block text-primary-800 px-6 py-3 mt-4 text-lg border rounded"
      >
        <span>
          <ArrowLeftIcon className="inline-block w-6" /> Go back home
        </span>
      </Link>
    </main>
  );
}

export default NotFound;
