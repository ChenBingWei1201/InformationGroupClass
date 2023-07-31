import { prisma } from "../../prisma/client";
import { TodoInput } from "../types/type.ts"
const Mutation = {
    AddTodo: async (parent, args: {todoInput: TodoInput}, contextValue) => {
        const { title } = args.todoInput;
        const newTodo = await prisma.todo.create({
            data: {
                title: title
            }
        });
        return newTodo;
    }
}

export { Mutation };