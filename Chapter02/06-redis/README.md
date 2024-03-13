### install

```
docker pull redis
sudo docker run -p 6379:6379 redis-container
docker exec -it redis /bin/bash
redis-cli
```

### set

```
set 명령어를 이용하여 key - value를 저장합니다.
get 명령어를 이용하여 key에 해당하는 value를 조회합니다.
del 명령어를 이용하여 key를 삭제합니다.
```

### list

```
lpush:  [ lpush key value ]
left push이며 왼쪽부터 즉, index 0부터 데이터를 저장합니다.
 
lpop:  [ lpop key ]
left pop이며, list의 index 0 부터 데이터를 추출합니다.
 
rpush: [ rpush key value ]
right push이며 오른쪽부터 즉, index last부터 데이터를 저장합니다.
 
rpop:  [ rpop key ]
right pop이며, list의 index last 부터 데이터를 추출합니다.
 
lrange: [ lrange key start end ]
list의 데이터를 start부터 end까지의 데이터를 추출합니다.
lrange에서 end를 -1로 선언하면 해당 list의 데이터를 전부 추출합니다.
```

### set

```
✅  set
정렬되지 않고 순서가 없는 문자열 모음입니다.
set에서는 value를 member로 표시합니다.
 
sadd: [ sadd key member ]
set의 key에  member를 추가합니다.
 
srem: [ srem key  member]
set의 key에 member를 삭제합니다.
 
smembers: [ smembers key ]
set의 key의 모든 member를 조회합니다.
```
