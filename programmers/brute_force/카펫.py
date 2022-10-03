def solution(brown, yellow):
    x_length = ((brown-4)/2 + (((brown-4)/2)**2 - 4*yellow)**(1/2)) / 2 + 2
    y_length = (brown-4)/2 - x_length + 4
    return [x_length, y_length]