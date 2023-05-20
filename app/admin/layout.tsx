import { getServerSession } from "next-auth";
import { Router } from "next/router";

export default async function AdminLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  await getData();
  return (
    <div className="page-content-main main" style={{ backgroundColor: "gray" }}>
      {children}
    </div>
  );
  // else return <>not authorized</>;
}

async function getData() {
  const dataSession = await getServerSession();
  console.log(dataSession);
  return;
}
