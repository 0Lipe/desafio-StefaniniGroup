package com.example.ToDo_List.Repository;

import com.example.ToDo_List.Model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
}
