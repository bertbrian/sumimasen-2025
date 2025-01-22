import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between my-6 text-white">
        <Logo />
        <Navigation />

        <HamburgerMenu />
      </div>
    </nav>
  );
}
