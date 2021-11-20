package com.share.backend.controller;

import com.share.backend.DTO.Item;
import com.share.backend.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@AllArgsConstructor
@NoArgsConstructor
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ModelMapper mapper;

    @GetMapping("/get/all")
    public List<Item> getAllItems() {

        return (List<Item>) itemRepository.findAll();
    }

    @GetMapping("/get")
    public Item getItem(@RequestParam(name = "id") Long id) {
        if (itemRepository.findById(id).isPresent()) {
            return itemRepository.findById(id).get();
        }
        else {
            return null;
        }
    }

    @PostMapping("/add")
    @ResponseBody
    public String addItem(@RequestBody Item item) {
        try {
            itemRepository.save(item);
            return "OK!";
        }
        catch (Exception e){
            return "Not OK!";
        }
    }
}
