module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDocument {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Document {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

type DocumentConnection {
  pageInfo: PageInfo!
  edges: [DocumentEdge]!
  aggregate: AggregateDocument!
}

input DocumentCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

input DocumentCreateManyInput {
  create: [DocumentCreateInput!]
  connect: [DocumentWhereUniqueInput!]
}

type DocumentEdge {
  node: Document!
  cursor: String!
}

enum DocumentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
}

type DocumentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

type DocumentSubscriptionPayload {
  mutation: MutationType!
  node: Document
  updatedFields: [String!]
  previousValues: DocumentPreviousValues
}

input DocumentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DocumentWhereInput
  AND: [DocumentSubscriptionWhereInput!]
  OR: [DocumentSubscriptionWhereInput!]
  NOT: [DocumentSubscriptionWhereInput!]
}

input DocumentUpdateDataInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input DocumentUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input DocumentUpdateManyInput {
  create: [DocumentCreateInput!]
  update: [DocumentUpdateWithWhereUniqueNestedInput!]
  upsert: [DocumentUpsertWithWhereUniqueNestedInput!]
  delete: [DocumentWhereUniqueInput!]
  connect: [DocumentWhereUniqueInput!]
  disconnect: [DocumentWhereUniqueInput!]
}

input DocumentUpdateWithWhereUniqueNestedInput {
  where: DocumentWhereUniqueInput!
  data: DocumentUpdateDataInput!
}

input DocumentUpsertWithWhereUniqueNestedInput {
  where: DocumentWhereUniqueInput!
  update: DocumentUpdateDataInput!
  create: DocumentCreateInput!
}

input DocumentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [DocumentWhereInput!]
  OR: [DocumentWhereInput!]
  NOT: [DocumentWhereInput!]
}

input DocumentWhereUniqueInput {
  id: ID
  url: String
}

scalar Long

type Mutation {
  createDocument(data: DocumentCreateInput!): Document!
  updateDocument(data: DocumentUpdateInput!, where: DocumentWhereUniqueInput!): Document
  updateManyDocuments(data: DocumentUpdateInput!, where: DocumentWhereInput): BatchPayload!
  upsertDocument(where: DocumentWhereUniqueInput!, create: DocumentCreateInput!, update: DocumentUpdateInput!): Document!
  deleteDocument(where: DocumentWhereUniqueInput!): Document
  deleteManyDocuments(where: DocumentWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  document(where: DocumentWhereUniqueInput!): Document
  documents(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Document]!
  documentsConnection(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DocumentConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  document(where: DocumentSubscriptionWhereInput): DocumentSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  documents(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Document!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
  documents: DocumentCreateManyInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
  documents: DocumentCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  documents: DocumentUpdateManyInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
  documents: DocumentUpdateManyInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  documents_every: DocumentWhereInput
  documents_some: DocumentWhereInput
  documents_none: DocumentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    