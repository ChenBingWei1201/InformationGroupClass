import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  // ... you will write your Prisma Client queries here
  const post = await prisma.post.update({
    where: { id: 2 },
    data: { content: 'Hi!' },
  })
  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })