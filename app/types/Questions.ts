export type Question = {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export type Exercise = {
    exercise: number;
    title: string;
    questions: Question[];
};

export type Section = {
    section: number;
    title: string;
    exercises: Exercise[];
};

export type Level = {
    level: string;
    sections: Section[];
};