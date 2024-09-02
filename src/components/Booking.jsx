import React, { useRef, useState } from 'react';
import { TextField, Button, Container, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import 'react-datepicker/dist/react-datepicker.css';

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true); 
  };

  const handleConfirm = () => {
    setOpen(false);

    emailjs
      .sendForm('service_xz5t8cp', 'template_37lsaoa', form.current, 'RGbEBrYjOjFuBowtP')
      .then(
        () => {
          console.log('SUCCESS!');
          
          // Resetear los campos del formulario
          setSelectedDate(null);
          setName('');
          setPhone('');
          setAddress('');
          setMessage('');

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className='booking' maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Reserva de Servicios de Limpieza
        </Typography>
        <form ref={form} onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1">Seleccione una fecha:</Typography>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              name='date_message'
              placeholderText="Elige una fecha"
              className="date-picker-input"
              wrapperClassName="date-picker-wrapper"
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Teléfono"
              variant="outlined"
              fullWidth
              name="user_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Dirección"
              variant="outlined"
              fullWidth
              name="direction_message"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reservar
          </Button>
        </form>
      </Box>

      {/* Modal de confirmación */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmar Reserva</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas reservar el servicio de limpieza con los siguientes datos?
          </DialogContentText>
          <Box sx={{ marginTop: 2 }}>
            <Typography><strong>Fecha:</strong> {selectedDate ? selectedDate.toLocaleDateString() : ''}</Typography>
            <Typography><strong>Nombre:</strong> {name}</Typography>
            <Typography><strong>Teléfono:</strong> {phone}</Typography>
            <Typography><strong>Dirección:</strong> {address}</Typography>
            <Typography><strong>Mensaje:</strong> {message}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancelar</Button>
          <Button onClick={handleConfirm} color="primary">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default BookingForm;
