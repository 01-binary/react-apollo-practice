import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://movieql-osezlvyqsg.now.sh/", //grahpql api uri
    connectToDevTools: true
})

export default client