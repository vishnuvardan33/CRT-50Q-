list=[5,-3, 0,8, 2, -1, 4, 0, -6, 7]
temp=list[0]
list[0]=list[-1]
list[-1]=temp
print(list)