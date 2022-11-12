userNumber= int(input("please input a number"))
isAcceptable = False

def checkNumber():
    global userNumber, isAcceptable
    if userNumber > 1 and userNumber < 100:
        isAcceptable = True
        return isAcceptable, userNumber
    else:
        isAcceptable = False
        userNumber = int(input("please input a number"))
        return isAcceptable

while isAcceptable == False:
    checkNumber()