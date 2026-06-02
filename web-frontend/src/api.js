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

  // check res 
  if (!res.ok) {
    const err =
      (data && data.message) ||
      res.statusText ||
      "Request failed";
    throw new Error(err);
  }

  return data;
}

// ======================
// USER REQUESTS
// ======================

// register 
export async function registerUser ({ username, email, password }) {
  // Skickar POST-request till backend.
  return request("/users/register", {
    // HTTP-metod.
    method: "POST",

    // Js object --> json
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
}

// login
export async function loginUser({ email, password }) {
  return request("/users/login", {
    method: "POST",

    // Skickar email + lösenord till backend.
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

// get all orders
export async function getOrder() {
  return request("/products", {
    method: "GET",
  });
}

// get all products
export async function getProducts() {
  return request("/products", {
    method: "GET",
  });
}

// create order
export async function createOrder(orderData){
  return request("/orders", {
    method: "POST",
    body: JSON.stringify(orderData),
  });
};

// ======================
// AUTH FUNCTIONS
// ======================

// logout
export function logoutUser() {
  // remove token from localstorage
  localStorage.removeItem("token");

  try {
    // custom event
    window.dispatchEvent(new Event("authChange"));
  } catch (e) {
    // ingore if error
  }
}

// save token if login
export function saveToken(token) {
  // save in browser
  localStorage.setItem("token", token);

  try {
    // Trigger auth-event --> update UI
    window.dispatchEvent(new Event("authChange"));
  } catch (e) {
    // ingore if error 
  }
}

// Export
export default {
  registerUser,
  loginUser,
  getProducts,
  getOrder,
  createOrder,
  logoutUser,
  saveToken,
};