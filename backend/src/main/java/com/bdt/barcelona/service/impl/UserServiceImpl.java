package com.bdt.barcelona.service.impl;

import com.bdt.barcelona.entity.User;
import com.bdt.barcelona.repository.IUserRepository;
import com.bdt.barcelona.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {

  @Autowired
  private IUserRepository userRepository;

  @Override
  public User save(User user) {
    return userRepository.save(user);
  }

  @Override
  public Optional<User> getUserById(String userId) {
    return userRepository.getUserById(userId);
  }

  @Override
  public Boolean deleteUserById(String userId) {
    return getUserById(userId).map(user -> {
      userRepository.deleteById(userId);
      return true;
    }).orElse(false);
  }

  @Override
  public Boolean update(User user, String userId) {
    return getUserById(userId).map(userToModify -> {
      user.setId(userId);
      userRepository.save(user);
      return true;
    }).orElse(false);
  }

  @Override
  public Boolean login(User user) {
    User userDB = userRepository.getUserByEmail(user.getEmail());
    Boolean userIsCorrect = false;
    if(userDB != null){
      if(user.getPassword().equals(userDB.getPassword())){
        userIsCorrect = true;
      }
    }
    return userIsCorrect;
  }
}
