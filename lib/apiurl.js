let BASE_URL = "";

if (typeof window !== "undefined") {
  // Client-side
  BASE_URL = window.location.origin + "/api";
} else {
  // Server-side
  BASE_URL = (process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL + "/api" : "http://localhost:3000/api");
}

export { BASE_URL };
export const Products_URL = `${BASE_URL}/products`;
