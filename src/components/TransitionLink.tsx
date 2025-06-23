"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";
import { ReactNode, MouseEvent } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const TransitionLink = ({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) => {
  const router = useRouter();
  const { startLoading, stopLoading } = useNavigation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Execute any additional onClick handler
    if (onClick) {
      onClick();
    }

    // Start loading animation
    startLoading();

    // Navigate after a short delay to show the animation
    setTimeout(() => {
      router.push(href);

      // Stop loading after navigation (with a minimum loading time)
      setTimeout(() => {
        stopLoading();
      }, 800); // Minimum 800ms loading time
    }, 100);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
