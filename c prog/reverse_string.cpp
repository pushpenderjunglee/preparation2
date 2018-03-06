#include<stdio.h>
#include<conio.h>
#include<string.h>
char outputArray[12];
void reverse(int len,int i,char arr[])
{
	printf("bbbbbbbbbbbb");
	 int j=i;
	 int k=0;
	
	while(arr[j]!=' '|| arr[j]!='\0'){
		printf("cccccccccc %d",j);
		outputArray[k++]=arr[j++];
	}
	outputArray[k++]=' ';
//	while(arr[j]==' '||arr[j]!='\0')
//	{
//		outputArray[j++]=arr[n++];
//	}
	for(j=0;j<len;j++)
	{
		printf("%c",outputArray[j]);
	}
}
int main()
{
	printf("Jinda hu");
	char ch[12]="Anuj jio";
	int len,i;
	len = strlen(ch);
	for(i=len;i>=0;i--)
	{
	   if(ch[i]==' ')
	   {
	   	printf("aaaaaaaaaaaaa%d ",i);
	   	reverse(len,i++,ch);
	   }
	}
	
}
