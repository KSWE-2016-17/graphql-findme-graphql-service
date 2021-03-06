"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("User", new Schema({
    login: {type: String, required: true, description: "The name used for logging in."},
    password: {type: String, required: true, description: "The password."},
    role: {type: Number, required: true, description: "The role. Might be user or admin."}
}));
