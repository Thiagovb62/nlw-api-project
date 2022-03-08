import { TagsRepositories } from "../repositories/TagsRepositories"
import{getCustomRepository} from "typeorm"

 class CreateTagService {
    async execute(name:string){ 
      const TagsRepository = getCustomRepository(TagsRepositories);


      if(!name) {
        throw new Error("  incorrect name! ")
      }
      const TagArealdyExists = await TagsRepository.findOne({
      name,
    });
    if(TagArealdyExists){
        throw new Error(" Tag already exists");
    }
    const Tag = TagsRepository.create({
    name,
    })

    await TagsRepository.save(Tag); 

    return Tag;
  }
}

export { CreateTagService };