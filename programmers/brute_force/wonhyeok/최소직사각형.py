def solution(sizes):
    wallet_w, wallet_h = 0, 0
    
    for w, h in sizes:
        if h > w:
            w, h = h, w
        
        if wallet_w < w:
            wallet_w = w
        if wallet_h < h:
            wallet_h = h
        
    return wallet_w * wallet_h