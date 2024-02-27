def solution(sequence):
    droppped = False
    last = prev = min(sequence) - 1
    for elm in sequence:
        if elm <= last:
            if droppped:
                return False
            else:
                droppped = True
            if elm <= prev:
                prev = last
            elif elm >= prev:
                prev = last = elm
        else:
            prev, last = last, elm
    return 
    

listaDeListas=[[10, 1, 2, 3, 4, 5],[1, 1, 2, 3, 4, 4], [1, 2, 3, 4, 5, 3, 5, 6],[1, 2, 5, 5, 5]]
solution(listaDeListas[0])