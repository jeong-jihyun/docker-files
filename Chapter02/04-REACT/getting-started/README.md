dockerfile make

docker build -t react .

docker run -d -p 5173:5173 --name react-container react

docker exec -it
