const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const ratingStars = [63405, 1808];

/*
const studentData = [
  ['name', 'Alice Johnson'],
  ['age', 21],
  ['courses', ['Math', 'Physics', 'Computer Science']],
  ['grades', { Math: 90, Physics: 85, 'Computer Science': 95 }],
  ['graduated', false],
];
let student = {};
for (const [key, value] of studentData) {
  student[key] = value;
}
console.log(student);

// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 1.2
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// 1.4
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// 2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// 2.2
const { keywords: tags } = books[0];
console.log(tags);

// 2.3
const { language, programmingLanguage = 'unkwown' } = books[6];
console.log(language, programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

// 2.6
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
});

// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// 3.2
function spellWord(str) {
    console.log(...str);
}
spellWord('JavaScript');

// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// 4.2
const { publisher: bookPublisher, ...restOfBook } = books[1];
console.log(bookPublisher, restOfBook);

// 4.3
function printBookAuthorsCount(title, ...authors) {
    console.log(`The book "${title}" has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// 5.1
function hasExamplesInJava(book) {
    return book.programmingLanguage === 'Java' || 'no data available';
}
console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

// 5.2
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}

// 6.1
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent ??
    console.log(
        `"${books[i].title}" provides no data about its online content.`
    );
}

// 7.1
for (let i = 0; i < books.length; i++) {
    console.log((books[i].edition ??= 1));
}

// 7.2
for (let i = 0; i < books.length; i++) {
    let {
        thirdParty: {
            goodreads: { rating: newRating },
        },
    } = books[i];
    if (!books[i].highlighted) {
        continue;
    } else if (newRating < 4.2) {
        console.log((books[i].highlighted &&= false || false));
    } else if (newRating >= 4.2 && books[i].highlighted === true) {
        console.log(newRating);
    } else {
        console.log(newRating);
}
}

for (let i = 0; i < books.length; i++) {
    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
    console.log(books[i].highlighted);
}


for (const book of books) {
    let {
        thirdParty: {
            goodreads: { rating: newRating },
        },
    } = book;
    if (!book.highlighted) {
        continue;
    } else if (newRating < 4.2) {
        console.log((book.highlighted &&= false || false));
    } else if (newRating >= 4.2 && book.highlighted === true) {
        console.log(newRating);
    } else {
        console.log(newRating);
}
}

// 8.1
let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

// 8.2
const allAuthors = [];
for (const book of books) {
  console.log(typeof book.author);
  
  if (typeof book.author === 'object') {
    book.author && allAuthors.push(...book.author);
  }
  // author is a single string
  else allAuthors.push(book.author);
}
console.log(allAuthors);

// 8.3
const allAuthors = [];
for (const book of books) {
  console.log(typeof book.author);
  
  if (typeof book.author === 'object') {
    book.author && allAuthors.push(...book.author);
  }
  // author is a single string
  else allAuthors.push(book.author);
}
console.log(allAuthors);
for (const [i, el] of allAuthors.entries()) {
  console.log(`${i + 1}. ${el}`);
}

// 9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];
const newBook = {};
for (const [key, value] of bookData) {
  newBook[key] = value;
}
console.log(newBook);

// 9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

// 10.1
function getFirstKeyword(book) {
  return book.keywords?.[0];
}
console.log(getFirstKeyword(books[0]));

function getGoodreadsRating(book) {
  return book.thirdParty?.goodreads?.rating;
}
console.log(getGoodreadsRating(books[0]));

function getKeywordsCount(book) {
  return book.keywords?.length;
}
console.log(getKeywordsCount(books[0]));
console.log(getKeywordsCount({ title: 'No Keywords' }));

books[0].getTitle = function () {
  return this.title;
};
console.log();

function callGetTitle(book) {
  return book.getTitle?.();
}
console.log(callGetTitle(books[0]));
console.log(callGetTitle({ title: 'No Method' }));

function getFirstKeywordOrDefault(book) {
  return book.keywords?.[0] || `No Keywords available`;
}
console.log(getFirstKeywordOrDefault(books[0]));
console.log(getFirstKeywordOrDefault({ title: 'No Keywords' }));

function getBookInfo(books) {
  const allBookInfo = [];
  
  for (const book of books) {
    const title = book?.title || 'No title';
    const firstKeyword = book?.keywords?.[0] || 'No keywords';
    const rating = book?.thirdParty?.goodreads?.rating || 'No rating';
    
    allBookInfo.push({ title, firstKeyword, rating });
  }
  
  return allBookInfo;
}

console.log(...getBookInfo(books));

// 11.1
[
  ['rating'],
  ['ratingsCount'],
  ['reviewsCount'],
  ['fiveStartRatingCount'],
  ['oneStartRatingCount'],
];

const entries = [];
const goodReads = books[0].thirdParty.goodreads;

for (const book of Object.keys(goodReads)) {
  entries.push(book);
}
console.log(entries);

// 11.2
const entries = [];
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries.push([index, value]);
}

// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4
console.log(entries);
console.log(entries2);

// 12.1
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

// 12.2
const uniqueAllKeyWords = new Set(allKeywords);

// 12.3
uniqueAllKeyWords.add('Coding');
uniqueAllKeyWords.add('science');

// 12.4
uniqueAllKeyWords.delete('business');

// 12.5
const uniqueAllKeyWordsArr = [...uniqueAllKeyWords];
console.log(uniqueAllKeyWordsArr);

// 12.6
uniqueAllKeyWords.clear();
console.log(uniqueAllKeyWords);

// 13.1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// 13.2
bookMap.set('pages', 464);
console.log(bookMap);

// 13.3
const title = bookMap.get('title');
const author = bookMap.get('author');

console.log(`${title} by ${author}`);

// 13.4
console.log(bookMap.size);

// 13.5
if (bookMap.has('author')) console.log('The author is known');
*/

// 14.1
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// 14.2
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
 For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log('Player 1:', players1, 'Player 2:', players2);

// 2.
const [goalkeeper1, ...fieldPlayers1] = players1;
console.log('Goalkeeper:', goalkeeper1, 'Field players:', fieldPlayers1);

const [goalkeeper2, ...fieldPlayers2] = players2;
console.log('Goalkeeper:', goalkeeper2, 'Field players:', fieldPlayers2);

// 3.
const allPlayers = [...players1, ...players2];
console.log('All Players:', allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players1Final', players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
function printGoals(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
// console.log(
//   (game.odds.team1 > game.odds.team2 &&
//     `${game.team1} is more likely to win`) ||
//     `${game.team2} is more likely to win`
// );
console.log(
  (game.odds.team1 > game.odds.team2 && `Team 1 is more likely to win`) ||
    (game.odds.team1 < game.odds.team2 && `Team 2 is more likely to win`) ||
    `${team1}. Its a tie`
);
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

// 1.
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${value}`);
}

// 2.

let index = Object.values(game.odds);
let average = 0;
for (const value of index) average += value;
average /= index.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
// Bonus
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
 The values are the events themselves, and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const average = 90 / gameEvents.size;
console.log(average);
console.log(`An event happened, on average, every ${average} minutes`);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [time, event] of gameEvents) {
  // if (time >= 0 && time < 46) {
    //   console.log(`[FIRST HALF] ${time}: ${event}`);
    // } else {
      //   console.log(`[SECOND HALF] ${time}: ${event}`);
      // }
      
      console.log(
        time >= 0 && time < 46
        ? `[FIRST HALF] ${time}: ${event}`
        : `[SECOND HALF] ${time}: ${event}`
      );
    }
    */

// GOOD LUCK 😀

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

let counter = 1;

const camelCaseName = function (names) {
  const camelCase = [...names.split('_')];
  // console.log(camelCase);
  console.log(
    camelCase[0].toLowerCase() +
    camelCase[1][0].toUpperCase() +
    camelCase[1].slice(1).toLowerCase() +
    '✅'.repeat(counter)
  );
  counter++;
};
camelCaseName('underscore_case');
camelCaseName('first_name');
camelCaseName('Some_Variable');
camelCaseName('calculate_AGE');
camelCaseName('delayed_departure');

{*/
