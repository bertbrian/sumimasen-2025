import SignInButton from "../_components/SignInButton";
import SignOutButton from "../_components/SignOutButton";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Login",
};

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      {session ? (
        <>
          <h2 className="text-3xl font-semibold">
            You are not admin, get out 👋
          </h2>
          <div className="border rounded">
            <SignOutButton />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold">
            Sign in to access your account
          </h2>
          <SignInButton />
        </>
      )}
    </div>
  );
}
