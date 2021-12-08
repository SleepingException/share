package com.share.backend.DTO;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "Users")
public class UserDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String surname;
    private String middlename;
    private Short phoneNumber;
    @OneToMany
    @JoinColumn(name = "user_id")
    private List<ItemDTO> items;
}
