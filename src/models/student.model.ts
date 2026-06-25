import mongoose from "mongoose";

interface IStudentSchema {
  email: string;
  firstName: string;
  married: boolean;
  age: number;
  password: string;
}

// student database
const studentSchema = new mongoose.Schema<IStudentSchema>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    married: {
      type: Boolean,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const studentModel = mongoose.model("Students", studentSchema);
export default studentModel;
