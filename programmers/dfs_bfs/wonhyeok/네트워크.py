def solution(n, computers):
    com_dict = dict((k,v) for k,v in enumerate(computers))
    answer = 0
    
    while len(com_dict) > 0:
        stack = []
        any_key = list(com_dict.keys())[0]
        any_item = com_dict.pop(any_key)
        stack.append(any_item)
        
        while len(stack) > 0:
            checking_node = stack.pop()
            for node_num, connect in enumerate(checking_node):
                if connect == 1 and node_num in com_dict:
                    stack.append(com_dict.pop(node_num))
                    
        answer +=1
    
    return answer