package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.HairDonation;
import com.example.demo.repository.HairDonationRepository;


@Service
public class HairService {

     @Autowired
    HairDonationRepository reposi;
 	public Iterable<HairDonation> sortHairDonation(@PathVariable String field)
 	{
 		return reposi.findAll(Sort.by(Direction.ASC, field ));
 	}
 	
 	public Page<HairDonation> pagingHairDonation(int pageno,int pageSize){
 		Pageable p =PageRequest.of(pageno,pageSize);
 		Page<HairDonation> o=reposi.findAll(p);
 		return o;
 	}
 	public Page<HairDonation> pagingAndSortingHairDonation(int pageNo,int pageSize,String field){
 		Pageable p=PageRequest.of(pageNo, pageSize).withSort(Sort.by(field));
 		return reposi.findAll(p);
 		
 	}
 	public HairDonation prt(HairDonation d)
 	{
 		return reposi.save(d);
 		
 	}
 	public String delete(int id)
 	{
 		  reposi.deleteById(id);
 		  return"Deleted";
 	}
 	public String prt1(HairDonation s11)
 	{
 		reposi.save(s11);
 		return "your record saved";
 	}
 	public List<HairDonation> get(){
 		return reposi.findAll();
 	}
 	public String delete1(int id)
 	{
 		reposi.deleteById(id);
 		return "id : " + id + " is deleted";
 	}
 	
 	public HairDonation updateHair(HairDonation a)
 	{
 		reposi.save(a);
 		return a;
 	}
 	public List<HairDonation> findAllHairDonationsQuery1()
 	{
 		return reposi.findAllHairDonationsQuery();
 	}
 	
 	public int UpdateQuery(String name,int id)
 	 {
 		 return reposi.UpdateQuery1(name,id);
 	 }

}