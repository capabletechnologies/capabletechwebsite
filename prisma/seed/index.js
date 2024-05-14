const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Url = require('./data/Url');
const Clicks = require('./data/Clicks');
const { connect } = require('http2');

async function runSeeders() {
  
  // URL's
  await Promise.all(
    Url.map(async (url) =>
      prisma.url.upsert({
        where: { id: url.id },
        update: {},
        create: {
          originalUrl: url.originalUrl,
          shortUrl: url.shortUrl,
          clickCount: url.clickCount,
          user: url.user
        },
      })
    )
  );

 /*  await Promise.all(
    Clicks.map(async (click) =>
      prisma.click.upsert({
        where: { id: click.id },
        update: {},
        create: {
          clickedAt: click.clickedAt,
          userAgent: click.userAgent,
          ipAddress: click.ipAddress,
          country: click.country,
          url: click.url,
        },
      })
    )
  );
 */

}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });