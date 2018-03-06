#include<stdio.h>
#include<string.h>
int main()
{
//	int arr1[]={2,1,4,7},arr2[]={3,-3,-8,0},arr3[]={-1,-4,-7,6};
//	int i,j,k;
//	for(i=0;i<4;i++)
//	for(j=0;j<4;j++)
//	for(k=0;k<4;k++)
//	{
//		if(arr1[i]+arr2[j]+arr3[k]==0)
//		{
//		printf("%d %d %d",arr1[i],arr2[j],arr3[k]);
//		printf("\n");
//	}
//	}
char str[]="abcba";
int i,j,flag=0;
	for(i=0;i<5;i++)
	{
		for(j=0;j<5;j++)
	{
		if(str[i]==str[j])
		flag=1;
	//	break;
		
	}
	 if(flag==0)
		printf("%c ",str[i]);
	//	break;
	}
	return 0;
}
