package com.example.ToDo_List.Controller;

import com.example.ToDo_List.DTOs.ToDoDTO;
import com.example.ToDo_List.DTOs.UpdateDTO;
import com.example.ToDo_List.Model.ToDo;
import com.example.ToDo_List.Repository.ToDoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todo")
public class ToDoController {

    @Autowired
    private ToDoRepository repository;

    @GetMapping
    public ResponseEntity<List<ToDo>> getAll() {
        List<ToDo> todos = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(todos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ToDo> getById(@PathVariable Long id) {
        Optional<ToDo> todos = repository.findById(id);
        todos.get();
        return ResponseEntity.status(HttpStatus.OK).body(todos.get());
    }

    @PostMapping
    public ResponseEntity<ToDo> create(@RequestBody ToDoDTO data) {
        ToDo todo = new ToDo().create(data);
        repository.save(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(todo);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<ToDo> update(@RequestBody UpdateDTO data, @PathVariable Long id) {
        Optional<ToDo> optionalTodo = repository.findById(id);

        if (!optionalTodo.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        ToDo existingTodo = optionalTodo.get();
        existingTodo.update(data);
        ToDo updatedTodo = repository.save(existingTodo);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTodo);
    }



}
