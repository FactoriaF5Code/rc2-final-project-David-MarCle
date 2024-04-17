package com.filmnecting.filmnectingproject.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cortometrajes")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String pais;
    private Integer año;
    private String duracion;
    private String tipo;
    private String director;
    private String asistente_director;
    private String produccion;
    private String produccion_ejecutiva;
    
    private String edicion;
    private String diseño_arte;
    private String fotografia;
    private String musica;
    private String animacion;
    private String sonido;
    private String camara;
    private String asistente_camara;
    private String diseño_vestuario;
    private String reparto;
    private String sinopsis;
    private String url_pelicula;
   
    private String url_cartel;
    private String contacto;
    

    
    public Film() {
    }

    public Film(Integer id, String titulo, String pais, Integer año, String duracion, String tipo, String director, String asistenteDirector, String produccion, String produccionEjecutiva, String edicion, String diseñoArte, String fotografia, String musica, String animacion, String sonido, String camara, String asistenteCamara, String diseñoVestuario, String reparto, String sinopsis, String urlPelicula, String urlCartel, String contacto, String premiosFestival) {
        this.id = id;
        this.titulo = titulo;
        this.pais = pais;
        this.año = año;
        this.duracion = duracion;
        this.tipo = tipo;
        this.director = director;
        this.asistente_director = asistenteDirector;
        this.produccion = produccion;
        this.produccion_ejecutiva = produccionEjecutiva;
        this.edicion = edicion;
        this.diseño_arte = diseñoArte;
        this.fotografia = fotografia;
        this.musica = musica;
        this.animacion = animacion;
        this.sonido = sonido;
        this.camara = camara;
        this.asistente_camara = asistenteCamara;
        this.diseño_vestuario = diseñoVestuario;
        this.reparto = reparto;
        this.sinopsis = sinopsis;
        this.url_pelicula = urlPelicula;
        this.url_cartel = urlCartel;
        this.contacto = contacto;
        
    }
  
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Integer getAño() {
        return año;
    }

    public void setAño(Integer año) {
        this.año = año;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getAsistenteDirector() {
        return asistente_director;
    }

    public void setAsistenteDirector(String asistenteDirector) {
        this.asistente_director = asistenteDirector;
    }

    public String getProduccion() {
        return produccion;
    }

    public void setProduccion(String produccion) {
        this.produccion = produccion;
    }

    public String getProduccionEjecutiva() {
        return produccion_ejecutiva;
    }

    public void setProduccionEjecutiva(String produccionEjecutiva) {
        this.produccion_ejecutiva = produccionEjecutiva;
    }

    public String getEdicion() {
        return edicion;
    }

    public void setEdicion(String edicion) {
        this.edicion = edicion;
    }

    public String getDiseñoArte() {
        return diseño_arte;
    }

    public void setDiseñoArte(String diseñoArte) {
        this.diseño_arte = diseñoArte;
    }

    public String getFotografia() {
        return fotografia;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }

    public String getMusica() {
        return musica;
    }

    public void setMusica(String musica) {
        this.musica = musica;
    }

    public String getAnimacion() {
        return animacion;
    }

    public void setAnimacion(String animacion) {
        this.animacion = animacion;
    }

    public String getSonido() {
        return sonido;
    }

    public void setSonido(String sonido) {
        this.sonido = sonido;
    }

    public String getCamara() {
        return camara;
    }

    public void setCamara(String camara) {
        this.camara = camara;
    }

    public String getAsistenteCamara() {
        return asistente_camara;
    }

    public void setAsistenteCamara(String asistenteCamara) {
        this.asistente_camara = asistenteCamara;
    }

    public String getDiseñoVestuario() {
        return diseño_vestuario;
    }

    public void setDiseñoVestuario(String diseñoVestuario) {
        this.diseño_vestuario = diseñoVestuario;
    }

    public String getReparto() {
        return reparto;
    }

    public void setReparto(String reparto) {
        this.reparto = reparto;
    }

    public String getSinopsis() {
        return sinopsis;
    }

    public void setSinopsis(String sinopsis) {
        this.sinopsis = sinopsis;
    }

    public String getUrlPelicula() {
        return url_pelicula;
    }

    public void setUrlPelicula(String urlPelicula) {
        this.url_pelicula = urlPelicula;
    }

    public String getUrlCartel() {
        return url_cartel;
    }

    public void setUrlCartel(String urlCartel) {
        this.url_cartel = urlCartel;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

   

    
}