import Link from "next/link";
import Logo from "@/components/Logo";
export default function Home() {
  return (
    <div className="flex gap-3 flex-col h-screen items-center justify-center">
        <Logo height={'200'} width={'200'} quality={99} />
        <span className="text-2xl">Welcome to Thelix Holdings</span>
      <Link href={'/dashboard'} className={'p-2 bg-white text-black'}>
        Go to Dashboard
      </Link>
    </div>
  );
}
