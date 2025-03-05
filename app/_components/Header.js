import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-400/10 px-6 py-4 shadow backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between text-white">
        <Logo />
        <Navigation />
        <HamburgerMenu />
      </div>
    </nav>
  );
}
