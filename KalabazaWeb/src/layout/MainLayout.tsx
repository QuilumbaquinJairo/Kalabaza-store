
import type { ReactNode } from "react";


export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="MainLayout">
      <main>
        {children}
      </main>
    </div>
  );
}

