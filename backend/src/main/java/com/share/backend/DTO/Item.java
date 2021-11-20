package com.share.backend.DTO;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private Integer cost;
}
