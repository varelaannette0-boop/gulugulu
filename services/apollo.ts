import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const graphqlUri =
  process.env.NEXT_PUBLIC_DATA_API_URL ?? "${process.env.NEXT_PUBLIC_API_URL}/graphql";

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
  }),
  cache: new InMemoryCache(),
});

export default client;
