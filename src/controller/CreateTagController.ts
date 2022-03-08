import {Request, response, Response} from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {

    async handle(req: Request, res: Response) {
       const name = req.body
       const createdTagService = new CreateTagService()
       
       const tag = await createdTagService.execute(name)

       return response.json(tag)
    }
}

export { CreateTagController } 