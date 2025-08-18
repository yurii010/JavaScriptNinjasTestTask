import 'dotenv/config';
import app from "./app";

app.listen(3001, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});