import { prisma } from '../../prisma/client.ts'

const Query = {
    AllTodos: async () => {
        const todos = await prisma.todo.findMany();
        // console.log(todos);
        return todos;
    }
};

export { Query };