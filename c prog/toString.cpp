#include<stdio.h>
#include<conio.h>
int main()
{
	int  num=96,ans=0,rem=0,div=0,count=-1,n,rev=0;
	n=num;
	
	
	while(n!=0)
	{
		count++;
		rem=n%10;
		rev=(rev*10)+rem;
		n=n/10;
	}
	printf("rev=%d",rev);
		printf("count=%d",count);
while(rev!=0)
{ 
rem=rev;
	rem%=10;
	switch(rem)
	{
	
	case 1:printf("one ");
			break;
			
	case 2:printf("Two ");
			break;
			
	case 3:printf("Three ");
			break;
			
	case 4:printf("Four ");
			break;
			
	case 5:printf("Five ");
			break;
			
	case 6:printf("Six ");
			break;
	case 7:printf("Seven ");
			break;
	case 8:printf("Eight ");
			break;
	case 9:printf("Nine ");
			break;
	default:printf(" ");
			break;
	}
	
	switch(count)
    {
				
	case 2:printf("Hundred ");
			break;
			
	case 3:printf("Thousand ");
			break;
			
//	case 4:printf("Four");
//			break;
//			
	default:printf(" ");
			break;
	
	}
	count--;
	rev = rev/10;
}

	
}
