import Navbar from "@/components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-12 px-5 bg-almost-white h-full">
      <Navbar />
      {children}
    </div>
  );
}
