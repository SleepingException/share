package com.share.backend.service.item;

import com.share.backend.DTO.ItemDTO;

import java.util.List;

public interface IItemService {
    ItemDTO findById(Long id);
    List<ItemDTO> findAll();
    void save(ItemDTO item);
}
