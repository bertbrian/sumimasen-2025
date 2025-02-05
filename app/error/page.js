"use client";

import { useSearchParams } from "next/navigation";
import SignOutButton from "../_components/SignOutButton";

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error");

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold text-center">
        You are not admin
        <br />
        We&apos;re sorry👋
      </h2>

      <div className="border rounded">
        <SignOutButton />
      </div>
    </div>
  );
}
