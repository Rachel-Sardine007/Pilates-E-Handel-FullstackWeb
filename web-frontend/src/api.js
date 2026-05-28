// backend api
const API_BASE = "http://localhost:3000/api";

function getToken() {
  return localStorage.getItem("token");
}

// login authentication
export function isAuthenticated() {
  return !!getToken();
}


async function request(path, options = {}) {
  const headers = options.headers || {};

  const token = getToken();

  if (token) headers["Authorization"] = `Bearer ${token}`;

  headers["Content-Type"] = "application/json";

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  // read answer from server 
  const text = await res.text();

  // for saving data later
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  // res.ok är false om statuskoden är fel.
  // Exempel:
  // 404
  // 401
  // 500
  if (!res.ok) {
    // Försöker hitta ett bra felmeddelande.
    const err =
      // Om backend skickade:
      // { message: "Fel" }
      (data && data.message) ||
      // Annars använd HTTP-status.
      res.statusText ||
      // Fallback om inget annat finns.
      "Request failed";

    // Skapar ett JavaScript Error.
    throw new Error(err);
  }

  // Returnerar datan om allt gick bra.
  return data;
}

// ======================
// USER REQUESTS
// ======================

// Registrerar en ny användare.
export async function register({ name, email, password }) {
  // Skickar POST-request till backend.
  return request("/users/register", {
    // HTTP-metod.
    method: "POST",

    // Gör om JavaScript-objekt till JSON-sträng.
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
}

// Loggar in användaren.
export async function login({ email, password }) {
  return request("/users/login", {
    method: "POST",

    // Skickar email + lösenord till backend.
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

// Hämtar alla kontakter.
export async function getContacts() {
  // GET används för att hämta data.
  return request("/contacts", {
    method: "GET",
  });
}

// Skapar en ny kontakt.
export async function createContact(contact) {
  return request("/contacts", {
    method: "POST",

    // Skickar kontakt-objektet som JSON.
    body: JSON.stringify(contact),
  });
}

// Tar bort en kontakt via ID.
export async function deleteContact(id) {
  // Exempel:
  // /contacts/5
  return request(`/contacts/${id}`, {
    method: "DELETE",
  });
}

// Uppdaterar en kontakt.
export async function updateContact(id, contact) {
  return request(`/contacts/${id}`, {
    // PUT används ofta för uppdatering.
    method: "PUT",

    // Skickar nya kontaktuppgifter.
    body: JSON.stringify(contact),
  });
}

// ======================
// AUTH FUNCTIONS
// ======================

// Loggar ut användaren.
export function logout() {
  // Tar bort token från localStorage.
  localStorage.removeItem("token");

  try {
    // Skickar ett custom event.
    // Detta säger till appen:
    // "Authentication har ändrats"
    window.dispatchEvent(new Event("authChange"));
  } catch (e) {
    // Ignorerar eventuella fel.
  }
}

// Sparar token när användaren loggat in.
export function saveToken(token) {
  // Sparar token i browsern.
  localStorage.setItem("token", token);

  try {
    // Trigger auth-event så UI kan uppdateras direkt.
    window.dispatchEvent(new Event("authChange"));
  } catch (e) {
    // Ignorerar eventuella fel.
  }
}

// Exporterar alla funktioner som ett objekt.
// Gör det möjligt att importera hela API:t enklare.
export default {
  register,
  login,
  getProducts,
  createContact,
  deleteContact,
  updateContact,
  logout,
  saveToken,
};