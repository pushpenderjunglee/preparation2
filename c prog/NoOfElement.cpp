#include<stdio.h>
#include<conio.h>
void elements(int arr[],int size)
{
 int num1,num2,i,index1,index2,flag=0,elements,flag1=0;
 printf("\nEnter num1 \n");
 scanf("%d",&num1);
 printf("\nEnter num2 \n");
 scanf("%d",&num2);
 
 for(i=0;i<size;i++)
 {
 	if(num1==arr[i] && flag==0)
 	{
 		flag=1;
 		index1=i;		
 		
	}
	if(num2==arr[i])
	{
		index2 = i;
	}
	
 }
 elements=index2-(index1+1);
 printf("Total number of elements in between num1 %d and num2 %d is %d",num1,num2,elements);
}

int main()
{
	int arr[10],i,size;
	printf("\nEnter size of array\n");
	scanf("%d",&size);
	printf("Enter array elements\n");
	for(i=0;i<size;i++)
	scanf("%d",&arr[i]);
	elements(arr,size);
}
