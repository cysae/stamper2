module.exports = {
        typeDefs: /* GraphQL */ `type AggregateFile {
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

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
  stamperyId: ID!
  hash: String!
  stampedAt: DateTime!
  readyAt: DateTime!
  owner: User!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
  stamperyId: ID!
  hash: String!
  stampedAt: DateTime!
  readyAt: DateTime!
  owner: UserCreateOneWithoutFilesInput!
}

input FileCreateManyWithoutOwnerInput {
  create: [FileCreateWithoutOwnerInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateWithoutOwnerInput {
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
  stamperyId: ID!
  hash: String!
  stampedAt: DateTime!
  readyAt: DateTime!
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
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
  stamperyId_ASC
  stamperyId_DESC
  hash_ASC
  hash_DESC
  stampedAt_ASC
  stampedAt_DESC
  readyAt_ASC
  readyAt_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
  stamperyId: ID!
  hash: String!
  stampedAt: DateTime!
  readyAt: DateTime!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
  stamperyId: ID
  hash: String
  stampedAt: DateTime
  readyAt: DateTime
  owner: UserUpdateOneRequiredWithoutFilesInput
}

input FileUpdateManyWithoutOwnerInput {
  create: [FileCreateWithoutOwnerInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutOwnerInput!]
}

input FileUpdateWithoutOwnerDataInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
  stamperyId: ID
  hash: String
  stampedAt: DateTime
  readyAt: DateTime
}

input FileUpdateWithWhereUniqueWithoutOwnerInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutOwnerDataInput!
}

input FileUpsertWithWhereUniqueWithoutOwnerInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutOwnerDataInput!
  create: FileCreateWithoutOwnerInput!
}

input FileWhereInput {
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
  stamperyId: ID
  stamperyId_not: ID
  stamperyId_in: [ID!]
  stamperyId_not_in: [ID!]
  stamperyId_lt: ID
  stamperyId_lte: ID
  stamperyId_gt: ID
  stamperyId_gte: ID
  stamperyId_contains: ID
  stamperyId_not_contains: ID
  stamperyId_starts_with: ID
  stamperyId_not_starts_with: ID
  stamperyId_ends_with: ID
  stamperyId_not_ends_with: ID
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  stampedAt: DateTime
  stampedAt_not: DateTime
  stampedAt_in: [DateTime!]
  stampedAt_not_in: [DateTime!]
  stampedAt_lt: DateTime
  stampedAt_lte: DateTime
  stampedAt_gt: DateTime
  stampedAt_gte: DateTime
  readyAt: DateTime
  readyAt_not: DateTime
  readyAt_in: [DateTime!]
  readyAt_not_in: [DateTime!]
  readyAt_lt: DateTime
  readyAt_lte: DateTime
  readyAt_gt: DateTime
  readyAt_gte: DateTime
  owner: UserWhereInput
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
  url: String
  stamperyId: ID
}

scalar Long

type Mutation {
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
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
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
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
  files: FileCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutFilesInput {
  create: UserCreateWithoutFilesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFilesInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
  files: FileCreateManyWithoutOwnerInput
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
  files: FileUpdateManyWithoutOwnerInput
}

input UserUpdateOneRequiredWithoutFilesInput {
  create: UserCreateWithoutFilesInput
  update: UserUpdateWithoutFilesDataInput
  upsert: UserUpsertWithoutFilesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFilesDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
  files: FileUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutFilesInput {
  update: UserUpdateWithoutFilesDataInput!
  create: UserCreateWithoutFilesInput!
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
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
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
    