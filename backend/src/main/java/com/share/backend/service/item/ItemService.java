package com.share.backend.service.item;

import com.share.backend.DTO.ItemDTO;
import com.share.backend.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@AllArgsConstructor
@NoArgsConstructor
public class ItemService implements IItemService{

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public ItemDTO findById(Long id) {
        return itemRepository.findById(id).get();
    }

    @Override
    public List<ItemDTO> findAll() {
        return (ArrayList<ItemDTO>) itemRepository.findAll();
    }

    @Override
    public void save(ItemDTO item) {
        itemRepository.save(item);
    }
}
