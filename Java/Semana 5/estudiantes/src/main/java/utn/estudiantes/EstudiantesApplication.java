package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.servicio.EstudianteServicio;

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
        while(!salir){
            mostrarMenu();
            salir = ejecutandoOpciones(consola);
            logger.info(nl);
        }//Fin ciclo while
    }
    private void mostrarMenu(){
        logger.info(ln);
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
    private boolean ejecutandoOpciones(Scanner consola){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 ->{//Listar estudiantes
                logger.info(nl+"Listado de estudiantes: "+nl);
                List<Estudiantes2022> estudiantes = estudianteServicio.listarEstudiantes();
                estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));}
        }
    }//Fin switch
        return salir;
}

