#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct data
{
	char fdata[20];
	char ldata[20];
};
struct data d1;
int main()
{
	FILE *fp;
	fp=fopen("demo.txt","a+");
	char ch='y';
	while(1)
	{ 
	fflush(stdin);
		if(ch=='y')
		{
		 printf("\nEnter First data\n");
		// scanf("%s",&d1.fdata);
		gets(d1.fdata);
		 printf("\nEnter 2nd data\n");
		// scanf("%s",&d1.ldata);
		gets(d1.ldata);
		 printf("\n");
		 fwrite(&d1,sizeof(d1),1,fp);
		 	fflush(stdin);
		 printf("Enter option .....y/n");
		 scanf("%c",&ch);
		}
		else
		{
		 break;
		}
	}
	rewind(fp);
	while(fread(&d1,sizeof(d1),1,fp) == 1)
	{
		printf("%s",d1.fdata);
		printf("%s",d1.ldata);
	}
}
