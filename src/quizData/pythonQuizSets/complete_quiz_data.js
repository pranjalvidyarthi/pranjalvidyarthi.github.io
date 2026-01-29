// Complete Quiz Data - All 100 Python Questions
// Simply copy the 'sets' object and paste it into your existing quizData.python.sets

const pythonQuizSets = {
  set1: [
    {
      q: "1. Is Python case-sensitive when dealing with identifiers?",
      options: ["yes", "no", "machine dependent", "none of the mentioned"],
      answer: "yes",
      explanation: "Case is always significant.",
    },
    {
      q: "2. Which of the following is invalid?",
      options: ["_a = 1", "a = 1", "str = 1", "none of the mentioned"],
      answer: "none of the mentioned",
      explanation: "All the statements will execute successfully but at the cost of reduced readability.",
    },
    {
      q: "3. Which of the following is an invalid variable?",
      options: ["my_string_1", "1st_string", "foo", "_"],
      answer: "1st_string",
      explanation: "Variable names should not start with a number.",
    },
    {
      q: "4. All keywords in Python are in",
      options: ["lower case", "UPPER CASE", "Capitalized", "None of the mentioned"],
      answer: "None of the mentioned",
      explanation: "True, False and None are capitalized while the others are in lower case.",
    },
    {
      q: "5. Which of the following is true for variable names in Python?",
      options: [
        "unlimited length",
        "all private members must have leading and trailing underscores",
        "underscore and ampersand are the only two special characters allowed",
        "none of the mentioned"
      ],
      answer: "unlimited length",
      explanation: "Variable names can be of any length",
    },
    {
      q: "6. Which of the following cannot be a variable?",
      options: ["_init_", "in", "it", "on"],
      answer: "in",
      explanation: "in is a keyword",
    },
    {
      q: "7. Which is the correct operator for power(xy)?",
      options: ["X^y", "X**y", "X^^y", "None of the mentioned"],
      answer: "X**y",
      explanation: "In python, power operator is x**y i.e. 2**3=8.",
    },
    {
      q: "8. Which one of these is floor division?",
      options: ["/", "//", "%", "None of the mentioned"],
      answer: "//",
      explanation: "When both of the operands are integers then Python chops out the fraction part and gives you the round-off value, to get the accurate answer use floor division.",
    },
    {
      q: "9. What is the order of precedence in Python? i) Parentheses ii) Exponential iii) Multiplication iv) Division v) Addition vi) Subtraction",
      options: ["i,ii,iii,iv,v,vi", "ii,i,iii,iv,v,vi", "ii,i,iv,iii,v,vi", "i,ii,iii,iv,vi,v"],
      answer: "i,ii,iii,iv,v,vi",
      explanation: "For order of precedence, just remember this PEMDAS (similar to BODMAS)",
    },
    {
      q: "10. What is the answer to this expression, 22 % 3?",
      options: ["7", "1", "0", "5"],
      answer: "1",
      explanation: "The modulus operator gives the remainder. So, 22%3 gives the remainder, that is, 1.",
    },
  ],
  
  set2: [
    {
      q: "11. Operators with the same precedence are evaluated in which manner?",
      options: ["Left to Right", "Right to Left", "Can't say", "None of the mentioned"],
      answer: "Left to Right",
      explanation: "",
    },
    {
      q: "12. What is the output of this expression, 3*1**3?",
      options: ["27", "9", "3", "1"],
      answer: "3",
      explanation: "First this expression will solve 1**3 because exponential has higher precedence than multiplication, so 1**3 = 1 and 3*1 = 3. Final answer is 3.",
    },
    {
      q: "13. The expression int(x) implies that the variable x is converted to an integer. State whether true or false.",
      options: ["True", "False"],
      answer: "True",
      explanation: "",
    },
    {
      q: "14. Which one of the following has the highest precedence in the expression?",
      options: ["Exponential", "Addition", "Multiplication", "Parentheses"],
      answer: "Parentheses",
      explanation: "Just remember: PEMDAS, that is, Parenthesis, Exponentiation, Division, Multiplication, Addition, Subtraction.",
    },
    {
      q: "15. Which of these is not a core data type?",
      options: ["Lists", "Dictionary", "Tuples", "Class"],
      answer: "Class",
      explanation: "Class is a user-defined data type.",
    },
    {
      q: "16. Given a function that does not return any value, What value is thrown by default when executed in the shell?",
      options: ["Int", "bool", "void", "None"],
      answer: "None",
      explanation: "Python shell throws a NoneType object back",
    },
    {
      q: "17. Which of the following will run without errors?",
      options: ["round(45.8)", "round(6352.898,2,5)", "round()", "round(7463.123,2,1)"],
      answer: "round(45.8)",
      explanation: "Execute help(round) in the shell to get details of the parameters that are passed into the round function.",
    },
    {
      q: "18. What is the return type of function id() ?",
      options: ["int", "float", "bool", "dict"],
      answer: "int",
      explanation: "Execute help(id) to find out details in the Python shell. The id() returns an integer address location that is unique.",
    },
    {
      q: "19. What error occurs when you execute? apple = mango",
      options: ["SyntaxError", "NameError", "ValueError", "TypeError"],
      answer: "NameError",
      explanation: "Mango is not defined hence name error.",
    },
    {
      q: "20. Carefully observe the code: def example(a): a = a + '2'; a = a*2; return a; >>>example('hello')",
      options: [
        "indentation Error",
        "cannot perform a mathematical operation on strings",
        "hello2",
        "hello2hello2"
      ],
      answer: "indentation Error",
      explanation: "Python codes have to be indented properly.",
    },
  ],

  set3: [
    {
      q: "21. What data type is the object below? L = [1, 23, 'hello', 1]",
      options: ["list", "dictionary", "array", "tuple"],
      answer: "list",
      explanation: "List data type can store any values within it.",
    },
    {
      q: "22. In order to store values in terms of key and value we use what core data type.",
      options: ["list", "tuple", "class", "dictionary"],
      answer: "dictionary",
      explanation: "The dictionary stores values in terms of keys and values.",
    },
    {
      q: "23. What is the average value of the code that is executed below? >>>grade1 = 80; >>>grade2 = 90; >>>average = (grade1 + grade2) / 2",
      options: ["85.0", "85.1", "95.0", "95.1"],
      answer: "85.0",
      explanation: "Cause a decimal value of 0 to appear as output.",
    },
    {
      q: "24. Select all options that print hello-how-are-you",
      options: [
        "print('hello-', 'how-', 'are-', 'you')",
        "print('hello', 'how', 'are', 'you' + '-' * 4)",
        "print('hello-' + 'how-' + 'are-' + 'you')",
        "print('hello' + '-' + 'how' + '-' + 'are' + 'you')"
      ],
      answer: "print('hello-' + 'how-' + 'are-' + 'you')",
      explanation: "+ operator concatenates strings without any space between them, where as the comma operator adds a space in between each string.",
    },
    {
      q: "25. What is the return value of trunc() ?",
      options: ["int", "bool", "float", "None"],
      answer: "int",
      explanation: "trunc() returns int value. Execute help(math.trunc) to get details.",
    },
    {
      q: "26. The value of expressions 4/(3*(2-1)) and 4/3*(2-1) is the same. true or false?",
      options: ["True", "False"],
      answer: "True",
      explanation: "",
    },
    {
      q: "27. Which of the following operators has its associativity from right to left?",
      options: ["+", "//", "%", "**"],
      answer: "**",
      explanation: "All of the operators shown above have associativity from left to right, except the exponentiation operator (**) which has its associativity from right to left.",
    },
    {
      q: "28. What is the value of x if: x = int(43.55+2/2)",
      options: ["43", "44", "22", "23"],
      answer: "44",
      explanation: "The expression shown above is an example of explicit conversion. It is evaluated as int(43.55+1) = int(44.55) = 44.",
    },
    {
      q: "29. Which of the following is the truncation division operator?",
      options: ["/", "%", "//", "|"],
      answer: "//",
      explanation: "// is the operator for truncation division. It returns only the integer part of the quotient, truncating the decimal part.",
    },
    {
      q: "30. What are the values of the following expressions: 2**(3**2), (2**3)**2, 2**3**2",
      options: ["64, 512, 64", "64, 64, 64", "512, 512, 512", "512, 64, 512"],
      answer: "512, 64, 512",
      explanation: "Expression 1 is evaluated as: 2**9, which is equal to 512. Expression 2 is evaluated as 8**2, which is equal to 64. The last expression is evaluated as 2**(3**2) due to right-to-left associativity.",
    },
  ],

  set4: [
    {
      q: "31. Which of the following expressions results in an error?",
      options: ["float('10')", "int('10')", "float('10.8')", "int('10.8')"],
      answer: "int('10.8')",
      explanation: "All of the above examples show explicit conversion. However, the expression int('10.8') results in an error.",
    },
    {
      q: "32. Python files are saved with the extension as ____ ?",
      options: [".python", ".pe", ".py", ".pi"],
      answer: ".py",
      explanation: "",
    },
    {
      q: "33. What is the name of the GUI that comes in-built as an interactive shell with Python?",
      options: ["PGUI", "Pyshell", "IDLE", "PythonSh"],
      answer: "IDLE",
      explanation: "",
    },
    {
      q: "34. IDLE stands for?",
      options: [
        "Indigenous Development Lab",
        "Integrated Development Environment",
        "Integrated Developers Local Environment",
        "Integrated Development and Learning Environment"
      ],
      answer: "Integrated Development and Learning Environment",
      explanation: "IDLE is Python's Integrated Development and Learning Environment.",
    },
    {
      q: "35. A user-specified value can be assigned to a variable with ______ function.",
      options: ["user", "enter", "input", "value"],
      answer: "input",
      explanation: "Python input() function is used to take user input. By default, it returns the user input in form of a string.",
    },
    {
      q: "36. User input is read as ________ ?",
      options: ["Floating Decimal", "Text String", "Boolean Value", "Integer"],
      answer: "Text String",
      explanation: "Python input() function is used to take user input. By default, it returns the user input in form of a text string.",
    },
    {
      q: "37. Output displayed by the print function will add this invisible character at the end of the line by default ______",
      options: ["backslash t", "backslash n", "backslash s", "backslash r"],
      answer: "backslash n",
      explanation: "backslash n that is - \\n",
    },
    {
      q: "38. Multiple values specified in parentheses to print function will display each value separated with this by default ...",
      options: ["Single Space", "Double Space", "A new Line", "Double Lines"],
      answer: "Single Space",
      explanation: "",
    },
    {
      q: "39. Which of the following will provide an ! character as alternative separator for the print function?",
      options: ["sep is !", "separate = !", "sep >> '!'", "sep = '!'"],
      answer: "sep = '!'",
      explanation: "",
    },
    {
      q: "40. Which of the following will provide a * character as alternative line ending for the print function?",
      options: ["end to *", "end as *", "end = '*'", "ending = '*'"],
      answer: "end = '*'",
      explanation: "",
    },
  ],

  set5: [
    {
      q: "41. For which type of error does the interpreter halts and reports the error but does not execute the program?",
      options: ["Semantic error", "Syntax error", "Runtime error", "All type of errors"],
      answer: "Syntax error",
      explanation: "",
    },
    {
      q: "42. For which type of error does the interpreter runs the program but halts at error and reports the error as an 'Exception'?",
      options: ["Semantic error", "Syntax error", "Runtime error", "All type of errors"],
      answer: "Runtime error",
      explanation: "",
    },
    {
      q: "43. For which type of error does the interpreter runs the program and does not report an error?",
      options: ["Semantic error", "Syntax error", "Runtime error", "All type of errors"],
      answer: "Semantic error",
      explanation: "",
    },
    {
      q: "44: What do you type to enter the interactive help mode of Python?",
      options: ["HELP", "save", "help()", "help"],
      answer: "help()",
      explanation: "",
    },
    {
      q: "45. What type of language is Python?",
      options: ["High level", "Low level", "Top level", "Bottom level"],
      answer: "High level",
      explanation: "",
    },
    {
      q: "46. Python language was named after?",
      options: ["Python - the reptile", "Monty Python", "A pet", "A company"],
      answer: "Monty Python",
      explanation: "",
    },
    {
      q: "47. Who is the creator of Python?",
      options: ["Bill Gates", "Guido Van Rossum", "Larry Page", "Jeff Bezos"],
      answer: "Guido Van Rossum",
      explanation: "",
    },
    {
      q: "48. Which of the following is identified with Python?",
      options: ["Dynamic typing", "Static typing", "Slow typing", "Auto typing"],
      answer: "Dynamic typing",
      explanation: "",
    },
    {
      q: "49. Which of the following is used to enclose strings?",
      options: ["! symbol", "Double quotes", "Single quotes", "Either single quotes or double quotes"],
      answer: "Either single quotes or double quotes",
      explanation: "",
    },
    {
      q: "50. In IDLE shell, the output will be the same for all the following statements except one. Which one?",
      options: ["4*3", "60//5", "17-5", "12/1"],
      answer: "12/1",
      explanation: "12/1 = 12.0 (Results in floating value)",
    },
  ],

  set6: [
    {
      q: "51. In IDLE shell, the output will be an error for one of the following statements. Which one?",
      options: [
        "P = 'python' * int('1')",
        "P = 'python' + 1",
        "P = 'python' + str(1)",
        "P = 'python' * 1"
      ],
      answer: "P = 'python' + 1",
      explanation: "",
    },
    {
      q: "52. What is used for multi-line strings in Python?",
      options: ["Three braces {{{ }}}", "Three Colons ::: :::", "Three hashes ### ###", "Three Quotes ''' '''"],
      answer: "Three Quotes ''' '''",
      explanation: "",
    },
    {
      q: "53. What will be the output: x = 90; y = 'I ran for %s minutes'; print(y % x)",
      options: [
        "y ran for x minutes",
        "y ran for 90 minutes",
        "I ran for 90 minutes",
        "I ran for x minutes"
      ],
      answer: "I ran for 90 minutes",
      explanation: "",
    },
    {
      q: "54. What will be the output: x = 'She'; y = 60; z = 'ran for %s minutes'; print(x, z % y)",
      options: [
        "ran for 60 minutes",
        "she ran for 60 minutes",
        "She ran for 60 minutes",
        "x ran for 60 minutes"
      ],
      answer: "She ran for 60 minutes",
      explanation: "",
    },
    {
      q: "55. What will be the output: x = ' '; print(x*5)",
      options: ["Displays a tab", "Displays 5 spaces", "Displays a newline", "Displays 10 quotes"],
      answer: "Displays 5 spaces",
      explanation: "",
    },
    {
      q: "56. What will be the output: x = 'no'; y = 'yes'; z = 'may be'; a = [y, z, x]; print(a)",
      options: [
        "'yes', 'may be', 'no'",
        "'no', 'may be', 'yes'",
        "['no', 'may be', 'yes']",
        "['yes', 'may be', 'no']"
      ],
      answer: "['yes', 'may be', 'no']",
      explanation: "",
    },
    {
      q: "57. Which of the following is used by the interpreter to identify code blocks?",
      options: ["Braces", "Indentation", "Commas", "Expressions"],
      answer: "Indentation",
      explanation: "",
    },
    {
      q: "58. Which of the following claims about Python's object-oriented programming model is true?",
      options: [
        "Classes are real-world entities while objects are not real",
        "Objects are real-world entities while classes are not real",
        "Both objects and classes are real-world entities",
        "All of the above"
      ],
      answer: "Objects are real-world entities while classes are not real",
      explanation: "In object-oriented programming, an object is an instance of a class. Objects are often used to represent real-world entities.",
    },
    {
      q: "59. What in Python is the name of the function inside the class?",
      options: ["Object", "Method", "Attribute", "Argument"],
      answer: "Method",
      explanation: "In object-oriented programming, a function that is defined inside a class is called a method.",
    },
    {
      q: "60. Which of the following doesn't qualify as a keyword in Python?",
      options: ["val", "raise", "try", "with"],
      answer: "val",
      explanation: "'val' is not a keyword in Python. Keywords are reserved words in Python that have a specific meaning.",
    },
  ],

  set7: [
    {
      q: "61. Which of the following selections serves as the literal hexadecimal start?",
      options: ["00", "0x", "0X", "Both 0x and 0X"],
      answer: "Both 0x and 0X",
      explanation: "x = 0xFF; # x is 255; y = 0XFF; # y is also 255",
    },
    {
      q: "62. What will be the output: x = 7; if x > 5: print(20)",
      options: ["20", "5", "x", "7"],
      answer: "20",
      explanation: "",
    },
    {
      q: "63. What will be the output: x = 8; if x > 8: print(20); else: print(10)",
      options: ["20", "x", "10", "8"],
      answer: "10",
      explanation: "",
    },
    {
      q: "64. Write a list comprehension to produce the list: [1, 2, 4, 8, 16……212].",
      options: [
        "[(2**x) for x in range(0, 13)]",
        "[(x**2) for x in range(1, 13)]",
        "[(2**x) for x in range(1, 13)]",
        "[(x**2) for x in range(0, 13)]"
      ],
      answer: "[(2**x) for x in range(0, 13)]",
      explanation: "The required list comprehension will print the numbers from 1 to 12, each raised to 2.",
    },
    {
      q: "65. What will be the output of nested if-elif-else code with x, a, b = 0, 5, 5?",
      options: ["0", "4", "2", "3"],
      answer: "3",
      explanation: "",
    },
    {
      q: "67. What will be the output of nested for loop with var = 10?",
      options: ["20", "21", "10", "30"],
      answer: "21",
      explanation: "",
    },
    {
      q: "68. What will be the output: x = ['ab', 'cd']; for i in x: i.upper(); print(x)",
      options: ["['ab', 'cd']", "['AB', 'CD']", "[None, None]", "none of the mentioned"],
      answer: "['ab', 'cd']",
      explanation: "The function upper() does not modify a string in place, it returns a new string which isn't being stored anywhere.",
    },
    {
      q: "69. What will be the output: x = ['ab', 'cd']; for i in x: x.append(i.upper()); print(x)",
      options: ["['AB', 'CD']", "['ab', 'cd', 'AB', 'CD']", "['ab', 'cd']", "Infinite loop"],
      answer: "Infinite loop",
      explanation: "The loop does not terminate as new elements are being added to the list in each iteration.",
    },
    {
      q: "70. What will be the output: i = 1; while True: if i%3 == 0: break; print(i); i + = 1",
      options: ["1 2", "1 2 3", "error", "none of the mentioned"],
      answer: "error",
      explanation: "SyntaxError, there shouldn't be a space between + and = in +=.",
    },
    {
      q: "71. What will be the output: i = 1; while True: if i%2 == 0: break; print(i); i += 2",
      options: ["1", "1 2", "1 2 3 4 5 6 …", "1 3 5 7 9 11 …"],
      answer: "1 3 5 7 9 11 …",
      explanation: "The loop does not terminate since i is never an even number.",
    },
  ],

  set8: [
    {
      q: "72. What will be the output: x = 'abcdef'; while i in x: print(i, end=' ')",
      options: ["a b c d e f", "abcdef", "i i i i i i …", "error"],
      answer: "error",
      explanation: "NameError, i is not defined.",
    },
    {
      q: "73. What will be the output: x = 'abcdef'; i = 'a'; while i in x: print(i, end = ' ')",
      options: ["no output", "i i i i i i …", "a a a a a a …", "a b c d e f"],
      answer: "a a a a a a …",
      explanation: "As the value of i or x isn't changing, the condition will always evaluate to True.",
    },
    {
      q: "74. What will be the output: x = 'abcdef'; i = 'a'; while i in x: print('i', end = ' ')",
      options: ["no output", "i i i i i i …", "a a a a a a …", "a b c d e f"],
      answer: "i i i i i i …",
      explanation: "Here i i i i i … printed continuously because as the value of i or x isn't changing, the condition will always evaluate to True. But also here we use a citation marks on 'i', so, here i treated as a string, not like a variable.",
    },
    {
      q: "75. What will be the output: for i in range(10): if i == 5: break; else: print(i); else: print('Here')",
      options: ["0 1 2 3 4 Here", "0 1 2 3 4 5 Here", "0 1 2 3 4", "1 2 3 4 5"],
      answer: "0 1 2 3 4",
      explanation: "The else part is executed if control doesn't break out of the loop.",
    },
    {
      q: "76. What will be the output: x = (i for i in range(3)); for i in x: print(i)",
      options: ["0 1 2", "error", "0 1 2 0 1 2", "none of the mentioned"],
      answer: "0 1 2",
      explanation: "The first statement creates a generator object.",
    },
    {
      q: "77. What will be the output: string = 'my name is x'; for i in string: print (i, end=', ')",
      options: [
        "m, y, , n, a, m, e, , i, s, , x,",
        "m, y, , n, a, m, e, , i, s, , x",
        "my, name, is, x,",
        "error"
      ],
      answer: "m, y, , n, a, m, e, , i, s, , x,",
      explanation: "Variable i takes the value of one character at a time.",
    },
    {
      q: "78. What will be the output: string = 'my name is x'; for i in string.split(): print (i, end=', ')",
      options: [
        "m, y, , n, a, m, e, , i, s, , x,",
        "m, y, , n, a, m, e, , i, s, , x",
        "my, name, is, x,",
        "error"
      ],
      answer: "my, name, is, x,",
      explanation: "Variable i takes the value of one word at a time.",
    },
    {
      q: "79. What will be the output: a = [0, 1, 2, 3]; for a[-1] in a: print(a[-1])",
      options: ["0 1 2 3", "0 1 2 2", "3 3 3 3", "error"],
      answer: "0 1 2 2",
      explanation: "The value of a[-1] changes in each iteration.",
    },
    {
      q: "80. What will be the output: a = [0, 1, 2, 3]; for a[0] in a: print(a[0])",
      options: ["0 1 2 3", "0 1 2 2", "3 3 3 3", "error"],
      answer: "0 1 2 3",
      explanation: "The value of a[0] changes in each iteration. Since the first value that it takes is itself, there is no visible error.",
    },
    {
      q: "81. What will be the output: string = 'my name is x'; for i in ' '.join(string.split()): print (i, end=', ')",
      options: [
        "m, y, , n, a, m, e, , i, s, , x,",
        "m, y, , n, a, m, e, , i, s, , x",
        "my, name, is, x,",
        "error"
      ],
      answer: "m, y, , n, a, m, e, , i, s, , x,",
      explanation: "Variable i takes the value of one character at a time.",
    },
  ],

  set9: [
    {
      q: "82. What will be the output: x = '%s MID %s' %('Python', 'Exams'); print(x)",
      options: ["Python MID", "MID Exams", "Exams MID Python", "Python MID Exams"],
      answer: "Python MID Exams",
      explanation: "",
    },
    {
      q: "83: What will be the output: x = 'Monday'; print('Mon' in x)",
      options: ["'Mon' in x", "'Monday' in x", "True", "False"],
      answer: "True",
      explanation: "",
    },
    {
      q: "84: What will be the output: x = 'Today is a nice day' + \\ ' I will go for a walk today'; print(x)",
      options: [
        "SyntaxError",
        "Today is a nice day",
        "I will go for a walk today",
        "Today is a nice day I will go for a walk today"
      ],
      answer: "Today is a nice day I will go for a walk today",
      explanation: "",
    },
    {
      q: "85: What will be the output: x = 'Today is a nice day'; y = x[:9] + 'not ' + x[9:]; print(x)",
      options: ["TypeError", "Today is a nice day", "SyntaxError", "Today is not a nice day"],
      answer: "Today is not a nice day",
      explanation: "",
    },
    {
      q: "86. What will be the output: x = ('Python'); print(x)",
      options: ["('P', 'y', 't', 'h', 'o', 'n')", "Python", "P y t h o n", "('Python')"],
      answer: "Python",
      explanation: "",
    },
    {
      q: "87. What will be the output: x = ('Python',); print(x)",
      options: ["('Python',)", "Python", "P y t h o n", "('Python')"],
      answer: "('Python',)",
      explanation: "",
    },
    {
      q: "88. What will be the output: x = 'Python'; print(list(x))",
      options: [
        "('P', 'y', 't', 'h', 'o', 'n')",
        "(Python)",
        "['P', 'y', 't', 'h', 'o', 'n']",
        "['Python']"
      ],
      answer: "['P', 'y', 't', 'h', 'o', 'n']",
      explanation: "",
    },
    {
      q: "89. What will be the output: x = 'Python'; print(tuple(x))",
      options: [
        "('P', 'y', 't', 'h', 'o', 'n')",
        "(Python)",
        "['P', 'y', 't', 'h', 'o', 'n']",
        "['Python']"
      ],
      answer: "('P', 'y', 't', 'h', 'o', 'n')",
      explanation: "",
    },
    {
      q: "90. What will be the output: x=1234; res='integers:...%d...%-6d...%06d' %(x, x, x); res",
      options: [
        "'integers:…1234…1234 …001234'",
        "'integers…1234…1234…123400'",
        "'integers:… 1234…1234…001234'",
        "'integers:…1234…1234…001234'"
      ],
      answer: "'integers:…1234…1234 …001234'",
      explanation: "The code shown above prints 1234 for the format specified %d, '1234 ' for the format specifier %-6d (minus '-' sign signifies left justification), and 001234 for the format specifier %06d.",
    },
    {
      q: "91. What will be the output: x=3.3456789; '%f | %e | %g' %(x, x, x)",
      options: [
        "Error",
        "'3.3456789 | 3.3456789+00 | 3.345678'",
        "'3.345678 | 3.345678e+0 | 3.345678'",
        "'3.345679 | 3.345679e+00 | 3.34568'"
      ],
      answer: "'3.345679 | 3.345679e+00 | 3.34568'",
      explanation: "The %f %e and %g format specifiers represent floating point numbers in different ways.",
    },
  ],

  set10: [
    {
      q: "92. What will be the output: '%(qty)d more %(food)s' %{'qty':1, 'food': 'spam'}",
      options: ["Error", "No output", "'1 more foods'", "'1 more spam'"],
      answer: "'1 more spam'",
      explanation: "String formatting also allows conversion targets on the left to refer to the keys in a dictionary coded on the right and fetch the corresponding values.",
    },
    {
      q: "93. Which of these about a dictionary is false?",
      options: [
        "The values of a dictionary can be accessed using keys",
        "The keys of a dictionary can be accessed using values",
        "Dictionaries aren't ordered",
        "Dictionaries are mutable"
      ],
      answer: "The keys of a dictionary can be accessed using values",
      explanation: "The values of a dictionary can be accessed using keys but the keys of a dictionary can't be accessed using values.",
    },
    {
      q: "94. Which of the following is not a declaration of the dictionary?",
      options: ["{1: 'A', 2: 'B'}", "dict([[1,'A'],[2,'B']])", "{1,'A',2'B'}", "{ }"],
      answer: "{1,'A',2'B'}",
      explanation: "Option c is a set, not a dictionary.",
    },
    {
      q: "95. What will be the output: a={1:'A',2:'B',3:'C'}; for i,j in a.items(): print(i,j,end=' ')",
      options: ["1 A 2 B 3 C", "1 2 3", "A B C", "1:'A' 2:'B' 3:'C'"],
      answer: "1 A 2 B 3 C",
      explanation: "In the above code, variables i and j iterate over the keys and values of the dictionary respectively.",
    },
    {
      q: "96. What will be the output: a={1:'A',2:'B',3:'C'}; print(a.setdefault(3))",
      options: [
        "{1: 'A', 2: 'B', 3: 'C'}",
        "C",
        "{1: 3, 2: 3, 3: 3}",
        "No method called setdefault() exists for dictionary"
      ],
      answer: "C",
      explanation: "setdefault() is similar to get() but will set dict[key]=default if key is not already in the dictionary.",
    },
    {
      q: "97. Write a list comprehension such that the output is: ['e', 'o']. w='hello'; v=('a', 'e', 'i', 'o', 'u')",
      options: [
        "[x for w in v if x in v]",
        "[x for x in w if x in v]",
        "[x for x in v if w in v]",
        "[x for v in w for x in w]"
      ],
      answer: "[x for x in w if x in v]",
      explanation: "The tuple 'v' is used to generate a list containing only vowels in the string 'w'.",
    },
    {
      q: "98. What will be the output: [ord(ch) for ch in 'abc']",
      options: ["[97, 98, 99]", "['97', '98', '99']", "[65, 66, 67]", "Error"],
      answer: "[97, 98, 99]",
      explanation: "The list comprehension shown above returns the ASCII value of each alphabet of the string 'abc'.",
    },
    {
      q: "99. Write a list comprehension for producing a list of numbers between 1 and 1000 that are divisible by 3.",
      options: [
        "[x in range(1, 1000) if x%3==0]",
        "[x for x in range(1000) if x%3==0]",
        "[x%3 for x in range(1, 1000)]",
        "[x%3=0 for x in range(1, 1000)]"
      ],
      answer: "[x for x in range(1000) if x%3==0]",
      explanation: "The list comprehension [x for x in range(1000) if x%3==0] produces a list of numbers between 1 and 1000 that are divisible by 3.",
    },
    {
      q: "100. Write a list comprehension equivalent for code: for i in range(1, 101): if int(i*0.5)==i*0.5: print(i)",
      options: [
        "[i for i in range(1, 100) if int(i*0.5)==(i*0.5)]",
        "[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]",
        "[i for i in range(1, 101) if int(i*0.5)=(i*0.5)]",
        "[i for i in range(1, 100) if int(i*0.5)=(i*0.5)]"
      ],
      answer: "[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]",
      explanation: "The code shown above prints the value 'i' only if it satisfies the condition: int(i*0.5) is equal to (i*0.5).",
    },
  ],
};

// Export for use
export default pythonQuizSets;

/* 
USAGE INSTRUCTIONS:
1. Copy the entire 'pythonQuizSets' object above
2. In your React component, replace the existing sets object with this one:
   
   const quizData = {
     python: {
       title: "Python Quiz",
       sets: pythonQuizSets  // <- Use the imported sets
     }
   };

3. Or directly paste the sets object into your existing quizData structure
*/
