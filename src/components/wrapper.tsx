import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto max-w-[1200px] p-4 border-double border-4 border-black rounded-lg">
        {children}
      </div>
    </>
  );
}
