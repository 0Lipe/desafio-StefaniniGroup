package com.example.ToDo_List.Model;

import com.example.ToDo_List.DTOs.ToDoDTO;
import com.example.ToDo_List.DTOs.UpdateDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "todo")
@Getter
@Setter
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "todo_seq")
    @SequenceGenerator(name = "todo_seq", sequenceName = "todo_seq", allocationSize = 1)
    private long id;

    @Column
    private String titulo;

    @Column
    private String descricao;

    @Enumerated(EnumType.STRING)
    private Status status;

    public ToDo create(ToDoDTO data) {
        this.titulo = data.titulo();
        this.descricao = data.descricao();
        this.status = data.status();
        return this;
    }
    public ToDo update(UpdateDTO data){
        this.status = data.status();
        return this;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
