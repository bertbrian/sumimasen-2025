import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <nav className="px-6 sticky top-0 py-4 backdrop-blur-sm z-10 border-b border-slate-400/10 shadow">
      <div className="container max-w-7xl mx-auto flex items-center justify-between text-white">
        <Logo />
        <Navigation />
        <HamburgerMenu />
      </div>
    </nav>
  );
}
