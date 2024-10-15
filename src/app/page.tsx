import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { User } from "next-auth"; // Optional: For better type support

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div className="text-4xl font-bold mt-16 p-7 max-w-[1440px] min-w-[1200px] mx-auto">
          {/* Access user properties like name or email */}
          Welcome, {session.user?.name} Home Dashboard
        </div>
      ) : (
        <h1 className="text-5xl">
          You shall not pass
        </h1>
      )}
    </>
  );
}
