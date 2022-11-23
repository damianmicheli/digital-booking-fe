package com.backend.service;


import com.backend.entity.Rol;
import com.backend.entity.Usuario;
import com.backend.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthenticationService implements UserDetailsService {

    @Autowired
    IUsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findUsuarioByEmail(userName);

        Set<GrantedAuthority> autorizaciones = new HashSet<>();
        GrantedAuthority autorizacion = null;

        for (Rol rol : usuario.get().getRoles()) {
            autorizacion = new SimpleGrantedAuthority(rol.getNombre());
            autorizaciones.add(autorizacion);
        }

        User userDetail = new User(usuario.get().getEmail(), usuario.get().getPassword(),true, true, true,true, autorizaciones );

        return userDetail;
    }


}
