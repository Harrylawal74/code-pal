import {Level} from "@/app/types/Questions";


/*this is a typescript module containing all data for all levels




* All of the data for level 1
* it includes...
* at the moment level 1 is foundations, but I will continue to use numbers incase I want to change the name later
*/
const level1: Level = {
    name: "Foundations",
    description:"Some description",
    numberOfLessons: "5 lessons",
    /*needs to be undefined until the user completes the level*/
    status: "In Progress",
    sections: [
        {
            section: 1,
            title: "Syntax Basics",
            exercises: [
                {
                    exercise: 1,
                    questions: [
                        {
                            /* Level 1 Section 1 Exercise 1 Question 1*/ 
                            id: "1-1-1-1",
                            type: "MCQ4",
                            question: "What is code?",
                            options: [
                                "A set of instructions for a computer",
                                "A type of software",
                                "A programming language",
                                "Hardware",
                            ],
                            correctAnswer: "A set of instructions for a computer"
                        
                        },
                        {
                            /* Level 1 Section 1 Exercise 1 Question 2*/ 
                            id: "1-1-1-2",
                            type: "MCQ4",
                            question: "What is a variable?",
                            options: [
                                "A value that can change",
                                "A fixed value",
                                "A type of function",
                                "A programming language",
                            ],
                            correctAnswer: "A value that can change"
                        },
                        {
                            /* Level 1 Section 1 Exercise 1 Question 3*/ 
                            id: "1-1-1-3",
                            type: "MCQ4",
                            question: "What is a function?",
                            options: [
                                "A reusable block of code",
                                "A type of variable",
                                "A programming language",
                                "A type of software",
                            ],
                            correctAnswer: "A reusable block of code"
                        },
                        {
                            /* Level 1 Section 1 Exercise 1 Question 4*/ 
                            id: "1-1-1-4",
                            type: "MCQ4",
                            question: "What is a loop?",
                            options: [
                                "A way to repeat code",
                                "A type of variable",
                                "A programming language",
                                "A type of software",
                            ],
                            correctAnswer: "A way to repeat code"
                        }
                    ]
                }
            ]
        }
    ]
};

export default level1;