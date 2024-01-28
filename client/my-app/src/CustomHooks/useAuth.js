import settings from "../helpers/Settings";
export default async function useAuth() {
  const req = await fetch(settings.backendURL + "/login/verify", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ code: "zbnhs#secret" }),
  });
  const res = await req.json();
  if (res) {
    return res?.isAuthenticated;
  } else {
    return false;
  }
}
