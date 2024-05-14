import { auth } from "../auth";

export default async function AuthStatus() {
  const session = await auth();
  return (
    <div className="flex absolute top-5 justify-center items-center w-full">
      {session && (
        <p className="text-sm text-stone-200">
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  );
}

