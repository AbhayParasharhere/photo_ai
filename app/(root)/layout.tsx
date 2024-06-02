import SideBar from "@/components/shared/sidebar/sidebar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="root">
      <div className="root--container">
        <div className="wrapper">
          <SideBar />
          {children}
        </div>
      </div>
    </main>
  );
}
