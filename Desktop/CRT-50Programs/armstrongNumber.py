n=int(input("Enter a number: "))
temp=n
m=len(str(n))
sum=0
while temp>0:
    digit=temp%10
    sum+=digit**m
    temp//=10
if sum==n:
    print(n, "is an Armstrong number")
else:
    print(n, "is not an Armstrong number")