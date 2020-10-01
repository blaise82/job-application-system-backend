const Welcome = (req, res) => {
  return res.status(200).json({
    message: "welcome!!!",
  });
};

export default Welcome;
