
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

const BASE_URL = "http://localhost:8000/api";

export async function createBooking(payload) {
  try {
    const response = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Gagal membuat booking");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function cancelBooking(orderId) {
  try {
    const response = await fetch(`${BASE_URL}/bookings/${orderId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Gagal membatalkan booking");
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchRemainingPayment(order_id) {
  try {
    const res = await fetch(
      `${BASE_URL}/orders/${order_id}/remaining-payment`
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Data Tidak Ditemukan" || `HTTP error! Status: ${res.status}`);
    }

    return data;
  } catch (err) {
    throw err;
  }
}


export async function remainingPayment(order_id) {
  try {
    const res = await fetch(
      `${BASE_URL}/orders/${order_id}/remaining-payment`, {
        method: "POST",
      });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}