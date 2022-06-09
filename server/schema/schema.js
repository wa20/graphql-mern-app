const { Project, Clients } = require('./dataSample')
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = require('graphql');

//Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        Phone: {type: GraphQLString}

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            //the below argument allows us to know which client we are getting
            args: {id: {type: GraphQLID}},
            //the resolver is our return that takes in a parent value and an argument 'args'. when we use mongodb we use a moongoose function to get our query
            resolve(parentValue, args){
                //the below is only used as we currently do not have mongodb set up yet
                return Clients.find(client => client.id === args.id);

            }

        }
    }
})


module.exports = new GraphQLSchema ({
    //this takes in an object with a query (in our case RootQuery above)
    query: RootQuery
})



