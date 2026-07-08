package com.cognizant.springlearn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AuthenticationService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("user".equals(username)) {
            return new User("user", passwordEncoder.encode("pwd"), new ArrayList<>());
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }

    public boolean authenticate(String username, String password) {
        UserDetails userDetails = loadUserByUsername(username);
        return passwordEncoder.matches(password, userDetails.getPassword());
    }
}
