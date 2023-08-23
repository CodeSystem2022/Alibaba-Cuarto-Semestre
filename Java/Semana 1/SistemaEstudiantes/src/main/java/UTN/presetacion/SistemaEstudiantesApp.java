package UTN.presetacion;

import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        var salir = false;  //recueden esto ya lo hicimos
        var consola = new Scanner(System.in); //Para leer información del teclado
        //Se crea una instancia de la clase servicio, esto lo hacemos fuera del while
        var estudianteDao = new EstudianteDAO(); //Esta instancia debe hacerse una vez
        while (!salir){
            try{
                mostrarMenu(); //Mostramos el menú
                //Este será el método ejecutarOpciones que nos devolverá un booleano
                salir = ejecutarOpciones(consola, estudianteDao); //Este método recibe la instancia de la clase servicio
            }catch (Exception e){
                System.out.println("Ocurrió un error al ejecutar la operación: " + e.getMessage());
            }
        }//Fin while
    } //Fin metodo main

    //Método para mostrar el menú
    public static void mostrarMenu(){
        System.out.println("""
        
        ******* Sistema de Estudiantes *******
        1. Listar estudiantes
        2. Buscar estudiante
        3. Agregar estudiante
        4. Modificar estudiante
        5. Eliminar estudiante
        6. Salir
        Elija una opción: """);
    } //Fin metodo mostrarMenu

    //Método para ejecutar las opciones del menú, va a regresar un booleano, ya que es el que
    //puede modificar la variable salir, si es verdadero, el programa termina
    public static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDao) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> {//Listar estudiantes
                System.out.println("Listado de Estudiantes: ");
                //no muestra la información, solo recupera la info y regresa una lista
                var estudiantes = estudianteDao.listarEstudiantes(); //recibe el listado de estudiantes
                //vamos a iterar cada objeto de tipo estudiante
                estudiantes.forEach(System.out::println); //imprime cada estudiante
            }//Fin caso 1
            case 2 -> {//Buscar estudiante
                System.out.println("Ingrese el id del estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDao.buscarEstudiantePorId(estudiante);
                if(encontrado)
                    System.out.println("Estudiante encontrado: " + estudiante);
                else
                    System.out.println("Estudiante no encontrado: " + estudiante);
            }//Fin caso 2
            case 3 -> {//Agregar estudiante
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //crear objeto estudiante(sin id)
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDao.agregarEstudiante(estudiante);
                if (agregado)
                    System.out.println("Estudiante agregado: " + estudiante);
                else
                    System.out.println("No se pudo agregar el estudiante: " + estudiante);
            }//Fin caso 3
            case 4 -> {//Modificar estudiante
                System.out.println("Modificar estudiante: ");
                //Aquí lo primero es especificar el id del estudiante a modificar
                System.out.println("Ingrese el id del estudiante a modificar: ");
                var id = Integer.parseInt(consola.nextLine());
                System.out.println("Ingrese el nombre del estudiante: ");
                var nombre = consola.nextLine();
                System.out.println("Ingrese el apellido del estudiante: ");
                var apellido = consola.nextLine();
                System.out.println("Ingrese el número de control del estudiante: ");
                var telefono = consola.nextLine();
                System.out.println("Ingrese el correo electrónico del estudiante: ");
                var email = consola.nextLine();
                var estudiante = new Estudiante(id, nombre, apellido, telefono, email);
                var modificado = estudianteDao.modificarEstidiante(estudiante);
                if (modificado)
                    System.out.println("Estudiante modificado: " + estudiante);
                else
                    System.out.println("No se pudo modificar el estudiante: " + estudiante);
            }//Fin caso 4
            case 5 -> {//Eliminar estudiante
                System.out.println("Eliminar estudiante: ");
                System.out.println("Ingrese el id del estudiante a eliminar: ");
                var id = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(id);
                var eliminado = estudianteDao.eliminarEstudiante(estudiante);
                if (eliminado)
                    System.out.println("Estudiante eliminado: " + estudiante);
                else
                    System.out.println("No se pudo eliminar el estudiante: " + estudiante);
            }//Fin caso 5
            case 6 -> {//Salir
                System.out.println("Gracias por usar el sistema");
                salir = true;
            }//Fin caso 6
            default -> System.out.println("Opción no reconocida, ingrese otra opción");
        }//Fin switch
        return salir;
    } //Fin metodo ejecutarOpciones
} //Fin clase