import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type Brand = {
  __typename?: 'Brand';
  country: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  post: Array<Post>;
  type: Type;
  user: Array<User>;
  userId: Scalars['Int']['output'];
  year: Scalars['String']['output'];
};

export type BrandInfo = {
  __typename?: 'BrandInfo';
  brand?: Maybe<Array<Maybe<Brand>>>;
  endCursor: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
};

export type File = {
  __typename?: 'File';
  url: Scalars['String']['output'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other'
}

export type Mutation = {
  __typename?: 'Mutation';
  createBrand?: Maybe<Scalars['String']['output']>;
  createPost?: Maybe<Scalars['String']['output']>;
  createUser?: Maybe<Scalars['String']['output']>;
  deleteBrandById: Scalars['String']['output'];
  deletePostById?: Maybe<Scalars['String']['output']>;
  deleteUserById?: Maybe<Scalars['String']['output']>;
  updateBrandById?: Maybe<Scalars['String']['output']>;
  updatePostById?: Maybe<Scalars['String']['output']>;
  updateUserById?: Maybe<Scalars['String']['output']>;
  uploadFile?: Maybe<File>;
};


export type MutationCreateBrandArgs = {
  country: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  type: Type;
  userId: Scalars['Int']['input'];
  year: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  brandId?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  impressions?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  age: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  gender: Gender;
  name: Scalars['String']['input'];
};


export type MutationDeleteBrandByIdArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePostByIdArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateBrandByIdArgs = {
  country: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  type: Type;
  userId: Scalars['Int']['input'];
  year: Scalars['String']['input'];
};


export type MutationUpdatePostByIdArgs = {
  brandId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  image: Scalars['String']['input'];
  impressions: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateUserByIdArgs = {
  age: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  gender: Gender;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type Post = {
  __typename?: 'Post';
  brand: Array<Brand>;
  brandId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  impressions: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type PostInfo = {
  __typename?: 'PostInfo';
  endCursor: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  post?: Maybe<Array<Maybe<Post>>>;
};

export type Query = {
  __typename?: 'Query';
  getBrandById?: Maybe<Brand>;
  getBrands?: Maybe<BrandInfo>;
  getPostById?: Maybe<Post>;
  getPosts?: Maybe<PostInfo>;
  getUserById?: Maybe<User>;
  getUsers?: Maybe<UserInfo>;
};


export type QueryGetBrandByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetBrandsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPostsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
};

export enum Type {
  Internal = 'Internal',
  Open = 'Open'
}

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  brand: Array<Brand>;
  email: Scalars['String']['output'];
  gender: Gender;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  endCursor: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  user?: Maybe<Array<Maybe<User>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Brand: ResolverTypeWrapper<Brand>;
  BrandInfo: ResolverTypeWrapper<BrandInfo>;
  File: ResolverTypeWrapper<File>;
  Gender: Gender;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostInfo: ResolverTypeWrapper<PostInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Type: Type;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserInfo: ResolverTypeWrapper<UserInfo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Brand: Brand;
  BrandInfo: BrandInfo;
  File: File;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Post: Post;
  PostInfo: PostInfo;
  Query: {};
  String: Scalars['String']['output'];
  Upload: Scalars['Upload']['output'];
  User: User;
  UserInfo: UserInfo;
};

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  user?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrandInfo'] = ResolversParentTypes['BrandInfo']> = {
  brand?: Resolver<Maybe<Array<Maybe<ResolversTypes['Brand']>>>, ParentType, ContextType>;
  endCursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBrand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateBrandArgs, 'country' | 'isActive' | 'name' | 'type' | 'userId' | 'year'>>;
  createPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreatePostArgs>>;
  createUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'age' | 'email' | 'gender' | 'name'>>;
  deleteBrandById?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteBrandByIdArgs, 'id'>>;
  deletePostById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeletePostByIdArgs, 'id'>>;
  deleteUserById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteUserByIdArgs, 'id'>>;
  updateBrandById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateBrandByIdArgs, 'country' | 'id' | 'isActive' | 'name' | 'type' | 'userId' | 'year'>>;
  updatePostById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdatePostByIdArgs, 'brandId' | 'id' | 'image' | 'impressions' | 'title'>>;
  updateUserById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateUserByIdArgs, 'age' | 'email' | 'gender' | 'id' | 'name'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUploadFileArgs, 'file'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  brand?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  brandId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostInfo'] = ResolversParentTypes['PostInfo']> = {
  endCursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  post?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getBrandById?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryGetBrandByIdArgs, 'id'>>;
  getBrands?: Resolver<Maybe<ResolversTypes['BrandInfo']>, ParentType, ContextType, Partial<QueryGetBrandsArgs>>;
  getPostById?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostByIdArgs, 'id'>>;
  getPosts?: Resolver<Maybe<ResolversTypes['PostInfo']>, ParentType, ContextType, Partial<QueryGetPostsArgs>>;
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
  getUsers?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brand?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = {
  endCursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Brand?: BrandResolvers<ContextType>;
  BrandInfo?: BrandInfoResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostInfo?: PostInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
};

