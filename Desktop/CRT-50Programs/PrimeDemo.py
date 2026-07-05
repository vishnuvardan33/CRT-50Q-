
import math


n=int(input("Enter a number: "))
def is_Prime(n):
    if n>1:
        for i in range(2, int(math.sqrt(n))+1):
            if(n%i==0):
                return False
        return True
    else:
        return False

if is_Prime(n):
    print(n,"is a Prime number")
else:
    print(n,"is not a Prime number")