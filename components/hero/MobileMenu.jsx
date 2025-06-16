export default function MobileMenu({ onClose }) {
  const menuItems = ["home", "paket", "fasilitas", "artikel", "about"];

  return (
    <nav className="md:hidden px-6 py-4 bg-white shadow-md">
      {menuItems.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={onClose}
          className="block py-2 text-gray-700 hover:text-[#3D6CB9] transition font-medium capitalize"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
