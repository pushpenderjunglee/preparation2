#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

int main()
{
	int i,j,k;
	char str1[10]='abhi',str2[10]='abih';
	for(i=0;i<strlen(str1);i++)
	{
		for(j=0;j<strlen(str2);j++)
		{
			if(str1[i]==str2[j])
			{
				for(k=j;k<strlen(str2);k++)	
				{
					str2[k]=str2[k+1]; 
				}
				str2[k]='\0';
			}
		}
	}
	
}

