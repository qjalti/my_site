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
    "https://thumbs.dfs.ivi.ru/storage4/contents/d/c/2ab2bfecb7114ae86bf05ecc1ca2d0.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage6/contents/8/4/de072770ef1bfdade27e4725a0d294.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage33/contents/e/3/948be27973d0ae4a6ad95bdc8c8410.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/b/4/c96afd373cf866815c1134a988a233.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage33/contents/3/c/1091dfcf928a333b4e214c5578f47b.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/f/b/8c7cf4e5a682d19f20d8c34e371aac.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage4/contents/1/5/b4cbfbaf6ab13aaad43df7d09c8be0.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage26/contents/d/b/5a8d2dc5d8a27cce86088e00b7834e.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage37/contents/d/3/40954207be772d972520bd46bcf568.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage29/contents/9/b/4e7988b1f03f6466e51bf7b1fb162a.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage28/contents/1/d/6c853e467edd8c2b28e3be2d17f6e4.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage9/contents/4/9/0f3251dbbeec6386354a271bd09904.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage2/contents/b/c/eb5ac35b269956b9cc8374da033d39.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage9/contents/8/f/be50a9e80525959678f023f349e405.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/c/5/5b209d015b40696307c7a180b43fd6.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/2/b/31969ae047ada429f8ad3ec2cdd07a.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage28/contents/8/d/a3b5987b03970497aaafeb0bc515ab.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/d/4/367141c79008155120fda5f5895824.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage6/contents/5/3/9f4b5bf6ad6b3711cd3aba01a81f21.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage28/contents/b/8/f871134cfcf83c108fc16464a0e0e2.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/1/c/8af0b8e06189b14588623e5db5c0ce.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/7/d/726a60465521a979da1e41c3a01815.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage38/contents/e/7/ea9fad62cb69fb5541f54c5ffa843a.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage38/contents/3/4/8de8e9e7a333a40118e9851b72ece2.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage4/contents/b/a/034e4b09d930ac5cd8ecf91d93c727.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage9/contents/3/2/9e08c39633a521fdba5712e4d21c64.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/a/0/24c373730abbad005d8d11f73efd45.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage3/contents/7/9/47d60de674afb89b3b7dda72ff65c3.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage6/contents/d/3/ef5e7c52feada6e70a16dbcd2675a5.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage33/contents/4/2/e9fe87e35e69c0bd699c3092745330.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/c/5/8cb72af79fb33d2ce05d75ea91667c.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/b/e/467c8b79b924fd2d3c16ec41d0fd44.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage30/contents/7/9/9eef76901857e4e542cecda800da64.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage26/contents/5/0/6bf08105c5c1f500ae6929fdac77bf.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage39/contents/0/c/10b9b1637315b5fa900933193d4139.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage38/contents/a/6/a1e27f96051ae1b283937371f41611.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/4/1/aa621d08b42703968c83b7aca21279.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage32/contents/2/e/a524e9758e5831302857f6a5bb5b10.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage4/contents/c/e/244648e5903dad5ca58564be94fa89.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage28/contents/4/9/ea0f870488ae590294b24e21e49476.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage3/contents/6/f/e70f7e3062d95ad261a9c3e05dedf1.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage38/contents/9/0/71ac19c37e7098ec76e3dc7083cf86.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage38/contents/e/1/055f95ea6e2f7d0b808023026defac.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage30/contents/5/4/68254f491b7f5afd12723f5d220c72.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/b/a/dbb37f0f4fddb2327e3034f789bf2a.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage3/contents/3/a/7f254ecfe0d8fb66d3611dcea21f79.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage26/contents/5/6/8eadf34aa7b0effc607fb56e4b92ec.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage4/contents/f/c/cd396a03d248cf9b95eeb0fb96b8ab.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage23/contents/c/4/54f81c11d879e102ed0e4742e21691.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage30/contents/4/f/cf3765fff435d8f27c00df83554f44.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage2/contents/8/5/a90114332c701916efcd9aa52d1ef3.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/b/5/287530dd9b13c6f595efa7bb1192d6.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage38/contents/9/6/1b512665bf2080c17fede7bdf18567.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage8/contents/c/5/9ddf07deec4cc51bb4e67e93135561.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage5/contents/a/c/c6f4affe7a0143fcb012b2ffab74ea.jpg/234x360/",
    "https://thumbs.dfs.ivi.ru/storage15/contents/f/2/1633360ed47e8be1f92a6e082912ae.jpg/234x360/",
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