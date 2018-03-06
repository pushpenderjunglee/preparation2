#include<stdio.h>
#include<conio.h>
int main()
{
	int arr[99];
	int i,sum1=0,sum=0,result,n=99;
	for(i=1;i<100;i++)
	{
		if(i==10)
		i=11;
		arr[i]=i;
		sum1=sum1+arr[i];
	}
	
	sum=(n*(n+1))/2;
	result=sum-sum1;
	printf("%d",result);
	return 0;
}
