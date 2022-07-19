const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT } = require("./config");
const authRouter = require("./Routes/auth");
const { NotFoundError } = require("./Utils/errors");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.use((req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, function () {
  console.log(`:rocket: Server running on http://localhost:${PORT}`);
});
module.exports = app;
