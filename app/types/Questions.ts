/**List of types predefined for the levels, sections, exercises, and questions*/


export type Question = {
    id: string;
    type: string; 
    question: string;
    options: string[];
    correctAnswer: string;
}

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