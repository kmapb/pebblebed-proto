const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  enum TimeOfDay {
      DAY
      NIGHT
  }

  enum Weather {
      RAIN
      SUN
      SNOW
  }

  # Puzzle: a plurality of tiles
  type Puzzle {
    title: String
    timeOfDay: 
    id: String
    height: Int
    width: Int
    tiles: [PositionedTiles]
  }

  type PositionedTile {
    x, y: Int
    scale: Int
  }

  type Tile {
    id: String

  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
  };

export default function serve() {
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({ typeDefs, resolvers });

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    });
}