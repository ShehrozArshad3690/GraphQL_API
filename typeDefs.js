export const typeDefs = `#graphql
type User{
    id:ID!
    name:String!
    email:String!
    age:Int!
    gender:Gender!
    brand:[Brand!]!
}

enum Gender{
    Male
    Female
    Other
}

type UserInfo{
    user:[User]
    endCursor:Int!
    hasNextPage:Boolean!
}

type Brand{
    id:ID!
    name:String!
    country:String!
    year:String!
    isActive:Boolean!
    type:Type!
    userId:Int!
    post:[Post!]!
    user:[User!]!
}

enum Type{
    Open
    Internal
}

type BrandInfo{
    brand:[Brand]
    endCursor:Int!
    hasNextPage:Boolean!
}

type Post{
    id:ID!
    title:String!
    image:String!
    impressions:Int!
    brandId:Int!
    brand:[Brand!]!
}

type PostInfo{
    post:[Post]
    endCursor:Int!
    hasNextPage:Boolean!
}

type Query{
    getUsers(cursor:Int):UserInfo
    getUserById(id:Int!):User
    getBrands(cursor:Int):BrandInfo
    getBrandById(id:Int!):Brand
    getPosts(cursor:Int):PostInfo
    getPostById(id:Int!):Post
}

type Mutation{
   createUser(name:String!,email:String!,age:Int!,gender:Gender!):String
   deleteUserById(id:Int!):String
   updateUserById(id:Int!,name:String!,email:String!,age:Int!,gender:Gender!):String
   createBrand(name:String!,country:String!,year:String!,isActive:Boolean!,type:Type!,userId:Int!):String
   deleteBrandById(id:Int!):String!
   updateBrandById(id:Int!,name:String!,country:String!,year:String!,isActive:Boolean!,type:Type!,userId:Int!):String
   createPost(title:String,image:String,impressions:Int,brandId:Int):String
   deletePostById(id:Int!):String
   updatePostById(id:Int!,title:String!,image:String!,impressions:Int!,brandId:Int!):String
}
`;
