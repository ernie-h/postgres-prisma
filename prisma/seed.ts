import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { name: "Ernie Hao" },
      update: {},
      create: {
        name: "Ernie Hao",
      },
    }),
    prisma.users.upsert({
      where: { name: "Alex Beers" },
      update: {},
      create: {
        name: "Alex Beers",
      },
    }),
    prisma.users.upsert({
      where: { name: "Rando" },
      update: {},
      create: {
        name: "Rando",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
