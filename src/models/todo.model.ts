import mongoose, { Document, Schema } from 'mongoose';

// What we send to the database
export interface ITodo {
  task: string;
  state: boolean;
}

// What we recieve to the database
export interface TodoModel extends Document {
  task: string;
  state: boolean;
}

const TodoSchema = new Schema<TodoModel>({
  task: {
    type: String,
    require: true,
  },
  state: {
    type: Boolean,
    require: true,
  },
});

export default mongoose.model<TodoModel>('Todo', TodoSchema);
