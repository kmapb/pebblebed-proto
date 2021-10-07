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

  type Tile {
    id: String
  }

  type PositionedTile {
    x: Int
    y: Int
    scale: Int
    tile: Tile
  }

  # Puzzle: a plurality of tiles
  type Puzzle {
    id: String
    title: String
    timeOfDay: TimeOfDay
    weather: Weather
    height: Int
    width: Int
    tiles: [PositionedTile]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    puzzle: [Puzzle]
  }
`;

const puzzle = 
    {
      id: '0xbeff050b',
      title: 'The Awakening',
      timeOfDay: 'NIGHT',
      weather: 'RAIN',
      height: 4,
      width: 6,
      tiles: []
    };

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      puzzle: () => puzzle,
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
