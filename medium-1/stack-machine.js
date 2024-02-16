/*
PE
Want to convert the input strings (simple programs) into behavior modifying
the stack and register that we are keeping track of.
Only print commands log to console, and it's always the value of the register
All programs are valid, no need for error handling
argument: string delim by space, returns nothing (but logs to console)

D
Stack is an array
Register is a number value
Also need an array of commands

A
initialize stack to empty array, register to 0
command array = split input string by space
for each command in array:
  modify register and stack according to current command
  print register to console if command is print
*/

// eslint-disable-next-line max-lines-per-function
function minilang(commands) {
  let stack = [];
  let register = 0;
  let commandArr = commands.split(' ');
  for (let command of commandArr) {
    switch (command) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      default:
        register = Number(command);
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)