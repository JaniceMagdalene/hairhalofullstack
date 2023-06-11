package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.HairDonation;

import com.example.demo.service.HairService;

@RestController
@CrossOrigin
public class HairController {

@Autowired 
HairService hs;


@PostMapping("/post")
public String print(@RequestBody HairDonation s11)
{
	return hs.prt1(s11);
	
}


 @GetMapping("/geting")
 public List<HairDonation> get1()
 {
	 return hs.get();

    }
 

 
 @DeleteMapping("/delete/{id}")
 public String delete(@PathVariable("id") int id) {
	 
	return hs.delete1(id);
 }
 @PutMapping("/put")
	public HairDonation updateHairstyle(@RequestBody HairDonation a)
	{
		return hs.updateHair(a);
	}

 @GetMapping("/get/{field}")
 Iterable<HairDonation>HairDonationSort(@PathVariable("field") String field)
 {
	 return hs.sortHairDonation(field);
 }
 @GetMapping("/gets")
 List<HairDonation> findQuery()
	{
	 return hs.findAllHairDonationsQuery1();
	}
 
 @GetMapping(value="/pagingdemo/{pageNo}/{pageSize}")
 Page<HairDonation> HairDonationPaging(@PathVariable("pageNo")int pageno,
		 @PathVariable("pageSize")int pageSize){
	 return hs.pagingHairDonation(pageno, pageSize);
 }
 
 @PutMapping("/puting/{name}/{id}")
 public int upd(@PathVariable String name,@PathVariable int id)
 {
	 return hs.UpdateQuery(name,id);
 }
 
 @GetMapping(value="/pagingSortingdemo/{pageNo}/{pageSize}/{field}")
 Page<HairDonation>HairDonationPagingAndSorting(@PathVariable("pageNo")int pageno,
		 @PathVariable("pageSize")int pageSize,
		 @PathVariable("field") String field){
	 return hs.pagingAndSortingHairDonation(pageno,pageSize,field);
	 
 } 
}
