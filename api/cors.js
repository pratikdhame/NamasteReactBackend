export default function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this to restrict to specific origins if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    next();
  }