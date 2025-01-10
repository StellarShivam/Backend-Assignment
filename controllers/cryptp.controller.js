const Crypto = require("../models/cryptoModel");
const axios = require("axios");
exports.fetchCryptoData = async (req, res, next) => {
  const apiBaseUrl = "https://api.coingecko.com/api/v3/coins/";
  const coins = ["bitcoin", "matic-network", "ethereum"];

  try {
    for (const coin of coins) {
      const url = `${apiBaseUrl}${coin}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-aVEzc9BNq5piECzhEaYSpwwb",
        },
      };

      const response = await axios(url, options);
      const { market_data } = response.data;

      const cryptoData = {
        name: coin,
        price: market_data.current_price.usd,
        marketCap: market_data.market_cap.usd,
        change24h: market_data.price_change_percentage_24h,
      };

      await Crypto.create(cryptoData);
      console.log(`Saved data for ${coin}:`, cryptoData);
    }
  } catch (err) {
    console.error("Error fetching cryptocurrency data:", err);
  }
};

exports.getLatestCryptoData = async (req, res, next) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ error: "Coin parameter is required." });
  }

  try {
    const latestData = await Crypto.findOne({ name: coin }).sort({
      timestamp: -1,
    });

    if (!latestData) {
      return res
        .status(404)
        .json({ error: "Data not found for the requested cryptocurrency." });
    }

    const formattedResponse = {
      price: latestData.price,
      marketCap: latestData.marketCap,
      "24hChange": latestData.change24h,
    };
    res.status(200).json(formattedResponse);
  } catch (err) {
    console.error("Error fetching data from database:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getStandardDeviation = async (req, res, next) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ error: "Coin parameter is required." });
  }

  try {
    const records = await Crypto.find({ name: coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (records.length === 0) {
      return res.status(404).json({
        error: "Not enough data available for the requested cryptocurrency.",
      });
    }

    const prices = records.map((record) => record.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;
    const deviation = Math.sqrt(variance).toFixed(2);

    res.json({ deviation: parseFloat(deviation) });
  } catch (err) {
    console.error("Error calculating standard deviation:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};
