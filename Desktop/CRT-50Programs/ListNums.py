numbers=[5,-3, 0,8, 2, -1, 4]
positive=negative=zero=0
for num in numbers:
    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1
    else:
        zero += 1
print("Positive numbers:", positive)
print("Negative numbers:", negative)
print("Zero numbers:", zero)