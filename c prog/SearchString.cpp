#include<stdio.h>
#include<string.h>
#include<conio.h>
int main() 
{
	char str[]="Hello! freinds How Are you...?";
	char str2[]="you";
		char replace[]="Whaty";
	int i=0,j=0,len,len1,len2,diff,flag=0,flag1=0,count=0;
	len=strlen(str);
//	 printf("%d",strlen(str));
	 len1=strlen(str2);
	 len2=strlen(replace);
	 if(len2>len1)
	 {
	 	diff = len2-len1;
	 	len=len+diff;
	 	flag1=1;
	 	printf("l%d diff%d",len,diff);
	 }
	 else
	 {
	 	flag1=0;
	 }
	while(str[i]!='\0')
	{
	count++;
		if(str[i]==str2[j])
		{
		//	printf("%d",len);
			j++;
			
			if(j+1==len1)
			{
			//	count=i+1;
//				printf("c%d ",count);
//					printf("l%d ",count+len);
				flag=1;
				break;

			}
		}
		else
		{
			j=0;
		}
		i++;
	}
	if(flag==1)
	{
		if(flag1==1)
		{
		j=len-1;
			for(i=len;i>=count+1;i--)
			{
				str[j]=str[i];
				j--;
			}
		}
		i=0;
		for(j=(count+1)-len1;j<=count;j++)
		{
			str[j] = replace[i];
			i++;
		}
		i=0;
		while(str[i]!='\0')
		{  // printf("%d",strlen(str));
			printf("%c",str[i]);
			i++;
		}
	}
	else
	{
		printf("Sorry sir !try Again");
	}
}
