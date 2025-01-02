var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "reflect-metadata";
import { DataSource } from "typeorm";
const isProduction = process.env.NODE_ENV === 'production';
export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.MARIADB_HOSTNAME,
    port: 3306, // process.env.MARIADB_PORT,
    username: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["./main/dist/entity/*.js"],
    migrations: [],
    subscribers: [],
});
export const checkDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AppDataSource.initialize();
        if (AppDataSource.isInitialized) {
            console.log('Database connected successfully!');
        }
        else {
            console.log('Database connection failed!');
        }
    }
    catch (error) {
        console.error('Error during database connection:', error);
    }
    finally {
        yield AppDataSource.destroy(); // Optional: Close connection after checking
    }
});
