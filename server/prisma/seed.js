const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const createHeroes = async () => {
  const superheroes = [
    {
      nickname: "Antman",
      real_name: "Scott Lang",
      origin_description: "A former thief turned hero with the ability to shrink and communicate with ants.",
      superpowers: "Size-shifting, enhanced strength",
      catch_phrase: "I'm Ant-Man!",
      image: "https://i1.sndcdn.com/artworks-9oEPzO8eAeoRDtgS-z6lgQg-t500x500.jpg",
    },
    {
      nickname: "Batman",
      real_name: "Bruce Wayne",
      origin_description: "A billionaire vigilante who fights crime in Gotham using intellect, martial arts, and gadgets.",
      superpowers: "Peak human condition, martial arts, detective skills",
      catch_phrase: "I am the night.",
      image: "https://avatarfiles.alphacoders.com/329/329074.jpg",
    },
    {
      nickname: "Black Panther",
      real_name: "T'Challa",
      origin_description: "King of Wakanda, protector of his people with enhanced abilities granted by the heart-shaped herb.",
      superpowers: "Enhanced strength, agility, senses, expert fighter",
      catch_phrase: "Wakanda Forever!",
      image: "https://142216564.cdn6.editmysite.com/uploads/1/4/2/2/142216564/C6ULQKZCQ7IX35GKBLQFJCNJ.jpeg",
    },
    {
      nickname: "Captain America",
      real_name: "Steve Rogers",
      origin_description: "A super-soldier from World War II, fighting for justice with his iconic shield.",
      superpowers: "Enhanced strength, agility, endurance, shield combat",
      catch_phrase: "I can do this all day.",
      image: "https://pngimg.com/uploads/captain_america/captain_america_PNG66.png",
    },
    {
      nickname: "Hulk",
      real_name: "Bruce Banner",
      origin_description: "A scientist who transforms into a green giant with immense strength when angry.",
      superpowers: "Superhuman strength, durability, regeneration",
      catch_phrase: "Hulk smash!",
      image: "https://i1.sndcdn.com/avatars-000083309238-usu5vw-t500x500.jpg",
    },
    {
      nickname: "Ironman",
      real_name: "Tony Stark",
      origin_description: "Genius billionaire who built a powered suit of armor to fight evil.",
      superpowers: "Powered armor suit, genius intellect, flight, weapons",
      catch_phrase: "I am Iron Man.",
      image: "https://i1.sndcdn.com/artworks-wSlzMtSYrfOQQVxb-XI6Msw-t500x500.jpg",
    },
    {
      nickname: "Spiderman",
      real_name: "Peter Parker",
      origin_description: "A teenager bitten by a radioactive spider gaining spider-like abilities.",
      superpowers: "Wall-crawling, spider-sense, agility, web-shooting",
      catch_phrase: "With great power comes great responsibility.",
      image: "https://ironheadstudio.com/wp-content/uploads/2014/10/500x500-TheAmazingSpiderman.jpg",
    },
    {
      nickname: "Superman",
      real_name: "Clark Kent",
      origin_description: "Last son of Krypton with powers from Earth's yellow sun.",
      superpowers: "Super strength, flight, heat vision, invulnerability",
      catch_phrase: "Up, up, and away!",
      image: "https://www.logodesignlove.com/images/classic/superman-26.jpg",
    },
    {
      nickname: "Thor",
      real_name: "Thor Odinson",
      origin_description: "God of Thunder from Asgard, wielding the mystical hammer Mjolnir.",
      superpowers: "Godly strength, weather manipulation, Mjolnir",
      catch_phrase: "For Asgard!",
      image: "https://cleorecs.com/cdn/shop/files/1746.jpg",
    },
    {
      nickname: "Wolverine",
      real_name: "Logan",
      origin_description: "Mutant with healing factor and retractable adamantium claws.",
      superpowers: "Regeneration, enhanced senses, claws",
      catch_phrase: "I'm the best there is at what I do.",
      image: "https://pngimg.com/d/wolverine_PNG75.png",
    },
  ];
  for (const hero of superheroes) {
    await prisma.superhero.create({ data: hero });
  }
};

createHeroes()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
