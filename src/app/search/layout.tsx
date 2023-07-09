import "../styles/globals.css";
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-slate-900 h-screen">{children}</section>;
}
