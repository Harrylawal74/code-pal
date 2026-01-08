import { Level } from "@/app/types/Questions";

/*this is a typescript module containing all data for all levels




* All of the data for level 1
* at the moment level 1 is foundations, but I will continue to use numbers incase I want to change the name later
* this data can be used to fill in compnents with props from here 
* this means that to change component data this file can be edited and the changes will trickle through
* FOLLOW CLASS STRUCTURE!
*/
const level1: Level = {
  name: "Foundations",
  description: "Some description",
  numberOfLessons: "5 lessons",
  /*needs to be undefined until the user completes the level*/
  status: 2,
  sections: [
    {
      section: 1,
      title: "Introduction to Programming",
      exercises: [
        {
          exercise: 1,
          questions: [
            {
              /* Level 1 Section 1 Exercise 1 Question 1*/
              id: "1-1-1-1",
              nextQuestionId: "1-1-1-2",
              type: "MCQ",
              firstQuestion: true,
              question: "What is the purpose of the hash symbol?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#The hash symbol (#) is used to start a comment",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "#Comments are used to explain what parts of the program do ",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: "\n 4 | " },
                  { id: 7, text: "\n 5 | " },
                ],
              },
              options: [
                "To run algorithms",
                "Defining variables",
                "To write comments",
                "Finding integers",
              ],
              correctAnswer: "To write comments",
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 2*/
              id: "1-1-1-2",
              nextQuestionId: "1-1-1-3",
              type: "MCQ",
              question: "What is the output of this algorithm?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: '#Output "Hello World"',
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: 'print("Hello World")',
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: "\n 4 | " },
                  { id: 7, text: "\n 5 | " },
                ],
              },
              options: [
                '"Output Hello World"',
                '"Hello World"',
                '"World Hello"',
                '"print("Hello World)"',
              ],
              correctAnswer: '"Hello World"',
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 3*/
              id: "1-1-1-3",
              nextQuestionId: "1-1-1-4",
              type: "MCQ",
              question: "What symbol MUST strings be enclosed in?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: '#Output the string "Hello World"',
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: 'print("Hello World")',
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: "\n 4 | " },
                  { id: 7, text: "\n 5 | " },
                ],
              },
              options: ["Hash #", "Percentage %", 'Quotation " "', "Dollar $"],
              correctAnswer: 'Quotation " "',
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 4 */
              id: "1-1-1-4",
              nextQuestionId: "1-1-1-5",
              type: "MCQ",
              question: "What data type is the output of this program?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: '#Output the string "Hello World"',
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: 'print("Hello World")',
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: "\n 4 | " },
                  { id: 7, text: "\n 5 | " },
                ],
              },
              options: [
                "Boolean",
                '"Hello World"',
                "String",
                'print("Hello World")',
              ],
              correctAnswer: '"Hello World"',
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 5*/
              id: "1-1-1-5",
              nextQuestionId: "1-1-1-6",
              type: "MCQ",
              question: 'Which data type is "Hello"?',
              options: ["Boolean", "String", "Float", "Integer"],
              correctAnswer: "String",
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 6 */
              id: "1-1-1-6",
              nextQuestionId: "1-1-1-7",
              type: "FIBCode",
              question:
                'Complete the code so that the algorithm outputs the string "Hello World":',
              options: [], // not used for FIB
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: " 1 | ", isBlank: false },
                  {
                    id: 2,
                    text: '#Output the string "Hello World"',
                    isBlank: false,
                  },
                  { id: 3, text: "\n 2 | ", isBlank: false },
                  { id: 4, text: 'print("Hello World', isBlank: false },
                  { id: 5, text: "", isBlank: true },
                  { id: 6, text: ") ", isBlank: false },
                  { id: 7, text: "\n 3 | ", isBlank: false },
                  { id: 8, text: "\n 4 | ", isBlank: false },
                  { id: 9, text: "\n 5 | ", isBlank: false },
                ],
                options: [
                  { id: 1, text: '"' },
                  { id: 2, text: "'" },
                  { id: 3, text: "string" },
                ],
                correctBlanks: [{ id: 5, correctOptionId: 1 }],
              },
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 7 */
              id: "1-1-1-7",
              nextQuestionId: "1-1-1-8",
              type: "MCQ",
              question: "Which symbol does line 3 use for a string?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#Strings can be enclosed in single OR double quotation marks",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "#But the type of quotation mark MUST match",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: 'print("Hello World")' },
                  { id: 7, text: "\n 4 | " },
                  { id: 8, text: "print('Hello World')" },
                  { id: 9, text: "\n 5 | " },
                ],
              },
              options: [
                "Hash #",
                "Percentage %",
                'Double Quotation " "',
                "Dollar $",
              ],
              correctAnswer: 'Double Quotation " "',
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 8 */
              id: "1-1-1-8",
              nextQuestionId: "1-1-1-9",
              type: "MCQ",
              question: "Which symbol does line 4 use for a string?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#Strings can be enclosed in single OR double quotation marks",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "#But the type of quotation mark MUST match",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: 'print("Hello World")' },
                  { id: 7, text: "\n 4 | " },
                  { id: 8, text: "print('Hello World')" },
                  { id: 9, text: "\n 5 | " },
                ],
              },
              options: [
                "Hash #",
                "Percentage %",
                "Dollar $",
                "Single Quotation ' '",
              ],
              correctAnswer: "Single Quotation ' '",
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 9 */
              id: "1-1-1-9",
              nextQuestionId: "1-1-1-10",
              type: "FIBCode",
              question:
                "Complete the code so that the algorithm outputs the string 'Hello World' :",
              options: [], // not used for FIB
              correctAnswer: "", // not used for FIB
              fibData: {
                sentenceParts: [
                  { id: 1, text: " 1 | ", isBlank: false },
                  {
                    id: 2,
                    text: "#Output the string 'Hello World'",
                    isBlank: false,
                  },
                  { id: 3, text: "\n 2 | ", isBlank: false },
                  { id: 4, text: "print('Hello World", isBlank: false },
                  { id: 5, text: "", isBlank: true },
                  { id: 6, text: ") ", isBlank: false },
                  { id: 7, text: "\n 3 | ", isBlank: false },
                  { id: 8, text: "\n 4 | ", isBlank: false },
                ],
                options: [
                  { id: 1, text: '"' },
                  { id: 2, text: "'" },
                  { id: 3, text: "string" },
                ],
                correctBlanks: [{ id: 5, correctOptionId: 2 }],
              },
            },
            {
              /* Level 1 Section 1 Exercise 1 Question 10 */
              id: "1-1-1-10",
              type: "MCQ",
              question: "What is the output of this algorithm?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: '#Output "Hello World"',
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: 'print("Hello World")',
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: "\n 4 | " },
                  { id: 7, text: "\n 5 | " },
                ],
              },
              options: [
                '"Output Hello World"',
                '"Hello World"',
                '"World Hello"',
                '"print("Hello World)"',
              ],
              correctAnswer: '"Hello World"',
            },
          ],
        },

        {
          exercise: 2,
          questions: [
            {
              /* Level 1 Section 1 Exercise 2 Question 9*/
              id: "1-1-2-1",
              nextQuestionId: "1-1-2-2",
              firstQuestion: true,
              type: "MCQ",
              question: "What is the name of this subprogram?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: "  1 | " },
                  {
                    id: 2,
                    text: "#Subprograms are used to deconstruct a program into smaller parts.",
                  },
                  { id: 3, text: "\n  2 | " },
                  { id: 4, text: "#to make it easier to read and solve." },
                  { id: 5, text: "\n  3 | " },
                  { id: 6, text: "#Subprogram called output" },
                  { id: 7, text: "\n  4 | " },
                  { id: 8, text: "def output( ):" },
                  { id: 9, text: "\n  5 | " },
                  { id: 10, text: '    print("Hello World")' },
                  { id: 11, text: "\n  6 | " },
                  { id: 12, text: "\n  7 | " },
                  { id: 13, text: "\n  8 | " },
                  { id: 14, text: "#Main program" },
                  { id: 15, text: "\n  9 | " },
                  { id: 16, text: "#Calls  the output subprogram" },
                  { id: 17, text: "\n10 | " },
                  { id: 18, text: "output( )" },
                  { id: 19, text: "\n11 | " },
                  { id: 20, text: "\n12 | " },
                ],
              },
              options: [
                "def output( )",
                '"Hello World"',
                "output( )",
                '"print("Hello World)"',
              ],
              correctAnswer: "output( )",
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 2*/
              id: "1-1-2-2",
              nextQuestionId: "1-1-2-3",
              type: "MCQ",
              question: "What is the output of this subprogram?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#Subprogram called output",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "def output( ):",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: '    print("Hello World")' },
                  { id: 7, text: "\n 4 | " },
                  { id: 8, text: "\n 5 | " },
                  { id: 9, text: "#Main program" },
                  { id: 10, text: "\n 6 | " },
                  { id: 11, text: "#Calls  the output subprogram" },
                  { id: 12, text: "\n 7 | " },
                  { id: 13, text: "output( )" },
                  { id: 14, text: "\n 8 | " },
                ],
              },
              options: [
                '"Output Hello World"',
                '"Hello World"',
                '"World Hello"',
                '"print("Hello World)"',
              ],
              correctAnswer: '"Hello World"',
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 4*/
              id: "1-1-2-3",
              nextQuestionId: "1-1-2-4",
              type: "MCQ",
              question: "What is the output of output( ) ?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#Subprogram called output",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "def output( ):",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: '    print("Hello World")' },
                  { id: 7, text: "\n 4 | " },
                  { id: 8, text: "\n 5 | " },
                  { id: 9, text: "#Main program" },
                  { id: 10, text: "\n 6 | " },
                  { id: 11, text: "#Calls  the output subprogram" },
                  { id: 12, text: "\n 7 | " },
                  { id: 13, text: "output( )" },
                  { id: 14, text: "\n 8 | " },
                ],
              },
              options: [
                '"Output Hello World"',
                '"World Hello"',
                '"print("Hello World)"',
                '"Hello World"',
              ],
              correctAnswer: '"Hello World"',
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 4*/
              id: "1-1-2-4",
              nextQuestionId: "1-1-2-5",
              type: "FIBCode",
              question:
                'Complete the code so that the subprogram outputs "Hello World".',
              options: [],
              correctAnswer: "",
              fibData: {
                sentenceParts: [
                  { id: 1, text: " 1 | ", isBlank: false },
                  { id: 2, text: "def output( ):", isBlank: false },
                  { id: 3, text: "\n 2 | ", isBlank: false },
                  { id: 4, text: "    print(", isBlank: false },
                  { id: 5, text: "", isBlank: true },
                  { id: 6, text: 'Hello World")', isBlank: false },
                  { id: 7, text: "\n 3 | ", isBlank: false },
                  { id: 8, text: "\n 4 | ", isBlank: false },
                  { id: 9, text: "\n 5 | ", isBlank: false },
                ],
                options: [
                  { id: 1, text: '"' },
                  { id: 2, text: "'" },
                  { id: 3, text: "#" },
                  { id: 4, text: "Subprogram" },
                  { id: 5, text: '("' },
                ],
                correctBlanks: [{ id: 5, correctOptionId: 1 }],
              },
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 5*/
              id: "1-1-2-5",
              nextQuestionId: "1-1-2-6",
              type: "MCQ",
              question: "What symbol starts a comment?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  { id: 2, text: "#This is a comment" },
                  { id: 3, text: "\n 2 | " },
                  { id: 4, text: 'print("Code")' },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: "\n 4 | " },
                  { id: 7, text: "\n 5 | " },
                ],
              },
              options: ["Hash #", 'Quotation " "', "Bracket ()", "Comma ,"],
              correctAnswer: "Hash #",
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 6*/
              id: "1-1-2-6",
              nextQuestionId: "1-1-2-7",
              type: "FIBCode",
              question: "Complete the code to output 'Welcome':",
              options: [],
              correctAnswer: "",
              fibData: {
                sentenceParts: [
                  { id: 1, text: " 1 | ", isBlank: false },
                  { id: 2, text: "#Output 'Welcome'", isBlank: false },
                  { id: 3, text: "\n 2 | ", isBlank: false },
                  { id: 4, text: "print('Welcome", isBlank: false },
                  { id: 5, text: "", isBlank: true },
                  { id: 6, text: ")", isBlank: false },
                  { id: 7, text: "\n 3 | ", isBlank: false },
                  { id: 8, text: "\n 4 | ", isBlank: false },
                  { id: 9, text: "\n 5 | ", isBlank: false },
                ],
                options: [
                  { id: 1, text: '"' },
                  { id: 2, text: "'" },
                  { id: 3, text: "#" },
                ],
                correctBlanks: [{ id: 5, correctOptionId: 2 }],
              },
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 7*/
              id: "1-1-2-7",
              nextQuestionId: "1-1-2-8",
              type: "MCQ",
              question: "What is the output of this subprogram?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#Subprogram called output",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "def output( ):",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: '    print("Learning to code")' },
                  { id: 7, text: "\n 4 | " },
                  { id: 8, text: "\n 5 | " },
                  { id: 9, text: "#Main program" },
                  { id: 10, text: "\n 6 | " },
                  { id: 11, text: "#Calls  the output subprogram" },
                  { id: 12, text: "\n 7 | " },
                  { id: 13, text: "output( )" },
                  { id: 14, text: "\n 8 | " },
                ],
              },
              options: [
                '"Output Hello World"',
                '"Hello World"',
                '"Learning to code"',
                '"Code to Learn"',
              ],
              correctAnswer: '"Learning to code"',
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 8*/
              id: "1-1-2-8",
              nextQuestionId: "1-1-2-9",
              type: "MCQ",
              question: "What is a subprogram?",
              options: [
                "A type of variable",
                "A block of code that can be reused from anywhere in the program",
                "A programming language",
                "A block of code that cannot be reused",
              ],
              correctAnswer:
                "A block of code that can be reused from anywhere in the program",
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 9*/
              id: "1-1-2-9",
              nextQuestionId: "1-1-2-10",
              type: "FIBCode",
              question:
                'Complete the code so that the subprogram outputs "I can code!".',
              options: [],
              correctAnswer: "",
              fibData: {
                sentenceParts: [
                  { id: 1, text: " 1 | ", isBlank: false },
                  { id: 2, text: "def output( ):", isBlank: false },
                  { id: 3, text: "\n 2 |    ", isBlank: false },
                  { id: 4, text: "", isBlank: true },
                  { id: 5, text: '("I can code!")', isBlank: false },
                  { id: 6, text: "\n 3 | ", isBlank: false },
                  { id: 7, text: "\n 4 | ", isBlank: false },
                  { id: 8, text: "\n 5 | ", isBlank: false },
                ],
                options: [
                  { id: 1, text: '"' },
                  { id: 2, text: "print" },
                  { id: 3, text: "#" },
                  { id: 4, text: "Subprogram" },
                  { id: 5, text: 'output( )' },
                ],
                correctBlanks: [{ id: 4, correctOptionId: 2 }],
              },
            },
            {
              /* Level 1 Section 1 Exercise 2 Question 10*/
              id: "1-1-2-10",
              type: "MCQ",
              question: "What data type does output( ) return?",
              codeSnipit: {
                sentenceParts: [
                  { id: 1, text: " 1 | " },
                  {
                    id: 2,
                    text: "#Subprogram called output",
                  },
                  { id: 3, text: "\n 2 | " },
                  {
                    id: 4,
                    text: "def output( ):",
                  },
                  { id: 5, text: "\n 3 | " },
                  { id: 6, text: '    print("Learning to code")' },
                  { id: 7, text: "\n 4 | " },
                  { id: 8, text: "\n 5 | " },
                  { id: 9, text: "#Main program" },
                  { id: 10, text: "\n 6 | " },
                  { id: 11, text: "#Calls  the output subprogram" },
                  { id: 12, text: "\n 7 | " },
                  { id: 13, text: "output( )" },
                  { id: 14, text: "\n 8 | " },
                ],
              },
              options: ["Boolean", "Integer", "String", "Comment"],
              correctAnswer: "String",
            },
          ],
        },
        {
          exercise: 3,
          questions: [
            {
              /* Level 1 Section 1 Exercise 3 Question 1*/
              id: "1-1-3-1",
              nextQuestionId: "1-1-3-2",
              firstQuestion: true,
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
              /* Level 1 Section 1 Exercise 3 Question 2*/
              id: "1-1-3-2",
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
              /* Level 1 Section 2 Exercise 1 Question 1*/
              id: "1-2-1-1",
              nextQuestionId: "1-2-1-2",
              firstQuestion: true,
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
              correctAnswer: "A way to handle multiple conditions",
            },
          ],
        },
        {
          exercise: 2,
          questions: [
            {
              /* Level 1 Section 2 Exercise 2 Question 1*/
              id: "1-2-2-1",
              nextQuestionId: "1-2-2-2",
              firstQuestion: true,
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
              /* Level 1 Section 2 Exercise 2 Question 2*/
              id: "1-2-2-2",
              nextQuestionId: "1-2-2-3",
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
      title: "Syntax Basics",
      exercises: [
        {
          exercise: 1,
          questions: [
            {
              /* Level 1 Section 3 Exercise 1 Question 1*/
              id: "1-3-1-1",
              nextQuestionId: "1-3-1-2",
              firstQuestion: true,
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
              /* Level 1 Section 3 Exercise 1 Question 2*/
              id: "1-3-1-2",
              nextQuestionId: "1-3-1-3",
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
              /* Level 1 Section 3 Exercise 1 Question 3*/
              id: "1-3-1-3",
              nextQuestionId: "1-3-1-4",
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
              /* Level 1 Section 3 Exercise 1 Question 4*/
              id: "1-3-1-4",
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
              /* Level 1 Section 3 Exercise 2 Question 1*/
              id: "1-3-2-1",
              nextQuestionId: "1-3-2-2",
              firstQuestion: true,
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
              /* Level 1 Section 3 Exercise 2 Question 2*/
              id: "1-3-2-2",
              nextQuestionId: "1-3-2-3",
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
              /* Level 1 Section 3 Exercise 2 Question 3*/
              id: "1-3-2-3",
              nextQuestionId: "1-3-2-4",
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
              /* Level 1 Section 3 Exercise 2 Question 4*/
              id: "1-3-2-4",
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
              /* Level 1 Section 3 Exercise 3 Question 1*/
              id: "1-3-3-1",
              nextQuestionId: "1-3-3-2",
              firstQuestion: true,
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
              /* Level 1 Section 3 Exercise 3 Question 2*/
              id: "1-3-3-2",
              nextQuestionId: "1-3-3-3",
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
              /* Level 1 Section 3 Exercise 3 Question 3*/
              id: "1-3-3-3",
              nextQuestionId: "1-3-3-4",
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
              /* Level 1 Section 3 Exercise 3 Question 4*/
              id: "1-3-3-4",
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

export default level1;
