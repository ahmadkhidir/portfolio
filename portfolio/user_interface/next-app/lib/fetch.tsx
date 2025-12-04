const baseUrl = "http://localhost:8000";


export async function backendFetch<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(new URL(url, baseUrl).toString(), options);
  const data = await response.json();
  return data;
}