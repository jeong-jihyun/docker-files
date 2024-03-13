```
docker-compose -f kafka-compose.yml up
docker exec -it kafka /bin/bash
```

토픽 리스트 확인: kafka-topics.sh --list --bootstrap-server localhost:9092
토픽 상세 조회: kafka-topics.sh --describe --topic topic1 --bootstrap-server kafka:9092
토픽 삭제: kafka-topics.sh --delete --bootstrap-server kafka:9092 --topic topic1

```
cd /opt/kafka_2.13-2.8.1/bin/
./kafka-console-consumer.sh --topic topic1 --bootstrap-server kafka:9092 (옵션적으로 --group 그룹명)
./kafka-console-producer.sh --topic topic1 --broker-list kafka:9092
```
