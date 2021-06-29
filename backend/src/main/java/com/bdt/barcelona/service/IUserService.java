package com.bdt.barcelona.service;

import com.bdt.barcelona.entity.User;

import java.util.Optional;


public interface IUserService {

  public User save(User user);
  public Optional<User> getUserById(String userId);
  public Boolean deleteUserById(String userId);
  public Boolean update(User user, String userId);
  public Boolean login(User user);
}
