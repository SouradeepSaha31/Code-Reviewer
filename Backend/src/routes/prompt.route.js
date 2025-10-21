import { Router } from "express";
import { review_code } from "../controller/prompt.controller.js";

const promptRouter = Router()

promptRouter.route("/get-prompt").post(review_code)

export {promptRouter}