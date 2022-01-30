/* Write a program to print the nth fibonacci number. Take user input. */

var Num=prompt("Enter a number");

var Default =0;
    console.log(Default);

var first = 1;
    console.log(first);

var second =1;
    console.log(second);

    for( var i=3; i<=Num; i++ )
  {
    var third = first +second;
    console.log(third);
    first = second;
    second =third; 
  }

