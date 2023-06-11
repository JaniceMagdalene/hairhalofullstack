package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.HairDonation;

import jakarta.transaction.Transactional;

@Repository
public interface HairDonationRepository extends JpaRepository<HairDonation,Integer>{
	@Query("select e from HairDonation e")
	List<HairDonation> findAllHairDonationsQuery();
@Transactional
@Modifying
@Query("update HairDonation e set e.name=?1 where e.id in ?2")
int  UpdateQuery1(String name,int id);
}
