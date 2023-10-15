import express from "express";
import { getFilteredRestaurant, getRestaurant} from "../controllers/restaurant.js";
import { getLocation } from "../controllers/location.js";
import { getMealtype } from "../controllers/mealtype.js";
import { restaurantYcity } from "../controllers/restaurantYcity.js";
import { register } from "../controllers/register.js";
import { login } from "../controllers/login.js";
import { logout } from "../controllers/logout.js";

const router = express.Router();

router.get("/logout",logout)

router.get("/location",getLocation)

router.get("/restaurant",getRestaurant)

router.get("/filter",getFilteredRestaurant);

router.get("/mealtype",getMealtype)

router.get("/:city_name",restaurantYcity)

router.post("/signup", register)

router.post("/login",login)



export default router;