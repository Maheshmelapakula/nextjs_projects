import Image from "next/image";
import  OjectDetection  from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className=" gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        product detection alarm</h1>
        <OjectDetection/>

    </main>
  );
}
