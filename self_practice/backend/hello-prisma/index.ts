import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true
    }
  });
  console.dir(allUsers)
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