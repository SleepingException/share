package com.share.backend.repository;

import com.share.backend.DTO.ItemDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<ItemDTO, Long> {

}
