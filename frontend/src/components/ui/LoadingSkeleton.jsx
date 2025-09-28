export default function LoadingSkeleton({ className = "" }) {
  return (
    <div aria-hidden="true" className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded ${className}`}></div>
  );
}
