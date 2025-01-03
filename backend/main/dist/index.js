var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AppDataSource } from "./database/data-source";
// import { User } from "./entity/User"
AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Inserting a new user into the database...");
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    console.log("Loading users from the database...");
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
    console.log("Here you can setup and run express / fastify / any other framework.");
})).catch(error => console.log(error));
