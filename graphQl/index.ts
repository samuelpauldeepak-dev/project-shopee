export const getUserQuery = `
query  GetUser($email:String!){
    user(by: {email: $email}){
        id
        name
        description
        email
        avatarUrl
        linkedInUrl
        githubUrl
    }
}
`;
export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!){
    userCreate(input: $input){
        user{
            name
            email
            description
            avatarUrl
            linkedInUrl
            githubUrl
            id
        }
    }
}
`;
