
import SideBar from "./navigation/sidebar";

export default function SiteLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 p-8">
        <div className="h-full p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
}
export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
