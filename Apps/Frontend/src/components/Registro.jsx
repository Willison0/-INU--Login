import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const defaultTheme = createTheme();

export default function Registro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pNombre: "",
    sNombre: "",
    pApellido: "",
    sApellido: "",
    cedula: "",
    fechaNacimiento: null,
    nacionalidad: "",
    pais: "",
    estado: "",
    direccion: "",
    descripcion: "",
    email: "",
    usuario: "",
    password: "",
  });

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1); // Retrocede a la etapa anterior
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2); // Pasar a la siguiente etapa después de completar la primera
    } else if (step === 2) {
      setStep(3); // Pasar a la siguiente etapa después de completar la segunda
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, fechaNacimiento: date });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Regístrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {step === 1 && (
              <Grid container spacing={2}>
                <TextField
                  name="pNombre"
                  required
                  fullWidth
                  id="pNombre"
                  label="Primer Nombre"
                  autoFocus
                  value={formData.pNombre}
                  onChange={handleChange}
                />
                <TextField
                  name="sNombre"
                  fullWidth
                  id="sNombre"
                  label="Segundo Nombre"
                  value={formData.sNombre}
                  onChange={handleChange}
                />
                <TextField
                  name="pApellido"
                  required
                  fullWidth
                  id="pApellido"
                  label="Primer Apellido"
                  value={formData.pApellido}
                  onChange={handleChange}
                />
                <TextField
                  name="sApellido"
                  fullWidth
                  id="sApellido"
                  label="Segundo Apellido"
                  value={formData.sApellido}
                  onChange={handleChange}
                />
                <TextField
                  name="cedula"
                  required
                  fullWidth
                  id="cedula"
                  label="Cédula"
                  value={formData.cedula}
                  onChange={handleChange}
                />
                <Button onClick={handleNext} sx={{ mt: 3, mb: 2 }}>
                  Continuar
                </Button>
                <Grid item>
                  <Link component={RouterLink} to="/login" variant="body2">
                    ¿Ya tienes una cuenta? Ingresa aquí
                  </Link>
                </Grid>
              </Grid>
            )}
            {step === 2 && (
              <Grid container spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha de Nacimiento"
                    value={formData.fechaNacimiento}
                    onChange={(newValue) => {
                      setFormData({ ...formData, fechaNacimiento: newValue });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  name="pais"
                  required
                  fullWidth
                  id="pais"
                  label="País"
                  value={formData.pais}
                  onChange={handleChange}
                />
                <TextField
                  name="estado"
                  required
                  fullWidth
                  id="estado"
                  label="Estado"
                  value={formData.estado}
                  onChange={handleChange}
                />
                <TextField
                  name="direccion"
                  required
                  fullWidth
                  id="direccion"
                  label="Dirección"
                  value={formData.direccion}
                  onChange={handleChange}
                />
                <TextField
                  name="descripcion"
                  fullWidth
                  id="descripcion"
                  label="Descripción"
                  multiline
                  rows={4}
                  value={formData.descripcion}
                  onChange={handleChange}
                />
                <Button onClick={handleBack} sx={{ mt: 3, mb: 2 }}>
                  Atrás
                </Button>
                <Button onClick={handleNext} sx={{ mt: 3, mb: 2 }}>
                  Siguiente
                </Button>
                <Grid item>
                  <Link component={RouterLink} to="/login" variant="body2">
                    ¿Ya tienes una cuenta? Ingresa aquí
                  </Link>
                </Grid>
              </Grid>
            )}
            {step === 3 && (
              <Grid container spacing={2}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  name="usuario"
                  required
                  fullWidth
                  id="usuario"
                  label="Usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                />
                <TextField
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Contraseña"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button onClick={handleBack} sx={{ mt: 3, mb: 2 }}>
                  Atrás
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrar
                </Button>
                <Grid item>
                  <Link component={RouterLink} to="/login" variant="body2">
                    ¿Ya tienes una cuenta? Ingresa aquí
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
