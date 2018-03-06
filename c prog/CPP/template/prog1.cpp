#include<conio.h>
#include<iostream>

using namespace std;

//template<class x, class y> x big(x a,y b)//in case of two diffrent type datatype
template<class x> x big(x a,x b)//in case of  same datatype.
{
	if(a>b)
	 return a;
	else
	 return b;
}
int main()
{
cout<<big(10,20);
cout<<big(20.5,5.5);
	getch();
}

