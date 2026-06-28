export default function Footer() {
  const links = ["Intro", "About Us", "Contact Us", "Changelog", "DMCA", "Cookie Policy", "Privacy Policy", "Terms of Use", "Stats"]

  return (
    <footer className="border-t border-white/10 bg-navbar text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm mb-4">
          {links.map(link => (
            <a key={link} href="#" className="hover:text-white/80 transition-colors hover:no-underline">
              {link}
            </a>
          ))}
        </div>
        <div></div>
        <div className="flex items-center justify-center gap-2 text-xs mt-4">
          <span>Copyright &copy; 2022 - wtr-lab.com</span>
          <a href="#" className="hover:text-white/80 transition-colors">
            <b>v1.13.3</b>
          </a>
        </div>
      </div>
    </footer>
  )
}
