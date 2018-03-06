#include<stdio.h>
#include<conio.h>
#include<iostream>
class a
{
	int a,b;
	public:
	void swap(&a,&b);
	void display()
	{
		cout<<"a = "<<a<<" b= "<<b;
	}
		
};
a::swap(int *a,int *b)
{
	int temp;
	temp=*a;
	*a=*b;
	*b=temp;
}
void main()
{
	a a1;
	a1.swap(10,20);
	a1.display();
	
}
