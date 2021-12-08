package com.share.backend.DTO;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Items")
public class ItemDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String decription;
    private Double cost;
    @ManyToOne()
    @JoinColumn(name = "user_id", insertable = false)
    private UserDTO user;
}
