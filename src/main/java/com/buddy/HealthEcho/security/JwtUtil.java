package com.buddy.HealthEcho.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;


@Component
public class JwtUtil {


    private final Key key;
    private final long jwtExpirationMs;


    public JwtUtil(@Value("${jwt.secret}") String secret, @Value("${jwt.expirationMs}") long jwtExpirationMs) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
        this.jwtExpirationMs = jwtExpirationMs;
    }


    public String generateToken(String subject) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationMs);


        return Jwts.builder().setSubject(subject).setIssuedAt(now).setExpiration(expiryDate).signWith(key, SignatureAlgorithm.HS256).compact();
    }


    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        return claims.getSubject();
    }


    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException ex) {
// logging can be added here
            return false;
        }
    }


}