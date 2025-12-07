import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-blue-500">
      <h1 className="text-4xl font-bold text-white mb-4">Web3 DApp Playground</h1>
      <p className="text-lg text-white mb-2">
        Professional environment: TypeScript, ESLint, Prettier, Husky, SonarCloud, Tailwind CSS
      </p>
      <p className="text-white">Start building your modular blockchain app here!</p>
    </main>
  );
}
