// https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers

// this code is to run in the above website to generate the list of codes

import {globals} from "./globals";
import {isNotUndefined} from "./is";

interface GenericIsoLangCode {
    readonly code: number;
    readonly id: string;
    readonly name: string;
}

function queryIsoLangCodes(): readonly GenericIsoLangCode[] {
    return [...document.querySelectorAll("tr")]
        .map(e => [...e.children]
            .map(e => typeof e === "string" ? e : e instanceof HTMLElement ? e.innerText : null)
            .filter((e: string | null): e is string => e !== null),
        )
        .map(([value, id, name]) => ({value, id, name}))
        .filter(e => e.value.match(/0x([0-9a-f]{4})/))
        .map(({value, id, name}) => ({code: parseInt(value), id, name}));
}

function isoLangCodesByKey<K extends keyof GenericIsoLangCode>(codes: readonly GenericIsoLangCode[],
                                                               key: K): {readonly [key: string]: GenericIsoLangCode} {
    return codes.reduce((obj, code) => {
        obj[code[key]] = code;
        return obj;
    }, {} as {[key: string]: GenericIsoLangCode});
}

function createIsoLangCodes() {
    const codes = queryIsoLangCodes();
    const byCode = isoLangCodesByKey(codes, "code");
    const byId = isoLangCodesByKey(codes, "id");
    const byName = isoLangCodesByKey(codes, "name");
    return {byCode, byId, byName};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isoLangCodesString() {
    return JSON.stringify(createIsoLangCodes(), null, 4);
}

export const iso_lang_codes = {
    "byCode": {
        "1": {
            "code": 1,
            "id": "ar",
            "name": "Arabic"
        },
        "2": {
            "code": 2,
            "id": "bg",
            "name": "Bulgarian"
        },
        "3": {
            "code": 3,
            "id": "ca",
            "name": "Catalan"
        },
        "4": {
            "code": 4,
            "id": "zh-Hans",
            "name": "Chinese, Han (Simplified variant)"
        },
        "5": {
            "code": 5,
            "id": "cs",
            "name": "Czech"
        },
        "6": {
            "code": 6,
            "id": "da",
            "name": "Danish"
        },
        "7": {
            "code": 7,
            "id": "de",
            "name": "German"
        },
        "8": {
            "code": 8,
            "id": "el",
            "name": "Modern Greek (1453 and later)"
        },
        "9": {
            "code": 9,
            "id": "en",
            "name": "English"
        },
        "10": {
            "code": 10,
            "id": "es",
            "name": "Spanish"
        },
        "11": {
            "code": 11,
            "id": "fi",
            "name": "Finnish"
        },
        "12": {
            "code": 12,
            "id": "fr",
            "name": "French"
        },
        "13": {
            "code": 13,
            "id": "he",
            "name": "Hebrew"
        },
        "14": {
            "code": 14,
            "id": "hu",
            "name": "Hungarian"
        },
        "15": {
            "code": 15,
            "id": "is",
            "name": "Icelandic"
        },
        "16": {
            "code": 16,
            "id": "it",
            "name": "Italian"
        },
        "17": {
            "code": 17,
            "id": "ja",
            "name": "Japanese"
        },
        "18": {
            "code": 18,
            "id": "ko",
            "name": "Korean"
        },
        "19": {
            "code": 19,
            "id": "nl",
            "name": "Dutch"
        },
        "20": {
            "code": 20,
            "id": "no",
            "name": "Norwegian"
        },
        "21": {
            "code": 21,
            "id": "pl",
            "name": "Polish"
        },
        "22": {
            "code": 22,
            "id": "pt",
            "name": "Portuguese"
        },
        "23": {
            "code": 23,
            "id": "rm",
            "name": "Romansh"
        },
        "24": {
            "code": 24,
            "id": "ro",
            "name": "Romanian"
        },
        "25": {
            "code": 25,
            "id": "ru",
            "name": "Russian"
        },
        "26": {
            "code": 26,
            "id": "hr",
            "name": "Croatian"
        },
        "27": {
            "code": 27,
            "id": "sk",
            "name": "Slovak"
        },
        "28": {
            "code": 28,
            "id": "sq",
            "name": "Albanian"
        },
        "29": {
            "code": 29,
            "id": "sv",
            "name": "Swedish"
        },
        "30": {
            "code": 30,
            "id": "th",
            "name": "Thai"
        },
        "31": {
            "code": 31,
            "id": "tr",
            "name": "Turkish"
        },
        "32": {
            "code": 32,
            "id": "ur",
            "name": "Urdu"
        },
        "33": {
            "code": 33,
            "id": "id",
            "name": "Indonesian"
        },
        "34": {
            "code": 34,
            "id": "uk",
            "name": "Ukrainian"
        },
        "35": {
            "code": 35,
            "id": "be",
            "name": "Belarusian"
        },
        "36": {
            "code": 36,
            "id": "sl",
            "name": "Slovenian"
        },
        "37": {
            "code": 37,
            "id": "et",
            "name": "Estonian"
        },
        "38": {
            "code": 38,
            "id": "lv",
            "name": "Latvian"
        },
        "39": {
            "code": 39,
            "id": "lt",
            "name": "Lithuanian"
        },
        "40": {
            "code": 40,
            "id": "tg",
            "name": "Tajik"
        },
        "41": {
            "code": 41,
            "id": "fa",
            "name": "Persian"
        },
        "42": {
            "code": 42,
            "id": "vi",
            "name": "Vietnamese"
        },
        "43": {
            "code": 43,
            "id": "hy",
            "name": "Armenian"
        },
        "44": {
            "code": 44,
            "id": "az",
            "name": "Azerbaijani"
        },
        "45": {
            "code": 45,
            "id": "eu",
            "name": "Basque"
        },
        "46": {
            "code": 46,
            "id": "hsb",
            "name": "Upper Sorbian"
        },
        "47": {
            "code": 47,
            "id": "mk",
            "name": "Macedonian"
        },
        "50": {
            "code": 50,
            "id": "tn",
            "name": "Tswana"
        },
        "52": {
            "code": 52,
            "id": "xh",
            "name": "Xhosa"
        },
        "53": {
            "code": 53,
            "id": "zu",
            "name": "Zulu"
        },
        "54": {
            "code": 54,
            "id": "af",
            "name": "Afrikaans"
        },
        "55": {
            "code": 55,
            "id": "ka",
            "name": "Georgian"
        },
        "56": {
            "code": 56,
            "id": "fo",
            "name": "Faroese"
        },
        "57": {
            "code": 57,
            "id": "hi",
            "name": "Hindi"
        },
        "58": {
            "code": 58,
            "id": "mt",
            "name": "Maltese"
        },
        "59": {
            "code": 59,
            "id": "se",
            "name": "Northern Sami"
        },
        "60": {
            "code": 60,
            "id": "ga",
            "name": "Irish"
        },
        "62": {
            "code": 62,
            "id": "ms",
            "name": "Malay (macrolanguage)"
        },
        "63": {
            "code": 63,
            "id": "kk",
            "name": "Kazakh"
        },
        "64": {
            "code": 64,
            "id": "ky",
            "name": "Kirghiz"
        },
        "65": {
            "code": 65,
            "id": "sw",
            "name": "Swahili (macrolanguage)"
        },
        "66": {
            "code": 66,
            "id": "tk",
            "name": "Turkmen"
        },
        "67": {
            "code": 67,
            "id": "uz",
            "name": "Uzbek"
        },
        "68": {
            "code": 68,
            "id": "tt",
            "name": "Tatar"
        },
        "69": {
            "code": 69,
            "id": "bn",
            "name": "Bengali"
        },
        "70": {
            "code": 70,
            "id": "pa",
            "name": "Panjabi"
        },
        "71": {
            "code": 71,
            "id": "gu",
            "name": "Gujarati"
        },
        "72": {
            "code": 72,
            "id": "or",
            "name": "Oriya"
        },
        "73": {
            "code": 73,
            "id": "ta",
            "name": "Tamil"
        },
        "74": {
            "code": 74,
            "id": "te",
            "name": "Telugu"
        },
        "75": {
            "code": 75,
            "id": "kn",
            "name": "Kannada"
        },
        "76": {
            "code": 76,
            "id": "ml",
            "name": "Malayalam"
        },
        "77": {
            "code": 77,
            "id": "as",
            "name": "Assamese"
        },
        "78": {
            "code": 78,
            "id": "mr",
            "name": "Marathi"
        },
        "79": {
            "code": 79,
            "id": "sa",
            "name": "Sanskrit"
        },
        "80": {
            "code": 80,
            "id": "mn",
            "name": "Mongolian"
        },
        "81": {
            "code": 81,
            "id": "bo",
            "name": "Tibetan"
        },
        "82": {
            "code": 82,
            "id": "cy",
            "name": "Welsh"
        },
        "83": {
            "code": 83,
            "id": "km",
            "name": "Central Khmer"
        },
        "84": {
            "code": 84,
            "id": "lo",
            "name": "Lao"
        },
        "86": {
            "code": 86,
            "id": "gl",
            "name": "Galician"
        },
        "87": {
            "code": 87,
            "id": "kok",
            "name": "Konkani (macrolanguage)"
        },
        "90": {
            "code": 90,
            "id": "syr",
            "name": "Syriac"
        },
        "91": {
            "code": 91,
            "id": "si",
            "name": "Sinhala"
        },
        "93": {
            "code": 93,
            "id": "iu",
            "name": "Inuktitut"
        },
        "94": {
            "code": 94,
            "id": "am",
            "name": "Amharic"
        },
        "95": {
            "code": 95,
            "id": "tzm",
            "name": "Central Atlas Tamazight"
        },
        "97": {
            "code": 97,
            "id": "ne",
            "name": "Nepali"
        },
        "98": {
            "code": 98,
            "id": "fy",
            "name": "Western Frisian"
        },
        "99": {
            "code": 99,
            "id": "ps",
            "name": "Pushto"
        },
        "100": {
            "code": 100,
            "id": "fil",
            "name": "Filipino"
        },
        "101": {
            "code": 101,
            "id": "dv",
            "name": "Dhivehi"
        },
        "104": {
            "code": 104,
            "id": "ha",
            "name": "Hausa"
        },
        "106": {
            "code": 106,
            "id": "yo",
            "name": "Yoruba"
        },
        "107": {
            "code": 107,
            "id": "quz",
            "name": "Cusco Quechua"
        },
        "108": {
            "code": 108,
            "id": "nso",
            "name": "Pedi"
        },
        "109": {
            "code": 109,
            "id": "ba",
            "name": "Bashkir"
        },
        "110": {
            "code": 110,
            "id": "lb",
            "name": "Luxembourgish"
        },
        "111": {
            "code": 111,
            "id": "kl",
            "name": "Kalaallisut"
        },
        "112": {
            "code": 112,
            "id": "ig",
            "name": "Igbo"
        },
        "120": {
            "code": 120,
            "id": "ii",
            "name": "Sichuan Yi"
        },
        "122": {
            "code": 122,
            "id": "arn",
            "name": "Mapudungun"
        },
        "124": {
            "code": 124,
            "id": "moh",
            "name": "Mohawk"
        },
        "126": {
            "code": 126,
            "id": "br",
            "name": "Breton"
        },
        "128": {
            "code": 128,
            "id": "ug",
            "name": "Uighur"
        },
        "129": {
            "code": 129,
            "id": "mi",
            "name": "Maori"
        },
        "130": {
            "code": 130,
            "id": "oc",
            "name": "Occitan (post 1500)"
        },
        "131": {
            "code": 131,
            "id": "co",
            "name": "Corsican"
        },
        "132": {
            "code": 132,
            "id": "gsw",
            "name": "Swiss German"
        },
        "133": {
            "code": 133,
            "id": "sah",
            "name": "Yakut"
        },
        "134": {
            "code": 134,
            "id": "qut",
            "name": "Guatemala"
        },
        "135": {
            "code": 135,
            "id": "rw",
            "name": "Kinyarwanda"
        },
        "136": {
            "code": 136,
            "id": "wo",
            "name": "Wolof"
        },
        "140": {
            "code": 140,
            "id": "prs",
            "name": "Dari"
        },
        "145": {
            "code": 145,
            "id": "gd",
            "name": "Scottish Gaelic"
        },
        "1025": {
            "code": 1025,
            "id": "ar-SA",
            "name": "Arabic, Saudi Arabia"
        },
        "1026": {
            "code": 1026,
            "id": "bg-BG",
            "name": "Bulgarian, Bulgaria"
        },
        "1027": {
            "code": 1027,
            "id": "ca-ES",
            "name": "Catalan, Spain"
        },
        "1028": {
            "code": 1028,
            "id": "zh-TW",
            "name": "Chinese, Taiwan, Province of China"
        },
        "1029": {
            "code": 1029,
            "id": "cs-CZ",
            "name": "Czech, Czech Republic"
        },
        "1030": {
            "code": 1030,
            "id": "da-DK",
            "name": "Danish, Denmark"
        },
        "1031": {
            "code": 1031,
            "id": "de-DE",
            "name": "German, Germany"
        },
        "1032": {
            "code": 1032,
            "id": "el-GR",
            "name": "Modern Greek (1453-), Greece"
        },
        "1033": {
            "code": 1033,
            "id": "en-US",
            "name": "English, United States"
        },
        "1034": {
            "code": 1034,
            "id": "es-ES_tradnl",
            "name": "Spanish"
        },
        "1035": {
            "code": 1035,
            "id": "fi-FI",
            "name": "Finnish, Finland"
        },
        "1036": {
            "code": 1036,
            "id": "fr-FR",
            "name": "French, France"
        },
        "1037": {
            "code": 1037,
            "id": "he-IL",
            "name": "Hebrew, Israel"
        },
        "1038": {
            "code": 1038,
            "id": "hu-HU",
            "name": "Hungarian, Hungary"
        },
        "1039": {
            "code": 1039,
            "id": "is-IS",
            "name": "Icelandic, Iceland"
        },
        "1040": {
            "code": 1040,
            "id": "it-IT",
            "name": "Italian, Italy"
        },
        "1041": {
            "code": 1041,
            "id": "ja-JP",
            "name": "Japanese, Japan"
        },
        "1042": {
            "code": 1042,
            "id": "ko-KR",
            "name": "Korean, Republic of Korea"
        },
        "1043": {
            "code": 1043,
            "id": "nl-NL",
            "name": "Dutch, Netherlands"
        },
        "1044": {
            "code": 1044,
            "id": "nb-NO",
            "name": "Norwegian Bokmål, Norway"
        },
        "1045": {
            "code": 1045,
            "id": "pl-PL",
            "name": "Polish, Poland"
        },
        "1046": {
            "code": 1046,
            "id": "pt-BR",
            "name": "Portuguese, Brazil"
        },
        "1047": {
            "code": 1047,
            "id": "rm-CH",
            "name": "Romansh, Switzerland"
        },
        "1048": {
            "code": 1048,
            "id": "ro-RO",
            "name": "Romanian, Romania"
        },
        "1049": {
            "code": 1049,
            "id": "ru-RU",
            "name": "Russian, Russian Federation"
        },
        "1050": {
            "code": 1050,
            "id": "hr-HR",
            "name": "Croatian, Croatia"
        },
        "1051": {
            "code": 1051,
            "id": "sk-SK",
            "name": "Slovak, Slovakia"
        },
        "1052": {
            "code": 1052,
            "id": "sq-AL",
            "name": "Albanian, Albania"
        },
        "1053": {
            "code": 1053,
            "id": "sv-SE",
            "name": "Swedish, Sweden"
        },
        "1054": {
            "code": 1054,
            "id": "th-TH",
            "name": "Thai, Thailand"
        },
        "1055": {
            "code": 1055,
            "id": "tr-TR",
            "name": "Turkish, Turkey"
        },
        "1056": {
            "code": 1056,
            "id": "ur-PK",
            "name": "Urdu, Pakistan"
        },
        "1057": {
            "code": 1057,
            "id": "id-ID",
            "name": "Indonesian, Indonesia"
        },
        "1058": {
            "code": 1058,
            "id": "uk-UA",
            "name": "Ukrainian, Ukraine"
        },
        "1059": {
            "code": 1059,
            "id": "be-BY",
            "name": "Belarusian, Belarus"
        },
        "1060": {
            "code": 1060,
            "id": "sl-SI",
            "name": "Slovenian, Slovenia"
        },
        "1061": {
            "code": 1061,
            "id": "et-EE",
            "name": "Estonian, Estonia"
        },
        "1062": {
            "code": 1062,
            "id": "lv-LV",
            "name": "Latvian, Latvia"
        },
        "1063": {
            "code": 1063,
            "id": "lt-LT",
            "name": "Lithuanian, Lithuania"
        },
        "1064": {
            "code": 1064,
            "id": "tg-Cyrl-TJ",
            "name": "Tajik, Cyrillic, Tajikistan"
        },
        "1065": {
            "code": 1065,
            "id": "fa-IR",
            "name": "Persian, Islamic Republic of Iran"
        },
        "1066": {
            "code": 1066,
            "id": "vi-VN",
            "name": "Vietnamese, Viet Nam"
        },
        "1067": {
            "code": 1067,
            "id": "hy-AM",
            "name": "Armenian, Armenia"
        },
        "1068": {
            "code": 1068,
            "id": "az-Latn-AZ",
            "name": "Azerbaijani, Latin, Azerbaijan"
        },
        "1069": {
            "code": 1069,
            "id": "eu-ES",
            "name": "Basque, Spain"
        },
        "1070": {
            "code": 1070,
            "id": "wen-DE",
            "name": "Sorbian languages, Germany"
        },
        "1071": {
            "code": 1071,
            "id": "mk-MK",
            "name": "Macedonian, The Former Yugoslav Republic of Macedonia"
        },
        "1072": {
            "code": 1072,
            "id": "st-ZA",
            "name": "Southern Sotho, South Africa"
        },
        "1073": {
            "code": 1073,
            "id": "ts-ZA",
            "name": "Tsonga, South Africa"
        },
        "1074": {
            "code": 1074,
            "id": "tn-ZA",
            "name": "Tswana, South Africa"
        },
        "1075": {
            "code": 1075,
            "id": "ven-ZA",
            "name": "South Africa"
        },
        "1076": {
            "code": 1076,
            "id": "xh-ZA",
            "name": "Xhosa, South Africa"
        },
        "1077": {
            "code": 1077,
            "id": "zu-ZA",
            "name": "Zulu, South Africa"
        },
        "1078": {
            "code": 1078,
            "id": "af-ZA",
            "name": "Afrikaans, South Africa"
        },
        "1079": {
            "code": 1079,
            "id": "ka-GE",
            "name": "Georgian, Georgia"
        },
        "1080": {
            "code": 1080,
            "id": "fo-FO",
            "name": "Faroese, Faroe Islands"
        },
        "1081": {
            "code": 1081,
            "id": "hi-IN",
            "name": "Hindi, India"
        },
        "1082": {
            "code": 1082,
            "id": "mt-MT",
            "name": "Maltese, Malta"
        },
        "1083": {
            "code": 1083,
            "id": "se-NO",
            "name": "Northern Sami, Norway"
        },
        "1086": {
            "code": 1086,
            "id": "ms-MY",
            "name": "Malay (macrolanguage), Malaysia"
        },
        "1087": {
            "code": 1087,
            "id": "kk-KZ",
            "name": "Kazakh, Kazakhstan"
        },
        "1088": {
            "code": 1088,
            "id": "ky-KG",
            "name": "Kirghiz, Kyrgyzstan"
        },
        "1089": {
            "code": 1089,
            "id": "sw-KE",
            "name": "Swahili (macrolanguage), Kenya"
        },
        "1090": {
            "code": 1090,
            "id": "tk-TM",
            "name": "Turkmen, Turkmenistan"
        },
        "1091": {
            "code": 1091,
            "id": "uz-Latn-UZ",
            "name": "Uzbek, Latin, Uzbekistan"
        },
        "1092": {
            "code": 1092,
            "id": "tt-RU",
            "name": "Tatar, Russian Federation"
        },
        "1093": {
            "code": 1093,
            "id": "bn-IN",
            "name": "Bengali, India"
        },
        "1094": {
            "code": 1094,
            "id": "pa-IN",
            "name": "Panjabi, India"
        },
        "1095": {
            "code": 1095,
            "id": "gu-IN",
            "name": "Gujarati, India"
        },
        "1096": {
            "code": 1096,
            "id": "or-IN",
            "name": "Oriya, India"
        },
        "1097": {
            "code": 1097,
            "id": "ta-IN",
            "name": "Tamil, India"
        },
        "1098": {
            "code": 1098,
            "id": "te-IN",
            "name": "Telugu, India"
        },
        "1099": {
            "code": 1099,
            "id": "kn-IN",
            "name": "Kannada, India"
        },
        "1100": {
            "code": 1100,
            "id": "ml-IN",
            "name": "Malayalam, India"
        },
        "1101": {
            "code": 1101,
            "id": "as-IN",
            "name": "Assamese, India"
        },
        "1102": {
            "code": 1102,
            "id": "mr-IN",
            "name": "Marathi, India"
        },
        "1103": {
            "code": 1103,
            "id": "sa-IN",
            "name": "Sanskrit, India"
        },
        "1104": {
            "code": 1104,
            "id": "mn-MN",
            "name": "Mongolian, Mongolia"
        },
        "1105": {
            "code": 1105,
            "id": "bo-CN",
            "name": "Tibetan, China"
        },
        "1106": {
            "code": 1106,
            "id": "cy-GB",
            "name": "Welsh, United Kingdom"
        },
        "1107": {
            "code": 1107,
            "id": "km-KH",
            "name": "Central Khmer, Cambodia"
        },
        "1108": {
            "code": 1108,
            "id": "lo-LA",
            "name": "Lao, Lao People’s Democratic Republic"
        },
        "1109": {
            "code": 1109,
            "id": "my-MM",
            "name": "Burmese, Myanmar"
        },
        "1110": {
            "code": 1110,
            "id": "gl-ES",
            "name": "Galician, Spain"
        },
        "1111": {
            "code": 1111,
            "id": "kok-IN",
            "name": "Konkani (macrolanguage), India"
        },
        "1112": {
            "code": 1112,
            "id": "mni",
            "name": "Manipuri"
        },
        "1113": {
            "code": 1113,
            "id": "sd-IN",
            "name": "Sindhi, India"
        },
        "1114": {
            "code": 1114,
            "id": "syr-SY",
            "name": "Syriac, Syrian Arab Republic"
        },
        "1115": {
            "code": 1115,
            "id": "si-LK",
            "name": "Sinhala, Sri Lanka"
        },
        "1116": {
            "code": 1116,
            "id": "chr-US",
            "name": "Cherokee, United States"
        },
        "1117": {
            "code": 1117,
            "id": "iu-Cans-CA",
            "name": "Inuktitut, Unified Canadian Aboriginal Syllabics, Canada"
        },
        "1118": {
            "code": 1118,
            "id": "am-ET",
            "name": "Amharic, Ethiopia"
        },
        "1119": {
            "code": 1119,
            "id": "tmz",
            "name": "Tamanaku"
        },
        "1121": {
            "code": 1121,
            "id": "ne-NP",
            "name": "Nepali, Nepal"
        },
        "1122": {
            "code": 1122,
            "id": "fy-NL",
            "name": "Western Frisian, Netherlands"
        },
        "1123": {
            "code": 1123,
            "id": "ps-AF",
            "name": "Pushto, Afghanistan"
        },
        "1124": {
            "code": 1124,
            "id": "fil-PH",
            "name": "Filipino, Philippines"
        },
        "1125": {
            "code": 1125,
            "id": "dv-MV",
            "name": "Dhivehi, Maldives"
        },
        "1126": {
            "code": 1126,
            "id": "bin-NG",
            "name": "Bini, Nigeria"
        },
        "1127": {
            "code": 1127,
            "id": "fuv-NG",
            "name": "Nigerian Fulfulde, Nigeria"
        },
        "1128": {
            "code": 1128,
            "id": "ha-Latn-NG",
            "name": "Hausa, Latin, Nigeria"
        },
        "1129": {
            "code": 1129,
            "id": "ibb-NG",
            "name": "Ibibio, Nigeria"
        },
        "1130": {
            "code": 1130,
            "id": "yo-NG",
            "name": "Yoruba, Nigeria"
        },
        "1131": {
            "code": 1131,
            "id": "quz-BO",
            "name": "Cusco Quechua, Bolivia"
        },
        "1132": {
            "code": 1132,
            "id": "nso-ZA",
            "name": "Pedi, South Africa"
        },
        "1133": {
            "code": 1133,
            "id": "ba-RU",
            "name": "Bashkir, Russian Federation"
        },
        "1134": {
            "code": 1134,
            "id": "lb-LU",
            "name": "Luxembourgish, Luxembourg"
        },
        "1135": {
            "code": 1135,
            "id": "kl-GL",
            "name": "Kalaallisut, Greenland"
        },
        "1136": {
            "code": 1136,
            "id": "ig-NG",
            "name": "Igbo, Nigeria"
        },
        "1137": {
            "code": 1137,
            "id": "kr-NG",
            "name": "Kanuri, Nigeria"
        },
        "1138": {
            "code": 1138,
            "id": "gaz-ET",
            "name": "West Central Oromo, Ethiopia"
        },
        "1139": {
            "code": 1139,
            "id": "ti-ER",
            "name": "Tigrinya, Eritrea"
        },
        "1140": {
            "code": 1140,
            "id": "gn-PY",
            "name": "Guarani, Paraguay"
        },
        "1141": {
            "code": 1141,
            "id": "haw-US",
            "name": "Hawaiian, United States"
        },
        "1143": {
            "code": 1143,
            "id": "so-SO",
            "name": "Somali, Somalia"
        },
        "1144": {
            "code": 1144,
            "id": "ii-CN",
            "name": "Sichuan Yi, China"
        },
        "1145": {
            "code": 1145,
            "id": "pap-AN",
            "name": "Papiamento, Netherlands Antilles"
        },
        "1146": {
            "code": 1146,
            "id": "arn-CL",
            "name": "Mapudungun, Chile"
        },
        "1148": {
            "code": 1148,
            "id": "moh-CA",
            "name": "Mohawk, Canada"
        },
        "1150": {
            "code": 1150,
            "id": "br-FR",
            "name": "Breton, France"
        },
        "1152": {
            "code": 1152,
            "id": "ug-CN",
            "name": "Uighur, China"
        },
        "1153": {
            "code": 1153,
            "id": "mi-NZ",
            "name": "Maori, New Zealand"
        },
        "1154": {
            "code": 1154,
            "id": "oc-FR",
            "name": "Occitan (post 1500), France"
        },
        "1155": {
            "code": 1155,
            "id": "co-FR",
            "name": "Corsican, France"
        },
        "1156": {
            "code": 1156,
            "id": "gsw-FR",
            "name": "Swiss German, France"
        },
        "1157": {
            "code": 1157,
            "id": "sah-RU",
            "name": "Yakut, Russian Federation"
        },
        "1158": {
            "code": 1158,
            "id": "qut-GT",
            "name": "Guatemala"
        },
        "1159": {
            "code": 1159,
            "id": "rw-RW",
            "name": "Kinyarwanda, Rwanda"
        },
        "1160": {
            "code": 1160,
            "id": "wo-SN",
            "name": "Wolof, Senegal"
        },
        "1164": {
            "code": 1164,
            "id": "prs-AF",
            "name": "Dari, Afghanistan"
        },
        "1165": {
            "code": 1165,
            "id": "plt-MG",
            "name": "Plateau Malagasy, Madagascar"
        },
        "1169": {
            "code": 1169,
            "id": "gd-GB",
            "name": "Scottish Gaelic, United Kingdom"
        },
        "2049": {
            "code": 2049,
            "id": "ar-IQ",
            "name": "Arabic, Iraq"
        },
        "2052": {
            "code": 2052,
            "id": "zh-CN",
            "name": "Chinese, China"
        },
        "2055": {
            "code": 2055,
            "id": "de-CH",
            "name": "German, Switzerland"
        },
        "2057": {
            "code": 2057,
            "id": "en-GB",
            "name": "English, United Kingdom"
        },
        "2058": {
            "code": 2058,
            "id": "es-MX",
            "name": "Spanish, Mexico"
        },
        "2060": {
            "code": 2060,
            "id": "fr-BE",
            "name": "French, Belgium"
        },
        "2064": {
            "code": 2064,
            "id": "it-CH",
            "name": "Italian, Switzerland"
        },
        "2067": {
            "code": 2067,
            "id": "nl-BE",
            "name": "Dutch, Belgium"
        },
        "2068": {
            "code": 2068,
            "id": "nn-NO",
            "name": "Norwegian Nynorsk, Norway"
        },
        "2070": {
            "code": 2070,
            "id": "pt-PT",
            "name": "Portuguese, Portugal"
        },
        "2072": {
            "code": 2072,
            "id": "ro-MO",
            "name": "Romanian, Macao"
        },
        "2073": {
            "code": 2073,
            "id": "ru-MO",
            "name": "Russian, Macao"
        },
        "2074": {
            "code": 2074,
            "id": "sr-Latn-CS",
            "name": "Serbian, Latin, Serbia and Montenegro"
        },
        "2077": {
            "code": 2077,
            "id": "sv-FI",
            "name": "Swedish, Finland"
        },
        "2080": {
            "code": 2080,
            "id": "ur-IN",
            "name": "Urdu, India"
        },
        "2092": {
            "code": 2092,
            "id": "az-Cyrl-AZ",
            "name": "Azerbaijani, Cyrillic, Azerbaijan"
        },
        "2094": {
            "code": 2094,
            "id": "dsb-DE",
            "name": "Lower Sorbian, Germany"
        },
        "2107": {
            "code": 2107,
            "id": "se-SE",
            "name": "Northern Sami, Sweden"
        },
        "2108": {
            "code": 2108,
            "id": "ga-IE",
            "name": "Irish, Ireland"
        },
        "2110": {
            "code": 2110,
            "id": "ms-BN",
            "name": "Malay (macrolanguage), Brunei Darussalam"
        },
        "2115": {
            "code": 2115,
            "id": "uz-Cyrl-UZ",
            "name": "Uzbek, Cyrillic, Uzbekistan"
        },
        "2117": {
            "code": 2117,
            "id": "bn-BD",
            "name": "Bengali, Bangladesh"
        },
        "2118": {
            "code": 2118,
            "id": "pa-PK",
            "name": "Panjabi, Pakistan"
        },
        "2128": {
            "code": 2128,
            "id": "mn-Mong-CN",
            "name": "Mongolian, Mongolian, China"
        },
        "2129": {
            "code": 2129,
            "id": "bo-BT",
            "name": "Tibetan, Bhutan"
        },
        "2137": {
            "code": 2137,
            "id": "sd-PK",
            "name": "Sindhi, Pakistan"
        },
        "2141": {
            "code": 2141,
            "id": "iu-Latn-CA",
            "name": "Inuktitut, Latin, Canada"
        },
        "2143": {
            "code": 2143,
            "id": "tzm-Latn-DZ",
            "name": "Central Atlas Tamazight, Latin, Algeria"
        },
        "2145": {
            "code": 2145,
            "id": "ne-IN",
            "name": "Nepali, India"
        },
        "2155": {
            "code": 2155,
            "id": "quz-EC",
            "name": "Cusco Quechua, Ecuador"
        },
        "2163": {
            "code": 2163,
            "id": "ti-ET",
            "name": "Tigrinya, Ethiopia"
        },
        "3073": {
            "code": 3073,
            "id": "ar-EG",
            "name": "Arabic, Egypt"
        },
        "3076": {
            "code": 3076,
            "id": "zh-HK",
            "name": "Chinese, Hong Kong"
        },
        "3079": {
            "code": 3079,
            "id": "de-AT",
            "name": "German, Austria"
        },
        "3081": {
            "code": 3081,
            "id": "en-AU",
            "name": "English, Australia"
        },
        "3082": {
            "code": 3082,
            "id": "es-ES",
            "name": "Spanish, Spain"
        },
        "3084": {
            "code": 3084,
            "id": "fr-CA",
            "name": "French, Canada"
        },
        "3098": {
            "code": 3098,
            "id": "sr-Cyrl-CS",
            "name": "Serbian, Cyrillic, Serbia and Montenegro"
        },
        "3131": {
            "code": 3131,
            "id": "se-FI",
            "name": "Northern Sami, Finland"
        },
        "3167": {
            "code": 3167,
            "id": "tmz-MA",
            "name": "Tamanaku, Morocco"
        },
        "3179": {
            "code": 3179,
            "id": "quz-PE",
            "name": "Cusco Quechua, Peru"
        },
        "4097": {
            "code": 4097,
            "id": "ar-LY",
            "name": "Arabic, Libyan Arab Jamahiriya"
        },
        "4100": {
            "code": 4100,
            "id": "zh-SG",
            "name": "Chinese, Singapore"
        },
        "4103": {
            "code": 4103,
            "id": "de-LU",
            "name": "German, Luxembourg"
        },
        "4105": {
            "code": 4105,
            "id": "en-CA",
            "name": "English, Canada"
        },
        "4106": {
            "code": 4106,
            "id": "es-GT",
            "name": "Spanish, Guatemala"
        },
        "4108": {
            "code": 4108,
            "id": "fr-CH",
            "name": "French, Switzerland"
        },
        "4122": {
            "code": 4122,
            "id": "hr-BA",
            "name": "Croatian, Bosnia and Herzegovina"
        },
        "4155": {
            "code": 4155,
            "id": "smj-NO",
            "name": "Lule Sami, Norway"
        },
        "5121": {
            "code": 5121,
            "id": "ar-DZ",
            "name": "Arabic, Algeria"
        },
        "5124": {
            "code": 5124,
            "id": "zh-MO",
            "name": "Chinese, Macao"
        },
        "5127": {
            "code": 5127,
            "id": "de-LI",
            "name": "German, Liechtenstein"
        },
        "5129": {
            "code": 5129,
            "id": "en-NZ",
            "name": "English, New Zealand"
        },
        "5130": {
            "code": 5130,
            "id": "es-CR",
            "name": "Spanish, Costa Rica"
        },
        "5132": {
            "code": 5132,
            "id": "fr-LU",
            "name": "French, Luxembourg"
        },
        "5146": {
            "code": 5146,
            "id": "bs-Latn-BA",
            "name": "Bosnian, Latin, Bosnia and Herzegovina"
        },
        "5179": {
            "code": 5179,
            "id": "smj-SE",
            "name": "Lule Sami, Sweden"
        },
        "6145": {
            "code": 6145,
            "id": "ar-MA",
            "name": "Arabic, Morocco"
        },
        "6153": {
            "code": 6153,
            "id": "en-IE",
            "name": "English, Ireland"
        },
        "6154": {
            "code": 6154,
            "id": "es-PA",
            "name": "Spanish, Panama"
        },
        "6156": {
            "code": 6156,
            "id": "fr-MC",
            "name": "French, Monaco"
        },
        "6170": {
            "code": 6170,
            "id": "sr-Latn-BA",
            "name": "Serbian, Latin, Bosnia and Herzegovina"
        },
        "6203": {
            "code": 6203,
            "id": "sma-NO",
            "name": "Southern Sami, Norway"
        },
        "7169": {
            "code": 7169,
            "id": "ar-TN",
            "name": "Arabic, Tunisia"
        },
        "7177": {
            "code": 7177,
            "id": "en-ZA",
            "name": "English, South Africa"
        },
        "7178": {
            "code": 7178,
            "id": "es-DO",
            "name": "Spanish, Dominican Republic"
        },
        "7180": {
            "code": 7180,
            "id": "fr-West",
            "name": "French"
        },
        "7194": {
            "code": 7194,
            "id": "sr-Cyrl-BA",
            "name": "Serbian, Cyrillic, Bosnia and Herzegovina"
        },
        "7227": {
            "code": 7227,
            "id": "sma-SE",
            "name": "Southern Sami, Sweden"
        },
        "8193": {
            "code": 8193,
            "id": "ar-OM",
            "name": "Arabic, Oman"
        },
        "8201": {
            "code": 8201,
            "id": "en-JM",
            "name": "English, Jamaica"
        },
        "8202": {
            "code": 8202,
            "id": "es-VE",
            "name": "Spanish, Venezuela"
        },
        "8204": {
            "code": 8204,
            "id": "fr-RE",
            "name": "French, Réunion"
        },
        "8218": {
            "code": 8218,
            "id": "bs-Cyrl-BA",
            "name": "Bosnian, Cyrillic, Bosnia and Herzegovina"
        },
        "8251": {
            "code": 8251,
            "id": "sms-FI",
            "name": "Skolt Sami, Finland"
        },
        "9217": {
            "code": 9217,
            "id": "ar-YE",
            "name": "Arabic, Yemen"
        },
        "9225": {
            "code": 9225,
            "id": "en-CB",
            "name": "English"
        },
        "9226": {
            "code": 9226,
            "id": "es-CO",
            "name": "Spanish, Colombia"
        },
        "9228": {
            "code": 9228,
            "id": "fr-CG",
            "name": "French, Congo"
        },
        "9242": {
            "code": 9242,
            "id": "sr-Latn-RS",
            "name": "Serbian, Latin, Serbia"
        },
        "9275": {
            "code": 9275,
            "id": "smn-FI",
            "name": "Inari Sami, Finland"
        },
        "10241": {
            "code": 10241,
            "id": "ar-SY",
            "name": "Arabic, Syrian Arab Republic"
        },
        "10249": {
            "code": 10249,
            "id": "en-BZ",
            "name": "English, Belize"
        },
        "10250": {
            "code": 10250,
            "id": "es-PE",
            "name": "Spanish, Peru"
        },
        "10252": {
            "code": 10252,
            "id": "fr-SN",
            "name": "French, Senegal"
        },
        "10266": {
            "code": 10266,
            "id": "sr-Cyrl-RS",
            "name": "Serbian, Cyrillic, Serbia"
        },
        "11265": {
            "code": 11265,
            "id": "ar-JO",
            "name": "Arabic, Jordan"
        },
        "11273": {
            "code": 11273,
            "id": "en-TT",
            "name": "English, Trinidad and Tobago"
        },
        "11274": {
            "code": 11274,
            "id": "es-AR",
            "name": "Spanish, Argentina"
        },
        "11276": {
            "code": 11276,
            "id": "fr-CM",
            "name": "French, Cameroon"
        },
        "11290": {
            "code": 11290,
            "id": "sr-Latn-ME",
            "name": "Serbian, Latin, Montenegro"
        },
        "12289": {
            "code": 12289,
            "id": "ar-LB",
            "name": "Arabic, Lebanon"
        },
        "12297": {
            "code": 12297,
            "id": "en-ZW",
            "name": "English, Zimbabwe"
        },
        "12298": {
            "code": 12298,
            "id": "es-EC",
            "name": "Spanish, Ecuador"
        },
        "12300": {
            "code": 12300,
            "id": "fr-CI",
            "name": "French, Côte d’Ivoire"
        },
        "12314": {
            "code": 12314,
            "id": "sr-Cyrl-ME",
            "name": "Serbian, Cyrillic, Montenegro"
        },
        "13313": {
            "code": 13313,
            "id": "ar-KW",
            "name": "Arabic, Kuwait"
        },
        "13321": {
            "code": 13321,
            "id": "en-PH",
            "name": "English, Philippines"
        },
        "13322": {
            "code": 13322,
            "id": "es-CL",
            "name": "Spanish, Chile"
        },
        "13324": {
            "code": 13324,
            "id": "fr-ML",
            "name": "French, Mali"
        },
        "14337": {
            "code": 14337,
            "id": "ar-AE",
            "name": "Arabic, United Arab Emirates"
        },
        "14345": {
            "code": 14345,
            "id": "en-ID",
            "name": "English, Indonesia"
        },
        "14346": {
            "code": 14346,
            "id": "es-UY",
            "name": "Spanish, Uruguay"
        },
        "14348": {
            "code": 14348,
            "id": "fr-MA",
            "name": "French, Morocco"
        },
        "15361": {
            "code": 15361,
            "id": "ar-BH",
            "name": "Arabic, Bahrain"
        },
        "15369": {
            "code": 15369,
            "id": "en-HK",
            "name": "English, Hong Kong"
        },
        "15370": {
            "code": 15370,
            "id": "es-PY",
            "name": "Spanish, Paraguay"
        },
        "15372": {
            "code": 15372,
            "id": "fr-HT",
            "name": "French, Haiti"
        },
        "16385": {
            "code": 16385,
            "id": "ar-QA",
            "name": "Arabic, Qatar"
        },
        "16393": {
            "code": 16393,
            "id": "en-IN",
            "name": "English, India"
        },
        "16394": {
            "code": 16394,
            "id": "es-BO",
            "name": "Spanish, Bolivia"
        },
        "17417": {
            "code": 17417,
            "id": "en-MY",
            "name": "English, Malaysia"
        },
        "17418": {
            "code": 17418,
            "id": "es-SV",
            "name": "Spanish, El Salvador"
        },
        "18441": {
            "code": 18441,
            "id": "en-SG",
            "name": "English, Singapore"
        },
        "18442": {
            "code": 18442,
            "id": "es-HN",
            "name": "Spanish, Honduras"
        },
        "19466": {
            "code": 19466,
            "id": "es-NI",
            "name": "Spanish, Nicaragua"
        },
        "20490": {
            "code": 20490,
            "id": "es-PR",
            "name": "Spanish, Puerto Rico"
        },
        "21514": {
            "code": 21514,
            "id": "es-US",
            "name": "Spanish, United States"
        },
        "25626": {
            "code": 25626,
            "id": "bs-Cyrl",
            "name": "Bosnian, Cyrillic"
        },
        "26650": {
            "code": 26650,
            "id": "bs-Latn",
            "name": "Bosnian, Latin"
        },
        "27674": {
            "code": 27674,
            "id": "sr-Cyrl",
            "name": "Serbian, Cyrillic"
        },
        "28698": {
            "code": 28698,
            "id": "sr-Latn",
            "name": "Serbian, Latin"
        },
        "28731": {
            "code": 28731,
            "id": "smn",
            "name": "Inari Sami"
        },
        "29740": {
            "code": 29740,
            "id": "az-Cyrl",
            "name": "Azerbaijani, Cyrillic"
        },
        "29755": {
            "code": 29755,
            "id": "sms",
            "name": "Skolt Sami"
        },
        "30724": {
            "code": 30724,
            "id": "zh",
            "name": "Chinese"
        },
        "30740": {
            "code": 30740,
            "id": "nn",
            "name": "Norwegian Nynorsk"
        },
        "30746": {
            "code": 30746,
            "id": "bs",
            "name": "Bosnian"
        },
        "30764": {
            "code": 30764,
            "id": "az-Latn",
            "name": "Azerbaijani, Latin"
        },
        "30779": {
            "code": 30779,
            "id": "sma",
            "name": "Southern Sami"
        },
        "30787": {
            "code": 30787,
            "id": "uz-Cyrl",
            "name": "Uzbek, Cyrillic"
        },
        "30800": {
            "code": 30800,
            "id": "mn-Cyrl",
            "name": "Mongolian, Cyrillic"
        },
        "30813": {
            "code": 30813,
            "id": "iu-Cans",
            "name": "Inuktitut, Unified Canadian Aboriginal Syllabics"
        },
        "31748": {
            "code": 31748,
            "id": "zh-Hant",
            "name": "Chinese, Han (Traditional variant)"
        },
        "31764": {
            "code": 31764,
            "id": "nb",
            "name": "Norwegian Bokmål"
        },
        "31770": {
            "code": 31770,
            "id": "sr",
            "name": "Serbian"
        },
        "31784": {
            "code": 31784,
            "id": "tg-Cyrl",
            "name": "Tajik, Cyrillic"
        },
        "31790": {
            "code": 31790,
            "id": "dsb",
            "name": "Lower Sorbian"
        },
        "31803": {
            "code": 31803,
            "id": "smj",
            "name": "Lule Sami"
        },
        "31811": {
            "code": 31811,
            "id": "uz-Latn",
            "name": "Uzbek, Latin"
        },
        "31824": {
            "code": 31824,
            "id": "mn-Mong",
            "name": "Mongolian, Mongolian"
        },
        "31837": {
            "code": 31837,
            "id": "iu-Latn",
            "name": "Inuktitut, Latin"
        },
        "31839": {
            "code": 31839,
            "id": "tzm-Latn",
            "name": "Central Atlas Tamazight, Latin"
        },
        "31848": {
            "code": 31848,
            "id": "ha-Latn",
            "name": "Hausa, Latin"
        }
    },
    "byId": {
        "ar": {
            "code": 1,
            "id": "ar",
            "name": "Arabic"
        },
        "bg": {
            "code": 2,
            "id": "bg",
            "name": "Bulgarian"
        },
        "ca": {
            "code": 3,
            "id": "ca",
            "name": "Catalan"
        },
        "zh-Hans": {
            "code": 4,
            "id": "zh-Hans",
            "name": "Chinese, Han (Simplified variant)"
        },
        "cs": {
            "code": 5,
            "id": "cs",
            "name": "Czech"
        },
        "da": {
            "code": 6,
            "id": "da",
            "name": "Danish"
        },
        "de": {
            "code": 7,
            "id": "de",
            "name": "German"
        },
        "el": {
            "code": 8,
            "id": "el",
            "name": "Modern Greek (1453 and later)"
        },
        "en": {
            "code": 9,
            "id": "en",
            "name": "English"
        },
        "es": {
            "code": 10,
            "id": "es",
            "name": "Spanish"
        },
        "fi": {
            "code": 11,
            "id": "fi",
            "name": "Finnish"
        },
        "fr": {
            "code": 12,
            "id": "fr",
            "name": "French"
        },
        "he": {
            "code": 13,
            "id": "he",
            "name": "Hebrew"
        },
        "hu": {
            "code": 14,
            "id": "hu",
            "name": "Hungarian"
        },
        "is": {
            "code": 15,
            "id": "is",
            "name": "Icelandic"
        },
        "it": {
            "code": 16,
            "id": "it",
            "name": "Italian"
        },
        "ja": {
            "code": 17,
            "id": "ja",
            "name": "Japanese"
        },
        "ko": {
            "code": 18,
            "id": "ko",
            "name": "Korean"
        },
        "nl": {
            "code": 19,
            "id": "nl",
            "name": "Dutch"
        },
        "no": {
            "code": 20,
            "id": "no",
            "name": "Norwegian"
        },
        "pl": {
            "code": 21,
            "id": "pl",
            "name": "Polish"
        },
        "pt": {
            "code": 22,
            "id": "pt",
            "name": "Portuguese"
        },
        "rm": {
            "code": 23,
            "id": "rm",
            "name": "Romansh"
        },
        "ro": {
            "code": 24,
            "id": "ro",
            "name": "Romanian"
        },
        "ru": {
            "code": 25,
            "id": "ru",
            "name": "Russian"
        },
        "hr": {
            "code": 26,
            "id": "hr",
            "name": "Croatian"
        },
        "sk": {
            "code": 27,
            "id": "sk",
            "name": "Slovak"
        },
        "sq": {
            "code": 28,
            "id": "sq",
            "name": "Albanian"
        },
        "sv": {
            "code": 29,
            "id": "sv",
            "name": "Swedish"
        },
        "th": {
            "code": 30,
            "id": "th",
            "name": "Thai"
        },
        "tr": {
            "code": 31,
            "id": "tr",
            "name": "Turkish"
        },
        "ur": {
            "code": 32,
            "id": "ur",
            "name": "Urdu"
        },
        "id": {
            "code": 33,
            "id": "id",
            "name": "Indonesian"
        },
        "uk": {
            "code": 34,
            "id": "uk",
            "name": "Ukrainian"
        },
        "be": {
            "code": 35,
            "id": "be",
            "name": "Belarusian"
        },
        "sl": {
            "code": 36,
            "id": "sl",
            "name": "Slovenian"
        },
        "et": {
            "code": 37,
            "id": "et",
            "name": "Estonian"
        },
        "lv": {
            "code": 38,
            "id": "lv",
            "name": "Latvian"
        },
        "lt": {
            "code": 39,
            "id": "lt",
            "name": "Lithuanian"
        },
        "tg": {
            "code": 40,
            "id": "tg",
            "name": "Tajik"
        },
        "fa": {
            "code": 41,
            "id": "fa",
            "name": "Persian"
        },
        "vi": {
            "code": 42,
            "id": "vi",
            "name": "Vietnamese"
        },
        "hy": {
            "code": 43,
            "id": "hy",
            "name": "Armenian"
        },
        "az": {
            "code": 44,
            "id": "az",
            "name": "Azerbaijani"
        },
        "eu": {
            "code": 45,
            "id": "eu",
            "name": "Basque"
        },
        "hsb": {
            "code": 46,
            "id": "hsb",
            "name": "Upper Sorbian"
        },
        "mk": {
            "code": 47,
            "id": "mk",
            "name": "Macedonian"
        },
        "tn": {
            "code": 50,
            "id": "tn",
            "name": "Tswana"
        },
        "xh": {
            "code": 52,
            "id": "xh",
            "name": "Xhosa"
        },
        "zu": {
            "code": 53,
            "id": "zu",
            "name": "Zulu"
        },
        "af": {
            "code": 54,
            "id": "af",
            "name": "Afrikaans"
        },
        "ka": {
            "code": 55,
            "id": "ka",
            "name": "Georgian"
        },
        "fo": {
            "code": 56,
            "id": "fo",
            "name": "Faroese"
        },
        "hi": {
            "code": 57,
            "id": "hi",
            "name": "Hindi"
        },
        "mt": {
            "code": 58,
            "id": "mt",
            "name": "Maltese"
        },
        "se": {
            "code": 59,
            "id": "se",
            "name": "Northern Sami"
        },
        "ga": {
            "code": 60,
            "id": "ga",
            "name": "Irish"
        },
        "ms": {
            "code": 62,
            "id": "ms",
            "name": "Malay (macrolanguage)"
        },
        "kk": {
            "code": 63,
            "id": "kk",
            "name": "Kazakh"
        },
        "ky": {
            "code": 64,
            "id": "ky",
            "name": "Kirghiz"
        },
        "sw": {
            "code": 65,
            "id": "sw",
            "name": "Swahili (macrolanguage)"
        },
        "tk": {
            "code": 66,
            "id": "tk",
            "name": "Turkmen"
        },
        "uz": {
            "code": 67,
            "id": "uz",
            "name": "Uzbek"
        },
        "tt": {
            "code": 68,
            "id": "tt",
            "name": "Tatar"
        },
        "bn": {
            "code": 69,
            "id": "bn",
            "name": "Bengali"
        },
        "pa": {
            "code": 70,
            "id": "pa",
            "name": "Panjabi"
        },
        "gu": {
            "code": 71,
            "id": "gu",
            "name": "Gujarati"
        },
        "or": {
            "code": 72,
            "id": "or",
            "name": "Oriya"
        },
        "ta": {
            "code": 73,
            "id": "ta",
            "name": "Tamil"
        },
        "te": {
            "code": 74,
            "id": "te",
            "name": "Telugu"
        },
        "kn": {
            "code": 75,
            "id": "kn",
            "name": "Kannada"
        },
        "ml": {
            "code": 76,
            "id": "ml",
            "name": "Malayalam"
        },
        "as": {
            "code": 77,
            "id": "as",
            "name": "Assamese"
        },
        "mr": {
            "code": 78,
            "id": "mr",
            "name": "Marathi"
        },
        "sa": {
            "code": 79,
            "id": "sa",
            "name": "Sanskrit"
        },
        "mn": {
            "code": 80,
            "id": "mn",
            "name": "Mongolian"
        },
        "bo": {
            "code": 81,
            "id": "bo",
            "name": "Tibetan"
        },
        "cy": {
            "code": 82,
            "id": "cy",
            "name": "Welsh"
        },
        "km": {
            "code": 83,
            "id": "km",
            "name": "Central Khmer"
        },
        "lo": {
            "code": 84,
            "id": "lo",
            "name": "Lao"
        },
        "gl": {
            "code": 86,
            "id": "gl",
            "name": "Galician"
        },
        "kok": {
            "code": 87,
            "id": "kok",
            "name": "Konkani (macrolanguage)"
        },
        "syr": {
            "code": 90,
            "id": "syr",
            "name": "Syriac"
        },
        "si": {
            "code": 91,
            "id": "si",
            "name": "Sinhala"
        },
        "iu": {
            "code": 93,
            "id": "iu",
            "name": "Inuktitut"
        },
        "am": {
            "code": 94,
            "id": "am",
            "name": "Amharic"
        },
        "tzm": {
            "code": 95,
            "id": "tzm",
            "name": "Central Atlas Tamazight"
        },
        "ne": {
            "code": 97,
            "id": "ne",
            "name": "Nepali"
        },
        "fy": {
            "code": 98,
            "id": "fy",
            "name": "Western Frisian"
        },
        "ps": {
            "code": 99,
            "id": "ps",
            "name": "Pushto"
        },
        "fil": {
            "code": 100,
            "id": "fil",
            "name": "Filipino"
        },
        "dv": {
            "code": 101,
            "id": "dv",
            "name": "Dhivehi"
        },
        "ha": {
            "code": 104,
            "id": "ha",
            "name": "Hausa"
        },
        "yo": {
            "code": 106,
            "id": "yo",
            "name": "Yoruba"
        },
        "quz": {
            "code": 107,
            "id": "quz",
            "name": "Cusco Quechua"
        },
        "nso": {
            "code": 108,
            "id": "nso",
            "name": "Pedi"
        },
        "ba": {
            "code": 109,
            "id": "ba",
            "name": "Bashkir"
        },
        "lb": {
            "code": 110,
            "id": "lb",
            "name": "Luxembourgish"
        },
        "kl": {
            "code": 111,
            "id": "kl",
            "name": "Kalaallisut"
        },
        "ig": {
            "code": 112,
            "id": "ig",
            "name": "Igbo"
        },
        "ii": {
            "code": 120,
            "id": "ii",
            "name": "Sichuan Yi"
        },
        "arn": {
            "code": 122,
            "id": "arn",
            "name": "Mapudungun"
        },
        "moh": {
            "code": 124,
            "id": "moh",
            "name": "Mohawk"
        },
        "br": {
            "code": 126,
            "id": "br",
            "name": "Breton"
        },
        "ug": {
            "code": 128,
            "id": "ug",
            "name": "Uighur"
        },
        "mi": {
            "code": 129,
            "id": "mi",
            "name": "Maori"
        },
        "oc": {
            "code": 130,
            "id": "oc",
            "name": "Occitan (post 1500)"
        },
        "co": {
            "code": 131,
            "id": "co",
            "name": "Corsican"
        },
        "gsw": {
            "code": 132,
            "id": "gsw",
            "name": "Swiss German"
        },
        "sah": {
            "code": 133,
            "id": "sah",
            "name": "Yakut"
        },
        "qut": {
            "code": 134,
            "id": "qut",
            "name": "Guatemala"
        },
        "rw": {
            "code": 135,
            "id": "rw",
            "name": "Kinyarwanda"
        },
        "wo": {
            "code": 136,
            "id": "wo",
            "name": "Wolof"
        },
        "prs": {
            "code": 140,
            "id": "prs",
            "name": "Dari"
        },
        "gd": {
            "code": 145,
            "id": "gd",
            "name": "Scottish Gaelic"
        },
        "ar-SA": {
            "code": 1025,
            "id": "ar-SA",
            "name": "Arabic, Saudi Arabia"
        },
        "bg-BG": {
            "code": 1026,
            "id": "bg-BG",
            "name": "Bulgarian, Bulgaria"
        },
        "ca-ES": {
            "code": 1027,
            "id": "ca-ES",
            "name": "Catalan, Spain"
        },
        "zh-TW": {
            "code": 1028,
            "id": "zh-TW",
            "name": "Chinese, Taiwan, Province of China"
        },
        "cs-CZ": {
            "code": 1029,
            "id": "cs-CZ",
            "name": "Czech, Czech Republic"
        },
        "da-DK": {
            "code": 1030,
            "id": "da-DK",
            "name": "Danish, Denmark"
        },
        "de-DE": {
            "code": 1031,
            "id": "de-DE",
            "name": "German, Germany"
        },
        "el-GR": {
            "code": 1032,
            "id": "el-GR",
            "name": "Modern Greek (1453-), Greece"
        },
        "en-US": {
            "code": 1033,
            "id": "en-US",
            "name": "English, United States"
        },
        "es-ES_tradnl": {
            "code": 1034,
            "id": "es-ES_tradnl",
            "name": "Spanish"
        },
        "fi-FI": {
            "code": 1035,
            "id": "fi-FI",
            "name": "Finnish, Finland"
        },
        "fr-FR": {
            "code": 1036,
            "id": "fr-FR",
            "name": "French, France"
        },
        "he-IL": {
            "code": 1037,
            "id": "he-IL",
            "name": "Hebrew, Israel"
        },
        "hu-HU": {
            "code": 1038,
            "id": "hu-HU",
            "name": "Hungarian, Hungary"
        },
        "is-IS": {
            "code": 1039,
            "id": "is-IS",
            "name": "Icelandic, Iceland"
        },
        "it-IT": {
            "code": 1040,
            "id": "it-IT",
            "name": "Italian, Italy"
        },
        "ja-JP": {
            "code": 1041,
            "id": "ja-JP",
            "name": "Japanese, Japan"
        },
        "ko-KR": {
            "code": 1042,
            "id": "ko-KR",
            "name": "Korean, Republic of Korea"
        },
        "nl-NL": {
            "code": 1043,
            "id": "nl-NL",
            "name": "Dutch, Netherlands"
        },
        "nb-NO": {
            "code": 1044,
            "id": "nb-NO",
            "name": "Norwegian Bokmål, Norway"
        },
        "pl-PL": {
            "code": 1045,
            "id": "pl-PL",
            "name": "Polish, Poland"
        },
        "pt-BR": {
            "code": 1046,
            "id": "pt-BR",
            "name": "Portuguese, Brazil"
        },
        "rm-CH": {
            "code": 1047,
            "id": "rm-CH",
            "name": "Romansh, Switzerland"
        },
        "ro-RO": {
            "code": 1048,
            "id": "ro-RO",
            "name": "Romanian, Romania"
        },
        "ru-RU": {
            "code": 1049,
            "id": "ru-RU",
            "name": "Russian, Russian Federation"
        },
        "hr-HR": {
            "code": 1050,
            "id": "hr-HR",
            "name": "Croatian, Croatia"
        },
        "sk-SK": {
            "code": 1051,
            "id": "sk-SK",
            "name": "Slovak, Slovakia"
        },
        "sq-AL": {
            "code": 1052,
            "id": "sq-AL",
            "name": "Albanian, Albania"
        },
        "sv-SE": {
            "code": 1053,
            "id": "sv-SE",
            "name": "Swedish, Sweden"
        },
        "th-TH": {
            "code": 1054,
            "id": "th-TH",
            "name": "Thai, Thailand"
        },
        "tr-TR": {
            "code": 1055,
            "id": "tr-TR",
            "name": "Turkish, Turkey"
        },
        "ur-PK": {
            "code": 1056,
            "id": "ur-PK",
            "name": "Urdu, Pakistan"
        },
        "id-ID": {
            "code": 1057,
            "id": "id-ID",
            "name": "Indonesian, Indonesia"
        },
        "uk-UA": {
            "code": 1058,
            "id": "uk-UA",
            "name": "Ukrainian, Ukraine"
        },
        "be-BY": {
            "code": 1059,
            "id": "be-BY",
            "name": "Belarusian, Belarus"
        },
        "sl-SI": {
            "code": 1060,
            "id": "sl-SI",
            "name": "Slovenian, Slovenia"
        },
        "et-EE": {
            "code": 1061,
            "id": "et-EE",
            "name": "Estonian, Estonia"
        },
        "lv-LV": {
            "code": 1062,
            "id": "lv-LV",
            "name": "Latvian, Latvia"
        },
        "lt-LT": {
            "code": 1063,
            "id": "lt-LT",
            "name": "Lithuanian, Lithuania"
        },
        "tg-Cyrl-TJ": {
            "code": 1064,
            "id": "tg-Cyrl-TJ",
            "name": "Tajik, Cyrillic, Tajikistan"
        },
        "fa-IR": {
            "code": 1065,
            "id": "fa-IR",
            "name": "Persian, Islamic Republic of Iran"
        },
        "vi-VN": {
            "code": 1066,
            "id": "vi-VN",
            "name": "Vietnamese, Viet Nam"
        },
        "hy-AM": {
            "code": 1067,
            "id": "hy-AM",
            "name": "Armenian, Armenia"
        },
        "az-Latn-AZ": {
            "code": 1068,
            "id": "az-Latn-AZ",
            "name": "Azerbaijani, Latin, Azerbaijan"
        },
        "eu-ES": {
            "code": 1069,
            "id": "eu-ES",
            "name": "Basque, Spain"
        },
        "wen-DE": {
            "code": 1070,
            "id": "wen-DE",
            "name": "Sorbian languages, Germany"
        },
        "mk-MK": {
            "code": 1071,
            "id": "mk-MK",
            "name": "Macedonian, The Former Yugoslav Republic of Macedonia"
        },
        "st-ZA": {
            "code": 1072,
            "id": "st-ZA",
            "name": "Southern Sotho, South Africa"
        },
        "ts-ZA": {
            "code": 1073,
            "id": "ts-ZA",
            "name": "Tsonga, South Africa"
        },
        "tn-ZA": {
            "code": 1074,
            "id": "tn-ZA",
            "name": "Tswana, South Africa"
        },
        "ven-ZA": {
            "code": 1075,
            "id": "ven-ZA",
            "name": "South Africa"
        },
        "xh-ZA": {
            "code": 1076,
            "id": "xh-ZA",
            "name": "Xhosa, South Africa"
        },
        "zu-ZA": {
            "code": 1077,
            "id": "zu-ZA",
            "name": "Zulu, South Africa"
        },
        "af-ZA": {
            "code": 1078,
            "id": "af-ZA",
            "name": "Afrikaans, South Africa"
        },
        "ka-GE": {
            "code": 1079,
            "id": "ka-GE",
            "name": "Georgian, Georgia"
        },
        "fo-FO": {
            "code": 1080,
            "id": "fo-FO",
            "name": "Faroese, Faroe Islands"
        },
        "hi-IN": {
            "code": 1081,
            "id": "hi-IN",
            "name": "Hindi, India"
        },
        "mt-MT": {
            "code": 1082,
            "id": "mt-MT",
            "name": "Maltese, Malta"
        },
        "se-NO": {
            "code": 1083,
            "id": "se-NO",
            "name": "Northern Sami, Norway"
        },
        "ms-MY": {
            "code": 1086,
            "id": "ms-MY",
            "name": "Malay (macrolanguage), Malaysia"
        },
        "kk-KZ": {
            "code": 1087,
            "id": "kk-KZ",
            "name": "Kazakh, Kazakhstan"
        },
        "ky-KG": {
            "code": 1088,
            "id": "ky-KG",
            "name": "Kirghiz, Kyrgyzstan"
        },
        "sw-KE": {
            "code": 1089,
            "id": "sw-KE",
            "name": "Swahili (macrolanguage), Kenya"
        },
        "tk-TM": {
            "code": 1090,
            "id": "tk-TM",
            "name": "Turkmen, Turkmenistan"
        },
        "uz-Latn-UZ": {
            "code": 1091,
            "id": "uz-Latn-UZ",
            "name": "Uzbek, Latin, Uzbekistan"
        },
        "tt-RU": {
            "code": 1092,
            "id": "tt-RU",
            "name": "Tatar, Russian Federation"
        },
        "bn-IN": {
            "code": 1093,
            "id": "bn-IN",
            "name": "Bengali, India"
        },
        "pa-IN": {
            "code": 1094,
            "id": "pa-IN",
            "name": "Panjabi, India"
        },
        "gu-IN": {
            "code": 1095,
            "id": "gu-IN",
            "name": "Gujarati, India"
        },
        "or-IN": {
            "code": 1096,
            "id": "or-IN",
            "name": "Oriya, India"
        },
        "ta-IN": {
            "code": 1097,
            "id": "ta-IN",
            "name": "Tamil, India"
        },
        "te-IN": {
            "code": 1098,
            "id": "te-IN",
            "name": "Telugu, India"
        },
        "kn-IN": {
            "code": 1099,
            "id": "kn-IN",
            "name": "Kannada, India"
        },
        "ml-IN": {
            "code": 1100,
            "id": "ml-IN",
            "name": "Malayalam, India"
        },
        "as-IN": {
            "code": 1101,
            "id": "as-IN",
            "name": "Assamese, India"
        },
        "mr-IN": {
            "code": 1102,
            "id": "mr-IN",
            "name": "Marathi, India"
        },
        "sa-IN": {
            "code": 1103,
            "id": "sa-IN",
            "name": "Sanskrit, India"
        },
        "mn-MN": {
            "code": 1104,
            "id": "mn-MN",
            "name": "Mongolian, Mongolia"
        },
        "bo-CN": {
            "code": 1105,
            "id": "bo-CN",
            "name": "Tibetan, China"
        },
        "cy-GB": {
            "code": 1106,
            "id": "cy-GB",
            "name": "Welsh, United Kingdom"
        },
        "km-KH": {
            "code": 1107,
            "id": "km-KH",
            "name": "Central Khmer, Cambodia"
        },
        "lo-LA": {
            "code": 1108,
            "id": "lo-LA",
            "name": "Lao, Lao People’s Democratic Republic"
        },
        "my-MM": {
            "code": 1109,
            "id": "my-MM",
            "name": "Burmese, Myanmar"
        },
        "gl-ES": {
            "code": 1110,
            "id": "gl-ES",
            "name": "Galician, Spain"
        },
        "kok-IN": {
            "code": 1111,
            "id": "kok-IN",
            "name": "Konkani (macrolanguage), India"
        },
        "mni": {
            "code": 1112,
            "id": "mni",
            "name": "Manipuri"
        },
        "sd-IN": {
            "code": 1113,
            "id": "sd-IN",
            "name": "Sindhi, India"
        },
        "syr-SY": {
            "code": 1114,
            "id": "syr-SY",
            "name": "Syriac, Syrian Arab Republic"
        },
        "si-LK": {
            "code": 1115,
            "id": "si-LK",
            "name": "Sinhala, Sri Lanka"
        },
        "chr-US": {
            "code": 1116,
            "id": "chr-US",
            "name": "Cherokee, United States"
        },
        "iu-Cans-CA": {
            "code": 1117,
            "id": "iu-Cans-CA",
            "name": "Inuktitut, Unified Canadian Aboriginal Syllabics, Canada"
        },
        "am-ET": {
            "code": 1118,
            "id": "am-ET",
            "name": "Amharic, Ethiopia"
        },
        "tmz": {
            "code": 1119,
            "id": "tmz",
            "name": "Tamanaku"
        },
        "ne-NP": {
            "code": 1121,
            "id": "ne-NP",
            "name": "Nepali, Nepal"
        },
        "fy-NL": {
            "code": 1122,
            "id": "fy-NL",
            "name": "Western Frisian, Netherlands"
        },
        "ps-AF": {
            "code": 1123,
            "id": "ps-AF",
            "name": "Pushto, Afghanistan"
        },
        "fil-PH": {
            "code": 1124,
            "id": "fil-PH",
            "name": "Filipino, Philippines"
        },
        "dv-MV": {
            "code": 1125,
            "id": "dv-MV",
            "name": "Dhivehi, Maldives"
        },
        "bin-NG": {
            "code": 1126,
            "id": "bin-NG",
            "name": "Bini, Nigeria"
        },
        "fuv-NG": {
            "code": 1127,
            "id": "fuv-NG",
            "name": "Nigerian Fulfulde, Nigeria"
        },
        "ha-Latn-NG": {
            "code": 1128,
            "id": "ha-Latn-NG",
            "name": "Hausa, Latin, Nigeria"
        },
        "ibb-NG": {
            "code": 1129,
            "id": "ibb-NG",
            "name": "Ibibio, Nigeria"
        },
        "yo-NG": {
            "code": 1130,
            "id": "yo-NG",
            "name": "Yoruba, Nigeria"
        },
        "quz-BO": {
            "code": 1131,
            "id": "quz-BO",
            "name": "Cusco Quechua, Bolivia"
        },
        "nso-ZA": {
            "code": 1132,
            "id": "nso-ZA",
            "name": "Pedi, South Africa"
        },
        "ba-RU": {
            "code": 1133,
            "id": "ba-RU",
            "name": "Bashkir, Russian Federation"
        },
        "lb-LU": {
            "code": 1134,
            "id": "lb-LU",
            "name": "Luxembourgish, Luxembourg"
        },
        "kl-GL": {
            "code": 1135,
            "id": "kl-GL",
            "name": "Kalaallisut, Greenland"
        },
        "ig-NG": {
            "code": 1136,
            "id": "ig-NG",
            "name": "Igbo, Nigeria"
        },
        "kr-NG": {
            "code": 1137,
            "id": "kr-NG",
            "name": "Kanuri, Nigeria"
        },
        "gaz-ET": {
            "code": 1138,
            "id": "gaz-ET",
            "name": "West Central Oromo, Ethiopia"
        },
        "ti-ER": {
            "code": 1139,
            "id": "ti-ER",
            "name": "Tigrinya, Eritrea"
        },
        "gn-PY": {
            "code": 1140,
            "id": "gn-PY",
            "name": "Guarani, Paraguay"
        },
        "haw-US": {
            "code": 1141,
            "id": "haw-US",
            "name": "Hawaiian, United States"
        },
        "so-SO": {
            "code": 1143,
            "id": "so-SO",
            "name": "Somali, Somalia"
        },
        "ii-CN": {
            "code": 1144,
            "id": "ii-CN",
            "name": "Sichuan Yi, China"
        },
        "pap-AN": {
            "code": 1145,
            "id": "pap-AN",
            "name": "Papiamento, Netherlands Antilles"
        },
        "arn-CL": {
            "code": 1146,
            "id": "arn-CL",
            "name": "Mapudungun, Chile"
        },
        "moh-CA": {
            "code": 1148,
            "id": "moh-CA",
            "name": "Mohawk, Canada"
        },
        "br-FR": {
            "code": 1150,
            "id": "br-FR",
            "name": "Breton, France"
        },
        "ug-CN": {
            "code": 1152,
            "id": "ug-CN",
            "name": "Uighur, China"
        },
        "mi-NZ": {
            "code": 1153,
            "id": "mi-NZ",
            "name": "Maori, New Zealand"
        },
        "oc-FR": {
            "code": 1154,
            "id": "oc-FR",
            "name": "Occitan (post 1500), France"
        },
        "co-FR": {
            "code": 1155,
            "id": "co-FR",
            "name": "Corsican, France"
        },
        "gsw-FR": {
            "code": 1156,
            "id": "gsw-FR",
            "name": "Swiss German, France"
        },
        "sah-RU": {
            "code": 1157,
            "id": "sah-RU",
            "name": "Yakut, Russian Federation"
        },
        "qut-GT": {
            "code": 1158,
            "id": "qut-GT",
            "name": "Guatemala"
        },
        "rw-RW": {
            "code": 1159,
            "id": "rw-RW",
            "name": "Kinyarwanda, Rwanda"
        },
        "wo-SN": {
            "code": 1160,
            "id": "wo-SN",
            "name": "Wolof, Senegal"
        },
        "prs-AF": {
            "code": 1164,
            "id": "prs-AF",
            "name": "Dari, Afghanistan"
        },
        "plt-MG": {
            "code": 1165,
            "id": "plt-MG",
            "name": "Plateau Malagasy, Madagascar"
        },
        "gd-GB": {
            "code": 1169,
            "id": "gd-GB",
            "name": "Scottish Gaelic, United Kingdom"
        },
        "ar-IQ": {
            "code": 2049,
            "id": "ar-IQ",
            "name": "Arabic, Iraq"
        },
        "zh-CN": {
            "code": 2052,
            "id": "zh-CN",
            "name": "Chinese, China"
        },
        "de-CH": {
            "code": 2055,
            "id": "de-CH",
            "name": "German, Switzerland"
        },
        "en-GB": {
            "code": 2057,
            "id": "en-GB",
            "name": "English, United Kingdom"
        },
        "es-MX": {
            "code": 2058,
            "id": "es-MX",
            "name": "Spanish, Mexico"
        },
        "fr-BE": {
            "code": 2060,
            "id": "fr-BE",
            "name": "French, Belgium"
        },
        "it-CH": {
            "code": 2064,
            "id": "it-CH",
            "name": "Italian, Switzerland"
        },
        "nl-BE": {
            "code": 2067,
            "id": "nl-BE",
            "name": "Dutch, Belgium"
        },
        "nn-NO": {
            "code": 2068,
            "id": "nn-NO",
            "name": "Norwegian Nynorsk, Norway"
        },
        "pt-PT": {
            "code": 2070,
            "id": "pt-PT",
            "name": "Portuguese, Portugal"
        },
        "ro-MO": {
            "code": 2072,
            "id": "ro-MO",
            "name": "Romanian, Macao"
        },
        "ru-MO": {
            "code": 2073,
            "id": "ru-MO",
            "name": "Russian, Macao"
        },
        "sr-Latn-CS": {
            "code": 2074,
            "id": "sr-Latn-CS",
            "name": "Serbian, Latin, Serbia and Montenegro"
        },
        "sv-FI": {
            "code": 2077,
            "id": "sv-FI",
            "name": "Swedish, Finland"
        },
        "ur-IN": {
            "code": 2080,
            "id": "ur-IN",
            "name": "Urdu, India"
        },
        "az-Cyrl-AZ": {
            "code": 2092,
            "id": "az-Cyrl-AZ",
            "name": "Azerbaijani, Cyrillic, Azerbaijan"
        },
        "dsb-DE": {
            "code": 2094,
            "id": "dsb-DE",
            "name": "Lower Sorbian, Germany"
        },
        "se-SE": {
            "code": 2107,
            "id": "se-SE",
            "name": "Northern Sami, Sweden"
        },
        "ga-IE": {
            "code": 2108,
            "id": "ga-IE",
            "name": "Irish, Ireland"
        },
        "ms-BN": {
            "code": 2110,
            "id": "ms-BN",
            "name": "Malay (macrolanguage), Brunei Darussalam"
        },
        "uz-Cyrl-UZ": {
            "code": 2115,
            "id": "uz-Cyrl-UZ",
            "name": "Uzbek, Cyrillic, Uzbekistan"
        },
        "bn-BD": {
            "code": 2117,
            "id": "bn-BD",
            "name": "Bengali, Bangladesh"
        },
        "pa-PK": {
            "code": 2118,
            "id": "pa-PK",
            "name": "Panjabi, Pakistan"
        },
        "mn-Mong-CN": {
            "code": 2128,
            "id": "mn-Mong-CN",
            "name": "Mongolian, Mongolian, China"
        },
        "bo-BT": {
            "code": 2129,
            "id": "bo-BT",
            "name": "Tibetan, Bhutan"
        },
        "sd-PK": {
            "code": 2137,
            "id": "sd-PK",
            "name": "Sindhi, Pakistan"
        },
        "iu-Latn-CA": {
            "code": 2141,
            "id": "iu-Latn-CA",
            "name": "Inuktitut, Latin, Canada"
        },
        "tzm-Latn-DZ": {
            "code": 2143,
            "id": "tzm-Latn-DZ",
            "name": "Central Atlas Tamazight, Latin, Algeria"
        },
        "ne-IN": {
            "code": 2145,
            "id": "ne-IN",
            "name": "Nepali, India"
        },
        "quz-EC": {
            "code": 2155,
            "id": "quz-EC",
            "name": "Cusco Quechua, Ecuador"
        },
        "ti-ET": {
            "code": 2163,
            "id": "ti-ET",
            "name": "Tigrinya, Ethiopia"
        },
        "ar-EG": {
            "code": 3073,
            "id": "ar-EG",
            "name": "Arabic, Egypt"
        },
        "zh-HK": {
            "code": 3076,
            "id": "zh-HK",
            "name": "Chinese, Hong Kong"
        },
        "de-AT": {
            "code": 3079,
            "id": "de-AT",
            "name": "German, Austria"
        },
        "en-AU": {
            "code": 3081,
            "id": "en-AU",
            "name": "English, Australia"
        },
        "es-ES": {
            "code": 3082,
            "id": "es-ES",
            "name": "Spanish, Spain"
        },
        "fr-CA": {
            "code": 3084,
            "id": "fr-CA",
            "name": "French, Canada"
        },
        "sr-Cyrl-CS": {
            "code": 3098,
            "id": "sr-Cyrl-CS",
            "name": "Serbian, Cyrillic, Serbia and Montenegro"
        },
        "se-FI": {
            "code": 3131,
            "id": "se-FI",
            "name": "Northern Sami, Finland"
        },
        "tmz-MA": {
            "code": 3167,
            "id": "tmz-MA",
            "name": "Tamanaku, Morocco"
        },
        "quz-PE": {
            "code": 3179,
            "id": "quz-PE",
            "name": "Cusco Quechua, Peru"
        },
        "ar-LY": {
            "code": 4097,
            "id": "ar-LY",
            "name": "Arabic, Libyan Arab Jamahiriya"
        },
        "zh-SG": {
            "code": 4100,
            "id": "zh-SG",
            "name": "Chinese, Singapore"
        },
        "de-LU": {
            "code": 4103,
            "id": "de-LU",
            "name": "German, Luxembourg"
        },
        "en-CA": {
            "code": 4105,
            "id": "en-CA",
            "name": "English, Canada"
        },
        "es-GT": {
            "code": 4106,
            "id": "es-GT",
            "name": "Spanish, Guatemala"
        },
        "fr-CH": {
            "code": 4108,
            "id": "fr-CH",
            "name": "French, Switzerland"
        },
        "hr-BA": {
            "code": 4122,
            "id": "hr-BA",
            "name": "Croatian, Bosnia and Herzegovina"
        },
        "smj-NO": {
            "code": 4155,
            "id": "smj-NO",
            "name": "Lule Sami, Norway"
        },
        "ar-DZ": {
            "code": 5121,
            "id": "ar-DZ",
            "name": "Arabic, Algeria"
        },
        "zh-MO": {
            "code": 5124,
            "id": "zh-MO",
            "name": "Chinese, Macao"
        },
        "de-LI": {
            "code": 5127,
            "id": "de-LI",
            "name": "German, Liechtenstein"
        },
        "en-NZ": {
            "code": 5129,
            "id": "en-NZ",
            "name": "English, New Zealand"
        },
        "es-CR": {
            "code": 5130,
            "id": "es-CR",
            "name": "Spanish, Costa Rica"
        },
        "fr-LU": {
            "code": 5132,
            "id": "fr-LU",
            "name": "French, Luxembourg"
        },
        "bs-Latn-BA": {
            "code": 5146,
            "id": "bs-Latn-BA",
            "name": "Bosnian, Latin, Bosnia and Herzegovina"
        },
        "smj-SE": {
            "code": 5179,
            "id": "smj-SE",
            "name": "Lule Sami, Sweden"
        },
        "ar-MA": {
            "code": 6145,
            "id": "ar-MA",
            "name": "Arabic, Morocco"
        },
        "en-IE": {
            "code": 6153,
            "id": "en-IE",
            "name": "English, Ireland"
        },
        "es-PA": {
            "code": 6154,
            "id": "es-PA",
            "name": "Spanish, Panama"
        },
        "fr-MC": {
            "code": 6156,
            "id": "fr-MC",
            "name": "French, Monaco"
        },
        "sr-Latn-BA": {
            "code": 6170,
            "id": "sr-Latn-BA",
            "name": "Serbian, Latin, Bosnia and Herzegovina"
        },
        "sma-NO": {
            "code": 6203,
            "id": "sma-NO",
            "name": "Southern Sami, Norway"
        },
        "ar-TN": {
            "code": 7169,
            "id": "ar-TN",
            "name": "Arabic, Tunisia"
        },
        "en-ZA": {
            "code": 7177,
            "id": "en-ZA",
            "name": "English, South Africa"
        },
        "es-DO": {
            "code": 7178,
            "id": "es-DO",
            "name": "Spanish, Dominican Republic"
        },
        "fr-West": {
            "code": 7180,
            "id": "fr-West",
            "name": "French"
        },
        "sr-Cyrl-BA": {
            "code": 7194,
            "id": "sr-Cyrl-BA",
            "name": "Serbian, Cyrillic, Bosnia and Herzegovina"
        },
        "sma-SE": {
            "code": 7227,
            "id": "sma-SE",
            "name": "Southern Sami, Sweden"
        },
        "ar-OM": {
            "code": 8193,
            "id": "ar-OM",
            "name": "Arabic, Oman"
        },
        "en-JM": {
            "code": 8201,
            "id": "en-JM",
            "name": "English, Jamaica"
        },
        "es-VE": {
            "code": 8202,
            "id": "es-VE",
            "name": "Spanish, Venezuela"
        },
        "fr-RE": {
            "code": 8204,
            "id": "fr-RE",
            "name": "French, Réunion"
        },
        "bs-Cyrl-BA": {
            "code": 8218,
            "id": "bs-Cyrl-BA",
            "name": "Bosnian, Cyrillic, Bosnia and Herzegovina"
        },
        "sms-FI": {
            "code": 8251,
            "id": "sms-FI",
            "name": "Skolt Sami, Finland"
        },
        "ar-YE": {
            "code": 9217,
            "id": "ar-YE",
            "name": "Arabic, Yemen"
        },
        "en-CB": {
            "code": 9225,
            "id": "en-CB",
            "name": "English"
        },
        "es-CO": {
            "code": 9226,
            "id": "es-CO",
            "name": "Spanish, Colombia"
        },
        "fr-CG": {
            "code": 9228,
            "id": "fr-CG",
            "name": "French, Congo"
        },
        "sr-Latn-RS": {
            "code": 9242,
            "id": "sr-Latn-RS",
            "name": "Serbian, Latin, Serbia"
        },
        "smn-FI": {
            "code": 9275,
            "id": "smn-FI",
            "name": "Inari Sami, Finland"
        },
        "ar-SY": {
            "code": 10241,
            "id": "ar-SY",
            "name": "Arabic, Syrian Arab Republic"
        },
        "en-BZ": {
            "code": 10249,
            "id": "en-BZ",
            "name": "English, Belize"
        },
        "es-PE": {
            "code": 10250,
            "id": "es-PE",
            "name": "Spanish, Peru"
        },
        "fr-SN": {
            "code": 10252,
            "id": "fr-SN",
            "name": "French, Senegal"
        },
        "sr-Cyrl-RS": {
            "code": 10266,
            "id": "sr-Cyrl-RS",
            "name": "Serbian, Cyrillic, Serbia"
        },
        "ar-JO": {
            "code": 11265,
            "id": "ar-JO",
            "name": "Arabic, Jordan"
        },
        "en-TT": {
            "code": 11273,
            "id": "en-TT",
            "name": "English, Trinidad and Tobago"
        },
        "es-AR": {
            "code": 11274,
            "id": "es-AR",
            "name": "Spanish, Argentina"
        },
        "fr-CM": {
            "code": 11276,
            "id": "fr-CM",
            "name": "French, Cameroon"
        },
        "sr-Latn-ME": {
            "code": 11290,
            "id": "sr-Latn-ME",
            "name": "Serbian, Latin, Montenegro"
        },
        "ar-LB": {
            "code": 12289,
            "id": "ar-LB",
            "name": "Arabic, Lebanon"
        },
        "en-ZW": {
            "code": 12297,
            "id": "en-ZW",
            "name": "English, Zimbabwe"
        },
        "es-EC": {
            "code": 12298,
            "id": "es-EC",
            "name": "Spanish, Ecuador"
        },
        "fr-CI": {
            "code": 12300,
            "id": "fr-CI",
            "name": "French, Côte d’Ivoire"
        },
        "sr-Cyrl-ME": {
            "code": 12314,
            "id": "sr-Cyrl-ME",
            "name": "Serbian, Cyrillic, Montenegro"
        },
        "ar-KW": {
            "code": 13313,
            "id": "ar-KW",
            "name": "Arabic, Kuwait"
        },
        "en-PH": {
            "code": 13321,
            "id": "en-PH",
            "name": "English, Philippines"
        },
        "es-CL": {
            "code": 13322,
            "id": "es-CL",
            "name": "Spanish, Chile"
        },
        "fr-ML": {
            "code": 13324,
            "id": "fr-ML",
            "name": "French, Mali"
        },
        "ar-AE": {
            "code": 14337,
            "id": "ar-AE",
            "name": "Arabic, United Arab Emirates"
        },
        "en-ID": {
            "code": 14345,
            "id": "en-ID",
            "name": "English, Indonesia"
        },
        "es-UY": {
            "code": 14346,
            "id": "es-UY",
            "name": "Spanish, Uruguay"
        },
        "fr-MA": {
            "code": 14348,
            "id": "fr-MA",
            "name": "French, Morocco"
        },
        "ar-BH": {
            "code": 15361,
            "id": "ar-BH",
            "name": "Arabic, Bahrain"
        },
        "en-HK": {
            "code": 15369,
            "id": "en-HK",
            "name": "English, Hong Kong"
        },
        "es-PY": {
            "code": 15370,
            "id": "es-PY",
            "name": "Spanish, Paraguay"
        },
        "fr-HT": {
            "code": 15372,
            "id": "fr-HT",
            "name": "French, Haiti"
        },
        "ar-QA": {
            "code": 16385,
            "id": "ar-QA",
            "name": "Arabic, Qatar"
        },
        "en-IN": {
            "code": 16393,
            "id": "en-IN",
            "name": "English, India"
        },
        "es-BO": {
            "code": 16394,
            "id": "es-BO",
            "name": "Spanish, Bolivia"
        },
        "en-MY": {
            "code": 17417,
            "id": "en-MY",
            "name": "English, Malaysia"
        },
        "es-SV": {
            "code": 17418,
            "id": "es-SV",
            "name": "Spanish, El Salvador"
        },
        "en-SG": {
            "code": 18441,
            "id": "en-SG",
            "name": "English, Singapore"
        },
        "es-HN": {
            "code": 18442,
            "id": "es-HN",
            "name": "Spanish, Honduras"
        },
        "es-NI": {
            "code": 19466,
            "id": "es-NI",
            "name": "Spanish, Nicaragua"
        },
        "es-PR": {
            "code": 20490,
            "id": "es-PR",
            "name": "Spanish, Puerto Rico"
        },
        "es-US": {
            "code": 21514,
            "id": "es-US",
            "name": "Spanish, United States"
        },
        "bs-Cyrl": {
            "code": 25626,
            "id": "bs-Cyrl",
            "name": "Bosnian, Cyrillic"
        },
        "bs-Latn": {
            "code": 26650,
            "id": "bs-Latn",
            "name": "Bosnian, Latin"
        },
        "sr-Cyrl": {
            "code": 27674,
            "id": "sr-Cyrl",
            "name": "Serbian, Cyrillic"
        },
        "sr-Latn": {
            "code": 28698,
            "id": "sr-Latn",
            "name": "Serbian, Latin"
        },
        "smn": {
            "code": 28731,
            "id": "smn",
            "name": "Inari Sami"
        },
        "az-Cyrl": {
            "code": 29740,
            "id": "az-Cyrl",
            "name": "Azerbaijani, Cyrillic"
        },
        "sms": {
            "code": 29755,
            "id": "sms",
            "name": "Skolt Sami"
        },
        "zh": {
            "code": 30724,
            "id": "zh",
            "name": "Chinese"
        },
        "nn": {
            "code": 30740,
            "id": "nn",
            "name": "Norwegian Nynorsk"
        },
        "bs": {
            "code": 30746,
            "id": "bs",
            "name": "Bosnian"
        },
        "az-Latn": {
            "code": 30764,
            "id": "az-Latn",
            "name": "Azerbaijani, Latin"
        },
        "sma": {
            "code": 30779,
            "id": "sma",
            "name": "Southern Sami"
        },
        "uz-Cyrl": {
            "code": 30787,
            "id": "uz-Cyrl",
            "name": "Uzbek, Cyrillic"
        },
        "mn-Cyrl": {
            "code": 30800,
            "id": "mn-Cyrl",
            "name": "Mongolian, Cyrillic"
        },
        "iu-Cans": {
            "code": 30813,
            "id": "iu-Cans",
            "name": "Inuktitut, Unified Canadian Aboriginal Syllabics"
        },
        "zh-Hant": {
            "code": 31748,
            "id": "zh-Hant",
            "name": "Chinese, Han (Traditional variant)"
        },
        "nb": {
            "code": 31764,
            "id": "nb",
            "name": "Norwegian Bokmål"
        },
        "sr": {
            "code": 31770,
            "id": "sr",
            "name": "Serbian"
        },
        "tg-Cyrl": {
            "code": 31784,
            "id": "tg-Cyrl",
            "name": "Tajik, Cyrillic"
        },
        "dsb": {
            "code": 31790,
            "id": "dsb",
            "name": "Lower Sorbian"
        },
        "smj": {
            "code": 31803,
            "id": "smj",
            "name": "Lule Sami"
        },
        "uz-Latn": {
            "code": 31811,
            "id": "uz-Latn",
            "name": "Uzbek, Latin"
        },
        "mn-Mong": {
            "code": 31824,
            "id": "mn-Mong",
            "name": "Mongolian, Mongolian"
        },
        "iu-Latn": {
            "code": 31837,
            "id": "iu-Latn",
            "name": "Inuktitut, Latin"
        },
        "tzm-Latn": {
            "code": 31839,
            "id": "tzm-Latn",
            "name": "Central Atlas Tamazight, Latin"
        },
        "ha-Latn": {
            "code": 31848,
            "id": "ha-Latn",
            "name": "Hausa, Latin"
        }
    },
    "byName": {
        "Arabic": {
            "code": 1,
            "id": "ar",
            "name": "Arabic"
        },
        "Bulgarian": {
            "code": 2,
            "id": "bg",
            "name": "Bulgarian"
        },
        "Catalan": {
            "code": 3,
            "id": "ca",
            "name": "Catalan"
        },
        "Chinese, Han (Simplified variant)": {
            "code": 4,
            "id": "zh-Hans",
            "name": "Chinese, Han (Simplified variant)"
        },
        "Czech": {
            "code": 5,
            "id": "cs",
            "name": "Czech"
        },
        "Danish": {
            "code": 6,
            "id": "da",
            "name": "Danish"
        },
        "German": {
            "code": 7,
            "id": "de",
            "name": "German"
        },
        "Modern Greek (1453 and later)": {
            "code": 8,
            "id": "el",
            "name": "Modern Greek (1453 and later)"
        },
        "English": {
            "code": 9225,
            "id": "en-CB",
            "name": "English"
        },
        "Spanish": {
            "code": 1034,
            "id": "es-ES_tradnl",
            "name": "Spanish"
        },
        "Finnish": {
            "code": 11,
            "id": "fi",
            "name": "Finnish"
        },
        "French": {
            "code": 7180,
            "id": "fr-West",
            "name": "French"
        },
        "Hebrew": {
            "code": 13,
            "id": "he",
            "name": "Hebrew"
        },
        "Hungarian": {
            "code": 14,
            "id": "hu",
            "name": "Hungarian"
        },
        "Icelandic": {
            "code": 15,
            "id": "is",
            "name": "Icelandic"
        },
        "Italian": {
            "code": 16,
            "id": "it",
            "name": "Italian"
        },
        "Japanese": {
            "code": 17,
            "id": "ja",
            "name": "Japanese"
        },
        "Korean": {
            "code": 18,
            "id": "ko",
            "name": "Korean"
        },
        "Dutch": {
            "code": 19,
            "id": "nl",
            "name": "Dutch"
        },
        "Norwegian": {
            "code": 20,
            "id": "no",
            "name": "Norwegian"
        },
        "Polish": {
            "code": 21,
            "id": "pl",
            "name": "Polish"
        },
        "Portuguese": {
            "code": 22,
            "id": "pt",
            "name": "Portuguese"
        },
        "Romansh": {
            "code": 23,
            "id": "rm",
            "name": "Romansh"
        },
        "Romanian": {
            "code": 24,
            "id": "ro",
            "name": "Romanian"
        },
        "Russian": {
            "code": 25,
            "id": "ru",
            "name": "Russian"
        },
        "Croatian": {
            "code": 26,
            "id": "hr",
            "name": "Croatian"
        },
        "Slovak": {
            "code": 27,
            "id": "sk",
            "name": "Slovak"
        },
        "Albanian": {
            "code": 28,
            "id": "sq",
            "name": "Albanian"
        },
        "Swedish": {
            "code": 29,
            "id": "sv",
            "name": "Swedish"
        },
        "Thai": {
            "code": 30,
            "id": "th",
            "name": "Thai"
        },
        "Turkish": {
            "code": 31,
            "id": "tr",
            "name": "Turkish"
        },
        "Urdu": {
            "code": 32,
            "id": "ur",
            "name": "Urdu"
        },
        "Indonesian": {
            "code": 33,
            "id": "id",
            "name": "Indonesian"
        },
        "Ukrainian": {
            "code": 34,
            "id": "uk",
            "name": "Ukrainian"
        },
        "Belarusian": {
            "code": 35,
            "id": "be",
            "name": "Belarusian"
        },
        "Slovenian": {
            "code": 36,
            "id": "sl",
            "name": "Slovenian"
        },
        "Estonian": {
            "code": 37,
            "id": "et",
            "name": "Estonian"
        },
        "Latvian": {
            "code": 38,
            "id": "lv",
            "name": "Latvian"
        },
        "Lithuanian": {
            "code": 39,
            "id": "lt",
            "name": "Lithuanian"
        },
        "Tajik": {
            "code": 40,
            "id": "tg",
            "name": "Tajik"
        },
        "Persian": {
            "code": 41,
            "id": "fa",
            "name": "Persian"
        },
        "Vietnamese": {
            "code": 42,
            "id": "vi",
            "name": "Vietnamese"
        },
        "Armenian": {
            "code": 43,
            "id": "hy",
            "name": "Armenian"
        },
        "Azerbaijani": {
            "code": 44,
            "id": "az",
            "name": "Azerbaijani"
        },
        "Basque": {
            "code": 45,
            "id": "eu",
            "name": "Basque"
        },
        "Upper Sorbian": {
            "code": 46,
            "id": "hsb",
            "name": "Upper Sorbian"
        },
        "Macedonian": {
            "code": 47,
            "id": "mk",
            "name": "Macedonian"
        },
        "Tswana": {
            "code": 50,
            "id": "tn",
            "name": "Tswana"
        },
        "Xhosa": {
            "code": 52,
            "id": "xh",
            "name": "Xhosa"
        },
        "Zulu": {
            "code": 53,
            "id": "zu",
            "name": "Zulu"
        },
        "Afrikaans": {
            "code": 54,
            "id": "af",
            "name": "Afrikaans"
        },
        "Georgian": {
            "code": 55,
            "id": "ka",
            "name": "Georgian"
        },
        "Faroese": {
            "code": 56,
            "id": "fo",
            "name": "Faroese"
        },
        "Hindi": {
            "code": 57,
            "id": "hi",
            "name": "Hindi"
        },
        "Maltese": {
            "code": 58,
            "id": "mt",
            "name": "Maltese"
        },
        "Northern Sami": {
            "code": 59,
            "id": "se",
            "name": "Northern Sami"
        },
        "Irish": {
            "code": 60,
            "id": "ga",
            "name": "Irish"
        },
        "Malay (macrolanguage)": {
            "code": 62,
            "id": "ms",
            "name": "Malay (macrolanguage)"
        },
        "Kazakh": {
            "code": 63,
            "id": "kk",
            "name": "Kazakh"
        },
        "Kirghiz": {
            "code": 64,
            "id": "ky",
            "name": "Kirghiz"
        },
        "Swahili (macrolanguage)": {
            "code": 65,
            "id": "sw",
            "name": "Swahili (macrolanguage)"
        },
        "Turkmen": {
            "code": 66,
            "id": "tk",
            "name": "Turkmen"
        },
        "Uzbek": {
            "code": 67,
            "id": "uz",
            "name": "Uzbek"
        },
        "Tatar": {
            "code": 68,
            "id": "tt",
            "name": "Tatar"
        },
        "Bengali": {
            "code": 69,
            "id": "bn",
            "name": "Bengali"
        },
        "Panjabi": {
            "code": 70,
            "id": "pa",
            "name": "Panjabi"
        },
        "Gujarati": {
            "code": 71,
            "id": "gu",
            "name": "Gujarati"
        },
        "Oriya": {
            "code": 72,
            "id": "or",
            "name": "Oriya"
        },
        "Tamil": {
            "code": 73,
            "id": "ta",
            "name": "Tamil"
        },
        "Telugu": {
            "code": 74,
            "id": "te",
            "name": "Telugu"
        },
        "Kannada": {
            "code": 75,
            "id": "kn",
            "name": "Kannada"
        },
        "Malayalam": {
            "code": 76,
            "id": "ml",
            "name": "Malayalam"
        },
        "Assamese": {
            "code": 77,
            "id": "as",
            "name": "Assamese"
        },
        "Marathi": {
            "code": 78,
            "id": "mr",
            "name": "Marathi"
        },
        "Sanskrit": {
            "code": 79,
            "id": "sa",
            "name": "Sanskrit"
        },
        "Mongolian": {
            "code": 80,
            "id": "mn",
            "name": "Mongolian"
        },
        "Tibetan": {
            "code": 81,
            "id": "bo",
            "name": "Tibetan"
        },
        "Welsh": {
            "code": 82,
            "id": "cy",
            "name": "Welsh"
        },
        "Central Khmer": {
            "code": 83,
            "id": "km",
            "name": "Central Khmer"
        },
        "Lao": {
            "code": 84,
            "id": "lo",
            "name": "Lao"
        },
        "Galician": {
            "code": 86,
            "id": "gl",
            "name": "Galician"
        },
        "Konkani (macrolanguage)": {
            "code": 87,
            "id": "kok",
            "name": "Konkani (macrolanguage)"
        },
        "Syriac": {
            "code": 90,
            "id": "syr",
            "name": "Syriac"
        },
        "Sinhala": {
            "code": 91,
            "id": "si",
            "name": "Sinhala"
        },
        "Inuktitut": {
            "code": 93,
            "id": "iu",
            "name": "Inuktitut"
        },
        "Amharic": {
            "code": 94,
            "id": "am",
            "name": "Amharic"
        },
        "Central Atlas Tamazight": {
            "code": 95,
            "id": "tzm",
            "name": "Central Atlas Tamazight"
        },
        "Nepali": {
            "code": 97,
            "id": "ne",
            "name": "Nepali"
        },
        "Western Frisian": {
            "code": 98,
            "id": "fy",
            "name": "Western Frisian"
        },
        "Pushto": {
            "code": 99,
            "id": "ps",
            "name": "Pushto"
        },
        "Filipino": {
            "code": 100,
            "id": "fil",
            "name": "Filipino"
        },
        "Dhivehi": {
            "code": 101,
            "id": "dv",
            "name": "Dhivehi"
        },
        "Hausa": {
            "code": 104,
            "id": "ha",
            "name": "Hausa"
        },
        "Yoruba": {
            "code": 106,
            "id": "yo",
            "name": "Yoruba"
        },
        "Cusco Quechua": {
            "code": 107,
            "id": "quz",
            "name": "Cusco Quechua"
        },
        "Pedi": {
            "code": 108,
            "id": "nso",
            "name": "Pedi"
        },
        "Bashkir": {
            "code": 109,
            "id": "ba",
            "name": "Bashkir"
        },
        "Luxembourgish": {
            "code": 110,
            "id": "lb",
            "name": "Luxembourgish"
        },
        "Kalaallisut": {
            "code": 111,
            "id": "kl",
            "name": "Kalaallisut"
        },
        "Igbo": {
            "code": 112,
            "id": "ig",
            "name": "Igbo"
        },
        "Sichuan Yi": {
            "code": 120,
            "id": "ii",
            "name": "Sichuan Yi"
        },
        "Mapudungun": {
            "code": 122,
            "id": "arn",
            "name": "Mapudungun"
        },
        "Mohawk": {
            "code": 124,
            "id": "moh",
            "name": "Mohawk"
        },
        "Breton": {
            "code": 126,
            "id": "br",
            "name": "Breton"
        },
        "Uighur": {
            "code": 128,
            "id": "ug",
            "name": "Uighur"
        },
        "Maori": {
            "code": 129,
            "id": "mi",
            "name": "Maori"
        },
        "Occitan (post 1500)": {
            "code": 130,
            "id": "oc",
            "name": "Occitan (post 1500)"
        },
        "Corsican": {
            "code": 131,
            "id": "co",
            "name": "Corsican"
        },
        "Swiss German": {
            "code": 132,
            "id": "gsw",
            "name": "Swiss German"
        },
        "Yakut": {
            "code": 133,
            "id": "sah",
            "name": "Yakut"
        },
        "Guatemala": {
            "code": 1158,
            "id": "qut-GT",
            "name": "Guatemala"
        },
        "Kinyarwanda": {
            "code": 135,
            "id": "rw",
            "name": "Kinyarwanda"
        },
        "Wolof": {
            "code": 136,
            "id": "wo",
            "name": "Wolof"
        },
        "Dari": {
            "code": 140,
            "id": "prs",
            "name": "Dari"
        },
        "Scottish Gaelic": {
            "code": 145,
            "id": "gd",
            "name": "Scottish Gaelic"
        },
        "Arabic, Saudi Arabia": {
            "code": 1025,
            "id": "ar-SA",
            "name": "Arabic, Saudi Arabia"
        },
        "Bulgarian, Bulgaria": {
            "code": 1026,
            "id": "bg-BG",
            "name": "Bulgarian, Bulgaria"
        },
        "Catalan, Spain": {
            "code": 1027,
            "id": "ca-ES",
            "name": "Catalan, Spain"
        },
        "Chinese, Taiwan, Province of China": {
            "code": 1028,
            "id": "zh-TW",
            "name": "Chinese, Taiwan, Province of China"
        },
        "Czech, Czech Republic": {
            "code": 1029,
            "id": "cs-CZ",
            "name": "Czech, Czech Republic"
        },
        "Danish, Denmark": {
            "code": 1030,
            "id": "da-DK",
            "name": "Danish, Denmark"
        },
        "German, Germany": {
            "code": 1031,
            "id": "de-DE",
            "name": "German, Germany"
        },
        "Modern Greek (1453-), Greece": {
            "code": 1032,
            "id": "el-GR",
            "name": "Modern Greek (1453-), Greece"
        },
        "English, United States": {
            "code": 1033,
            "id": "en-US",
            "name": "English, United States"
        },
        "Finnish, Finland": {
            "code": 1035,
            "id": "fi-FI",
            "name": "Finnish, Finland"
        },
        "French, France": {
            "code": 1036,
            "id": "fr-FR",
            "name": "French, France"
        },
        "Hebrew, Israel": {
            "code": 1037,
            "id": "he-IL",
            "name": "Hebrew, Israel"
        },
        "Hungarian, Hungary": {
            "code": 1038,
            "id": "hu-HU",
            "name": "Hungarian, Hungary"
        },
        "Icelandic, Iceland": {
            "code": 1039,
            "id": "is-IS",
            "name": "Icelandic, Iceland"
        },
        "Italian, Italy": {
            "code": 1040,
            "id": "it-IT",
            "name": "Italian, Italy"
        },
        "Japanese, Japan": {
            "code": 1041,
            "id": "ja-JP",
            "name": "Japanese, Japan"
        },
        "Korean, Republic of Korea": {
            "code": 1042,
            "id": "ko-KR",
            "name": "Korean, Republic of Korea"
        },
        "Dutch, Netherlands": {
            "code": 1043,
            "id": "nl-NL",
            "name": "Dutch, Netherlands"
        },
        "Norwegian Bokmål, Norway": {
            "code": 1044,
            "id": "nb-NO",
            "name": "Norwegian Bokmål, Norway"
        },
        "Polish, Poland": {
            "code": 1045,
            "id": "pl-PL",
            "name": "Polish, Poland"
        },
        "Portuguese, Brazil": {
            "code": 1046,
            "id": "pt-BR",
            "name": "Portuguese, Brazil"
        },
        "Romansh, Switzerland": {
            "code": 1047,
            "id": "rm-CH",
            "name": "Romansh, Switzerland"
        },
        "Romanian, Romania": {
            "code": 1048,
            "id": "ro-RO",
            "name": "Romanian, Romania"
        },
        "Russian, Russian Federation": {
            "code": 1049,
            "id": "ru-RU",
            "name": "Russian, Russian Federation"
        },
        "Croatian, Croatia": {
            "code": 1050,
            "id": "hr-HR",
            "name": "Croatian, Croatia"
        },
        "Slovak, Slovakia": {
            "code": 1051,
            "id": "sk-SK",
            "name": "Slovak, Slovakia"
        },
        "Albanian, Albania": {
            "code": 1052,
            "id": "sq-AL",
            "name": "Albanian, Albania"
        },
        "Swedish, Sweden": {
            "code": 1053,
            "id": "sv-SE",
            "name": "Swedish, Sweden"
        },
        "Thai, Thailand": {
            "code": 1054,
            "id": "th-TH",
            "name": "Thai, Thailand"
        },
        "Turkish, Turkey": {
            "code": 1055,
            "id": "tr-TR",
            "name": "Turkish, Turkey"
        },
        "Urdu, Pakistan": {
            "code": 1056,
            "id": "ur-PK",
            "name": "Urdu, Pakistan"
        },
        "Indonesian, Indonesia": {
            "code": 1057,
            "id": "id-ID",
            "name": "Indonesian, Indonesia"
        },
        "Ukrainian, Ukraine": {
            "code": 1058,
            "id": "uk-UA",
            "name": "Ukrainian, Ukraine"
        },
        "Belarusian, Belarus": {
            "code": 1059,
            "id": "be-BY",
            "name": "Belarusian, Belarus"
        },
        "Slovenian, Slovenia": {
            "code": 1060,
            "id": "sl-SI",
            "name": "Slovenian, Slovenia"
        },
        "Estonian, Estonia": {
            "code": 1061,
            "id": "et-EE",
            "name": "Estonian, Estonia"
        },
        "Latvian, Latvia": {
            "code": 1062,
            "id": "lv-LV",
            "name": "Latvian, Latvia"
        },
        "Lithuanian, Lithuania": {
            "code": 1063,
            "id": "lt-LT",
            "name": "Lithuanian, Lithuania"
        },
        "Tajik, Cyrillic, Tajikistan": {
            "code": 1064,
            "id": "tg-Cyrl-TJ",
            "name": "Tajik, Cyrillic, Tajikistan"
        },
        "Persian, Islamic Republic of Iran": {
            "code": 1065,
            "id": "fa-IR",
            "name": "Persian, Islamic Republic of Iran"
        },
        "Vietnamese, Viet Nam": {
            "code": 1066,
            "id": "vi-VN",
            "name": "Vietnamese, Viet Nam"
        },
        "Armenian, Armenia": {
            "code": 1067,
            "id": "hy-AM",
            "name": "Armenian, Armenia"
        },
        "Azerbaijani, Latin, Azerbaijan": {
            "code": 1068,
            "id": "az-Latn-AZ",
            "name": "Azerbaijani, Latin, Azerbaijan"
        },
        "Basque, Spain": {
            "code": 1069,
            "id": "eu-ES",
            "name": "Basque, Spain"
        },
        "Sorbian languages, Germany": {
            "code": 1070,
            "id": "wen-DE",
            "name": "Sorbian languages, Germany"
        },
        "Macedonian, The Former Yugoslav Republic of Macedonia": {
            "code": 1071,
            "id": "mk-MK",
            "name": "Macedonian, The Former Yugoslav Republic of Macedonia"
        },
        "Southern Sotho, South Africa": {
            "code": 1072,
            "id": "st-ZA",
            "name": "Southern Sotho, South Africa"
        },
        "Tsonga, South Africa": {
            "code": 1073,
            "id": "ts-ZA",
            "name": "Tsonga, South Africa"
        },
        "Tswana, South Africa": {
            "code": 1074,
            "id": "tn-ZA",
            "name": "Tswana, South Africa"
        },
        "South Africa": {
            "code": 1075,
            "id": "ven-ZA",
            "name": "South Africa"
        },
        "Xhosa, South Africa": {
            "code": 1076,
            "id": "xh-ZA",
            "name": "Xhosa, South Africa"
        },
        "Zulu, South Africa": {
            "code": 1077,
            "id": "zu-ZA",
            "name": "Zulu, South Africa"
        },
        "Afrikaans, South Africa": {
            "code": 1078,
            "id": "af-ZA",
            "name": "Afrikaans, South Africa"
        },
        "Georgian, Georgia": {
            "code": 1079,
            "id": "ka-GE",
            "name": "Georgian, Georgia"
        },
        "Faroese, Faroe Islands": {
            "code": 1080,
            "id": "fo-FO",
            "name": "Faroese, Faroe Islands"
        },
        "Hindi, India": {
            "code": 1081,
            "id": "hi-IN",
            "name": "Hindi, India"
        },
        "Maltese, Malta": {
            "code": 1082,
            "id": "mt-MT",
            "name": "Maltese, Malta"
        },
        "Northern Sami, Norway": {
            "code": 1083,
            "id": "se-NO",
            "name": "Northern Sami, Norway"
        },
        "Malay (macrolanguage), Malaysia": {
            "code": 1086,
            "id": "ms-MY",
            "name": "Malay (macrolanguage), Malaysia"
        },
        "Kazakh, Kazakhstan": {
            "code": 1087,
            "id": "kk-KZ",
            "name": "Kazakh, Kazakhstan"
        },
        "Kirghiz, Kyrgyzstan": {
            "code": 1088,
            "id": "ky-KG",
            "name": "Kirghiz, Kyrgyzstan"
        },
        "Swahili (macrolanguage), Kenya": {
            "code": 1089,
            "id": "sw-KE",
            "name": "Swahili (macrolanguage), Kenya"
        },
        "Turkmen, Turkmenistan": {
            "code": 1090,
            "id": "tk-TM",
            "name": "Turkmen, Turkmenistan"
        },
        "Uzbek, Latin, Uzbekistan": {
            "code": 1091,
            "id": "uz-Latn-UZ",
            "name": "Uzbek, Latin, Uzbekistan"
        },
        "Tatar, Russian Federation": {
            "code": 1092,
            "id": "tt-RU",
            "name": "Tatar, Russian Federation"
        },
        "Bengali, India": {
            "code": 1093,
            "id": "bn-IN",
            "name": "Bengali, India"
        },
        "Panjabi, India": {
            "code": 1094,
            "id": "pa-IN",
            "name": "Panjabi, India"
        },
        "Gujarati, India": {
            "code": 1095,
            "id": "gu-IN",
            "name": "Gujarati, India"
        },
        "Oriya, India": {
            "code": 1096,
            "id": "or-IN",
            "name": "Oriya, India"
        },
        "Tamil, India": {
            "code": 1097,
            "id": "ta-IN",
            "name": "Tamil, India"
        },
        "Telugu, India": {
            "code": 1098,
            "id": "te-IN",
            "name": "Telugu, India"
        },
        "Kannada, India": {
            "code": 1099,
            "id": "kn-IN",
            "name": "Kannada, India"
        },
        "Malayalam, India": {
            "code": 1100,
            "id": "ml-IN",
            "name": "Malayalam, India"
        },
        "Assamese, India": {
            "code": 1101,
            "id": "as-IN",
            "name": "Assamese, India"
        },
        "Marathi, India": {
            "code": 1102,
            "id": "mr-IN",
            "name": "Marathi, India"
        },
        "Sanskrit, India": {
            "code": 1103,
            "id": "sa-IN",
            "name": "Sanskrit, India"
        },
        "Mongolian, Mongolia": {
            "code": 1104,
            "id": "mn-MN",
            "name": "Mongolian, Mongolia"
        },
        "Tibetan, China": {
            "code": 1105,
            "id": "bo-CN",
            "name": "Tibetan, China"
        },
        "Welsh, United Kingdom": {
            "code": 1106,
            "id": "cy-GB",
            "name": "Welsh, United Kingdom"
        },
        "Central Khmer, Cambodia": {
            "code": 1107,
            "id": "km-KH",
            "name": "Central Khmer, Cambodia"
        },
        "Lao, Lao People’s Democratic Republic": {
            "code": 1108,
            "id": "lo-LA",
            "name": "Lao, Lao People’s Democratic Republic"
        },
        "Burmese, Myanmar": {
            "code": 1109,
            "id": "my-MM",
            "name": "Burmese, Myanmar"
        },
        "Galician, Spain": {
            "code": 1110,
            "id": "gl-ES",
            "name": "Galician, Spain"
        },
        "Konkani (macrolanguage), India": {
            "code": 1111,
            "id": "kok-IN",
            "name": "Konkani (macrolanguage), India"
        },
        "Manipuri": {
            "code": 1112,
            "id": "mni",
            "name": "Manipuri"
        },
        "Sindhi, India": {
            "code": 1113,
            "id": "sd-IN",
            "name": "Sindhi, India"
        },
        "Syriac, Syrian Arab Republic": {
            "code": 1114,
            "id": "syr-SY",
            "name": "Syriac, Syrian Arab Republic"
        },
        "Sinhala, Sri Lanka": {
            "code": 1115,
            "id": "si-LK",
            "name": "Sinhala, Sri Lanka"
        },
        "Cherokee, United States": {
            "code": 1116,
            "id": "chr-US",
            "name": "Cherokee, United States"
        },
        "Inuktitut, Unified Canadian Aboriginal Syllabics, Canada": {
            "code": 1117,
            "id": "iu-Cans-CA",
            "name": "Inuktitut, Unified Canadian Aboriginal Syllabics, Canada"
        },
        "Amharic, Ethiopia": {
            "code": 1118,
            "id": "am-ET",
            "name": "Amharic, Ethiopia"
        },
        "Tamanaku": {
            "code": 1119,
            "id": "tmz",
            "name": "Tamanaku"
        },
        "Nepali, Nepal": {
            "code": 1121,
            "id": "ne-NP",
            "name": "Nepali, Nepal"
        },
        "Western Frisian, Netherlands": {
            "code": 1122,
            "id": "fy-NL",
            "name": "Western Frisian, Netherlands"
        },
        "Pushto, Afghanistan": {
            "code": 1123,
            "id": "ps-AF",
            "name": "Pushto, Afghanistan"
        },
        "Filipino, Philippines": {
            "code": 1124,
            "id": "fil-PH",
            "name": "Filipino, Philippines"
        },
        "Dhivehi, Maldives": {
            "code": 1125,
            "id": "dv-MV",
            "name": "Dhivehi, Maldives"
        },
        "Bini, Nigeria": {
            "code": 1126,
            "id": "bin-NG",
            "name": "Bini, Nigeria"
        },
        "Nigerian Fulfulde, Nigeria": {
            "code": 1127,
            "id": "fuv-NG",
            "name": "Nigerian Fulfulde, Nigeria"
        },
        "Hausa, Latin, Nigeria": {
            "code": 1128,
            "id": "ha-Latn-NG",
            "name": "Hausa, Latin, Nigeria"
        },
        "Ibibio, Nigeria": {
            "code": 1129,
            "id": "ibb-NG",
            "name": "Ibibio, Nigeria"
        },
        "Yoruba, Nigeria": {
            "code": 1130,
            "id": "yo-NG",
            "name": "Yoruba, Nigeria"
        },
        "Cusco Quechua, Bolivia": {
            "code": 1131,
            "id": "quz-BO",
            "name": "Cusco Quechua, Bolivia"
        },
        "Pedi, South Africa": {
            "code": 1132,
            "id": "nso-ZA",
            "name": "Pedi, South Africa"
        },
        "Bashkir, Russian Federation": {
            "code": 1133,
            "id": "ba-RU",
            "name": "Bashkir, Russian Federation"
        },
        "Luxembourgish, Luxembourg": {
            "code": 1134,
            "id": "lb-LU",
            "name": "Luxembourgish, Luxembourg"
        },
        "Kalaallisut, Greenland": {
            "code": 1135,
            "id": "kl-GL",
            "name": "Kalaallisut, Greenland"
        },
        "Igbo, Nigeria": {
            "code": 1136,
            "id": "ig-NG",
            "name": "Igbo, Nigeria"
        },
        "Kanuri, Nigeria": {
            "code": 1137,
            "id": "kr-NG",
            "name": "Kanuri, Nigeria"
        },
        "West Central Oromo, Ethiopia": {
            "code": 1138,
            "id": "gaz-ET",
            "name": "West Central Oromo, Ethiopia"
        },
        "Tigrinya, Eritrea": {
            "code": 1139,
            "id": "ti-ER",
            "name": "Tigrinya, Eritrea"
        },
        "Guarani, Paraguay": {
            "code": 1140,
            "id": "gn-PY",
            "name": "Guarani, Paraguay"
        },
        "Hawaiian, United States": {
            "code": 1141,
            "id": "haw-US",
            "name": "Hawaiian, United States"
        },
        "Somali, Somalia": {
            "code": 1143,
            "id": "so-SO",
            "name": "Somali, Somalia"
        },
        "Sichuan Yi, China": {
            "code": 1144,
            "id": "ii-CN",
            "name": "Sichuan Yi, China"
        },
        "Papiamento, Netherlands Antilles": {
            "code": 1145,
            "id": "pap-AN",
            "name": "Papiamento, Netherlands Antilles"
        },
        "Mapudungun, Chile": {
            "code": 1146,
            "id": "arn-CL",
            "name": "Mapudungun, Chile"
        },
        "Mohawk, Canada": {
            "code": 1148,
            "id": "moh-CA",
            "name": "Mohawk, Canada"
        },
        "Breton, France": {
            "code": 1150,
            "id": "br-FR",
            "name": "Breton, France"
        },
        "Uighur, China": {
            "code": 1152,
            "id": "ug-CN",
            "name": "Uighur, China"
        },
        "Maori, New Zealand": {
            "code": 1153,
            "id": "mi-NZ",
            "name": "Maori, New Zealand"
        },
        "Occitan (post 1500), France": {
            "code": 1154,
            "id": "oc-FR",
            "name": "Occitan (post 1500), France"
        },
        "Corsican, France": {
            "code": 1155,
            "id": "co-FR",
            "name": "Corsican, France"
        },
        "Swiss German, France": {
            "code": 1156,
            "id": "gsw-FR",
            "name": "Swiss German, France"
        },
        "Yakut, Russian Federation": {
            "code": 1157,
            "id": "sah-RU",
            "name": "Yakut, Russian Federation"
        },
        "Kinyarwanda, Rwanda": {
            "code": 1159,
            "id": "rw-RW",
            "name": "Kinyarwanda, Rwanda"
        },
        "Wolof, Senegal": {
            "code": 1160,
            "id": "wo-SN",
            "name": "Wolof, Senegal"
        },
        "Dari, Afghanistan": {
            "code": 1164,
            "id": "prs-AF",
            "name": "Dari, Afghanistan"
        },
        "Plateau Malagasy, Madagascar": {
            "code": 1165,
            "id": "plt-MG",
            "name": "Plateau Malagasy, Madagascar"
        },
        "Scottish Gaelic, United Kingdom": {
            "code": 1169,
            "id": "gd-GB",
            "name": "Scottish Gaelic, United Kingdom"
        },
        "Arabic, Iraq": {
            "code": 2049,
            "id": "ar-IQ",
            "name": "Arabic, Iraq"
        },
        "Chinese, China": {
            "code": 2052,
            "id": "zh-CN",
            "name": "Chinese, China"
        },
        "German, Switzerland": {
            "code": 2055,
            "id": "de-CH",
            "name": "German, Switzerland"
        },
        "English, United Kingdom": {
            "code": 2057,
            "id": "en-GB",
            "name": "English, United Kingdom"
        },
        "Spanish, Mexico": {
            "code": 2058,
            "id": "es-MX",
            "name": "Spanish, Mexico"
        },
        "French, Belgium": {
            "code": 2060,
            "id": "fr-BE",
            "name": "French, Belgium"
        },
        "Italian, Switzerland": {
            "code": 2064,
            "id": "it-CH",
            "name": "Italian, Switzerland"
        },
        "Dutch, Belgium": {
            "code": 2067,
            "id": "nl-BE",
            "name": "Dutch, Belgium"
        },
        "Norwegian Nynorsk, Norway": {
            "code": 2068,
            "id": "nn-NO",
            "name": "Norwegian Nynorsk, Norway"
        },
        "Portuguese, Portugal": {
            "code": 2070,
            "id": "pt-PT",
            "name": "Portuguese, Portugal"
        },
        "Romanian, Macao": {
            "code": 2072,
            "id": "ro-MO",
            "name": "Romanian, Macao"
        },
        "Russian, Macao": {
            "code": 2073,
            "id": "ru-MO",
            "name": "Russian, Macao"
        },
        "Serbian, Latin, Serbia and Montenegro": {
            "code": 2074,
            "id": "sr-Latn-CS",
            "name": "Serbian, Latin, Serbia and Montenegro"
        },
        "Swedish, Finland": {
            "code": 2077,
            "id": "sv-FI",
            "name": "Swedish, Finland"
        },
        "Urdu, India": {
            "code": 2080,
            "id": "ur-IN",
            "name": "Urdu, India"
        },
        "Azerbaijani, Cyrillic, Azerbaijan": {
            "code": 2092,
            "id": "az-Cyrl-AZ",
            "name": "Azerbaijani, Cyrillic, Azerbaijan"
        },
        "Lower Sorbian, Germany": {
            "code": 2094,
            "id": "dsb-DE",
            "name": "Lower Sorbian, Germany"
        },
        "Northern Sami, Sweden": {
            "code": 2107,
            "id": "se-SE",
            "name": "Northern Sami, Sweden"
        },
        "Irish, Ireland": {
            "code": 2108,
            "id": "ga-IE",
            "name": "Irish, Ireland"
        },
        "Malay (macrolanguage), Brunei Darussalam": {
            "code": 2110,
            "id": "ms-BN",
            "name": "Malay (macrolanguage), Brunei Darussalam"
        },
        "Uzbek, Cyrillic, Uzbekistan": {
            "code": 2115,
            "id": "uz-Cyrl-UZ",
            "name": "Uzbek, Cyrillic, Uzbekistan"
        },
        "Bengali, Bangladesh": {
            "code": 2117,
            "id": "bn-BD",
            "name": "Bengali, Bangladesh"
        },
        "Panjabi, Pakistan": {
            "code": 2118,
            "id": "pa-PK",
            "name": "Panjabi, Pakistan"
        },
        "Mongolian, Mongolian, China": {
            "code": 2128,
            "id": "mn-Mong-CN",
            "name": "Mongolian, Mongolian, China"
        },
        "Tibetan, Bhutan": {
            "code": 2129,
            "id": "bo-BT",
            "name": "Tibetan, Bhutan"
        },
        "Sindhi, Pakistan": {
            "code": 2137,
            "id": "sd-PK",
            "name": "Sindhi, Pakistan"
        },
        "Inuktitut, Latin, Canada": {
            "code": 2141,
            "id": "iu-Latn-CA",
            "name": "Inuktitut, Latin, Canada"
        },
        "Central Atlas Tamazight, Latin, Algeria": {
            "code": 2143,
            "id": "tzm-Latn-DZ",
            "name": "Central Atlas Tamazight, Latin, Algeria"
        },
        "Nepali, India": {
            "code": 2145,
            "id": "ne-IN",
            "name": "Nepali, India"
        },
        "Cusco Quechua, Ecuador": {
            "code": 2155,
            "id": "quz-EC",
            "name": "Cusco Quechua, Ecuador"
        },
        "Tigrinya, Ethiopia": {
            "code": 2163,
            "id": "ti-ET",
            "name": "Tigrinya, Ethiopia"
        },
        "Arabic, Egypt": {
            "code": 3073,
            "id": "ar-EG",
            "name": "Arabic, Egypt"
        },
        "Chinese, Hong Kong": {
            "code": 3076,
            "id": "zh-HK",
            "name": "Chinese, Hong Kong"
        },
        "German, Austria": {
            "code": 3079,
            "id": "de-AT",
            "name": "German, Austria"
        },
        "English, Australia": {
            "code": 3081,
            "id": "en-AU",
            "name": "English, Australia"
        },
        "Spanish, Spain": {
            "code": 3082,
            "id": "es-ES",
            "name": "Spanish, Spain"
        },
        "French, Canada": {
            "code": 3084,
            "id": "fr-CA",
            "name": "French, Canada"
        },
        "Serbian, Cyrillic, Serbia and Montenegro": {
            "code": 3098,
            "id": "sr-Cyrl-CS",
            "name": "Serbian, Cyrillic, Serbia and Montenegro"
        },
        "Northern Sami, Finland": {
            "code": 3131,
            "id": "se-FI",
            "name": "Northern Sami, Finland"
        },
        "Tamanaku, Morocco": {
            "code": 3167,
            "id": "tmz-MA",
            "name": "Tamanaku, Morocco"
        },
        "Cusco Quechua, Peru": {
            "code": 3179,
            "id": "quz-PE",
            "name": "Cusco Quechua, Peru"
        },
        "Arabic, Libyan Arab Jamahiriya": {
            "code": 4097,
            "id": "ar-LY",
            "name": "Arabic, Libyan Arab Jamahiriya"
        },
        "Chinese, Singapore": {
            "code": 4100,
            "id": "zh-SG",
            "name": "Chinese, Singapore"
        },
        "German, Luxembourg": {
            "code": 4103,
            "id": "de-LU",
            "name": "German, Luxembourg"
        },
        "English, Canada": {
            "code": 4105,
            "id": "en-CA",
            "name": "English, Canada"
        },
        "Spanish, Guatemala": {
            "code": 4106,
            "id": "es-GT",
            "name": "Spanish, Guatemala"
        },
        "French, Switzerland": {
            "code": 4108,
            "id": "fr-CH",
            "name": "French, Switzerland"
        },
        "Croatian, Bosnia and Herzegovina": {
            "code": 4122,
            "id": "hr-BA",
            "name": "Croatian, Bosnia and Herzegovina"
        },
        "Lule Sami, Norway": {
            "code": 4155,
            "id": "smj-NO",
            "name": "Lule Sami, Norway"
        },
        "Arabic, Algeria": {
            "code": 5121,
            "id": "ar-DZ",
            "name": "Arabic, Algeria"
        },
        "Chinese, Macao": {
            "code": 5124,
            "id": "zh-MO",
            "name": "Chinese, Macao"
        },
        "German, Liechtenstein": {
            "code": 5127,
            "id": "de-LI",
            "name": "German, Liechtenstein"
        },
        "English, New Zealand": {
            "code": 5129,
            "id": "en-NZ",
            "name": "English, New Zealand"
        },
        "Spanish, Costa Rica": {
            "code": 5130,
            "id": "es-CR",
            "name": "Spanish, Costa Rica"
        },
        "French, Luxembourg": {
            "code": 5132,
            "id": "fr-LU",
            "name": "French, Luxembourg"
        },
        "Bosnian, Latin, Bosnia and Herzegovina": {
            "code": 5146,
            "id": "bs-Latn-BA",
            "name": "Bosnian, Latin, Bosnia and Herzegovina"
        },
        "Lule Sami, Sweden": {
            "code": 5179,
            "id": "smj-SE",
            "name": "Lule Sami, Sweden"
        },
        "Arabic, Morocco": {
            "code": 6145,
            "id": "ar-MA",
            "name": "Arabic, Morocco"
        },
        "English, Ireland": {
            "code": 6153,
            "id": "en-IE",
            "name": "English, Ireland"
        },
        "Spanish, Panama": {
            "code": 6154,
            "id": "es-PA",
            "name": "Spanish, Panama"
        },
        "French, Monaco": {
            "code": 6156,
            "id": "fr-MC",
            "name": "French, Monaco"
        },
        "Serbian, Latin, Bosnia and Herzegovina": {
            "code": 6170,
            "id": "sr-Latn-BA",
            "name": "Serbian, Latin, Bosnia and Herzegovina"
        },
        "Southern Sami, Norway": {
            "code": 6203,
            "id": "sma-NO",
            "name": "Southern Sami, Norway"
        },
        "Arabic, Tunisia": {
            "code": 7169,
            "id": "ar-TN",
            "name": "Arabic, Tunisia"
        },
        "English, South Africa": {
            "code": 7177,
            "id": "en-ZA",
            "name": "English, South Africa"
        },
        "Spanish, Dominican Republic": {
            "code": 7178,
            "id": "es-DO",
            "name": "Spanish, Dominican Republic"
        },
        "Serbian, Cyrillic, Bosnia and Herzegovina": {
            "code": 7194,
            "id": "sr-Cyrl-BA",
            "name": "Serbian, Cyrillic, Bosnia and Herzegovina"
        },
        "Southern Sami, Sweden": {
            "code": 7227,
            "id": "sma-SE",
            "name": "Southern Sami, Sweden"
        },
        "Arabic, Oman": {
            "code": 8193,
            "id": "ar-OM",
            "name": "Arabic, Oman"
        },
        "English, Jamaica": {
            "code": 8201,
            "id": "en-JM",
            "name": "English, Jamaica"
        },
        "Spanish, Venezuela": {
            "code": 8202,
            "id": "es-VE",
            "name": "Spanish, Venezuela"
        },
        "French, Réunion": {
            "code": 8204,
            "id": "fr-RE",
            "name": "French, Réunion"
        },
        "Bosnian, Cyrillic, Bosnia and Herzegovina": {
            "code": 8218,
            "id": "bs-Cyrl-BA",
            "name": "Bosnian, Cyrillic, Bosnia and Herzegovina"
        },
        "Skolt Sami, Finland": {
            "code": 8251,
            "id": "sms-FI",
            "name": "Skolt Sami, Finland"
        },
        "Arabic, Yemen": {
            "code": 9217,
            "id": "ar-YE",
            "name": "Arabic, Yemen"
        },
        "Spanish, Colombia": {
            "code": 9226,
            "id": "es-CO",
            "name": "Spanish, Colombia"
        },
        "French, Congo": {
            "code": 9228,
            "id": "fr-CG",
            "name": "French, Congo"
        },
        "Serbian, Latin, Serbia": {
            "code": 9242,
            "id": "sr-Latn-RS",
            "name": "Serbian, Latin, Serbia"
        },
        "Inari Sami, Finland": {
            "code": 9275,
            "id": "smn-FI",
            "name": "Inari Sami, Finland"
        },
        "Arabic, Syrian Arab Republic": {
            "code": 10241,
            "id": "ar-SY",
            "name": "Arabic, Syrian Arab Republic"
        },
        "English, Belize": {
            "code": 10249,
            "id": "en-BZ",
            "name": "English, Belize"
        },
        "Spanish, Peru": {
            "code": 10250,
            "id": "es-PE",
            "name": "Spanish, Peru"
        },
        "French, Senegal": {
            "code": 10252,
            "id": "fr-SN",
            "name": "French, Senegal"
        },
        "Serbian, Cyrillic, Serbia": {
            "code": 10266,
            "id": "sr-Cyrl-RS",
            "name": "Serbian, Cyrillic, Serbia"
        },
        "Arabic, Jordan": {
            "code": 11265,
            "id": "ar-JO",
            "name": "Arabic, Jordan"
        },
        "English, Trinidad and Tobago": {
            "code": 11273,
            "id": "en-TT",
            "name": "English, Trinidad and Tobago"
        },
        "Spanish, Argentina": {
            "code": 11274,
            "id": "es-AR",
            "name": "Spanish, Argentina"
        },
        "French, Cameroon": {
            "code": 11276,
            "id": "fr-CM",
            "name": "French, Cameroon"
        },
        "Serbian, Latin, Montenegro": {
            "code": 11290,
            "id": "sr-Latn-ME",
            "name": "Serbian, Latin, Montenegro"
        },
        "Arabic, Lebanon": {
            "code": 12289,
            "id": "ar-LB",
            "name": "Arabic, Lebanon"
        },
        "English, Zimbabwe": {
            "code": 12297,
            "id": "en-ZW",
            "name": "English, Zimbabwe"
        },
        "Spanish, Ecuador": {
            "code": 12298,
            "id": "es-EC",
            "name": "Spanish, Ecuador"
        },
        "French, Côte d’Ivoire": {
            "code": 12300,
            "id": "fr-CI",
            "name": "French, Côte d’Ivoire"
        },
        "Serbian, Cyrillic, Montenegro": {
            "code": 12314,
            "id": "sr-Cyrl-ME",
            "name": "Serbian, Cyrillic, Montenegro"
        },
        "Arabic, Kuwait": {
            "code": 13313,
            "id": "ar-KW",
            "name": "Arabic, Kuwait"
        },
        "English, Philippines": {
            "code": 13321,
            "id": "en-PH",
            "name": "English, Philippines"
        },
        "Spanish, Chile": {
            "code": 13322,
            "id": "es-CL",
            "name": "Spanish, Chile"
        },
        "French, Mali": {
            "code": 13324,
            "id": "fr-ML",
            "name": "French, Mali"
        },
        "Arabic, United Arab Emirates": {
            "code": 14337,
            "id": "ar-AE",
            "name": "Arabic, United Arab Emirates"
        },
        "English, Indonesia": {
            "code": 14345,
            "id": "en-ID",
            "name": "English, Indonesia"
        },
        "Spanish, Uruguay": {
            "code": 14346,
            "id": "es-UY",
            "name": "Spanish, Uruguay"
        },
        "French, Morocco": {
            "code": 14348,
            "id": "fr-MA",
            "name": "French, Morocco"
        },
        "Arabic, Bahrain": {
            "code": 15361,
            "id": "ar-BH",
            "name": "Arabic, Bahrain"
        },
        "English, Hong Kong": {
            "code": 15369,
            "id": "en-HK",
            "name": "English, Hong Kong"
        },
        "Spanish, Paraguay": {
            "code": 15370,
            "id": "es-PY",
            "name": "Spanish, Paraguay"
        },
        "French, Haiti": {
            "code": 15372,
            "id": "fr-HT",
            "name": "French, Haiti"
        },
        "Arabic, Qatar": {
            "code": 16385,
            "id": "ar-QA",
            "name": "Arabic, Qatar"
        },
        "English, India": {
            "code": 16393,
            "id": "en-IN",
            "name": "English, India"
        },
        "Spanish, Bolivia": {
            "code": 16394,
            "id": "es-BO",
            "name": "Spanish, Bolivia"
        },
        "English, Malaysia": {
            "code": 17417,
            "id": "en-MY",
            "name": "English, Malaysia"
        },
        "Spanish, El Salvador": {
            "code": 17418,
            "id": "es-SV",
            "name": "Spanish, El Salvador"
        },
        "English, Singapore": {
            "code": 18441,
            "id": "en-SG",
            "name": "English, Singapore"
        },
        "Spanish, Honduras": {
            "code": 18442,
            "id": "es-HN",
            "name": "Spanish, Honduras"
        },
        "Spanish, Nicaragua": {
            "code": 19466,
            "id": "es-NI",
            "name": "Spanish, Nicaragua"
        },
        "Spanish, Puerto Rico": {
            "code": 20490,
            "id": "es-PR",
            "name": "Spanish, Puerto Rico"
        },
        "Spanish, United States": {
            "code": 21514,
            "id": "es-US",
            "name": "Spanish, United States"
        },
        "Bosnian, Cyrillic": {
            "code": 25626,
            "id": "bs-Cyrl",
            "name": "Bosnian, Cyrillic"
        },
        "Bosnian, Latin": {
            "code": 26650,
            "id": "bs-Latn",
            "name": "Bosnian, Latin"
        },
        "Serbian, Cyrillic": {
            "code": 27674,
            "id": "sr-Cyrl",
            "name": "Serbian, Cyrillic"
        },
        "Serbian, Latin": {
            "code": 28698,
            "id": "sr-Latn",
            "name": "Serbian, Latin"
        },
        "Inari Sami": {
            "code": 28731,
            "id": "smn",
            "name": "Inari Sami"
        },
        "Azerbaijani, Cyrillic": {
            "code": 29740,
            "id": "az-Cyrl",
            "name": "Azerbaijani, Cyrillic"
        },
        "Skolt Sami": {
            "code": 29755,
            "id": "sms",
            "name": "Skolt Sami"
        },
        "Chinese": {
            "code": 30724,
            "id": "zh",
            "name": "Chinese"
        },
        "Norwegian Nynorsk": {
            "code": 30740,
            "id": "nn",
            "name": "Norwegian Nynorsk"
        },
        "Bosnian": {
            "code": 30746,
            "id": "bs",
            "name": "Bosnian"
        },
        "Azerbaijani, Latin": {
            "code": 30764,
            "id": "az-Latn",
            "name": "Azerbaijani, Latin"
        },
        "Southern Sami": {
            "code": 30779,
            "id": "sma",
            "name": "Southern Sami"
        },
        "Uzbek, Cyrillic": {
            "code": 30787,
            "id": "uz-Cyrl",
            "name": "Uzbek, Cyrillic"
        },
        "Mongolian, Cyrillic": {
            "code": 30800,
            "id": "mn-Cyrl",
            "name": "Mongolian, Cyrillic"
        },
        "Inuktitut, Unified Canadian Aboriginal Syllabics": {
            "code": 30813,
            "id": "iu-Cans",
            "name": "Inuktitut, Unified Canadian Aboriginal Syllabics"
        },
        "Chinese, Han (Traditional variant)": {
            "code": 31748,
            "id": "zh-Hant",
            "name": "Chinese, Han (Traditional variant)"
        },
        "Norwegian Bokmål": {
            "code": 31764,
            "id": "nb",
            "name": "Norwegian Bokmål"
        },
        "Serbian": {
            "code": 31770,
            "id": "sr",
            "name": "Serbian"
        },
        "Tajik, Cyrillic": {
            "code": 31784,
            "id": "tg-Cyrl",
            "name": "Tajik, Cyrillic"
        },
        "Lower Sorbian": {
            "code": 31790,
            "id": "dsb",
            "name": "Lower Sorbian"
        },
        "Lule Sami": {
            "code": 31803,
            "id": "smj",
            "name": "Lule Sami"
        },
        "Uzbek, Latin": {
            "code": 31811,
            "id": "uz-Latn",
            "name": "Uzbek, Latin"
        },
        "Mongolian, Mongolian": {
            "code": 31824,
            "id": "mn-Mong",
            "name": "Mongolian, Mongolian"
        },
        "Inuktitut, Latin": {
            "code": 31837,
            "id": "iu-Latn",
            "name": "Inuktitut, Latin"
        },
        "Central Atlas Tamazight, Latin": {
            "code": 31839,
            "id": "tzm-Latn",
            "name": "Central Atlas Tamazight, Latin"
        },
        "Hausa, Latin": {
            "code": 31848,
            "id": "ha-Latn",
            "name": "Hausa, Latin"
        }
    }
} as const;

export type IsoLangCode = keyof typeof iso_lang_codes.byCode;
export type IsoLangId = keyof typeof iso_lang_codes.byId;
export type IsoLangName = keyof typeof iso_lang_codes.byName;
export type IsoLang = typeof iso_lang_codes.byId[IsoLangId];

export function toIsoLangId(id: string): IsoLangId | undefined {
    if (iso_lang_codes.byId.hasOwnProperty(id)) {
        return id as IsoLangId;
    }
    const ids = Object.keys(iso_lang_codes.byId) as readonly IsoLangId[];
    const lowerCaseId = id.toLowerCase();
    return ids.find(langId => langId.toLowerCase() === lowerCaseId);
}

export function toBaseIsoLang(lang: IsoLang): IsoLang | undefined {
    const baseId = lang.id.split("-")[0];
    return iso_lang_codes.byId[baseId as IsoLangId] as IsoLang | undefined;
}

export const browserLanguage: IsoLangId | undefined = toIsoLangId(navigator.language);
export const browserLanguages: readonly IsoLangId[] = (navigator.languages ?? [navigator.language])
    .map(toIsoLangId)
    .filter(isNotUndefined);

globals({iso_lang_codes, toIsoLangId, toBaseIsoLang, browserLanguage, browserLanguages});
