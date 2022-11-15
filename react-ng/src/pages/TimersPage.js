/**
 * Блок подключения модулей/импортов
 */
import React from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid, Typography, Alert, AlertTitle, Paper, Grow
} from "@mui/material";
import MOMENT from 'moment';
import 'moment/locale/ru';

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

/**
 * Блок настройки MOMENT
 */
MOMENT.locale('ru');
const CURRENT_DATE = MOMENT();

/**
 * Переехал в Краснодар
 */
const MOVED_TO_KRR = [2019, 6, 24, 8, 10];
const MOVED_TO_KRR_DATE = MOMENT(MOVED_TO_KRR);
const YEARS_MK = CURRENT_DATE.diff(MOVED_TO_KRR_DATE, "years");
MOVED_TO_KRR_DATE.add(YEARS_MK, "years");
const MONTHS_MK = CURRENT_DATE.diff(MOVED_TO_KRR_DATE, "months");
MOVED_TO_KRR_DATE.add(MONTHS_MK, "months");
const DAYS_MK = CURRENT_DATE.diff(MOVED_TO_KRR_DATE, "days");
MOVED_TO_KRR_DATE.add(DAYS_MK, "days");
const HOURS_MK = CURRENT_DATE.diff(MOVED_TO_KRR_DATE, "hours");
MOVED_TO_KRR_DATE.add(HOURS_MK, "hours");

/**
 * Не курю времени
 */
const QUIT_SMOKING = [2015, 11, 18, 18, 0];
const QUIT_SMOKING_DATE = MOMENT(QUIT_SMOKING);
const YEARS_QS = CURRENT_DATE.diff(QUIT_SMOKING_DATE, "years");
QUIT_SMOKING_DATE.add(YEARS_QS, "years");
const MONTHS_QS = CURRENT_DATE.diff(QUIT_SMOKING_DATE, "months");
QUIT_SMOKING_DATE.add(MONTHS_QS, "months");
const DAYS_QS = CURRENT_DATE.diff(QUIT_SMOKING_DATE, "days");
QUIT_SMOKING_DATE.add(DAYS_QS, "days");
const HOURS_QS = CURRENT_DATE.diff(QUIT_SMOKING_DATE, "hours");
QUIT_SMOKING_DATE.add(HOURS_QS, "hours");

/**
 * Продали папину машину
 */
const SOLD_FATHER_CAR = [2021, 1, 9, 20, 15];
const SOLD_FATHER_CAR_DATE = MOMENT(SOLD_FATHER_CAR);
const YEARS_SFC = CURRENT_DATE.diff(SOLD_FATHER_CAR_DATE, "years");
SOLD_FATHER_CAR_DATE.add(YEARS_SFC, "years");
const MONTHS_SFC = CURRENT_DATE.diff(SOLD_FATHER_CAR_DATE, "months");
SOLD_FATHER_CAR_DATE.add(MONTHS_SFC, "months");
const DAYS_SFC = CURRENT_DATE.diff(SOLD_FATHER_CAR_DATE, "days");
SOLD_FATHER_CAR_DATE.add(DAYS_SFC, "days");
const HOURS_SFC = CURRENT_DATE.diff(SOLD_FATHER_CAR_DATE, "hours");
SOLD_FATHER_CAR_DATE.add(HOURS_SFC, "hours");

/**
 * Возраст Грэя
 */
const GRAY_AGE = [2011, 11, 10, 13, 0];
const GRAY_AGE_DATE = MOMENT(GRAY_AGE);
const YEARS_GA = CURRENT_DATE.diff(GRAY_AGE_DATE, "years");
GRAY_AGE_DATE.add(YEARS_GA, "years");
const MONTHS_GA = CURRENT_DATE.diff(GRAY_AGE_DATE, "months");
GRAY_AGE_DATE.add(MONTHS_GA, "months");
const DAYS_GA = CURRENT_DATE.diff(GRAY_AGE_DATE, "days");
GRAY_AGE_DATE.add(DAYS_GA, "days");
const HOURS_GA = CURRENT_DATE.diff(GRAY_AGE_DATE, "hours");
GRAY_AGE_DATE.add(HOURS_GA, "hours");

/**
 * Водительский стаж
 */
const DRIVING_EXP = [2011, 7, 12, 11, 0];
const DRIVING_EXP_DATE = MOMENT(DRIVING_EXP);
const YEARS_DE = CURRENT_DATE.diff(DRIVING_EXP_DATE, "years");
DRIVING_EXP_DATE.add(YEARS_DE, "years");
const MONTHS_DE = CURRENT_DATE.diff(DRIVING_EXP_DATE, "months");
DRIVING_EXP_DATE.add(MONTHS_DE, "months");
const DAYS_DE = CURRENT_DATE.diff(DRIVING_EXP_DATE, "days");
DRIVING_EXP_DATE.add(DAYS_DE, "days");
const HOURS_DE = CURRENT_DATE.diff(DRIVING_EXP_DATE, "hours");
DRIVING_EXP_DATE.add(HOURS_DE, "hours");

/**
 * KIA RIO куплен
 */
const CAR_BOUGHT = [2019, 7, 2, 16, 0];
const CAR_BOUGHT_DATE = MOMENT(CAR_BOUGHT);
const YEARS_CB = CURRENT_DATE.diff(CAR_BOUGHT_DATE, "years");
CAR_BOUGHT_DATE.add(YEARS_CB, "years");
const MONTHS_CB = CURRENT_DATE.diff(CAR_BOUGHT_DATE, "months");
CAR_BOUGHT_DATE.add(MONTHS_CB, "months");
const DAYS_CB = CURRENT_DATE.diff(CAR_BOUGHT_DATE, "days");
CAR_BOUGHT_DATE.add(DAYS_CB, "days");
const HOURS_CB = CURRENT_DATE.diff(CAR_BOUGHT_DATE, "hours");
CAR_BOUGHT_DATE.add(HOURS_CB, "hours");

/**
 * SECRET
 */
const LOREM = [2019, 4, 9, 17, 0];
const LOREM_DATE = MOMENT(LOREM);
const YEARS_L = CURRENT_DATE.diff(LOREM_DATE, "years");
LOREM_DATE.add(YEARS_L, "years");
const MONTHS_L = CURRENT_DATE.diff(LOREM_DATE, "months");
LOREM_DATE.add(MONTHS_L, "months");
const DAYS_L = CURRENT_DATE.diff(LOREM_DATE, "days");
LOREM_DATE.add(DAYS_L, "days");
const HOURS_L = CURRENT_DATE.diff(LOREM_DATE, "hours");
LOREM_DATE.add(HOURS_L, "hours");

/**
 * Знакомы с ребятами с Мутабор
 */
const MUTABOR_FRIENDS = [2021, 1, 14, 15, 0];
const MUTABOR_FRIENDS_DATE = MOMENT(MUTABOR_FRIENDS);
const YEARS_MF = CURRENT_DATE.diff(MUTABOR_FRIENDS_DATE, "years");
MUTABOR_FRIENDS_DATE.add(YEARS_MF, "years");
const MONTHS_MF = CURRENT_DATE.diff(MUTABOR_FRIENDS_DATE, "months");
MUTABOR_FRIENDS_DATE.add(MONTHS_MF, "months");
const DAYS_MF = CURRENT_DATE.diff(MUTABOR_FRIENDS_DATE, "days");
MUTABOR_FRIENDS_DATE.add(DAYS_MF, "days");
const HOURS_MF = CURRENT_DATE.diff(MUTABOR_FRIENDS_DATE, "hours");
MUTABOR_FRIENDS_DATE.add(HOURS_MF, "hours");

const TIMERS = [
  {
    id: 0,
    title: 'Переехал в Краснодар',
    years: YEARS_MK,
    months: MONTHS_MK,
    days: DAYS_MK,
    hours: HOURS_MK,
    date: MOVED_TO_KRR
  },
  {
    id: 1,
    title: 'Не курю времени',
    years: YEARS_QS,
    months: MONTHS_QS,
    days: DAYS_QS,
    hours: HOURS_QS,
    date: QUIT_SMOKING
  },
  {
    id: 2,
    title: 'Продали папину машину',
    years: YEARS_SFC,
    months: MONTHS_SFC,
    days: DAYS_SFC,
    hours: HOURS_SFC,
    date: SOLD_FATHER_CAR
  },
  {
    id: 3,
    title: 'Возраст Грэя',
    years: YEARS_GA,
    months: MONTHS_GA,
    days: DAYS_GA,
    hours: HOURS_GA,
    date: GRAY_AGE
  },
  {
    id: 4,
    title: 'Водительский стаж',
    years: YEARS_DE,
    months: MONTHS_DE,
    days: DAYS_DE,
    hours: HOURS_DE,
    date: DRIVING_EXP
  },
  {
    id: 5,
    title: 'KIA RIO куплен',
    years: YEARS_CB,
    months: MONTHS_CB,
    days: DAYS_CB,
    hours: HOURS_CB,
    date: CAR_BOUGHT
  },
  {
    id: 6,
    title: 'Lorem',
    years: YEARS_L,
    months: MONTHS_L,
    days: DAYS_L,
    hours: HOURS_L,
    date: LOREM
  },
  {
    id: 7,
    title: 'Знакомы с ребятами с Мутабор',
    years: YEARS_MF,
    months: MONTHS_MF,
    days: DAYS_MF,
    hours: HOURS_MF,
    date: MUTABOR_FRIENDS
  },
];

export const TimersPage = () => {
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
              >
                {
                  TIMERS.map((el) => (
                    <Grid item xs={12} md={6} key={el.id}>
                      <Box>
                        <Alert severity="info">
                          <AlertTitle>{el.title}</AlertTitle>
                          <Grid
                            container
                            spacing={2}
                            sx={{textAlign: 'center'}}
                          >
                            <Grid item>
                              <Typography
                                variant="body2"
                              >
                                ГОД
                              </Typography>
                              <Typography
                                variant="h6"
                              >
                                {el.years}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                              >
                                МЕС
                              </Typography>
                              <Typography
                                variant="h6"
                              >
                                {el.months}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                              >
                                ДНИ
                              </Typography>
                              <Typography
                                variant="h6"
                              >
                                {el.days}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                              >
                                ЧАС
                              </Typography>
                              <Typography
                                variant="h6"
                              >
                                {el.hours}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            spacing={2}
                            sx={{textAlign: 'center'}}
                          >
                            <Grid item>
                              <Typography
                                variant="caption"
                              >
                                (С {MOMENT(el.date)
                                .format("Do MMMM YYYY, kk:mm:ss")})
                              </Typography>
                            </Grid>
                          </Grid>
                        </Alert>
                      </Box>
                    </Grid>
                  ))
                }
              </Grid>
            </Container>
          </Paper>
        </ThemeProvider>
      </Box>
    </Grow>
  )
}