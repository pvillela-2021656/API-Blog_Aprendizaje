import { config } from "dotenv"
import { initServer } from "./configs/server.js"
import { userDef } from "./src/user/user.default.js"

config()
initServer()
userDef()