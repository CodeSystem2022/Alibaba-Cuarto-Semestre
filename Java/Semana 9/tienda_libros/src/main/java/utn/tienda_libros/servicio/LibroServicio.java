package utn.tienda_libros.servicio;

import utn.tienda_libros.modelo.Libro;

import java.util.List;

public interface LibroServicio {

    public List<Libro> listarLibros();

    public Libro buscarLibroPorid(Integer idLibro);

    public void guardarLibro(Libro libro);

    public void eliminarLibro(Libro libro);
}
