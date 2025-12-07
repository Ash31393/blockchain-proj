import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 flex justify-center gap-6 shadow">
      <Link href="/">
        <span className="hover:underline">Home</span>
      </Link>
      <Link href="/wallet">
        <span className="hover:underline">Wallet</span>
      </Link>
      <Link href="/nft">
        <span className="hover:underline">NFT Minting</span>
      </Link>
      <Link href="/marketplace">
        <span className="hover:underline">Marketplace</span>
      </Link>
      <Link href="/faucet">
        <span className="hover:underline">Faucet</span>
      </Link>
      <Link href="/airdrop">
        <span className="hover:underline">Airdrop</span>
      </Link>
    </nav>
  );
}
