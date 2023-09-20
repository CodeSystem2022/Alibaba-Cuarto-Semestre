package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.Scanner;
import java.util.List;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {
    @Autowired
    private EstudianteServicio estudianteServicio;
    private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

    String nl = System.lineSeparator();

    public static void main(String[] args) {

        logger.info("Iniciando la Aplicación...");
        // levantar fabrica de Spring
        SpringApplication.run(EstudiantesApplication.class, args);
        logger.info("Aplicación Finalizada!");
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info(nl + "Ejecutando el método run de Spring..." + nl);
        var salir = false;
        var consola = new Scanner(System.in);
        while (!salir) {
            mostrarMenu();
            salir = ejecutandoOpciones(consola);
            logger.info(nl);
        }//Fin ciclo while
    }

    private void mostrarMenu() {
        logger.info(nl);
        logger.info("""
                ******* Sistema de Estudiantes *******
                1. Listar Estudiantes
                2. Buscar Estudiante
                3. Agregar Estudiante
                4. Modificar Estudiante
                5. Eliminar Estudiante
                6. Salir
                Elige una opción:""");
    }

    private boolean ejecutandoOpciones(Scanner consola) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) {
            case 1 -> {//Listar estudiantes
                logger.info(nl + "Listado de estudiantes: " + nl);
                List<Estudiantes2022> estudiantes = estudianteServicio.listarEstudiantes();
                estudiantes.forEach((estudiante -> logger.info(estudiante.toString() + nl)));
            }
            case 2 -> {// Buscar
                logger.info("Digite el id del estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                Estudiantes2022 estudiante =
                        estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if (estudiante != null)
                    logger.info("Estudiante encontrado: " + estudiante + nl);
                else
                    logger.info("El estudiante no fue encontrado: " + idEstudiante + nl);
            }
            case 3 -> { //Agregar
                logger.info("Agregar estudiante: " + nl);
                logger.info("Nombre: ");
                var nombre = consola.nextLine();
                logger.info("Apellido: ");
                var apellido = consola.nextLine();
                logger.info("Telefono: ");
                var telefono = consola.nextLine();
                logger.info("Email: ");
                var email = consola.nextLine();
                // Crear Objeto estudiante sin el id
                var estudiante = new Estudiantes2022();
                estudiante.setNombre(nombre);
                estudiante.setApellido(apellido);
                estudiante.setTelefono(telefono);
                estudiante.setEmail(email);
                estudianteServicio.guardarEstudiante(estudiante);
                logger.info("Estudiante agregado: " + estudiante + nl);
            }
            case 4 -> {//Modificar
                logger.info("Modificar Estudiante: " + nl);
                logger.info("Ingrese el id del estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                // Buscamos el estudiante a modificar
                Estudiantes2022 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if (estudiante != null) {
                    logger.info("Nombre: ");
                    var nombre = consola.nextLine();
                    logger.info("Apellido: ");
                    var apellido = consola.nextLine();
                    logger.info("Telefono: ");
                    var telefono = consola.nextLine();
                    logger.info("Email: ");
                    var email = consola.nextLine();
                    estudiante.setNombre(nombre);
                    estudiante.setApellido(apellido);
                    estudiante.setTelefono(telefono);
                    estudiante.setEmail(email);
                    estudianteServicio.guardarEstudiante(estudiante);
                    logger.info("Estudiante modificado: " + estudiante + nl);
                } else
                    logger.info("El estudiante no fue encontrado con el id: " + idEstudiante + nl);
            }
            case 5 -> {// Eliminar estudiante
                logger.info("Eliminar estudiante: " + nl);
                logger.info("Digite el id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                Estudiantes2022 estudiante =
                        estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if (estudiante != null){
                    estudianteServicio.eliminarEstudiante(estudiante);
                    logger.info("Estudiante eliminado: " + estudiante + nl);
                }else{
                    logger.info(nl + "Estudiante No encontrado con el id: " + idEstudiante + nl);
                }
            }
            case 6 -> {// Salir
                logger.info("Hasta pronto!" + nl + nl);
                salir = true;
            }
        }//Fin switch
        return salir;
    }
}
