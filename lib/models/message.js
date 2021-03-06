"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("Message", new mongoose.Schema({
    from_id: {type: Schema.Types.ObjectId, ref: "Profile", required: true},
    to_id: {type: Schema.Types.ObjectId, ref: "Profile", required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    archivedFrom: {type: Boolean, required: true},
    archivedTo: {type: Boolean, required: true},
    deletedFrom: {type: Boolean, required: true},
    deletedTo: {type: Boolean, required: true}
}));