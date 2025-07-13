import {Level} from "@/app/types/Questions";


/*this is a typescript module containing all data for all levels




* All of the data for level 1
* at the moment level 1 is foundations, but I will continue to use numbers incase I want to change the name later
* this data can be used to fill in compnents with props from here 
* this means that to change component data this file can be edited and the changes will trickle through
* FOLLOW CLASS STRUCTURE!
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
                            type: "MCQ",
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
                            type: "MCQ",
                            question: "What is a variable?",
                            options: [
                                "A value that can change",
                                "A fixed value",
                                "A type of function",
                                "A programming language",
                                "A programming language",
                            ],
                            correctAnswer: "A value that can change"
                        },
                        {
                            /* Level 1 Section 1 Exercise 1 Question 3*/ 
                            id: "1-1-1-3",
                            type: "MCQ",
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
                            type: "MCQ",
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
            ],
            
        },

        {
            section: 2,
            title: "Control Flow",
            exercises: [
                {
                    exercise: 1,
                    questions: [
                        {
                            /* Level 1 Section 2 Exercise 1 Question 1*/ 
                            id: "1-2-1-1",
                            type: "MCQ",
                            question: "What is an if statement?",
                            options: [
                                "A way to make decisions in code",
                                "A type of variable",
                                "A programming language",
                                "A type of software",
                            ],
                            correctAnswer: "A way to make decisions in code"
                        },
                        {
                            /* Level 1 Section 2 Exercise 1 Question 2*/ 
                            id: "1-2-1-2",
                            type: "MCQ",
                            question: "What is a switch statement?",
                            options: [
                                "A way to handle multiple conditions",
                                "A type of variable",
                                "A programming language",
                                "A type of software",
                            ],
                            correctAnswer: "A way to handle multiple conditions"
                        }
                    ]
                }
            ]
        }
    ],

    
};

export default level1;