import {model, Schema} from "mongoose";

export const Task = new Schema({});

export const TaskModel = model('task', Task);
