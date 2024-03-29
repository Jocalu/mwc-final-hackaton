package com.bdt.barcelona.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {

  @Id
  private String id;

  private String username;
  private String email;
  private String password;
  private double score;
  private String targetDataId;

  public User() {
  }

  public User(String id, String username, String email, String password, double score, String targetDataId) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.score = score;
    this.targetDataId = targetDataId;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public double getScore() {
    return score;
  }

  public void setScore(double score) {
    this.score = score;
  }

  public String getTargetDataId() {
    return targetDataId;
  }

  public void setTargetDataId(String targetDataId) {
    this.targetDataId = targetDataId;
  }
}
