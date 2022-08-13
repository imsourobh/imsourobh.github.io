#include<stdio.h>
#include<string.h>
int main()
{
    int n=10, bin[]=" ",i=0;

    while(n!=0){
        strcat(bin,(str)(n%2));
        n=n/2;
        i++;
    }
    printf("%d",bin);
}