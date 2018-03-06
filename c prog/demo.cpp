#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node *link;
};

void insert_beg(int data,struct node **start)
{
    struct node *head,*temp;    
    temp=(struct node *)malloc(sizeof(struct node));
    temp->data=data;
    if(*start==NULL)
    {
    	temp->link=NULL;
    	*start=temp;
	}
	else
	{
	temp->link = *start;       
	*start = temp;
	}
	
    
}
 void insert_end(int data,struct node **start)
 {
 	struct node *head,*temp;
 	head=*start;
 	temp=(struct node *)malloc(sizeof(struct node));
 	temp->data=data;
 	temp->link=NULL;
	  	if(*start==NULL)
	  	{ 	
	  		*start=temp;
		}
		else
		{
		  	while(head->link!=NULL)
		   	 head=head->link;
		  	 head->link=temp;
	    }
 }
 void insertatpos(int data,int pos,struct node **start)
 {
 	struct node *temp,*head,*node;
 	int count=1;
 	head=node=*start;
 	
 	temp=(struct node*)malloc(sizeof(struct node));
 	temp->data=data;
 	while(count!=pos)
 	{
 		head=head->link;
 		if(count!=1)
 		node=node->link;
 		count++;
	 }
	 temp->link=node->link;
	 node->link=temp;
 }
 void delete_beg(struct node **start)
 {
 	struct node *head;
 	head =*start;
 	
 	if(*start==NULL)
 	{
 		
 		printf("Linklist is ALREADY Empty\n..");	
	}
	 else
	 {
	 	(*start)=head->link;
	 	free(head);
	 }
 
 }
  void delete_end(struct node **start)
  {
  	int count=1;
  	struct node *head,*temp;
 	
 	if(*start==NULL)
 	{
	printf("Linklist is ALREADY Empty\n..");	
	
		}
	 else
	 {
	 	head =*start;
 		temp=*start;
	 	while(head->link!=NULL)
	 	{
	 		if(count!=1)
	 		{
	 			temp=temp->link;
			 }
	 	
	 		head=head->link;
	 			count++;
		}
	 	temp->link=NULL;
	 	free(head);
	 }
  }
  void deleteatpos(int pos,struct node **start)
 {
 	struct node *head,*node;
 	int count=1;
 	head=node=*start;
 	
 	while(count!=pos)
 	{
 		head=head->link;
 		if(count!=1)
 		node=node->link;
 		count++;
	 }
	 node->link=head->link;
	 free(head);
	 
 }
 void remove_redundancy(struct node **start)
 {
 	struct node *temp,*node,*head;
 	int count=1;
 	head=node=temp=*start;
 	while(head->link!=NULL)
 	{
 	if(count!=1)
 	{
	 	 head=head->link;
 	
	} count++;
		//printf("%d",head->data);
	

	 	while(temp->link!=NULL)
 		{
 		 temp=temp->link;
 		 if(count!=2)
 		 node=node->link;
 		 	printf("%d ",temp->data);
// 		 if(head->data==temp->data)
// 		 {
// 		 	node->link=temp->link;
// 		 	free(head);
//		  }
 		 
		 }	printf("\n");
		temp=head;
	 }
 }
  void sorting(struct node **start)
 {
 	struct node *temp,*node,*head;
 	int count=1,num,i,j;
 	
 	head=node=temp=*start;
 	while(temp->link!=NULL)
 	{
 		temp=temp->link;
 		count++;
 
	 }
	 
	 for(i=0;i<count;i++)
	 {
	 
	 for(j=i+1;j<count;j++)
	 {
	  	node=node->link;
	  	
	  	if(head->data > node->data)
	  	{
	  		num=head->data;
	  		head->data=node->data;
	  		node->data=num;
		  }
}
	 
	  head=head->link;
	   node=head;
	 }
// 	while(head->link!=NULL)
// 	{	
// 	if(count!=1)
// 	{
//	 	 head=head->link;
// 	
//	} count++;
//	
//
//	 	while(temp->link!=NULL)
// 		{
// 		 temp=temp->link;
// 		 if(count!=2)
// 		 node=node->link;
// 		 
// 		 if(head->data==temp->data)
// 		 {
// 		 	node->link=temp->link;
// 		 	free(head);
//		  }
// 		 
		 
	 
 }
void reverse(struct node **start)
{
	struct node *temp,*head,*node;
	head=*start;
	node=*start;
	while(head->link!=NULL)
	{
		head=head->link;
	}
	printf("%d ",head->data);
	free(head);
	reverse(&node);
}
void display(struct node **start)
{
    struct node *head;
    head=*start;
    while(head!=NULL)
    {
		printf("%d ",head->data);
		head=head->link;
    }
}
int main() {
    int data,ch,pos;
    char opt;  
struct node *start=NULL;


    while(1){
      
	 //	clrscr();

     	printf("\nEnter 1. for insert data in beg\n");
        printf("Enter 2. for insert data in end\n");
     	printf("Enter 3. for delete data from beg \n");
     	printf("Enter 4. for delete data from end\n");
     	printf("Enter 5. for insert data at position\n");
     	printf("Enter 6. for delete data at position\n");
     	printf("Enter 7. for remove duplicacy\n");
     	printf("Enter 8. for sorting\n");
     	printf("Enter 9. to print reverse\n");
     	printf("Enter 10. for Display\n");
     	printf("Enter 11. for Exit\n");

     	printf("Enter your Choice\n");
     	scanf("%d",&ch);
     	switch(ch)
     	{
            case 1:printf("Enter data\n");
                 scanf("%d",&data);
                 insert_beg(data,&start);
                 break;
          	case 2:printf("Enter data\n");
                  scanf("%d",&data);
                 insert_end(data,&start);
                  break;
          	case 3:delete_beg(&start);
                  break;
          	case 4:delete_end(&start);
                 break;
           case 5:printf("Enter position\n");
                  scanf("%d",&pos);
                  printf("Enter data\n");
                  scanf("%d",&data);
                  insertatpos(data,pos,&start);
                  break;
        	case 6:printf("Enter position\n");
                    scanf("%d",&pos);
				    deleteatpos(pos,&start);
				    break;
			case 7:remove_redundancy(&start);
                  break;
            case 8:sorting(&start);
                  break;
            case 9:reverse(&start);
                  break;
         	case 10: display(&start);
    	     	break;
	        case 11:exit(0);
                 break;
         default:printf("Enter correct Choice\n");
     }
 }
//     printf("Do u wanna continue\n");
//     scanf("%c",&opt);
    
// }while(opt=='y'||opt=='Y');

	return 0;
}





