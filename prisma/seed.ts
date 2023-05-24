import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      update: {},
      create: {
        name: "Ernie Hao",
      },
    }),
    prisma.users.upsert({
      update: {},
      create: {
        name: "Alex Beers",
      },
    }),
    prisma.users.upsert({
      // where: { email: "rauchg@vercel.com" },
      update: {},
      create: {
        name: "Sheriff Hao",
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
