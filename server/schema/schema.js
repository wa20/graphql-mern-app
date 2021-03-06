const { projects, clients } = require("./dataSample.js");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

//mongoose models
const Project = require("../models/Projects");
const Client = require("../models/Client");

//Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    //here we add a relationship to the client schema
    client: {
      type: ClientType,
      resolve(parent, args) {
        //client is a child of project
        // here we find the matching client and project ids
        // return clients.find(client => client.id === parent.clientId)
        return Client.findById(parent.clientId);
      },
    },
  }),
});

// the RootQuery enables you to pull data from the database

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //below we request client data single and all data
    clients: {
      type: new GraphQLList(ClientType),
      //do not need args as we do below as we are getting all clients and do need an id
      resolve(parent, args) {
        // return clients;

        return Client.find();
      },
    },
    client: {
      type: ClientType,
      //the below argument allows us to know which client we are getting
      args: { id: { type: GraphQLID } },
      //the resolver is our return that takes in a parent value and an argument 'args'. when we use mongodb we use a moongoose function to get our query
      resolve(parent, args) {
        //the below is only used as we currently do not have mongodb set up yet
        // return clients.find(client => client.id === args.id);

        return Client.findById(args.id);
      },
    },

    //below we request project data single and all data

    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        // return projects;
        //below we want to return all data so have not added any arguments
        return Project.find();
      },
    },
    project: {
      type: ProjectType,

      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return projects.find(project => project.id === args.id);

        //below we input an argument becasue we want to find a project by ID
        return Project.findById(args.id);
      },
    },
  },
});

//Mutations - allows us to add, change, delete

const mutation = new GraphQLObjectType({
  name: "Muation",
  fields: {
    //add
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return client.save();
      },
    },

    //delete
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
      },
    },

    //add project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });
        return project.save();
      },
    },

    //delete a project

    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndRemove(args.id);
      },
    },

    //update a project

    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        //take in Id of what we want to update
        return Project.findByIdAndUpdate(
          args.id,
          {
            //here we 'set' the values we want to update
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  //this takes in an object with a query (in our case RootQuery above)
  query: RootQuery,
  mutation,
});
