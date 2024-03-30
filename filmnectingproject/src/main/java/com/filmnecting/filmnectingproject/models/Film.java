package com.filmnecting.filmnectingproject.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Films")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String country;
    private String year;
    private String lenght;
    private String type;
    private String director;
    private String assistant_director;
    private String production;
    private String executive_production;
    private String editing;
    private String art_design;
    private String photography;
    private String music;
    private String animation;
    private String sound;
    private String camera;
    private String camera_assistant;
    private String costume_design;
    private String cast;
    private String synopsis;
    private String url_film;
    private String url_poster;
    private String contact;

    public Film() {

    }

    public Film(Integer id, String title,  String country, String year, String lenght, String type, String director, String assistant_director, String production, String executive_production, String editing, String art_design, String photography, String music, String animation, String sound, String camera, String camera_assistant, String costume_design, String cast, String synopsis, String url_film, String url_poster) {
    
   
     
        this.id = id;
        this.title = title;
        this.country = country; 
        this.year = year;
        this.lenght = lenght;
        this.type = type;
        this.director = director;
        this.assistant_director = assistant_director;
        this.production = production;
        this.executive_production = executive_production;
        this.editing = editing;
        this.art_design = art_design;
        this.photography = photography;
        this.music = music;
        this.animation = animation;
        this.sound = sound;
        this.camera = camera;
        this.camera_assistant = camera_assistant;
        this.costume_design = costume_design;
        this.cast = cast;
        this.synopsis = synopsis;
        this.url_film = url_film;
        this.url_poster = url_poster;
        this.contact = contact;


    }
  
    public Integer getId() {
        return id;
    }
    
    public String getTitle() {
        return title;
    }
   
   

   public String getCountry() {
        return country;
    }

    public String getYear() {
        return year;
    }

    public String getLenght() {
        return lenght;
    }

    public String getType() {
        return type;
    }

    public String getDirector() {
        return director;
    }

    public String getAssistant_director() {
        return assistant_director;
    }

    public String getProduction() {
        return production;
    }

    public String getExecutive_production() {
        return executive_production;
    }

    public String getEditing() {
        return editing;
    }

    public String getArt_design() {
        return art_design;
    }

    public String getPhotography() {
        return photography;
    }

    public String getMusic() {
        return music;
    }

    public String getAnimation() {
        return animation;
    }

    public String getSound() {
        return sound;
    }

    public String getCamera() {
        return camera;
    }

    public String getCamera_assistant() {
        return camera_assistant;
    }

    public String getCostume_design() {
        return costume_design;
    }

    public String getCast() {
        return cast;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public String getUrl_film() {
        return url_film;
    }

    public String getUrl_poster() {
        return url_poster;
    }

    public String getContact() {
        return contact;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setLenght(String lenght) {
        this.lenght = lenght;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public void setAssistant_director(String assistant_director) {
        this.assistant_director = assistant_director;
    }

    public void setProduction(String production) {
        this.production = production;
    }

    public void setExecutive_production(String executive_production) {
        this.executive_production = executive_production;
    }

    public void setEditing(String editing) {
        this.editing = editing;
    }

    public void setArt_design(String art_design) {
        this.art_design = art_design;
    }

    public void setPhotography(String photography) {
        this.photography = photography;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public void setAnimation(String animation) {
        this.animation = animation;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public void setCamera(String camera) {
        this.camera = camera;
    }

    public void setCamera_assistant(String camera_assistant) {
        this.camera_assistant = camera_assistant;
    }

    public void setCostume_design(String costume_design) {
        this.costume_design = costume_design;
    }

    public void setCast(String cast) {
        this.cast = cast;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public void setUrl_film(String url_film) {
        this.url_film = url_film;
    }

    public void setUrl_poster(String url_poster) {
        this.url_poster = url_poster;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}

