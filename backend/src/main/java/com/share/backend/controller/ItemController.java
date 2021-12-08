package com.share.backend.controller;

import com.share.backend.DTO.ItemDTO;
import com.share.backend.service.item.ItemService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private ModelMapper mapper;

    @GetMapping("/get/all")
    public List<ItemDTO> getAllItems() {
        return (List<ItemDTO>) itemService.findAll();
    }

    @GetMapping("/get/{id}")
    public ItemDTO getItem(@PathVariable Long id) {
        return itemService.findById(id);
    }

    @PostMapping("/add")
    public String addItem(ItemDTO item) {
        try {
            itemService.save(item);
            return "OK!";
        }
        catch (Exception e){
            return "Not OK!";
        }
    }
}
