package com.bdt.barcelona.controller;

import com.bdt.barcelona.entity.User;
import com.bdt.barcelona.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController {

  @Autowired
  private UserServiceImpl userService;

  @PostMapping("/register")
  public ResponseEntity<User> save(@RequestBody User user){
    return new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable("id") String userId){
    return userService.getUserById(userId)
      .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteUserById(@PathVariable("id") String userId){
    if(userService.deleteUserById(userId)){
      return new ResponseEntity<>(HttpStatus.OK);
    } else{
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<Void> updateUserById(
    @RequestBody User user,
    @PathVariable("id") String userId
  ){
    if(userService.update(user, userId)){
      return new ResponseEntity<>(HttpStatus.OK);
    } else{
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}
