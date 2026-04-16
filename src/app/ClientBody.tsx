"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased bg-[hsl(0,0%,5%)]";
  }, []);

  return (
    <body className="antialiased bg-[hsl(0,0%,5%)]" suppressHydrationWarning>
      {children}
    </body>
  );
}
