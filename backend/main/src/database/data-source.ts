import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "@entity/../entity/User.js"

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
})

export const checkDatabaseConnection = async() => {
    try {
      await AppDataSource.initialize();
      if (AppDataSource.isInitialized) {
        console.log('Database connected successfully!');
      } else {
        console.log('Database connection failed!');
      }
    } catch (error) {
      console.error('Error during database connection:', error);
    } finally {
      await AppDataSource.destroy(); // Optional: Close connection after checking
    }
}

