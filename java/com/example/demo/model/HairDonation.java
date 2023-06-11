package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="donation_new")
public class HairDonation {
@Id
@Column(name="id")
private int id;
@Column(name="name")
private String name;
@Column(name="gender")
private String gender;
@Column(name="dob")
private String dob;
@Column(name="email")
private String email;
@Column(name="aadhar")
private String aadhar;
@Column(name="phoneno")
private String phoneno;
@Column(name="address")
private String address;
@Column(name="bloodgrp")
private String bloodgrp;
@Column(name="lengthofhair")
private String lengthofhair;
@Column(name="colour")
private String colour;
@Column(name="hairtexture")
private String hairtexture;
@Column(name="consent")
private String consent;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getDob() {
	return dob;
}
public void setDob(String dob) {
	this.dob = dob;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getAadhar() {
	return aadhar;
}
public void setAadhar(String aadhar) {
	this.aadhar = aadhar;
}
public String getPhoneno() {
	return phoneno;
}
public void setPhoneno(String phoneno) {
	this.phoneno = phoneno;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getBloodgrp() {
	return bloodgrp;
}
public void setBloodgrp(String bloodgrp) {
	this.bloodgrp = bloodgrp;
}
public String getLengthofhair() {
	return lengthofhair;
}
public void setLengthofhair(String lengthofhair) {
	this.lengthofhair = lengthofhair;
}
public String getColour() {
	return colour;
}
public void setColour(String colour) {
	this.colour = colour;
}
public String getHairtexture() {
	return hairtexture;
}
public void setHairtexture(String hairtexture) {
	this.hairtexture = hairtexture;
}
public String getConsent() {
	return consent;
}
public void setConsent(String consent) {
	this.consent = consent;
}
public HairDonation(int id, String name, String gender, String dob, String email, String aadhar, String phoneno,
		String address, String bloodgrp, String lengthofhair, String colour, String hairtexture, String consent) {
	super();
	this.id = id;
	this.name = name;
	this.gender = gender;
	this.dob = dob;
	this.email = email;
	this.aadhar = aadhar;
	this.phoneno = phoneno;
	this.address = address;
	this.bloodgrp = bloodgrp;
	this.lengthofhair = lengthofhair;
	this.colour = colour;
	this.hairtexture = hairtexture;
	this.consent = consent;
}

public HairDonation() {
	
}
@Override
public String toString() {
	return "HairDonation [id=" + id + ", name=" + name + ", gender=" + gender + ", dob=" + dob + ", email=" + email
			+ ", aadhar=" + aadhar + ", phoneno=" + phoneno + ", address=" + address + ", bloodgrp=" + bloodgrp
			+ ", lengthofhair=" + lengthofhair + ", colour=" + colour + ", hairtexture=" + hairtexture + ", consent="
			+ consent + "]";
}


}
