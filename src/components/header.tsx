import { useEffect, useState } from "react";

export const HeaderBar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`flex fixed top-0 w-full flex-row p-7 justify-between items-center shadow-md duration-300 ${isScrolled ? "backdrop-blur-md bg-gray-100/70" : "bg-gray-100"}`}
    >
      <h1 className="text-3xl font-bold">Valentine Museum</h1>
      <nav className="flex flex-row gap-10">
        <a>Home</a>
        <a>Gallery</a>
        <a>Bio</a>
      </nav>
    </header>
  );
};
