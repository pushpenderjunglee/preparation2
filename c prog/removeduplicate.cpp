#include<stdio.h>
//#include<conio.h>
int main()
{
	int temp,i,j,l,arr[11]={1,1,1,1,4,5,9,1,9,0,1};
	static int count=0,k=11;
	for(i=0;i<k;i++)
	{
		
		for(j=i+1;j<k;j++)
		{
			if(arr[i]==arr[j])
			{ k--;
//		printf("%d ",arr[i]);
				for(l=i;l<k;l++)
				{
					arr[l]=arr[l+1];
				}
				
				i=i-1;
				
				
			}
		}
	}  
	for(i=0;i<k;i++)
	printf("%d",arr[i]);

return 0;
}
