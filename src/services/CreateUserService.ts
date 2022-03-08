import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";
import{getCustomRepository} from "typeorm"
 
class CreateUserService {
    async execute( name:string ,email:string, admin:boolean,password:string){ 
      const usersRepository = getCustomRepository(UsersRepositories);

      if(!email) {
        throw new Error(" Email incorrect ")
      }
      const userArealdyExists = await usersRepository.findOne({
      email,
    });
    if(userArealdyExists){
        throw new Error(" User already exists");
    }
    const passwordHash = await hash(password,8);
    
    const user = usersRepository.create({
    name,
    email,
    admin,
    password:passwordHash
    })

    await usersRepository.save(user); 

    return user;
  }
}

export {CreateUserService};