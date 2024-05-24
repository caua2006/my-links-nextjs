import React from "react";
import { Card } from "@/components/ui/Card";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="bg-[#141414] h-svh flex justify-center items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Card/>
    </main>
  );
}
