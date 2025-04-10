import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Link href={'/dashboard'} className={'p-2 bg-white text-black'}>
        Go to Dashboard
      </Link>
    </div>
  );
}
