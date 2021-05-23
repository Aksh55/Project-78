var names = [ "My Family" , "Dr. Ritu Pandey" , "Dr. Shyam P Mishra" , "Kusum Pandey" , "Shiv K Pandey" , "Lt. Hari Nath Mishra" , "Saraswati Mishra" , "Sharad Pandey" , "Rajni Pandey" , "Shanay Pandey" , "Akshaynie Mishra" ];
console.log(names);

var images = [ "my family.png" , "maa_3_10.png" , "papa_48.png" , "nani_15.png" , "nanu_74.png" , "dadu_49.jpg" , "dadi_36.png" , "mama_41.png" , "mami_42.png" , "shanay_33.png" , "me_29.png" ];
console.log(images); 

var description = [ "Click Next ➡" , "My Maa 🥰. Describe my Maa in one word : Workaholic. Not only does she love and is always concerned about her work as an Environmental Scientist and Expert in Waste Management, but she is always and I mean ALWAYS busy with stuff around the house, like HOW DO YOU EVEN DO IT?? " ,  "My Papa 😊. A bit boring and hot-headed at times , but is mostly fun to have for company. Immensely overprotective and loving." , "My Nani 😘.BEST GRANDMA you could ask for,you know THE BEST. She is great cook and is VERY VERY cool. Also she phenomenal at Sanskrit and is a fluent speaker of the same. I love spending time with her." , "My Nanu 😍. Best Grandfather Ever!! He is a very fun guy to be around and an amazing mentor. From always declaring me the winner in EVERY game to scolding Mama to get me the TV's remote, he's always been by my side. " , "My Dada 😇. Grew up hearing many stories about him. And from what I can remember of him personely, he was a loving Grandpa." , "My Dadi ❤. She is a remarkable woman to say the least. The time I spend with her is always delightful and fun." , "My Mama 😎.Tech Genius of the family. He is the COOLEST member of the family and very fun to hang out with. Not the typical mentor who lets you win in every game, you have to ACTUALLY WIN when you compete (and he almost always wins). " , " My Mami 🥳. She is an RJ and has an FANTASTIC voice and is very kind and loving person. She is a incredible cook and fab." , "Brother. He is troublesome (like VERY troublesome) but still the BEST BROTHER YOU COULD ASK FOR🤩" , "MEEEE whoooo oo o ooh. Let me introduce myself.....READY FOR IT? A BIG book lover and love to discover new things , hence a big fan of research. Currently learning Coding and Vedic Maths, so THIS IS ME TRYING to code, I also LOVE learning new languages. And if you aren't understanding the references I am making there is something SIRIUSly RON with you😝. " ];
console.log(description);

var i = 0;

function next() 
{ i++;
  var family_members_array = 10 ;
  if(i > family_members_array)
     {
       i=0;
     }
   var update_image = images[i];
   var update_name = names[i];
   var update_description = description[i];
  
   document.getElementById("name").innerHTML = update_name;
   document.getElementById("album").src = update_image;
   document.getElementById("description").innerHTML = update_description;
     
 }
