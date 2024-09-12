import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", 
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3", // Mimic a desktop browser
          "Accept": "application/json",
          "Referer": "https://www.swiggy.com/",
          "X-Requested-With": "XMLHttpRequest",
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching restaurant list:", error.message);
    console.error("Error details:", error.response ? error.response.data : error);
    res.status(500).send("Error fetching restaurant list");
  }
}
