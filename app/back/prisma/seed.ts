import { PrismaClient } from '@prisma/client';
import { myAnimeList }  from '../src/hellpers/animeList';

const prisma = new PrismaClient();

const animeList = myAnimeList;

async function main() {
  // Cria todas as operações de inserção como uma lista de promessas
  const createPromises = animeList.map(anime =>
    prisma.anime.create({
      data: anime,
    })
  );

  // Aguarda a conclusão de todas as operações de inserção
  await Promise.all(createPromises);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
