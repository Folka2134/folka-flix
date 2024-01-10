import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Navbar />
      <div className="w-full p-6">
        <SearchBar />
        <main className="flex-1">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
