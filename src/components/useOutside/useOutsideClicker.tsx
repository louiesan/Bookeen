import { useEffect } from "react";

export default function useOutsideClicker(
  ref: React.RefObject<HTMLDivElement | null>,
  handler: () => void
) {
  function listener(event: MouseEvent | TouchEvent) {
    if (!ref.current || ref.current.contains(event.target as Node)) return;
    handler();
  }

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
