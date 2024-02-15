import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  return (
    <Layout>
      <Box
      sx={{my:5,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>Welcome to our contact page! We're thrilled that you want to get in touch with us. Whether you have questions, feedback, partnership inquiries, or just want to say hello, we're here to listen. Our team is dedicated to providing excellent service and support to our customers and community.

Feel free to reach out to us using the contact form below or via the contact information provided. We strive to respond to all inquiries promptly, so you can expect to hear back from us soon.

Thank you for considering contacting us. We look forward to connecting with you!</p>

      </Box>
      <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
        width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',}}align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red",pt:1}}/> 180001101110(TollFree)
                </TableCell>
                <TableRow>
                <TableCell>
                  <ContactMailIcon sx={{color:"skyblue",pt:1}}/> shubhbagi@gmail.com
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <CallIcon sx={{color:"green",pt:1}}/> +918839604710
                </TableCell>
                </TableRow>
              </TableRow>
            </TableBody>

          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
