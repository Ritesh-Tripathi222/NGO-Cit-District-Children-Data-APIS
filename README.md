# dhwaniNodeApis


Node version => v14.17.5


use localhost:500/api


For DB used Atlas of mongoDB


Install Packege.json

For User Register


http://localhost:5000/api/register
   
   {
     "email":"",
     "password": ""
   }
  
Login by passing =>  http://localhost:5000/api/login

   {
     "email": "",
     "password": ""
   }   
   
After Login will generate a Token for further authentication pass that in 

Headers

key=> token

value=>token key
   
   
get all state => http://localhost:5000/api/getstate

get state by id  => http://localhost:5000/api/getstate/:id

add state data to DB => http://localhost:5000/api/addstate

   {
      "state":"Lucknow"
   }
   
x=http://localhost:5000/api/

getting District =>  x/getdistrict

add district => x/adddistrict)

   {
      "state":"up",
      "district":"Lucknow"
   }
   
 information of Child by state => http://localhost:5000/api/getchild/;state
 
Add child information => http://localhost:5000/api/addchild

   {
  "name":"",
  "sex":"",
  "dob":"",
  "fatherName":"",
  "motherName":"",
  "state":"",
  "district":"",
  }
  
  
  
  logout   http://localhost:5000/api/logout
