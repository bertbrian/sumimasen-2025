import Link from "next/link";
import Navigation from "./navigation";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-slate-400/10 px-6 py-4 shadow backdrop-blur-sm">
      <div className="wrapper mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
        {/* Sheets blum */}
      </div>
    </header>
  );
};

export default Header;
