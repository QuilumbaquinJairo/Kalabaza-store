
import type { ReactNode } from "react";
import Sidebar from './Sidebar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-root d-flex">
      <Sidebar />
      <div className="content-area flex-grow-1">
        <main style={{ padding: 20 }}>
          {children}
        </main>
      </div>
    </div>
  );
}

