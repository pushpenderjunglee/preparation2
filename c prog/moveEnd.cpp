#include<stdio.h>
#include<conio.h>
void moveEnd(int arr[], int size)
{
	int brr[10],flag=0,j,i;
	static int k,l;

	for(j=0;j<size;j++)
	{
		if(arr[j] >= 0)
		{
			brr[k++] = arr[j];
		
		}
		else
		{
			arr[l++] = arr[j];
		
		}
	}
	for(j=0;j<l;j++)
	{
		brr[k++] = arr[j];
	}

	for(i=0;i<size;i++)
	{	
		printf("%d",brr[i]);
		if(i!=5)
		printf(",");
	}
}
int main()
{
	int i,arr[10],j;
	printf("\nEnter size of array \n");
	scanf("%d",&i);
	printf("\nEnter array \n");
	for(j=0;j<i;j++)
	scanf("%d",&arr[j]);
	
	moveEnd(arr,i);
}

