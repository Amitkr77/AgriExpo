import { getApplication } from "@/lib/applicationsData";
import ApplicationSubPage from "@/components/ApplicationSubPage";

const data = getApplication("private-label");

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: data.meta.canonical },
  openGraph: {
    title: data.meta.title,
    description: data.meta.description,
    url: data.meta.canonical,
  },
};

export default function PrivateLabelPage() {
  return <ApplicationSubPage data={data} />;
}
