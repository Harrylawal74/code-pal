import {Level} from "@/app/types/Questions";

const level1: Level = {
    level: "foundations",
    sections: [
        {
            section: 1,
            title: "Syntax Basics",
            exercises: [
                {
                    exercise: 1,
                    title: "All easy Questions",
                    questions: [
                        {
                            /* Level 1 Section 1 Exercise 1 Question 1*/ 
                            id: "1-1-1-1",
                            question: "What is code?",
                            options: [
                                "A set of instructions for a computer",
                                "A type of software",
                                "A programming language",
                                "Hardware",
                            ],
                            correctAnswer: "A set of instructions for a computer"
                        
                        }
                    ]
                }
            ]
        }
    ]
};

export default level1;