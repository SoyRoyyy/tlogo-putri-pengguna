// app/src/App/pemesanan/form/page.jsx
import React, { Suspense } from "react";
import FormPemesananPage from "../../../../components/FormPemesananaClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormPemesananPage />
    </Suspense>
  );
}
