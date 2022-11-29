/**
 * Блок подключения модулей/импортов
 */
import React, {useState} from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid,
  Typography,
  Alert,
  Paper, Link, Button, Grow
} from "@mui/material";

/**
 * Импорт изображений
 */
import cf_001 from '../img/cf_001.jpg';
import cf_002 from '../img/cf_002.jpg';
import cf_003 from '../img/cf_003.jpg';
import cf_004 from '../img/cf_004.jpg';
import cf_005 from '../img/cf_005.jpg';
import cf_006 from '../img/cf_006.jpg';
import cf_007 from '../img/cf_007.jpg';
import cf_008 from '../img/cf_008.jpg';
import cf_009 from '../img/cf_009.jpg';
import cf_010 from '../img/cf_010.jpg';
import cf_011 from '../img/cf_011.jpg';
import cf_012 from '../img/cf_012.jpg';
import cf_013 from '../img/cf_013.jpg';
import cf_014 from '../img/cf_014.jpg';
import cf_015 from '../img/cf_015.jpg';
import cf_016 from '../img/cf_016.jpg';
import cf_017 from '../img/cf_017.jpg';
import cf_018 from '../img/cf_018.jpg';
import cf_019 from '../img/cf_019.jpg';
import cf_020 from '../img/cf_020.jpg';
import cf_021 from '../img/cf_021.jpg';
import cf_022 from '../img/cf_022.jpg';
import cf_023 from '../img/cf_023.jpg';
import cf_024 from '../img/cf_024.jpg';
import cf_025 from '../img/cf_025.jpg';
import cf_026 from '../img/cf_026.jpg';
import cf_027 from '../img/cf_027.jpg';
import cf_028 from '../img/cf_028.jpg';
import cf_029 from '../img/cf_029.jpg';
import cf_030 from '../img/cf_030.jpg';
import cf_031 from '../img/cf_031.jpg';
import cf_032 from '../img/cf_032.jpg';
import cf_033 from '../img/cf_033.jpg';
import cf_034 from '../img/cf_034.jpg';
import cf_035 from '../img/cf_035.jpg';
import cf_036 from '../img/cf_036.jpg';
import cf_037 from '../img/cf_037.jpg';
import cf_038 from '../img/cf_038.jpg';
import cf_039 from '../img/cf_039.jpg';
import cf_040 from '../img/cf_040.jpg';
import cf_041 from '../img/cf_041.jpg';
import cf_042 from '../img/cf_042.jpg';
import cf_043 from '../img/cf_043.jpg';
import cf_044 from '../img/cf_044.jpg';
import cf_045 from '../img/cf_045.jpg';
import cf_046 from '../img/cf_046.jpg';
import cf_047 from '../img/cf_047.jpg';
import cf_048 from '../img/cf_048.jpg';
import cf_049 from '../img/cf_049.jpg';
import cf_050 from '../img/cf_050.jpg';
import cf_051 from '../img/cf_051.jpg';
import cf_052 from '../img/cf_052.jpg';
import cf_053 from '../img/cf_053.jpg';
import cf_054 from '../img/cf_054.jpg';
import cf_055 from '../img/cf_055.jpg';
import cf_056 from '../img/cf_056.jpg';

/**
 * Блок кастомизации MUI
 */
const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565C0',
    },
  },
});

const FILMS = [
  cf_001,
  cf_002,
  cf_003,
  cf_004,
  cf_005,
  cf_006,
  cf_007,
  cf_008,
  cf_009,
  cf_010,
  cf_011,
  cf_012,
  cf_013,
  cf_014,
  cf_015,
  cf_016,
  cf_017,
  cf_018,
  cf_019,
  cf_020,
  cf_021,
  cf_022,
  cf_023,
  cf_024,
  cf_025,
  cf_026,
  cf_027,
  cf_028,
  cf_029,
  cf_030,
  cf_031,
  cf_032,
  cf_033,
  cf_034,
  cf_035,
  cf_036,
  cf_037,
  cf_038,
  cf_039,
  cf_040,
  cf_041,
  cf_042,
  cf_043,
  cf_044,
  cf_045,
  cf_046,
  cf_047,
  cf_048,
  cf_049,
  cf_050,
  cf_051,
  cf_052,
  cf_053,
  cf_054,
  cf_055,
  cf_056,
];

const randomInteger = () => {
  const RAND = Math.random() * ((FILMS.length - 1) + 1);
  return FILMS[Math.floor(RAND)];
};

export const ChooseFilm = () => {
  /**
   * Блок определения хуков
   */
  const [filmImg, setFilmImg] = useState(randomInteger());
  const [growState, setGrowState] = useState(true);

  /**
   * Блок пользовательских функций
   */
  const chooseFilm = () => {
    setGrowState((prev) => !prev);
    setTimeout(() => {
      setFilmImg(randomInteger());
    }, 300);
    setTimeout(() => {
      setGrowState((prev) => !prev);
    }, 300);
  }

  return (
    <Grow
      in
    >
      <Box sx={{flexGrow: 1}}>
        <ThemeProvider theme={darkTheme}>
          <Paper
            sx={{pb: 2}}
          >
            <Container>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{mb: 2}}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Советник фильмов
                  </Typography>
                  <Link
                    href="https://www.ivi.ru/collections/badcomedian-ivi10"
                    target="_blank"
                  >
                    BadComedian рекомендует: Лучшие фильмы десятилетия
                  </Link>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{mb: 2}}
              >
                <Grid item>
                  <Alert severity="info">Всего 56 фильмов</Alert>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{mb: 2}}
              >
                <Grid item>
                  <Grow
                    in={growState}
                    timeout={300}
                  >
                    <Box
                      component="img"
                      sx={{borderRadius: 2}}
                      src={filmImg}
                      alt="Постер фильма"
                    />
                  </Grow>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{mb: 2}}
              >
                <Grid item>
                  <Button
                    onClick={chooseFilm}
                  >
                    Посоветовать фильм
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </ThemeProvider>
      </Box>
    </Grow>
  )
}