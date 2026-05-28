"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { routeOrder } from "@/lib/routes";

const edgeBuffer = 8;
const wheelThreshold = 180;
const touchThreshold = 72;
const cooldownMs = 1500;
const transitionDelayMs = 560;
const postRouteSettleMs = 180;
const overlayFadeMs = 560;

let lastGlobalNavigateAt = 0;

export function ScrollRouteNavigator() {
  const pathname = usePathname();
  const router = useRouter();
  const wheelIntent = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const lastNavigateAt = useRef(0);
  const isTransitioning = useRef(false);
  const pendingPath = useRef<string | null>(null);
  const [transitionLabel, setTransitionLabel] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (!pendingPath.current || pendingPath.current !== pathname) return;

    window.scrollTo(0, 0);
    window.setTimeout(() => {
      isTransitioning.current = false;
      pendingPath.current = null;
      setIsOverlayVisible(false);

      window.setTimeout(() => {
        setTransitionLabel(null);
      }, overlayFadeMs);
    }, postRouteSettleMs);
  }, [pathname]);

  useEffect(() => {
    const currentIndex = routeOrder.indexOf(pathname as (typeof routeOrder)[number]);
    if (currentIndex === -1) return;

    const navigate = (direction: 1 | -1) => {
      const now = Date.now();
      if (now - lastNavigateAt.current < cooldownMs) return;
      if (now - lastGlobalNavigateAt < cooldownMs) return;
      if (isTransitioning.current) return;

      const nextRoute = routeOrder[currentIndex + direction];
      if (!nextRoute) return;

      lastNavigateAt.current = now;
      lastGlobalNavigateAt = now;
      isTransitioning.current = true;
      pendingPath.current = nextRoute;
      wheelIntent.current = 0;
      setTransitionLabel(direction === 1 ? "Next page" : "Previous page");
      window.requestAnimationFrame(() => {
        setIsOverlayVisible(true);
      });

      window.setTimeout(() => {
        router.push(nextRoute);
      }, transitionDelayMs);
    };

    const isAtTop = () => window.scrollY <= edgeBuffer;
    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - edgeBuffer;

    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning.current) {
        event.preventDefault();
        return;
      }

      if (Math.abs(event.deltaY) < 12) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const atEdge = direction === 1 ? isAtBottom() : isAtTop();

      if (!atEdge) {
        wheelIntent.current = 0;
        return;
      }

      event.preventDefault();
      wheelIntent.current += Math.abs(event.deltaY);
      if (wheelIntent.current >= wheelThreshold) {
        navigate(direction);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const endY = event.changedTouches[0]?.clientY;
      if (endY === undefined) return;

      const delta = touchStartY.current - endY;
      const direction = delta > 0 ? 1 : -1;
      const atEdge = direction === 1 ? isAtBottom() : isAtTop();

      if (Math.abs(delta) >= touchThreshold && atEdge) {
        navigate(direction);
      }

      touchStartY.current = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(246,241,232,0.96)] backdrop-blur-[1px] transition-opacity duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOverlayVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!transitionLabel}
    >
      <div
        className={`border-t border-b hairline px-10 py-6 text-center transition duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOverlayVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.99] opacity-0"
        }`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-sage)]">
          {transitionLabel}
        </p>
        <p className="mt-3 font-serif text-3xl tracking-[0.08em] text-[rgba(36,35,31,0.64)]">
          Aki Chen
        </p>
      </div>
    </div>
  );
}
