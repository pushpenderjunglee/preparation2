#include<stdio.h>
#include<conio.h>
int main() 
{
   int x=5,i,t=0;
   for(i=0;i<=x/2;i++)
   {
       if(x%i==0)
       {
           t=1;
       }
   }
 printf ("%d",t);
 return 0;
}

