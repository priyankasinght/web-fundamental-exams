/* Write a programme to print all prime numbers in range 1 to n. Take n from the user. */

n = parseInt(prompt("Enter a number:"));

  for (i = 2; i <= n; i++) 
  {
     a = 1;
     j = 2;

    while (j < i)
    {
      if (parseInt(i % j) == 0)
      {
         a = 0;
         break;
      }
         j++;
    }
      if (a == 1) 
      {
        console.log("Number is prime:" + i);
    }
  }