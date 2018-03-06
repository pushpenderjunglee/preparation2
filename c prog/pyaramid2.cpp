#include<stdio.h>
#include<conio.h>
int main()

{
	int i,j,k;
	for(i=0;i<5;i++,k=0)
	{
		 for(j=0;j<5-i;j++)
		 {
		 	printf(" ");
		 }
		 while(k!=2*i-1)
		 {
		 	printf("* ");
		 	++k;
		 }
		 printf("\n");
		 
	}
	}


