const express = require("express");
const app = express();

const PORT = 4000;
app.use("/", (req, res) => {
  res.send("asdf");
});

app.listen(PORT, () => {
  console.log(`이 서버는 ${PORT}포트에서 실행중입니다`);
});
