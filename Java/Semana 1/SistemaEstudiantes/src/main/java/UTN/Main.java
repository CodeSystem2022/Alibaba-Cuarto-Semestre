package UTN;

public class Main {
    public static void main(String[] args) {
       var conexion = UTN.conexion.Conexion.getConexion();
         if (conexion != null) {
              System.out.println("Conexion exitosa: " + conexion);
         } else {
              System.out.println("Error al conectar con la base de datos");
         }
    } //Fin metodo main
} //Fin clase