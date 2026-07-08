str1=input("Enter the  string: ")
i=0
j=len(str1)-1
while(i<j):
    if(str1[i]!=str1[j]):
        print("The string is not a palindrome")
        break
    i+=1
    j-=1
else:
    print("The string is a palindrome")