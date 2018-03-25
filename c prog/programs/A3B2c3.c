#include <stdio.h>

int main()
{
   int i=0,j,k=0,l;
   char str[10]="A2B3C4d5";
   while(str[i]!='\0'){
       if(i%2!=0)
       { l=i;
           k=str[i]-48;
           l=l-1;
           for(j=0;j<k;j++)
           {
               printf("%c",str[l]);
           }
       }
       i++;
   }
}
