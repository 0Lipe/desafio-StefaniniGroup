package com.example.ToDo_List.DTOs;

import com.example.ToDo_List.Model.Status;
import jakarta.validation.constraints.NotBlank;

public record UpdateDTO(
        @NotBlank
        Status status
) {
}
