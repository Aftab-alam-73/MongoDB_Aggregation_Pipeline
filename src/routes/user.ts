import express from 'express';
import { userController } from '../controllers/user';

const router= express.Router();

router.
get('/active/users',userController.totalActiveUsers).
get('/topfruits',userController.fiveTopMostCommonFruits).
get('/location',userController.findAllTheUsersOfASpecificCountryFromASpecificLocation).
get('/',userController.findAverageAge)



export default router;