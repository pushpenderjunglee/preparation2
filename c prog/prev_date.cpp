#include<stdio.h>
#include<conio.h>
void main()
{
	int date,month,year,flag=0;
	printf("Enter date");
	scanf("%d",&date);
	printf("Enter month");
	scanf("%d",&month);
	printf("Enter year");
	scanf("%d",&year);
	
	if(date>31 || month>12 || year<1900 && year>2100)
	{
			printf("Please !Enter a valid date");
		break;
	}
	if(year%400==0 ||(year%4==0 && year%100));
	{
	  flag=1;
	}
	 else
	{
		flag=0;
	}
}

