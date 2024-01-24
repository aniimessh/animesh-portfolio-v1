"use client";

import { useRouter } from "next/navigation";


const XButton = ({ children, path }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="btn_css"
      onClick={() => router.push(`${path}`)}
    >
      {children}
    </button>
  );
};

export default XButton;
