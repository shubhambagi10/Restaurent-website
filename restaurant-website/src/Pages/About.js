import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Box, Typography} from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
        },
      "  @media(max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1.5rem"
        },
      },
      }}>
        <Typography variant='h4'>
          welcome to Resturant
        </Typography>
       <p>Step into our restaurant and immerse yourself in a world where culinary artistry reigns supreme. With a vibrant ambiance and a menu that tells tales of flavor and finesse, each visit promises to be a journey of gastronomic delight. Our dishes are crafted with passion and precision, using only the freshest ingredients to ensure every bite is a revelation. From classic favorites to innovative creations, our menu is designed to tantalize your taste buds and leave you craving for more. Whether you're seeking a symphony of flavors or a culinary adventure, our team is dedicated to delivering an exceptional dining experience, where creativity meets tradition and every meal is a celebration. Escape the ordinary and indulge in extraordinary flavors with us, where passion for food meets unparalleled hospitality. Join us and discover the artistry of gastronomy at its finest, where every dish is a masterpiece waiting to be savored.
</p>
<br/>
<p>Step into our restaurant and feel the embrace of a warm and inviting atmosphere. As you enter, you're greeted by soft lighting that casts a gentle glow over the space, creating an ambiance of intimacy and relaxation. The décor exudes elegance with modern touches, while still retaining a sense of coziness that makes you feel right at home.
The gentle hum of conversation fills the air, mingling with the clinking of glasses and the sizzle of food being prepared in the kitchen. The sound of soft music adds to the ambiance, enhancing the dining experience without overpowering conversation.</p>


      </Box>
    </Layout>
  );
};

export default About;
