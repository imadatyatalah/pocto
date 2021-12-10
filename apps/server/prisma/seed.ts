import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  await prisma.user.create({
    data: {
      email: "imad@gmail.com",
      name: "Imad Atyat-Alah",
      username: "imadatyatalah",
      password: "password",

      categories: {
        createMany: {
          data: [
            {
              name: "health",
              title: "Health",
              description: "Anything related to health.",
            },
            {
              name: "sport",
              title: "Sport",
              description: "Anything related to sport.",
            },
          ],
        },
      },

      profile: {
        create: {
          avatarUrl: "https://avatars.githubusercontent.com/u/70093484?v=4",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title:
        "I'm just asking is running is healthy? If yes what are the benefits?",
      content:
        "I'm just asking is running is healthy? If yes what are the benefits?",

      category: { connect: { name: "sport" } },

      user: {
        connect: { email: "imad@gmail.com" },
      },
    },
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
