import axios from 'axios';

export default async function handler(req, res) {
  const { restaurantId } = req.query;
  try {
    const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=${restaurantId}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching menu");
  }
}
