#include<stdio.h>
#include<conio.h>
#include<string.h>
#include<stdlib.h>
int main()
{
	char str1[50]="hello brobm";
	char str2[50]="bro hellmob";
	int len1,len2,flag=0;
	static int i=0,j=0,num;
	len1=strlen(str1);
	len2=strlen(str2);
//	printf("%d ",len1);
//	printf("%d ",len2);
	
	if(len1!=len2)
	{
		printf("1.Strings are not Anagram");
	exit(0);
	}
	while(str1[i]!='\0')
	{
		j=0;
	while(str2[j]!='\0')
	{
		if(str1[i]==str2[j])
		{
			flag=0;
			for(num=j;num<len2;num++)
			{
				str2[num]=str1[num+1];
			}
			str2[num+1]='\0';
			len2--;
			break;
		}
		
		else
		{
			flag=1;
			
		}		
		j++;
	}i++;

	printf("\n");
	}
	if(flag==1)
	{
		printf("Strings are not Anagram");
	}
	else
	printf("Strings are Anagram");
	return 0;
}
