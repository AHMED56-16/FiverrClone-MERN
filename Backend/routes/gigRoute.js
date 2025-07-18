import express from 'express';
import {
    createGig,
    deleteGig,
    getGig,
    geteGigs
} from "../controllers/gigController.js";
import {verifyToken} from '../middleware/jwt.js'
const router = express.Router();

router.post("/",verifyToken,createGig)
router.delete("/:id",verifyToken,deleteGig)
router.get("/single/:id",verifyToken,getGig)
router.get("/",verifyToken,geteGigs)

export default router;
