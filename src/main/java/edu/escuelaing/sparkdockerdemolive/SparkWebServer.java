package edu.escuelaing.sparkdockerdemolive;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;



/**
 * How to excute: java -cp "target/classes;target/dependency/*" edu.escuelaing.sparkdockerdemolive.SparkWebServer
 * http://localhost:45000/hello
 */
public class SparkWebServer {
    public static void main(String... args){
        port(getPort());

        staticFiles.location("/public");

        get("hello", (req,res) -> "Hello Docker!");
        get("sin", (req,res) -> {
            double angle = Double.parseDouble(req.queryParams("angle"));
            double result = Math.sin(angle);
            return result;
        });
        get("cos", (req,res) -> {
            double angle = Double.parseDouble(req.queryParams("angle"));
            double result = Math.cos(angle);
            return result;
        });
        get("palindromo", (req,res) -> {
            String word = req.queryParams("word");
            StringBuffer buffer =  new StringBuffer(word);
            buffer.reverse();
            String data = buffer.toString();

            if (word.equals(data)) {
                return "Verdadero, la palabra: " + word + " es palindormo " + data;
            }
            return "Falso, la palabra: " + word + " no es palindormo " + data;
        });
        get("dimension", (req,res) -> {
            double value1 = Double.parseDouble(req.queryParams("x"));
            double value2 = Double.parseDouble(req.queryParams("y"));
            double result = Math.sqrt(value1*value1 + value2*value2);
            return result; 
        });

    }

    private static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4567;
    }
}
