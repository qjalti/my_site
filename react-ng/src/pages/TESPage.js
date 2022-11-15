/**
 * Блок подключения модулей/импортов
 */
import React from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid, Typography, Paper, Grow
} from "@mui/material";
import MOMENT from 'moment';
import 'moment/locale/ru';

/**
 * Блок настройки MOMENT
 */
MOMENT.locale('ru');
const CURRENT_DATE = MOMENT();

export const TESPage = () => {
  /**
   * Воскресенье — начало недели
   */
  const TES_DAYS = [
    'сандас',
    'морндас',
    'тирдас',
    'миддас',
    'турдас',
    'фредас',
    'лордас',
  ];

  const TES_MONTS = [
    'утренней звезды',
    'восхода солнца',
    'первого зерна',
    'руки дождя',
    'второго зерна',
    'середины года',
    'высокого солнца',
    'последнего зерна',
    'огня очага',
    'начала морозов',
    'заката солнца',
    'вечерней звезды',
  ];

  const CURRENT_DAY_NATURE = CURRENT_DATE.day();
  const CURRENT_DATE_NATURE = CURRENT_DATE.date();
  const CURRENT_MONTH_NATURE = CURRENT_DATE.month();
  const CURRENT_MONTH_TES = TES_MONTS[CURRENT_MONTH_NATURE];
  const CURRENT_DAY_TES = TES_DAYS[CURRENT_DAY_NATURE];
  const CURRENT_DATE_TES = `${CURRENT_DAY_TES}, ${CURRENT_DATE_NATURE} ${CURRENT_MONTH_TES}`;
  const CURRENT_DATE_FORMATTED = CURRENT_DATE.format('dddd, D MMMM');

  return (
    <Grow
      in
    >
      <Box sx={{flexGrow: 1}}>
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
              <Grid item xs={12} md={6}>
                <Box
                  sx={{textAlign: 'center'}}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {CURRENT_DATE_FORMATTED}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {CURRENT_DATE_TES}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Box>
    </Grow>
  )
}