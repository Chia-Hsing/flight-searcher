import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema';
import { Query } from '../../graphql/resolvers';
import Cors from 'micro-cors';

const cors = Cors();

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: { Query },
});

// Framework-specific Apollo Server packages define a method to connect Apollo Server to web framework.
// Depending on the package, it could be applyMiddleware, getMiddleware, or createHandler.
// Must call this method instead of listen.
// Non-serverless frameworks must call await server.start() before calling this method.

const startServer = apolloServer.start();

export default cors(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }

    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
});

export const config = {
    api: {
        bodyParser: false,
    },
};
