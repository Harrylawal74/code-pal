import { Level } from "@/app/types/Questions";

/*this is a typescript module containing all data for all levels




* All of the data for level 2
* at the moment level 2 is foundations, but I will continue to use numbers incase I want to change the name later
* this data can be used to fill in components with props from here 
* this means that to change component data this file can be edited and the changes will trickle through
* FOLLOW CLASS STRUCTURE!
*/
const level2: Level = {
  name: "Foundations",
  description: "Some description",
  numberOfLessons: "5 lessons",
  /*needs to be undefined until the user completes the level*/
  status: 2,
  sections: [
    {
      section: 1,
      title: "Syntax Basics",
      exercises: [
        {
          exercise: 1,
          questions: [
            {
              /* Level 2 Section 1 Exercise 1 Question 1*/
              id: "2-1-1-1",
              nextQuestionId: "2-1-1-2",
              type: "MCQ",
              question: "What is age?",
              firstQuestion: true,
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: ' 1| ' },
                  { id: 2, text: '# The hash "symbol" is used to start a comment werwerwerwerwerwr' },
                  { id: 3, text: '\n 2| ' },
                  { id: 4, text: '\n 3| ' },
                  { id: 5, text: '\n 4| ' },
                  { id: 6, text: '\n 5| ' },
                  { id: 7, text: '\n 6| ' },
                  { id: 8, text: '\n 7| ' },
                  { id: 9, text: '\n 8| ' },
                  { id: 10, text: '\n 9| ' },
                  { id: 11, text: '\n10| ' },
                  { id: 12, text: '\n11| ' },
                  { id: 13, text: '\n12| ' },
                  { id: 14, text: '\n13| ' },
                  { id: 15, text: '\n14| ' },
                  { id: 16, text: '\n15| ' },
                  { id: 17, text: '\n16| ' },
                  { id: 18, text: '\n17| ' },
                  { id: 19, text: '\n18| ' },
                  { id: 20, text: '\n19| ' },
                  { id: 21, text: '\n20| ' },
                  { id: 22, text: '\n21| ' },
                  { id: 23, text: '\n22| ' },
                  { id: 24, text: '\n23| ' },
                  { id: 25, text: '\n24| ' },
                  { id: 26, text: '\n25| ' },
                ],
              },
              options: [
                "A way to repeat code",
                "A variable name",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A variable name",
            },
            {
              /* Level 2 Section 1 Exercise 1 Question 2*/
              id: "2-1-1-2",
              nextQuestionId: "2-1-1-3",
              type: "MCQ",
              question: "What is a variable?",
              options: [
                "A value that can change",
                "A fixed value",
                "A type of function",
                "A programming language",
                "A programming language",
              ],
              correctAnswer: "A value that can change",
            },
            {
              /* Level 2 Section 1 Exercise 1 Question 3*/
              id: "2-1-1-3",
              nextQuestionId: "2-1-1-4",
              type: "MCQ",
              question: "What is a function?",
              options: [
                "A reusable block of code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A reusable block of code",
            },
            {
              /* Level 2 Section 1 Exercise 1 Question 4*/
              id: "2-1-1-4",
              nextQuestionId: "2-1-1-5",
              type: "MCQ",
              question: "What is a loop?",
              options: [
                "A way to repeat code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to repeat code",
            },
            {
              /* Level 2 Section 1 Exercise 1 Question 5 */
              id: "2-1-1-5",
              nextQuestionId: "2-1-1-6",
              type: "FIB",
              question: "Complete the sentence:",
              options: [], // not used for FIB
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: "Python is a", isBlank: false },
                  { id: 2, text: "", isBlank: true },
                  { id: 3, text: "that is used to make", isBlank: false },
                  { id: 4, text: "", isBlank: true },
                  { id: 5, text: ".", isBlank: false },
                ],
                options: [
                  { id: 1, text: "programming language" },
                  { id: 2, text: "algorithms" },
                ],
                correctBlanks: [
                  { id: 2, correctOptionId: 1 },
                  { id: 4, correctOptionId: 2 },
                ],
              },
            },
            {
              /* Level 2 Section 1 Exercise 1 Question 6 */
              id: "2-1-1-6",
              nextQuestionId: "2-1-1-7",
              type: "FIB",
              question: "Complete the sentence:",
              options: [], // not used for FIB typing
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: "Python is a", isBlank: false },
                  { id: 2, text: "", isBlank: true },
                  { id: 3, text: "that is used to make", isBlank: false },
                  { id: 4, text: "", isBlank: true },
                  { id: 5, text: ".", isBlank: false },
                ],
                options: [
                  { id: 1, text: "programming language" },
                  { id: 2, text: "algorithms" },
                ], //options mean right answers in the FIBTyping component
                correctBlanks: [
                  { id: 2, correctOptionId: 1 },
                  { id: 4, correctOptionId: 2 },
                ],
              },
            },
            {
              /* Level 2 Section 1 Exercise 1 Question 7 */
              id: "2-1-1-7",
              nextQuestionId: "2-1-1-8",
              type: "FIBCode",
              question: "Complete the sentence:",
              options: [], // not used for FIB
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: "#line 1|", isBlank: false },
                  { id: 2, text: "for i in range", isBlank: false },
                  { id: 3, text: "", isBlank: true },
                  { id: 4, text: "\n#line 2|", isBlank: false },
                  { id: 5, text: '    print("Hello world!")', isBlank: false },
                  { id: 6, text: "\n#line 3|", isBlank: false },
                  { id: 7, text: "", isBlank: true },
                ],
                options: [
                  { id: 1, text: "(0, 4)" },
                  { id: 2, text: "#end of code" },
                ],
                correctBlanks: [
                  { id: 3, correctOptionId: 1 },
                  { id: 7, correctOptionId: 2 },
                ],
              },
            },
          ],
        },

        {
          exercise: 2,
          questions: [
            {
              /* Level 2 Section 1 Exercise 2 Question 1*/
              id: "2-1-2-1",
              nextQuestionId: "2-1-2-2",
              type: "MCQ",
              question: "What is code?",
              options: [
                "A set of instructions for a computer",
                "A type of software",
                "A programming language",
                "Hardware",
              ],
              correctAnswer: "A set of instructions for a computer",
            },
            {
              /* Level 2 Section 1 Exercise 2 Question 2*/
              id: "2-1-2-2",
              nextQuestionId: "2-1-2-3",
              type: "MCQ",
              question: "What is a variable?",
              options: [
                "A value that can change",
                "A fixed value",
                "A type of function",
                "A programming language",
                "A programming language",
              ],
              correctAnswer: "A value that can change",
            },
            {
              /* Level 2 Section 1 Exercise 2 Question 3*/
              id: "2-1-2-3",
              nextQuestionId: "2-1-2-4",
              type: "MCQ",
              question: "What is a function?",
              options: [
                "A reusable block of code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A reusable block of code",
            },
            {
              /* Level 2 Section 1 Exercise 2 Question 4*/
              id: "2-1-2-4",
              nextQuestionId: "2-1-2-5",
              type: "MCQ",
              question: "What is a loop?",
              options: [
                "A way to repeat code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to repeat code",
            },
            {
              /* Level 2 Section 1 Exercise 2 Question 5 */
              id: "2-1-2-5",
              nextQuestionId: "2-1-2-6",
              type: "FIB",
              question: "Complete the sentence:",
              options: [], // not used for FIB
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: "Python is a", isBlank: false },
                  { id: 2, text: "", isBlank: true },
                  { id: 3, text: "that is used to make", isBlank: false },
                  { id: 4, text: "", isBlank: true },
                  { id: 5, text: ".", isBlank: false },
                ],
                options: [
                  { id: 1, text: "programming language" },
                  { id: 2, text: "algorithms" },
                ],
                correctBlanks: [
                  { id: 2, correctOptionId: 1 },
                  { id: 4, correctOptionId: 2 },
                ],
              },
            },
            {
              /* Level 2 Section 1 Exercise 2 Question 6 */
              id: "2-1-2-6",
              nextQuestionId: "2-1-2-7",
              type: "FIB",
              question: "Complete the sentence:",
              options: [], // not used for FIB typing
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: "Python is a", isBlank: false },
                  { id: 2, text: "", isBlank: true },
                  { id: 3, text: "that is used to make", isBlank: false },
                  { id: 4, text: "", isBlank: true },
                  { id: 5, text: ".", isBlank: false },
                ],
                options: [
                  { id: 1, text: "programming language" },
                  { id: 2, text: "algorithms" },
                ], //options mean right answers in the FIBTyping component
                correctBlanks: [
                  { id: 2, correctOptionId: 1 },
                  { id: 4, correctOptionId: 2 },
                ],
              },
            },
            {
              /* Level 2 Section 1 Exercise 2 Question 7 */
              id: "2-1-2-7",
              nextQuestionId: "2-1-2-8",
              type: "FIBCode",
              question: "Complete the sentence:",
              options: [], // not used for FIB
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: "#line 1|", isBlank: false },
                  { id: 2, text: "for i in range", isBlank: false },
                  { id: 3, text: "", isBlank: true },
                  { id: 4, text: "\n#line 2|", isBlank: false },
                  { id: 5, text: '    print("Hello world!")', isBlank: false },
                  { id: 6, text: "\n#line 3|", isBlank: false },
                  { id: 7, text: "", isBlank: true },
                ],
                options: [
                  { id: 1, text: "(0, 4)" },
                  { id: 2, text: "#end of code" },
                ],
                correctBlanks: [
                  { id: 3, correctOptionId: 1 },
                  { id: 7, correctOptionId: 2 },
                ],
              },
            },
          ],
        },
      ],
    },

    {
      section: 2,
      title: "If Statements",
      exercises: [
        {
          exercise: 1,
          questions: [
            {
              /* Level 2 Section 2 Exercise 1 Question 1*/
              id: "2-2-1-1",
              nextQuestionId: "2-2-1-2",
              type: "MCQ",
              question: "What is an if statement?",
              options: [
                "A way to make decisions in code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to make decisions in code",
            },
            {
              /* Level 2 Section 2 Exercise 1 Question 2*/
              id: "2-2-1-2",
              nextQuestionId: "2-2-1-3",
              type: "MCQ",
              question: "What is a switch statement?",
              options: [
                "A way to handle multiple conditions",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to handle multiple conditions",
            },
          ],
        },
        {
          exercise: 2,
          questions: [
            {
              /* Level 2 Section 2 Exercise 2 Question 1*/
              id: "2-2-2-1",
              nextQuestionId: "2-2-2-2",
              type: "MCQ",
              question: "What is an if statement?",
              options: [
                "A way to make decisions in code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to make decisions in code",
            },
            {
              /* Level 2 Section 2 Exercise 2 Question 2*/
              id: "2-2-2-2",
              nextQuestionId: "2-2-2-3",
              type: "MCQ",
              question: "What is a switch statement?",
              options: [
                "A way to handle multiple conditions",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to handle multiple conditions",
            },
          ],
        },
      ],
    },

    {
      section: 3,
      title: "Introduction to Programming",
      exercises: [
        {
          exercise: 1,
          questions: [
            {
              /* Level 2 Section 3 Exercise 1 Question 1*/
              id: "2-3-1-1",
              nextQuestionId: "2-3-1-2",
              type: "MCQ",
              question: "What is code?",
              options: [
                "A set of instructions for a computer",
                "A type of software",
                "A programming language",
                "Hardware",
              ],
              correctAnswer: "A set of instructions for a computer",
            },
            {
              /* Level 2 Section 3 Exercise 1 Question 2*/
              id: "2-3-1-2",
              nextQuestionId: "2-3-1-3",
              type: "MCQ",
              question: "What is a variable?",
              options: [
                "A value that can change",
                "A fixed value",
                "A type of function",
                "A programming language",
                "A programming language",
              ],
              correctAnswer: "A value that can change",
            },
            {
              /* Level 2 Section 3 Exercise 1 Question 3*/
              id: "2-3-1-3",
              nextQuestionId: "2-3-1-4",
              type: "MCQ",
              question: "What is a function?",
              options: [
                "A reusable block of code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A reusable block of code",
            },
            {
              /* Level 2 Section 3 Exercise 1 Question 4*/
              id: "2-3-1-4",
              nextQuestionId: "2-3-1-5",
              type: "MCQ",
              question: "What is a loop?",
              options: [
                "A way to repeat code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to repeat code",
            },
          ],
        },

        {
          exercise: 2,
          questions: [
            {
              /* Level 2 Section 3 Exercise 2 Question 1*/
              id: "2-3-2-1",
              nextQuestionId: "2-3-2-2",
              type: "MCQ",
              question: "What is code?",
              options: [
                "A set of instructions for a computer",
                "A type of software",
                "A programming language",
                "Hardware",
              ],
              correctAnswer: "A set of instructions for a computer",
            },
            {
              /* Level 2 Section 3 Exercise 2 Question 2*/
              id: "2-3-2-2",
              nextQuestionId: "2-3-2-3",
              type: "MCQ",
              question: "What is a variable?",
              options: [
                "A value that can change",
                "A fixed value",
                "A type of function",
                "A programming language",
                "A programming language",
              ],
              correctAnswer: "A value that can change",
            },
            {
              /* Level 2 Section 3 Exercise 2 Question 3*/
              id: "2-3-2-3",
              nextQuestionId: "2-3-2-4",
              type: "MCQ",
              question: "What is a function?",
              options: [
                "A reusable block of code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A reusable block of code",
            },
            {
              /* Level 2 Section 3 Exercise 2 Question 4*/
              id: "2-3-2-4",
              nextQuestionId: "2-3-2-5",
              type: "MCQ",
              question: "What is a loop?",
              options: [
                "A way to repeat code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to repeat code",
            },
          ],
        },

        {
          exercise: 3,
          questions: [
            {
              /* Level 2 Section 3 Exercise 3 Question 1*/
              id: "2-3-3-1",
              nextQuestionId: "2-3-3-2",
              type: "MCQ",
              question: "What is code?",
              options: [
                "A set of instructions for a computer",
                "A type of software",
                "A programming language",
                "Hardware",
              ],
              correctAnswer: "A set of instructions for a computer",
            },
            {
              /* Level 2 Section 3 Exercise 3 Question 2*/
              id: "2-3-3-2",
              nextQuestionId: "2-3-3-3",
              type: "MCQ",
              question: "What is a variable?",
              options: [
                "A value that can change",
                "A fixed value",
                "A type of function",
                "A programming language",
                "A programming language",
              ],
              correctAnswer: "A value that can change",
            },
            {
              /* Level 2 Section 3 Exercise 3 Question 3*/
              id: "2-3-3-3",
              nextQuestionId: "2-3-3-4",
              type: "MCQ",
              question: "What is a function?",
              options: [
                "A reusable block of code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A reusable block of code",
            },
            {
              /* Level 2 Section 3 Exercise 3 Question 4*/
              id: "2-3-3-4",
              nextQuestionId: "2-3-3-5",
              type: "MCQ",
              question: "What is a loop?",
              options: [
                "A way to repeat code",
                "A type of variable",
                "A programming language",
                "A type of software",
              ],
              correctAnswer: "A way to repeat code",
            },
          ],
        },
      ],
    },
  ],
};

export default level2;
