const aiService = require("../Services/ai.service");
module.exports.getResponse = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("prompt is required");
  }
  const response = await aiService(code);
  res.send(response);
};
