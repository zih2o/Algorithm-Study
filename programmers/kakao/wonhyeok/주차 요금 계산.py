import math

def solution(fees, records):
    def calculate_fee(minit):
        default_time, default_fee, base_time, base_fee = fees
        
        add_fee = math.ceil((minit-default_time)/base_time) * base_fee
        if add_fee <= 0: add_fee = 0

        return default_fee + add_fee
    
    def timestamp_to_min(timestamp):
        hour, minit = timestamp.split(':')
        return int(hour)*60 + int(minit)
    
    record_input = {}
    record_park = {}
    
    for record in records:
        timestamp, car_num, inout = record.split(' ')

        if inout == 'IN':
            record_input[car_num] = timestamp_to_min(timestamp)
        else:
            in_time = record_input.pop(car_num)
            out_time = timestamp_to_min(timestamp)
            park_time = out_time - in_time
            
            record_park[car_num] = record_park.get(car_num, 0) + park_time
    
    for car_num, in_time in record_input.items():
        out_time = timestamp_to_min('23:59')
        park_time = out_time - in_time
        
        record_park[car_num] = record_park.get(car_num, 0) + park_time
    
    key_list = [*record_park.keys()]
    key_list.sort(key=int)
    
    return [calculate_fee(record_park[n]) for n in key_list]