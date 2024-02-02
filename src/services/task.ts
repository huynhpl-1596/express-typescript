import { Task } from "../models/task";

let tasks: Task[] = [];

function findAll(): Task[] {
    return tasks;
}

function findById(id: Number) {
    return tasks.find((t) => t.id === id);
}

export {
    findAll,
    findById,
}
