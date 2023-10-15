import { app } from "./app.js";
import { ConnectDB } from "./data/database.js";

ConnectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is Working")
})