import { Router } from "express";
import { authorController } from "../controllers/author";


const router= Router();

router.get('/',authorController.findMany)

export default router;