#include<stdio.h>
#include<conio.h>
int num=1234;
int fun(int i)
{ 
int rev=0,rem=0,num1,temp;
	//num1=num;
	if(num==i)
	return i;
	else
	{
		rem=num1%10;
		num1=num1/10;
		rev=(rev*10)+rem;
		return fun(rev);
	}
}

int main()
{
	int i=0;
	printf("%d",fun(i));

	
}
