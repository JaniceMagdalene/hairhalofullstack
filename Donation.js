import React, { useState } from 'react';

import './Donation.css';
import axios from 'axios';
function DonationForm() {
  

// const baseURL="http://localhost:8080/post"

  const[lengthofhair,setLengthofhair]=useState('');
  const[hairtexture,setHairtexture]=useState('');
  const[consent,setConsent]=useState('');
  const[gender,setGender]=useState('');


  const[id,setId]=useState('');
  const[name,setName]=useState('');
  const[dob,setDob]=useState('');
  const[email,setEmail]=useState('');
  const[aadhar,setAadhar]=useState('');
  const[phoneno,setPhoneno]=useState('');
  const[address,setAddress]=useState('');
  const[bloodgrp,setBloodgrp]=useState('');
  const[colour,setColour]=useState('')
  
  const handleId=(e)=>{
    setId(e.target.value);
  }
  const handleName=(e)=>{
    setName(e.target.value);
  }  
  
  const handleDob=(e)=>{
    setDob(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleAadhar=(e)=>{
    setAadhar(e.target.value);
  }
  const handlePhoneno=(e)=>{
    setPhoneno(e.target.value);
  }
  const handleAddress=(e)=>{
    setAddress(e.target.value);
  }
  const handleBloodgrp=(e)=>{
    setBloodgrp(e.target.value);
  }
  const handleColour=(e)=>{
    setColour(e.target.value);
  }

  const user1={
    id,name,gender,dob,email,aadhar,phoneno,address,bloodgrp,lengthofhair,colour,hairtexture,consent
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/post`,user1).then(res=>console.log(res));
  };

  return (
<>      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="left">
        <div className="do" id="style-2">
          <div className="car">
            <form onSubmit={handleSubmit}>
              <div className="rw">
                <div className="cl">
                  <label htmlFor="fname" className='donatelabel' >DONOR ID</label>
                </div>
                <div className="cl2">
                  <input type="text" id="fname" className='donationinput' name="firstname" placeholder="Donor id..." onChange={handleId}/>
                </div>
              </div>
              <br />
              <div className="row1">
                <div className="col25">
                  <label htmlFor="lname" className='donatelabel' >NAME</label>
                </div>
                <div className="col75">
                  <input type="text" id="lname" name="lastname" className='donationinput' placeholder="Your name..." onChange={handleName}/>
                </div>
              </div>
              <br />
              <div className="row2">
                <div className="col5">
                  <label htmlFor="gender" className='donatelabel' >GENDER</label>
                </div>
                <div className="col5">
                  <label className="form-control" >
                    <input type="radio" name="radio" value="MALE" checked={gender === 'MALE'}
                onChange={(e) => setGender(e.target.value)} />MALE
                  </label>
                  <label className="form-control">
                    <input type="radio" name="radio" value="FEMALE" checked={gender === 'FEMALE'}
                onChange={(e) => setGender(e.target.value)} />
                    FEMALE
                  </label>
                  <label className="form-control">
                    <input type="radio" name="radio" value="OTHERS" checked={gender === 'OTHERS'}
                onChange={(e) => setGender(e.target.value)}  />
                    OTHERS
                  </label>
                </div>
              </div>
              <br />
              <div className="row2">
                <div className="col3">
                  <label htmlFor="dob" className='donatelabel' >DATE OF BIRTH</label>
                </div>
                <div className="col3">
                  <input type="date" name="birthday"  onChange={handleDob}/>
                </div>
              </div>
              <br />
              <div className="row3">
                <div className="col4">
                  <label htmlFor="email" className='donatelabel' >EMAIL ID</label>
                </div>
                <div className="col4">
                  <input type="email" name="email" placeholder="Email id" className='donationemail' onChange={handleEmail}/>
                </div>
              </div>
              <br />
              <div className="row4">
                <div className="col9">
                  <label htmlFor="aadhar" className='donatelabel' >AADHAR NUMBER</label>
                </div>
                <div className="col9">
                  <input type="text"  className='donationinput' name="aadhar" placeholder="Aadhar Number" onChange={handleAadhar}/>
                </div>
              </div>
              <br />
              <div className="row5">
                <div className="col10">
                  <label htmlFor="phone" className='donatelabel' >PHONE NUMBER</label>
                </div>
                <div className="col10">
                  <input type="text" className='donationinput' name="phone" placeholder="Phone Number" onChange={handlePhoneno}/>
                </div>
              </div>
              <br />
              <div className="row6">
                <div className="col11">
                  <label htmlFor="address" className='donatelabel' >ADDRESS</label>
                </div>
                <div className="col11">
                  <input type="text" name="address" className='donationinput' placeholder="Address ...."  onChange={handleAddress}/>
                </div>
              </div>
              <br />
              <div className="row7">
                <div className="col12">
                  <label htmlFor="group" className='donatelabel' >BLOOD GROUP</label>
                </div>
                <div className="col12">
                <input type="text" name="group" className='donationinput' placeholder="Blood Group...." onChange={handleBloodgrp}/>
                </div>
              </div><br/>

              <div className="row8">
          <div className="col13">
            <label htmlFor="length" className='donatelabel' >LENGTH OF HAIR</label>
          </div>
          <div className="col13">
            <label className="form-control">
              <input
                type="radio"
                name="radio"
                value="SHORT"
                checked={lengthofhair === 'SHORT'}
                onChange={(e) => setLengthofhair(e.target.value)}
              />
              SHORT
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="radio"
                value="MEDIUM"
                checked={lengthofhair === 'MEDIUM'}
                onChange={(e) => setLengthofhair(e.target.value)}
              />
              MEDIUM
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="radio"
                value="LONG"
                checked={lengthofhair === 'LONG'}
                onChange={(e) => setLengthofhair(e.target.value)}
              />
              LONG
            </label>
          </div>
        </div>
        <br />
        <div className="row9">
          <div className="col14">
            <label htmlFor="color" className='donatelabel' >COLOUR OF HAIR</label>
          </div>
          <div className="col14">
            <input
              type="text" className='donationinput'
              name="colour"
              placeholder="Hair Colour...." onChange={handleColour}
            />
          </div>
        </div>
        <br />
        <div className="row10">
          <div className="col15">
            <label htmlFor="texture" className='donatelabel' >HAIR TEXTURE</label>
          </div>
          <div className="col15">
            <label className="form-control">
              <input
                type="radio"
                name="radio2"
                value="THIN"
                checked={hairtexture === 'THIN'}
                onChange={(e) => setHairtexture(e.target.value)}
              />
              THIN
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="radio2"
                value="MEDIUM"
                checked={hairtexture === 'MEDIUM'}
                onChange={(e) => setHairtexture(e.target.value)}
              />
              MEDIUM
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="radio2"
                value="THICK"
                checked={hairtexture === 'THICK'}
                onChange={(e) => setHairtexture(e.target.value)}
              />
              THICK
            </label>
          </div>
        </div>
        <br />
        <div className="row11">
          <div className="col16">
            <label htmlFor="consent" className='donatelabel' >DO YOU AGREE?</label>
          </div>
          <div className="col16">
            <label className="form-control">
              <input
                type="radio" 
                name="radio3"
                value="YES"
                checked={consent === 'YES'}
                onChange={(e) => setConsent(e.target.value)}
              />
              YES
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="radio3" 
                value="NO"
                checked={consent === 'NO'}
                onChange={(e) => setConsent(e.target.value)}
              />
              NO
            </label>
            </div>
            </div>
          <br /><br />

            <div className="button18">
            <button type="submit" className='buttondonation'>SUBMIT</button>
          </div>
        </form>
      </div>
      </div>
      <div className="v1_3"></div>
      <span className="v1_4">DONATION IS NOT JUST ABOUT GIVING, IT’S ABOUT MAKING A DIFFERENCE</span>
      <div className="y"></div>
      <span className="n">YOU WERE BORN WITH ABILITY TO CHANGE SOMEONE'S LIFE</span>
      <div className="D"></div>
    </div>
    </>

              );
    }
    export default DonationForm;





   

  
        