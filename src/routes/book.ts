import {Router} from "express";
import { bookController } from "../controllers/book";

const router=Router();


router.get("/",bookController.findMany)

export default router;