import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { CUSTOMER_ROLE } from "types/customers/BaseCustomer";

export default async function AdminLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  if (data?.user.role !== CUSTOMER_ROLE.ADMIN) return redirect("/login");
  return <div className="page-content-main-admin main">{children}</div>;
}

async function getData() {
  const dataSession = await getServerSession(authOptions);
  return dataSession;
}
