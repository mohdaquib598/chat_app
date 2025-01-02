import express from 'express';
import userRoutes from './routers/user.js';
import "reflect-metadata";
import { checkDatabaseConnection } from "./database/data-source.js";
const chatAppPort = process.env.PORT || 3003;
class App {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.middleware();
        // this.app.use("user", (req, res, next)=>{console.log("request added")}, userRoutes)
        setInterval(() => {
            const memoryUsage = process.memoryUsage();
            console.log(`Heap Used+++++++====: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
        }, 5000);
    }
    middleware() {
        this.app.use(express.json());
        this.app.use("/user", userRoutes);
    }
    listen() {
        console.log("env data ", process.env.PORT);
        checkDatabaseConnection();
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }
}
(() => {
    const app = new App(chatAppPort);
    app.listen();
})();
