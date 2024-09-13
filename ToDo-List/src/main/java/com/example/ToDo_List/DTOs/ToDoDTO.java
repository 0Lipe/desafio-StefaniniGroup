package com.example.ToDo_List.DTOs;

import com.example.ToDo_List.Model.Status;
import jakarta.validation.constraints.NotBlank;

public record ToDoDTO(

        @NotBlank
        String titulo,

        @NotBlank
        String descricao,

        @NotBlank
        Status status
) {


        // Getters e Setters
}
