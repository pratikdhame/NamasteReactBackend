import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching restaurant list");
  }
}
