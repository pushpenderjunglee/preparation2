#include<stdio.h>
#include<conio.h>
int fun(int num)
{ 
	if(num==1)
	return 1 ;
	if(num==0)
	return 0 ;
	else 
	return fun(num-1)+fun(num-2);
}
int main()
{
	int num,i;
	printf("Enter number\n");
	scanf("%d",&num);
	for(i=0;i<num;i++)
	printf("%d ",fun(i));
}
