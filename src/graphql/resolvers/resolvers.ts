import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { Brand, Post, User } from "../../generated/types";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();

export const resolvers = {
  Upload: GraphQLUpload,
  User: {
    brand: async (user: User) => {
      const id = user.id;
      const brand = await prisma.brand.findMany({ where: { userId: id } });
      return brand;
    },
  },
  Brand: {
    post: async (brand: Brand) => {
      const id = brand.id;
      const post = await prisma.post.findMany({ where: { brandId: id } });
      return post;
    },
    user: async (brand: Brand) => {
      const id = brand.userId;
      const user = await prisma.user.findMany({ where: { id: id } });
      return user;
    },
  },
  Post: {
    brand: async (post: Post) => {
      const id = post.brandId;
      const brand = await prisma.brand.findMany({ where: { id: id } });
      return brand;
    },
  },
  Query: {
    getUsers: async (_: any, { cursor }: { cursor: number }) => {
      let allUsers = await prisma.user.findMany({
        take: 2,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });
      let endCursor = 0,
        lastUserId = 0,
        hasNextPage;
      let users = allUsers.slice(-1);
      users.forEach((user) => {
        endCursor = endCursor + user.id;
      });
      const lastUsers = await prisma.user.findMany({
        orderBy: {
          id: "desc",
        },
        take: 1,
      });
      lastUsers.forEach((user) => {
        lastUserId = lastUserId + user.id;
      });
      if (lastUserId > endCursor) {
        hasNextPage = true;
      } else {
        hasNextPage = false;
      }
      return { user: allUsers, endCursor, hasNextPage };
    },
    getUserById: async (_: any, { id }: { id: number }) => {
      let oneUser = await prisma.user.findUnique({ where: { id } });
      return oneUser;
    },
    getBrands: async (_: any, { cursor }: { cursor: number }) => {
      let allBrands = await prisma.brand.findMany({
        take: 2,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });
      // endCursor
      let hasNextPage,
        endCursor = 0,
        lastBrandId = 0;
      const brands = allBrands.slice(-1);
      brands.forEach((brand) => {
        endCursor = endCursor + brand.id;
      });
      // lastBrandId
      const lastBrands = await prisma.brand.findMany({
        orderBy: {
          id: "desc",
        },
        take: 1,
      });
      lastBrands.forEach((brand) => {
        lastBrandId = lastBrandId + brand.id;
      });
      // hasNextPage
      if (lastBrandId > endCursor) {
        hasNextPage = true;
      } else {
        hasNextPage = false;
      }
      return { brand: allBrands, endCursor, hasNextPage };
    },
    getBrandById: async (_: any, { id }: { id: number }) => {
      let brand = await prisma.brand.findUnique({ where: { id } });
      return brand;
    },
    getPosts: async (_: any, { cursor }: { cursor: number }) => {
      let allPost = await prisma.post.findMany({
        take: 2,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });
      // endCursor
      let hasNextPage,
        endCursor = 0,
        lastPostId = 0;
      const posts = allPost.slice(-1);
      posts.forEach((post) => {
        endCursor = endCursor + post.id;
      });
      // lastPostId
      const lastPosts = await prisma.post.findMany({
        orderBy: {
          id: "desc",
        },
        take: 1,
      });
      lastPosts.forEach((post) => {
        lastPostId = lastPostId + post.id;
      });
      // hasNextPage
      if (lastPostId > endCursor) {
        hasNextPage = true;
      } else {
        hasNextPage = false;
      }
      return { post: allPost, endCursor, hasNextPage };
    },
    getPostById: async (_: any, { id }: { id: number }) => {
      let post = await prisma.post.findUnique({ where: { id } });
      return post;
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, age, gender }: User) => {
      await prisma.user.create({ data: { name, email, age, gender } });
      return "User created Successfully";
    },
    deleteUserById: async (_: any, { id }: { id: number }) => {
      await prisma.user.delete({ where: { id } });
      return `User ${id} is deleted successfully`;
    },
    updateUserById: async (_: any, { id, name, email, age, gender }: User) => {
      await prisma.user.update({
        data: {
          name,
          email,
          age,
          gender,
        },
        where: {
          id,
        },
      });
      return `User ${id} is updated successfully`;
    },
    createBrand: async (
      _: any,
      { name, country, year, isActive, type, userId }: Brand
    ) => {
      await prisma.brand.create({
        data: {
          name,
          country,
          year,
          isActive,
          type,
          userId,
        },
      });
      return `Brand created successfully`;
    },
    deleteBrandById: async (_: any, { id }: { id: number }) => {
      await prisma.brand.delete({ where: { id } });
      return `Brand ${id} deleted successfully`;
    },
    updateBrandById: async (
      _: any,
      { id, name, country, year, isActive, type, userId }: Brand
    ) => {
      await prisma.brand.update({
        data: {
          name,
          country,
          year,
          isActive,
          type,
          userId,
        },
        where: { id },
      });
      return `Brand ${id} is successfully updated`;
    },
    createPost: async (
      _: any,
      { title, image, impressions, brandId }: Post
    ) => {
      if (title && image && impressions && brandId) {
        await prisma.post.create({
          data: { title, image, impressions, brandId },
        });
      } else {
        let allPosts = (await axios.get("http://localhost:3000/post")).data;
        if (allPosts) {
          allPosts.forEach(async (post: Post) => {
            await prisma.post.create({
              data: {
                title: post.title,
                image: post.image,
                impressions: post.impressions,
                brandId: post.brandId,
              },
            });
          });
        } else {
          throw new Error("Error in fetching data");
        }
      }
      return "Post created successfully";
    },
    deletePostById: async (_: any, { id }: { id: number }) => {
      await prisma.post.delete({ where: { id } });
      return `Post ${id} deleted successfully`;
    },
    updatePostById: async (
      _: any,
      { id, title, image, impressions, brandId }: Post
    ) => {
      await prisma.post.update({
        where: { id },
        data: { title, image, impressions, brandId },
      });
      return `Post ${id} is successfully updated`;
    },
    uploadFile: async (_: any, { file }: { file: FileUpload }) => {
      const { createReadStream, filename } = await file;
      const parts = filename.split(".");
      const fileExtension = parts[parts.length - 1].toLowerCase();
      if (
        fileExtension == "jpeg" ||
        fileExtension == "jpg" ||
        fileExtension == "png" ||
        fileExtension == "gif"
      ) {
        const location = path.join(
          __dirname,
          `../../../public/images/${filename}`
        );
        const myFile = createReadStream();
        await myFile.pipe(fs.createWriteStream(location));
        return {
          url: `http://localhost:4000/images/${filename}`,
        };
      } else {
        throw new Error("Invalid File Type");
      }
    },
  },
};
