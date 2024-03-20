export default function AboutPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="w-full overflow-hidden">{children}</div>;
}
