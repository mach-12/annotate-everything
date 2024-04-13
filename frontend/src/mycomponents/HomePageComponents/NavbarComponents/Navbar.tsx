import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { useUsernameStore } from "@/store/userStore";

export function Navbar() {
  const username = useUsernameStore((state) => state.username);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        {username !== "" && (
          <div className="ml-auto flex items-center text-sm italic space-x-4">
            Hello
            <span className="inline bg-gradient-to-r text-md from-emerald-500 to-lime-600 text-transparent bg-clip-text">
              &nbsp;{username}
            </span>
            <UserNav user={username} />
          </div>
        )}
      </div>
    </div>
  );
}
