import SideBar from "./navigation/sidebar";
import TopBar from "./navigation/topbar";
import Footer from "./navigation/footer";

export default function SiteLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />

      <div className="flex flex-1">
        <SideBar />
        
        <main className="flex-1 p-4 sm:p-8">
          <div className="h-full p-3 sm:p-8">{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
