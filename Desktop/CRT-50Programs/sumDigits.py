n=int(input("Enter a number: "))
temp=n
sum=0
while n>0:
    digit=n%10
    sum+=digit
    n//=10
print("The sum of the digits of", temp, "is", sum)