import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type MouseEvent } from "react";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLoginRouter = (e: MouseEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/auth/signin");
  };
  return (
    <header>
      {/* Logo */}
      <div>
        <h2>FSI</h2>
      </div>

      <nav></nav>

      {!session && (
        <button onClick={(e) => handleLoginRouter(e)}>Login</button>
      )}
    </header>
  );
};

export default Header;
