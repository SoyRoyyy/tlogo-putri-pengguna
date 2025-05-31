
//FILE INI UNTUK MENGHUBUNGKAN KE API GUNAKAN INI UNTUK SETIAP REQUEST KE API UNTUK SEMUA DATA YANG DIBUTUHKAN
export async function getTourPackages() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/packages", {
      cache: "no-store", 
    });
    if (!response.ok) {
      throw new Error("Gagal mengambil data paket wisata");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getTourPackages:", error);
    return []; 
  }
}

export async function getPackageBySlug(slug) {
  try {
    const res = await fetch(`http://localhost:8000/api/packages/${encodeURIComponent(slug)}`);
    const data = await res.json();
    if (!data.error) {
      return data;
    } else {
      throw new Error("Data error");
    }
  } catch (err) {
    console.error("Gagal fetch data paket:", err);
    throw err;
  }
}

export async function getPublishedArticles() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/content-generate/articleterbit"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (Array.isArray(data.data)) {
      return data.data;
    } else {
      throw new Error("Data format tidak sesuai");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
