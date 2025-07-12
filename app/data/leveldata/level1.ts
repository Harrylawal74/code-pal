import {Level} from "@/app/types/Questions";


/*this is all of the data for level 1
* it includes...
* aT the moment level 1 is foundations, but I will continue to use numbers incase I want to change the name later
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