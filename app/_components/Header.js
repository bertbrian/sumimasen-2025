import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <nav className="px-6 sticky top-0 py-4 backdrop-blur z-10">
      <div className="flex items-center justify-between text-white">
        <Logo />
        <Navigation />
        <HamburgerMenu />
      </div>
    </nav>
  );
}
