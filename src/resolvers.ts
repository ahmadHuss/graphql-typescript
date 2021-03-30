import {IResolvers} from 'graphql-tools';

const users = [{
    id: 'id-1',
    name: 'Ahmad Hussnain',
    bio: 'I don\'t know'
}];

let count = users.length;

const resolvers: IResolvers = {
    Query: {
        helloWorld: () => 'Hello World from Apollo Server!',
        users: () => users,
        user: (parent, args) => users.find((users) => {
            return users.id === args.id
        })
    },
    Mutation: {
        addUser: (parent, args) => {
            let newUser = {
                id: `id-${++count}`,
                name: args.name,
                bio: args.bio
            };
            users.push(newUser);
            console.log(users);
            return newUser;
        }
    }
};

export default resolvers;