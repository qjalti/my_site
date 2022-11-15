/**
 * Блок подключения модулей/импортов
 */
import React from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails, Grow, Button,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * DotA 2
 */
import dota_img from "../files/sfg/dota/dota.png";
import dota_01 from "../files/sfg/dota/001.mp3";
import dota_02 from "../files/sfg/dota/002.mp3";
import dota_03 from "../files/sfg/dota/003.mp3";
import dota_04 from "../files/sfg/dota/004.mp3";
import dota_05 from "../files/sfg/dota/005.mp3";
import dota_06 from "../files/sfg/dota/006.mp3";

/**
 * WoW
 */
import wow_img from "../files/sfg/wow/worldofwarcraft.png";
import wow_01 from "../files/sfg/wow/001.mp3";
import wow_02 from "../files/sfg/wow/002.mp3";

/**
 * Marvel
 */
import marvel_img from "../files/sfg/marvel/marvel.png";
import marvel_01 from "../files/sfg/marvel/001.mp3";
import marvel_02 from "../files/sfg/marvel/002.mp3";
import marvel_03 from "../files/sfg/marvel/003.mp3";
import marvel_04 from "../files/sfg/marvel/004.mp3";
import marvel_05 from "../files/sfg/marvel/005.mp3";
import marvel_06 from "../files/sfg/marvel/006.mp3";

/**
 * Lord Dremora (TES V: Skyrim)
 */
import tes_dremora_img from "../files/sfg/dremora/dremora.png";
import tes_dremora_01 from "../files/sfg/dremora/001.wav";
import tes_dremora_02 from "../files/sfg/dremora/002.wav";
import tes_dremora_03 from "../files/sfg/dremora/003.wav";
import tes_dremora_04 from "../files/sfg/dremora/004.wav";

/**
 * Известные персонажи TES 5: Skyrim
 */
import tes_famous_img from "../files/sfg/famous_characters/skyrim.png";
import tes_famous_01 from "../files/sfg/famous_characters/kodlak_sovngarde.mp3";

/**
 * Профессор Круглов (S.T.A.L.K.E.R.)
 */
import stalker_kruglov_img from "../files/sfg/kruglov/kruglov.png";
import stalker_kruglov_01 from "../files/sfg/kruglov/001.mp3";
import stalker_kruglov_02 from "../files/sfg/kruglov/002.mp3";

/**
 * Бандит (S.T.A.L.K.E.R.)
 */
import stalker_bandit_img from "../files/sfg/bandit/bandit.png";
import stalker_bandit_01 from "../files/sfg/bandit/001.mp3";

/**
 * О-Сознание (S.T.A.L.K.E.R.)
 */
import stalker_osoznanie_img from "../files/sfg/o_soznanie/o_soznanie.png";
import stalker_osoznanie_01 from "../files/sfg/o_soznanie/001.mp3";
import stalker_osoznanie_02 from "../files/sfg/o_soznanie/002.mp3";
import stalker_osoznanie_03 from "../files/sfg/o_soznanie/003.mp3";
import stalker_osoznanie_04 from "../files/sfg/o_soznanie/004.mp3";
import stalker_osoznanie_05 from "../files/sfg/o_soznanie/005.mp3";
import stalker_osoznanie_06 from "../files/sfg/o_soznanie/006.mp3";
import stalker_osoznanie_07 from "../files/sfg/o_soznanie/007.mp3";
import stalker_osoznanie_08 from "../files/sfg/o_soznanie/008.mp3";
import stalker_osoznanie_09 from "../files/sfg/o_soznanie/009.mp3";
import stalker_osoznanie_010 from "../files/sfg/o_soznanie/010.mp3";

/**
 * Нежить (Warcraft 3)
 */
import warcraft_undead_img from "../files/sfg/warcraft_3_undead/undead.png";
import warcraft_undead_01 from "../files/sfg/warcraft_3_undead/001.wav";
import warcraft_undead_02 from "../files/sfg/warcraft_3_undead/002.wav";
import warcraft_undead_03 from "../files/sfg/warcraft_3_undead/003.wav";
import warcraft_undead_04 from "../files/sfg/warcraft_3_undead/004.wav";
import warcraft_undead_05 from "../files/sfg/warcraft_3_undead/005.wav";
import warcraft_undead_06 from "../files/sfg/warcraft_3_undead/006.wav";
import warcraft_undead_07 from "../files/sfg/warcraft_3_undead/007.wav";
import warcraft_undead_08 from "../files/sfg/warcraft_3_undead/008.wav";
import warcraft_undead_09 from "../files/sfg/warcraft_3_undead/009.wav";
import warcraft_undead_010 from "../files/sfg/warcraft_3_undead/010.wav";
import warcraft_undead_011 from "../files/sfg/warcraft_3_undead/011.wav";

/**
 * Орда (Warcraft 3)
 */
import warcraft_horde_img from "../files/sfg/warcraft_3_horde/horde.png";
import warcraft_horde_01 from "../files/sfg/warcraft_3_horde/001.wav";
import warcraft_horde_02 from "../files/sfg/warcraft_3_horde/002.wav";
import warcraft_horde_03 from "../files/sfg/warcraft_3_horde/003.wav";
import warcraft_horde_04 from "../files/sfg/warcraft_3_horde/004.wav";
import warcraft_horde_05 from "../files/sfg/warcraft_3_horde/005.wav";
import warcraft_horde_06 from "../files/sfg/warcraft_3_horde/006.wav";
import warcraft_horde_07 from "../files/sfg/warcraft_3_horde/007.wav";
import warcraft_horde_08 from "../files/sfg/warcraft_3_horde/008.wav";

/**
 * Тралл (Warcraft 3)
 */
import warcraft_thrall_img from "../files/sfg/thrall/thrall.png";
import warcraft_thrall_01 from "../files/sfg/thrall/001.wav";
import warcraft_thrall_02 from "../files/sfg/thrall/002.wav";
import warcraft_thrall_03 from "../files/sfg/thrall/003.wav";

/**
 * Warcraft 3. Разное
 */
import warcraft_other_img from "../files/sfg/warcraft_3_other/warcraft3.png";
import warcraft_other_01
  from "../files/sfg/warcraft_3_other/TheHornOfCenarius.wav";
import warcraft_other_02
  from "../files/sfg/warcraft_3_other/FrostmourneChant1.wav";
import warcraft_other_03
  from "../files/sfg/warcraft_3_other/KnightNoLumber1.wav";
import warcraft_other_04
  from "../files/sfg/warcraft_3_other/NecromancerNoGold1.wav";
import warcraft_other_05
  from "../files/sfg/warcraft_3_other/NecromancerNoFood1.wav";
import warcraft_other_06 from "../files/sfg/warcraft_3_other/SlowTarget.wav";
import warcraft_other_07 from "../files/sfg/warcraft_3_other/Tomes.wav";
import warcraft_other_08
  from "../files/sfg/warcraft_3_other/BloodlustTarget.wav";
import warcraft_other_09 from "../files/sfg/warcraft_3_other/MirrorImage.wav";
import warcraft_other_010
  from "../files/sfg/warcraft_3_other/Levelupcaster.wav";
import warcraft_other_011
  from "../files/sfg/warcraft_3_other/AcolyteMining.wav";
import warcraft_other_012 from "../files/sfg/warcraft_3_other/SleepBirth1.wav";

/**
 * Калеб (Blood)
 */
import caleb_img from "../files/sfg/caleb/caleb.png"
import caleb_01 from "../files/sfg/caleb/llmtic.mp3"
import caleb_02 from "../files/sfg/caleb/imstt.mp3"

const SOUNDS = [
  {
    category_name: 'DotA 2',
    category_image: dota_img,
    sounds: [
      {
        src: dota_01,
        text: 'Крик Урсы (Overpower)',
      },
      {
        src: dota_02,
        text: 'Крик Урсы (Enrage)',
      },
      {
        src: dota_03,
        text: 'Legion Commander (Press the Attack)',
      },
      {
        src: dota_04,
        text: 'Spirit Breaker (Charge of Darkness)',
      },
      {
        src: dota_05,
        text: 'Spirit Breaker (Greater Bash)',
      },
      {
        src: dota_06,
        text: 'Reincarnation (Aegis of the Immortal)',
      },
    ]
  },
  {
    category_name: 'World of Warcraft',
    category_image: wow_img,
    sounds: [
      {
        src: wow_01,
        text: '...Артас...',
      },
      {
        src: wow_02,
        text: 'Пробуждение Короля-лича',
      },
    ]
  },
  {
    category_name: 'Marvel',
    category_image: marvel_img,
    sounds: [
      {
        src: marvel_01,
        text: 'Использование камня времени (Доктор Стрэндж)',
      },
      {
        src: marvel_02,
        text: 'Использование камня времени (Танос)',
      },
      {
        src: marvel_03,
        text: 'Кручённый бросок гром-секиры (Тор)',
      },
      {
        src: marvel_04,
        text: 'Использование камня реальности (Танос)',
      },
      {
        src: marvel_05,
        text: 'Использование камня пространства (Танос)',
      },
      {
        src: marvel_06,
        text: '«Роковая ошибка...» (Танос)',
      },
    ]
  },
  {
    category_name: 'Лорд Дремора (TES V: Skyrim)',
    category_image: tes_dremora_img,
    sounds: [
      {
        src: tes_dremora_01,
        text: 'Вот ты где, слабак!',
      },
      {
        src: tes_dremora_02,
        text: 'Я чую слабость!',
      },
      {
        src: tes_dremora_03,
        text: 'Ты слабак, смертный червь!',
      },
      {
        src: tes_dremora_04,
        text: 'Ты мне не ровня!',
      },
    ]
  },
  {
    category_name: 'Известные персонажи (TES 5: Skyrim)',
    category_image: tes_famous_img,
    sounds: [
      {
        src: tes_famous_01,
        text: 'Иногда мне снятся туманы Совнгарда... (Кодлак Белая Грива)',
      },
    ]
  },
  {
    category_name: 'Профессор Круглов (S.T.A.L.K.E.R.)',
    category_image: stalker_kruglov_img,
    sounds: [
      {
        src: stalker_kruglov_01,
        text: 'Держите меня семеро!',
      },
      {
        src: stalker_kruglov_02,
        text: 'Ура!',
      },
    ]
  },
  {
    category_name: 'Бандит (S.T.A.L.K.E.R.)',
    category_image: stalker_bandit_img,
    sounds: [
      {
        src: stalker_bandit_01,
        text: 'Мля, я маслину поймал!',
      },
    ]
  },
  {
    category_name: 'О-Сознание (S.T.A.L.K.E.R.)',
    category_image: stalker_osoznanie_img,
    sounds: [
      {
        src: stalker_osoznanie_01,
        text: 'Нет, мы здесь не причём...',
      },
      {
        src: stalker_osoznanie_02,
        text: 'Это транспорт, на котором...',
      },
      {
        src: stalker_osoznanie_03,
        text: 'Здравствуй, Стрелок....',
      },
      {
        src: stalker_osoznanie_04,
        text: 'Выбор за тобой, Стрелок.',
      },
      {
        src: stalker_osoznanie_05,
        text: 'S.T.A.L.K.E.R. — это название программы...',
      },
      {
        src: stalker_osoznanie_06,
        text: 'Ты выпавший из механизма...',
      },
      {
        src: stalker_osoznanie_07,
        text: 'Зона — это результат...',
      },
      {
        src: stalker_osoznanie_08,
        text: 'Что будет дальше зависит от тебя...',
      },
      {
        src: stalker_osoznanie_09,
        text: 'Мы «О-Сознание»...',
      },
      {
        src: stalker_osoznanie_010,
        text: 'Чернобыльская АЭС была...',
      },
    ]
  },
  {
    category_name: 'Нежить (Warcraft 3)',
    category_image: warcraft_undead_img,
    sounds: [
      {
        src: warcraft_undead_01,
        text: 'Я поклялся служить Нер\'Зулу',
      },
      {
        src: warcraft_undead_02,
        text: 'Я воплощение тьмы!',
      },
      {
        src: warcraft_undead_03,
        text: 'Как глупо было верить в свет!',
      },
      {
        src: warcraft_undead_04,
        text: 'Говори, глупец!',
      },
      {
        src: warcraft_undead_05,
        text: 'Никто не смеет мне приказывать!',
      },
      {
        src: warcraft_undead_06,
        text: 'Фростморн жаждет крови!',
      },
      {
        src: warcraft_undead_07,
        text: 'Фростморн!!!',
      },
      {
        src: warcraft_undead_08,
        text: 'Кто тяжело работает — тот тяжело отдыхает',
      },
      {
        src: warcraft_undead_09,
        text: 'Спящий пробудился',
      },
      {
        src: warcraft_undead_010,
        text: 'Вы звали меня?',
      },
      {
        src: warcraft_undead_011,
        text: 'Спокойсвие, только спокойствие... Сейчас я Вас настигну',
      },
    ]
  },
  {
    category_name: 'Орда (Warcraft 3)',
    category_image: warcraft_horde_img,
    sounds: [
      {
        src: warcraft_horde_01,
        text: 'Хм... Надвигается буря...',
      },
      {
        src: warcraft_horde_02,
        text: 'Ноют старые кости...',
      },
      {
        src: warcraft_horde_03,
        text: 'Смелее, мой юный друг!',
      },
      {
        src: warcraft_horde_04,
        text: 'С нами мать Земля!',
      },
      {
        src: warcraft_horde_05,
        text: 'Моя жизнь принадлежит Орде!',
      },
      {
        src: warcraft_horde_06,
        text: 'Зул\'Джин будет отмщен!',
      },
      {
        src: warcraft_horde_07,
        text: 'Да хранят меня мои предки!',
      },
      {
        src: warcraft_horde_08,
        text: 'Вольчя тропа ждёт!',
      },
    ]
  },
  {
    category_name: 'Тралл (Warcraft 3)',
    category_image: warcraft_thrall_img,
    sounds: [
      {
        src: warcraft_thrall_01,
        text: 'Духи не знают усталости',
      },
      {
        src: warcraft_thrall_02,
        text: 'Я вождь!',
      },
      {
        src: warcraft_thrall_03,
        text: 'Лок\'тар огар!',
      },
    ]
  },
  {
    category_name: 'Warcraft 3. Разное',
    category_image: warcraft_other_img,
    sounds: [
      {
        src: warcraft_other_01,
        text: 'Рог Кенария',
      },
      {
        src: warcraft_other_02,
        text: 'Нашептывание Фростморна',
      },
      {
        src: warcraft_other_03,
        text: 'Нехватает дерева',
      },
      {
        src: warcraft_other_04,
        text: 'Нужно больше золота',
      },
      {
        src: warcraft_other_05,
        text: 'Нужно построить зиккурат',
      },
      {
        src: warcraft_other_06,
        text: 'Замедление',
      },
      {
        src: warcraft_other_07,
        text: 'Поднятие тома',
      },
      {
        src: warcraft_other_08,
        text: 'Кровожадность',
      },
      {
        src: warcraft_other_09,
        text: 'Иллюзия',
      },
      {
        src: warcraft_other_010,
        text: 'Повышение уровня',
      },
      {
        src: warcraft_other_011,
        text: 'Возведение здания',
      },
      {
        src: warcraft_other_012,
        text: 'Усыпление',
      },
    ]
  },
  {
    category_name: 'Калеб (Blood)',
    category_image: caleb_img,
    sounds: [
      {
        src: caleb_01,
        text: 'Looks like my train\'s is come in...',
      },
      {
        src: caleb_02,
        text: 'I must stop this train!',
      },
    ]
  },
];

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

export const SFGPage = () => {
  return (
    <Grow
      in
    >
      <Box sx={{flexGrow: 1}}>
        <ThemeProvider theme={darkTheme}>
          <Container sx={{textAlign: 'center'}}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                {SOUNDS.map((sounds) => (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                      >
                        <Typography>{sounds.category_name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          component="img"
                          src={sounds.category_image}
                          sx={{mb: 2}}
                        />
                        {sounds.sounds.map((sound) => (
                          <>
                            <Typography gutterBottom>
                              {sound.text}
                            </Typography>
                            <Box
                              component="audio"
                              src={sound.src}
                              controls
                            />
                          </>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  )
                )}
                <Button
                  sx={{mt: 2}}
                  href="https://t.me/NikitaGuriev"
                  target="_blank"
                >
                  Предложить добавить новые звуки
                </Button>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </Box>
    </Grow>
  )
}