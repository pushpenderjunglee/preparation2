#include<stdio.h>
//#include<conio.h>
int main()
{
	int temp,i,j,k=9,l,arr[9]={1,2,3,4,5,9,0,9,0};
	static int count=0;
	for(i=0;i<k;i++;)
	{
		
		for(j=i+1;j<k;j++)
		{
			if(arr[i]==arr[j])
			{ k--;
				count++;
				for(l=i;l<k;l++)
				{
					arr[l]=arr[l+1];
				}
				i=i-1;
			}
		}
	}  
	for(i=0;i<(k-count)i++)
	printf("%d",arr[i]);

return 0;
}
