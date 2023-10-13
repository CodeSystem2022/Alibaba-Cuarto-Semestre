package utn.tienda_libros.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.tienda_libros.modelo.Libro;


public interface ILibroRepositorio extends JpaRepository<Libro, Integer> {
}
