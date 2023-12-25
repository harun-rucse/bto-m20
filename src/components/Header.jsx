function Header() {
  return (
    <header className="bg-[#1b1203] px-6 lg:px-16 py-4 lg:py-6 flex items-center justify-between">
      <div className="flex items-center lg:gap-16">
        <h4 className="text-[#f19c6a] uppercase font-semibold lg:text-xl">BTOM20</h4>
        <ul className="hidden lg:flex items-center lg:gap-16 text-white">
          <li className="transition hover:text-[#f19c6a] cursor-pointer">Launchpad</li>
          <li className="transition hover:text-[#f19c6a] cursor-pointer">Indexer</li>
          <li className="transition hover:text-[#f19c6a] cursor-pointer">Tokens</li>
          <li className="transition hover:text-[#f19c6a] cursor-pointer">Rats Market</li>
        </ul>
      </div>
      <button className="bg-[#fd8725] px-4 py-2 rounded-lg text-black font-semibold text-sm lg:text-base">
        Connect wallet
      </button>
    </header>
  );
}

export default Header;
