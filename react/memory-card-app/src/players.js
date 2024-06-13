import { nanoid } from "nanoid";

import kobe from './images/kobebryant.jpg';
import durant from './images/durant.webp';
import jokic from './images/jokic.avif';
import giannas from './images/giannas.avif';
import shai from './images/shai.avif';
import tatum from './images/tatum.webp';
import towns from './images/towns.avif';
import davis from './images/anthonydavis.jpg';
import sabonis from './images/sabonis.avif';
import brunson from './images/brunson.webp';

const players = [
    {
        id: nanoid(),
        name: 'Kobe Bryant',
        img: kobe,
    },
    {
        id: nanoid(),
        name: 'Kevin Durant',
        img: durant,
    },
    {
        id: nanoid(),
        name: 'Nikola Jokic',
        img: jokic,
    },
    {
        id: nanoid(),
        name: 'Giannas Antetekumpo',
        img: giannas,
    },
    {
        id: nanoid(),
        name: 'Shai Gilgerous-Alexander',
        img: shai,
    },
    {
        id: nanoid(),
        name: 'Jayson Tatum',
        img: tatum,
    },
    {
        id: nanoid(),
        name: 'Karl-Anthony Towns',
        img: towns,
    },
    {
        id: nanoid(),
        name: 'Anthony Davis',
        img: davis,
    },
    {
        id: nanoid(),
        name: 'Domantas Sabonis',
        img: sabonis,
    },
    {
        id: nanoid(),
        name: 'Jalen Brunson',
        img: brunson,
    },
]

export default players;