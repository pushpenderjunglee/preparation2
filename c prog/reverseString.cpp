#include<stdio.h>
#include<string.h>
#include<conio.h>
void fun(char *ch)
{
	if(*ch)
	{
			fun(ch+1);
		printf("%c",ch);
	
	}
}
int main()
{
	int i ,len;
	char str[]="abcde";
//				len=strlen(str);

	fun(str);
}
