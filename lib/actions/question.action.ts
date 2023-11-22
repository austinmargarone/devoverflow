"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";

// export async function getQuestions(params: any) {
//   // eslint-disable-next-line no-undef
//   try {
//     connectToDatabase();
//     const questions = await Question.find().populate("author");
//     return questions;
//   } catch (error) {}
// }

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-undef
  try {
    connectToDatabase();
    const { title, content, tags, author } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }
    await question.findOneAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
  } catch (error) {}
}
