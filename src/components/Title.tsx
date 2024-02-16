export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-medium tracking-tight mb-16">{children}</h1>
  );
}
