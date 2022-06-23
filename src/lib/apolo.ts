import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-us-west-2.graphcms.com/v2/cl4rf8rzg123m01z35hala8ui/master",
    cache: new InMemoryCache()
})