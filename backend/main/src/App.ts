import express,{Application, Request, Response} from 'express';
import userRoutes from '@routers/user.js';
import "reflect-metadata"
import {checkDatabaseConnection} from "@database/data-source.js";

const chatAppPort: number|string = process.env.PORT || 3003;

class App{
    private port: number|string;
    private app: Application;
    constructor(port: number|string) {
        this.port = port;
        this.app = express();
        this.middleware();
        // this.app.use("user", (req, res, next)=>{console.log("request added")}, userRoutes)
        setInterval(() => {
            const memoryUsage = process.memoryUsage();
            console.log(`Heap Used+++++++====: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
        }, 5000);
    }
    private middleware(): void {
        this.app.use(express.json());
        this.app.use("/user", userRoutes);
    }
    public listen(): void{
        console.log("env data ", process.env.PORT);
        checkDatabaseConnection()
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }

}

(()=>{
    const app = new App(chatAppPort);
    app.listen()
})();
