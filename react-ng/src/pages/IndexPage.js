/**
 * Блок подключения модулей
 */
/**
 * React
 */
import React, {useState} from 'react';
import {Link as RouterLink} from "react-router-dom";

/**
 * MUI
 */
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid,
  Typography,
  Link, Paper, Grow, AlertTitle, Alert, IconButton
} from "@mui/material";

/**
 * Иконки
 */
import resume from '../img/resume_icon.svg';
import resume_pdf from "../img/pdf.svg";
import calc from '../img/calc_icon.svg';
import go_icon from "../img/angel.svg";
import paw from "../img/paw.svg";
import linked_in from "../img/linkedin.svg";
import sfg_icon from "../img/talk.svg";
import stopwatch from "../img/stopwatch.svg";
import vkurse from "../img/vkurse.svg";
import popcorn from "../img/popcorn.svg";
import solar_system from "../img/solar_system.svg";
import fs from "../img/fs.svg";
import calendar from "../img/calendar.svg";

/**
 * Файлы
 */
import resume_file from "../files/resume.pdf";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse/Collapse";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565C0',
    },
  },
});

export const IndexPage = () => {
  const [openWarning, setOpenWarning] = useState(true);

  return (
    <Grow
      in
    >
      <Box sx={{flexGrow: 1}}>
        <ThemeProvider theme={darkTheme}>
          <Paper>
            <Container>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{py: 4}}
              >
                <Grid item xs={6} sm={4}>
                  <Box
                    sx={{textAlign: 'center'}}
                  >
                    <Link
                      href="https://hh.ru/resume/a2f705e1ff09c57c830039ed1f423464753455"
                      underline="none"
                      target="_blank"
                    >
                      <Box
                        src={resume}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Резюме (HH)
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/calc"
                      underline="none"
                    >
                      <Box
                        src={calc}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Калькулятор
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      href="https://xn--b1abbgbpxxo3a.xn--p1ai/"
                      underline="none"
                      target="_blank"
                    >
                      <Box
                        src={go_icon}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        ГуриевОлег.рф
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      href="https://khvostiki.ru/"
                      underline="none"
                      target="_blank"
                    >
                      <Box
                        src={paw}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        ГПБЖ &laquo;Хвостики&raquo;
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      href="https://www.linkedin.com/in/nikitaguriev/"
                      underline="none"
                      target="_blank"
                    >
                      <Box
                        src={linked_in}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        LinkedIn
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/sfg"
                      underline="none"
                    >
                      <Box
                        src={sfg_icon}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Звуки из игр
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/timer_creator"
                      underline="none"
                    >
                      <Box
                        src={stopwatch}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Создать счетчик
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/vkurse"
                      underline="none"
                    >
                      <Box
                        src={vkurse}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        ВКурсе
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/choose_film"
                      underline="none"
                    >
                      <Box
                        src={popcorn}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Советник фильмов
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/timer"
                      underline="none"
                    >
                      <Box
                        src={stopwatch}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Таймер
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/star_systems"
                      underline="none"
                    >
                      <Box
                        src={solar_system}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Звездные системы
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{textAlign: 'center'}}>
                    <Link
                      component={RouterLink}
                      to="/TES"
                      underline="none"
                    >
                      <Box
                        src={calendar}
                        component="img"
                        sx={{width: '3rem'}}
                        alt="Иконка страницы"
                      />
                      <Typography
                        variant="body2"
                      >
                        Дата в стиле TES
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </ThemeProvider>
      </Box>
    </Grow>
  )
}