n=int(input("Enter a number: "))

first=0
second=1
i=1
while i<=n:
    print(first,end=" ")
    next=first+second
    first=second
    second=next
    i+=1
    