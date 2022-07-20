import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "../missions/missions";
import Rocketreducer from "../rockets/rocketdata";

const store = configureStore ({
    reducer: {
        rockets: Rocketreducer,
        missions: missionReducer
    }
})
export default store