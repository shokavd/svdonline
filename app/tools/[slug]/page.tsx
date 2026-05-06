import { redirect } from "next/navigation";
import { TOOLS } from "../../../lib/tools";

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export default async function ToolSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/en/tools/${slug}`);
}
