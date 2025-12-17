/**List of types predefined for the levels, sections, exercises, and questions*/

export type QuestionType = "MCQ" | "RQ" | "FIB" | "FIBCode"; // Added Fill In the Blank

export type FIBBlank = {
  id: number; // unique ID for the blank position
  correctOptionId: number; // which option should go here
};

export type FIBQuestionData = {
  sentenceParts: { id: number; text: string; isBlank: boolean }[];
  options: { id: number; text: string }[]; //options mean right answers in the FIBTyping component
  correctBlanks: FIBBlank[];
};

export type CodeBlockData = {
  sentenceParts: { id: number; text: string }[];
};

export type Question = {
  id: string;
  nextQuestionId?: string; // ID of the next question, optional seeing as there is a final quesiton
  firstQuestion?: boolean;
  type: QuestionType;
  question: string;
  codeSnipit?: CodeBlockData;
  options: string[]; // still used for MCQ
  correctAnswer: string; // still used for MCQ
  fibData?: FIBQuestionData; // used only if type === "FIB" or "FIBCode" or "FIBTyping"
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
    status: number; 
    sections: Section[];
};