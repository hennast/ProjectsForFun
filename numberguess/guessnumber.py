import random

userNumber= int(input("please input a number"))
numberToGuess = random.randint(1, 100)
game = "isContinuing"
usedHint = []

def checkNumber():
    global userNumber
    isAcceptable = False
    while isAcceptable == False:
        if userNumber > 1 and userNumber < 100:
            isAcceptable = True
            return userNumber
        else:
            isAcceptable = False
            userNumber = int(input("please input a valid number"))

def isNumberCorrect():
    global userNumber, numberToGuess, game
    if userNumber == numberToGuess:
        print("you have won the game")  
        game = "isOver" 
    else:
        userNumber = int(input("please guess a new number"))
        

def hints(number):
    global userNumber
    randomizeHint = random.randint(1,4)
    divisibleBy = random.randint(1, 100)
    if randomizeHint == 1:
        if number % divisibleBy == 0:
            print(f"the number is divisible by {divisibleBy}")
        else:
            print(f"the number is notdivisible by {divisibleBy}")
        return
    greaterThan = random.randint(20, 75)
    if randomizeHint == 2:
        if number >= greaterThan:
            print(f"the number is greater than or equal to {greaterThan}")
        else:
            print(f"the number is less than {greaterThan}")
        return
    if randomizeHint == 3:
        if userNumber > number:
            print("the number is greater than the number you are trying to guess")
        else:
            print("the number is smaller than the number you are trying to guess")
        return
    if randomizeHint == 4:
        if number * 4 > 100:
            print("the number times 4 is greater than 100")
        elif number * 4 < 100:
            print ("the number times 4 is less than 100")
        else:
            print("the number times 4 = 100")
        return

score = 0    
while game == "isContinuing":
    checkNumber()
    isNumberCorrect()
    if game == "isOver":
            break
    hints(numberToGuess)
    score += 1
if game == "isOver":
    print(f"your took {score} guesses to guess the number")



