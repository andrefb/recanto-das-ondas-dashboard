import { cn } from "@/lib/utils";

interface WaveIconProps {
  className?: string;
}

export const WaveIcon = ({ className }: WaveIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-6 h-6", className)}
  >
    <path
      d="M2 12C2 12 4 8 7 8C10 8 10 12 13 12C16 12 16 8 19 8C22 8 22 12 22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17C2 17 4 13 7 13C10 13 10 17 13 17C16 17 16 13 19 13C22 13 22 17 22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
  </svg>
);

export const SurfboardIcon = ({ className }: WaveIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-6 h-6", className)}
  >
    <ellipse
      cx="12"
      cy="12"
      rx="3"
      ry="10"
      stroke="currentColor"
      strokeWidth="2"
      transform="rotate(15 12 12)"
    />
    <line
      x1="12"
      y1="6"
      x2="12"
      y2="18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
      transform="rotate(15 12 12)"
    />
  </svg>
);
