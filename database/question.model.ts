import { Schema, models, model, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  content: {
    type: String,
    required: true,
    minlength: 100,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tags",
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  author: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Question =
  models.Question || models.Question || model("Question", QuestionsSchema);

export default Question;
