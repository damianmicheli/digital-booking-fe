FROM amazoncorretto:19.0.1-alpine3.16

ARG JAR_FILE=target/backend-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]

EXPOSE 8080