import { Suspense } from "react";
import { AdminForm } from "../../components/AdminForm";

export const metadata = { title: "Post-Call Admin" };

export default function AdminPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Post-Call Document Generator</h1>
        <p className="text-sm text-gray-500 mt-1">
          Fill in what was agreed on the call. Claude will generate the email draft and send it to contact@svdonline.com — review and forward to the client.
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-gray-400">Loading…</p>}>
        <AdminForm />
      </Suspense>
    </div>
  );
}
