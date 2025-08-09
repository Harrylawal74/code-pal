/**List of types predefined for the levels, sections, exercises, and questions*/

export type QuestionType = "MCQ" | "RQ" | "FIB"; // Added Fill In the Blank

export type FIBBlank = {
  id: number; // unique ID for the blank position
  correctOptionId: number; // which option should go here
};

export type FIBQuestionData = {
  sentenceParts: { id: number; text: string; isBlank: boolean }[];
  options: { id: number; text: string }[];
  correctBlanks: FIBBlank[];
};

export type Question = {
  id: string;
  type: QuestionType;
  question: string;
  options: string[]; // still used for MCQ
  correctAnswer: string; // still used for MCQ
  fibData?: FIBQuestionData; // used only if type === "FIB"
};


export type Exercise = {
    exercise: number;
    questions: Question[];
};

export type Section = {
    section: number;
    title: string;
    exercises: Exercise[];
};

export type Level = {
    name: string;
    description: string;
    numberOfLessons: string;
    status: string; 
    sections: Section[];
};