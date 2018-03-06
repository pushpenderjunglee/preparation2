#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<string.h>

void anagram(char str1[],char str2[])
{
	int len1,len2,i,j=0,flag=0,k;
	len1=strlen(str1);
	len2=strlen(str2);
	if(len1 != len2)
	{
		printf("\nit is not anagram1\n");
		exit(0);
	}
	else
	{
		for(i=0;i<len1;i++)
		{ 
			flag=0;
			if(str2[j]==str1[i])
			{
				flag=1;j++;
				k=i;
				i=0;
					
				if(flag==1)
				{
					for(k=i;k<len1;k++)
					{
						str1[k]=str1[k+1];
					
					}	
					
					len1=len1-1;
					printf("1111111111%d",len1);
					printf("11111111111%s",str1);
				
				}
			}
				if(flag!=1 && i==len1)
			{
				printf("\nit is not anagram2\n");
				exit(0);
			}	
//				else
//			{
//			printf("\nit is anagram\n");
////		printf("%d",len1);
////		printf("%d",len2);
////		printf("%s",str1);
////		printf("%s",str2);
//
//			}
		
			printf("%d...",i);
			printf("%d...",j);
			printf("%d",len1);
			printf("%s",str1);
			
		}
		
		
			 
	}
}
int main()
{
		int i;
		char str1[50]="anuj",str2[50]="anuu";
	
//		printf("\nEnter string1:\n");
//		scanf("%s",&str1);
//		
//		printf("\nEnter string to check anagram:\n");
//		scanf("%s",str2);
//		
		anagram(str1,str2);
	return 0;
	
}
