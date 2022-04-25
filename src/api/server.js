import axios from "axios";

const token = "75|OxvJe76lyG4OiCOEdLTQM2HnFBxEfeIGCuqIjrVU";

const headers = {
  Connection: " keep-alive",
  "sec-ch-ua": ' " Not A;Brand";v="99", "Chromium";v="98"',
  Accept: " application/json, text/plain, */*",
  "X-Language": " ar",
  Authorization: ` Bearer ${token}`,
  "sec-ch-ua-mobile": " ?0",
  "User-Agent":
    " Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
  "sec-ch-ua-platform": ' "Linux"',
  "Sec-Fetch-Site": " cross-site",
  "Sec-Fetch-Mode": " cors",
  "Sec-Fetch-Dest": " empty",
  "Accept-Language": " en-US,en;q=0.9",
};

export default axios.create({
  // baseURL: `${process?.env?.REACT_APP_API_URL}/api`,
  headers,
});
