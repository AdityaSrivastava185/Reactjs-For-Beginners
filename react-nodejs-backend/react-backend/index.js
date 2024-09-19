import express from "express"
import cors from "cors"
import users from './users.js' //userimport

const app = express();
const PORT = 3001;
app.use(cors());
// First addion
app.get("/", (req, res)=>{
    res.send("Server is ready")
})

//second addition
app.get("/api/user", (req, res)=>{
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});