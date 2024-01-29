import 'dotenv/config';
import app from "./src/app";

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server runing on http://localhost:${PORT}`));