
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-[20vh]" dark-mode>
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Humra Frontend Authentication Examples with Next.js
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This project contains examples of using authentication systems in Django, including Facebook, Google, and token-based authentication. It aims to demonstrate how to integrate these authentication methods seamlessly into a Next.js frontend environment.
        </p>
      </div>
    </main>
  );
}
