import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, MenuItem } from "@mui/material";
import { useRegistration } from '../Contexts/RegistrationContext';

const courses = ['systemutvecklare', 'grafisk designer', 'frontendutvecklare'];

export default function RegistrationForm({ defaultCourse = ''}) {
  const { registerStudent } = useRegistration();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, course: defaultCourse }));
  }, [defaultCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerStudent(formData); 
    setFormData({ name: '', email: '', course: '' }); 
  };

  return (
    <Container maxWidth="xs">
      
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt: 5, mb: 8}}
    >
      <Typography variant="h5" component="h2" gutterBottom sx={{
        textAlign: 'center',
        color: 'black',         
        fontWeight: 'normal',}}>
        Registrera dig här!
      </Typography>
      <TextField
        label="Namn"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="E-post"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        type="email"
      />
      <TextField
        select
        label="Välj kurs"
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
      >
        {courses.map((course) => (
          <MenuItem key={course} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Registrera
      </Button>
    </Box>
    </Container>
  );
}
