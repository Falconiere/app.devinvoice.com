const currencies = [
  {
      "currency": "USD",
      "country": "United States",
      "flag": "🇺🇸",
      "code": "US"
  },
  {
      "currency": "EUR",
      "country": "Eurozone",
      "flag": "🇪🇺",
      "code": "EU"
  },
  {
      "currency": "JPY",
      "country": "Japan",
      "flag": "🇯🇵",
      "code": "JP"
  },
  {
      "currency": "GBP",
      "country": "United Kingdom",
      "flag": "🇬🇧",
      "code": "GB"
  },
  {
      "currency": "AUD",
      "country": "Australia",
      "flag": "🇦🇺",
      "code": "AU"
  },
  {
      "currency": "CAD",
      "country": "Canada",
      "flag": "🇨🇦",
      "code": "CA"
  },
  {
      "currency": "CHF",
      "country": "Switzerland",
      "flag": "🇨🇭",
      "code": "CH"
  },
  {
      "currency": "CNY",
      "country": "China",
      "flag": "🇨🇳",
      "code": "CN"
  },
  {
      "currency": "SEK",
      "country": "Sweden",
      "flag": "🇸🇪",
      "code": "SE"
  },
  {
      "currency": "NZD",
      "country": "New Zealand",
      "flag": "🇳🇿",
      "code": "NZ"
  },
  {
      "currency": "INR",
      "country": "India",
      "flag": "🇮🇳",
      "code": "IN"
  },
  {
      "currency": "BRL",
      "country": "Brazil",
      "flag": "🇧🇷",
      "code": "BR"
  },
  {
      "currency": "RUB",
      "country": "Russia",
      "flag": "🇷🇺",
      "code": "RU"
  },
  {
      "currency": "ZAR",
      "country": "South Africa",
      "flag": "🇿🇦",
      "code": "ZA"
  },
  {
      "currency": "MXN",
      "country": "Mexico",
      "flag": "🇲🇽",
      "code": "MX"
  },
  {
      "currency": "SGD",
      "country": "Singapore",
      "flag": "🇸🇬",
      "code": "SG"
  },
  {
      "currency": "HKD",
      "country": "Hong Kong",
      "flag": "🇭🇰",
      "code": "HK"
  },
  {
      "currency": "NOK",
      "country": "Norway",
      "flag": "🇳🇴",
      "code": "NO"
  },
  {
      "currency": "KRW",
      "country": "South Korea",
      "flag": "🇰🇷",
      "code": "KR"
  },
  {
      "currency": "TRY",
      "country": "Turkey",
      "flag": "🇹🇷",
      "code": "TR"
  },
  {
      "currency": "IDR",
      "country": "Indonesia",
      "flag": "🇮🇩",
      "code": "ID"
  },
  {
      "currency": "SAR",
      "country": "Saudi Arabia",
      "flag": "🇸🇦",
      "code": "SA"
  },
  {
      "currency": "PLN",
      "country": "Poland",
      "flag": "🇵🇱",
      "code": "PL"
  },
  {
      "currency": "ARS",
      "country": "Argentina",
      "flag": "🇦🇷",
      "code": "AR"
  },
  {
      "currency": "THB",
      "country": "Thailand",
      "flag": "🇹🇭",
      "code": "TH"
  },
  {
      "currency": "MYR",
      "country": "Malaysia",
      "flag": "🇲🇾",
      "code": "MY"
  },
  {
      "currency": "ILS",
      "country": "Israel",
      "flag": "🇮🇱",
      "code": "IL"
  },
  {
      "currency": "CZK",
      "country": "Czech Republic",
      "flag": "🇨🇿",
      "code": "CZ"
  },
  {
      "currency": "AED",
      "country": "United Arab Emirates",
      "flag": "🇦🇪",
      "code": "AE"
  },
  {
      "currency": "COP",
      "country": "Colombia",
      "flag": "🇨🇴",
      "code": "CO"
  },
  {
      "currency": "CLP",
      "country": "Chile",
      "flag": "🇨🇱",
      "code": "CL"
  },
  {
      "currency": "PHP",
      "country": "Philippines",
      "flag": "🇵🇭",
      "code": "PH"
  },
  {
      "currency": "DKK",
      "country": "Denmark",
      "flag": "🇩🇰",
      "code": "DK"
  },
  {
      "currency": "HUF",
      "country": "Hungary",
      "flag": "🇭🇺",
      "code": "HU"
  },
  {
      "currency": "PKR",
      "country": "Pakistan",
      "flag": "🇵🇰",
      "code": "PK"
  },
  {
      "currency": "EGP",
      "country": "Egypt",
      "flag": "🇪🇬",
      "code": "EG"
  },
  {
      "currency": "NGN",
      "country": "Nigeria",
      "flag": "🇳🇬",
      "code": "NG"
  },
  {
      "currency": "BDT",
      "country": "Bangladesh",
      "flag": "🇧🇩",
      "code": "BD"
  },
  {
      "currency": "VND",
      "country": "Vietnam",
      "flag": "🇻🇳",
      "code": "VN"
  },
  {
      "currency": "KZT",
      "country": "Kazakhstan",
      "flag": "🇰🇿",
      "code": "KZ"
  },
  {
      "currency": "PEN",
      "country": "Peru",
      "flag": "🇵🇪",
      "code": "PE"
  },
  {
      "currency": "UAH",
      "country": "Ukraine",
      "flag": "🇺🇦",
      "code": "UA"
  },
  {
      "currency": "MAD",
      "country": "Morocco",
      "flag": "🇲🇦",
      "code": "MA"
  },
  {
      "currency": "KWD",
      "country": "Kuwait",
      "flag": "🇰🇼",
      "code": "KW"
  },
  {
      "currency": "DZD",
      "country": "Algeria",
      "flag": "🇩🇿",
      "code": "DZ"
  },
  {
      "currency": "QAR",
      "country": "Qatar",
      "flag": "🇶🇦",
      "code": "QA"
  },
  {
      "currency": "DOP",
      "country": "Dominican Republic",
      "flag": "🇩🇴",
      "code": "DO"
  },
  {
      "currency": "HNL",
      "country": "Honduras",
      "flag": "🇭🇳",
      "code": "HN"
  },
  {
      "currency": "GTQ",
      "country": "Guatemala",
      "flag": "🇬🇹",
      "code": "GT"
  },
  {
      "currency": "NIO",
      "country": "Nicaragua",
      "flag": "🇳🇮",
      "code": "NI"
  },
  {
      "currency": "CRC",
      "country": "Costa Rica",
      "flag": "🇨🇷",
      "code": "CR"
  },
  {
      "currency": "SVC",
      "country": "El Salvador",
      "flag": "🇸🇻",
      "code": "SV"
  },
  {
      "currency": "PAB",
      "country": "Panama",
      "flag": "🇵🇦",
      "code": "PA"
  },
  {
      "currency": "BHD",
      "country": "Bahrain",
      "flag": "🇧🇭",
      "code": "BH"
  },
  {
      "currency": "OMR",
      "country": "Oman",
      "flag": "🇴🇲",
      "code": "OM"
  },
  {
      "currency": "BND",
      "country": "Brunei",
      "flag": "🇧🇳",
      "code": "BN"
  },
  {
      "currency": "JOD",
      "country": "Jordan",
      "flag": "🇯🇴",
      "code": "JO"
  },
  {
      "currency": "LBP",
      "country": "Lebanon",
      "flag": "🇱🇧",
      "code": "LB"
  },
  {
      "currency": "IRR",
      "country": "Iran",
      "flag": "🇮🇷",
      "code": "IR"
  },
  {
      "currency": "IQD",
      "country": "Iraq",
      "flag": "🇮🇶",
      "code": "IQ"
  },
  {
      "currency": "SYP",
      "country": "Syria",
      "flag": "🇸🇾",
      "code": "SY"
  },
  {
      "currency": "YER",
      "country": "Yemen",
      "flag": "🇾🇪",
      "code": "YE"
  },
  {
      "currency": "AFN",
      "country": "Afghanistan",
      "flag": "🇦🇫",
      "code": "AF"
  },
  {
      "currency": "UZS",
      "country": "Uzbekistan",
      "flag": "🇺🇿",
      "code": "UZ"
  },
  {
      "currency": "TMT",
      "country": "Turkmenistan",
      "flag": "🇹🇲",
      "code": "TM"
  },
  {
      "currency": "KGS",
      "country": "Kyrgyzstan",
      "flag": "🇰🇬",
      "code": "KG"
  },
  {
      "currency": "TJS",
      "country": "Tajikistan",
      "flag": "🇹🇯",
      "code": "TJ"
  },
  {
      "currency": "MNT",
      "country": "Mongolia",
      "flag": "🇲🇳",
      "code": "MN"
  },
  {
      "currency": "LAK",
      "country": "Laos",
      "flag": "🇱🇦",
      "code": "LA"
  },
  {
      "currency": "KHR",
      "country": "Cambodia",
      "flag": "🇰🇭",
      "code": "KH"
  },
  {
      "currency": "MMK",
      "country": "Myanmar",
      "flag": "🇲🇲",
      "code": "MM"
  },
  {
      "currency": "LKR",
      "country": "Sri Lanka",
      "flag": "🇱🇰",
      "code": "LK"
  },
  {
      "currency": "NPR",
      "country": "Nepal",
      "flag": "🇳🇵",
      "code": "NP"
  },
  {
      "currency": "BTN",
      "country": "Bhutan",
      "flag": "🇧🇹",
      "code": "BT"
  },
  {
      "currency": "MVR",
      "country": "Maldives",
      "flag": "🇲🇻",
      "code": "MV"
  },
  {
      "currency": "PGK",
      "country": "Papua New Guinea",
      "flag": "🇵🇬",
      "code": "PG"
  },
  {
      "currency": "FJD",
      "country": "Fiji",
      "flag": "🇫🇯",
      "code": "FJ"
  },
  {
      "currency": "WST",
      "country": "Samoa",
      "flag": "🇼🇸",
      "code": "WS"
  },
  {
      "currency": "TOP",
      "country": "Tonga",
      "flag": "🇹🇴",
      "code": "TO"
  },
  {
      "currency": "SBD",
      "country": "Solomon Islands",
      "flag": "🇸🇧",
      "code": "SB"
  },
  {
      "currency": "VUV",
      "country": "Vanuatu",
      "flag": "🇻🇺",
      "code": "VU"
  },
  {
      "currency": "XPF",
      "country": "CFP Franc",
      "flag": "🇵🇫",
      "code": "PF"
  },
  {
      "currency": "BAM",
      "country": "Bosnia and Herzegovina",
      "flag": "🇧🇦",
      "code": "BA"
  },
  {
      "currency": "ALL",
      "country": "Albania",
      "flag": "🇦🇱",
      "code": "AL"
  },
  {
      "currency": "MKD",
      "country": "North Macedonia",
      "flag": "🇲🇰",
      "code": "MK"
  },
  {
      "currency": "BGN",
      "country": "Bulgaria",
      "flag": "🇧🇬",
      "code": "BG"
  },
  {
      "currency": "RON",
      "country": "Romania",
      "flag": "🇷🇴",
      "code": "RO"
  },
  {
      "currency": "HRK",
      "country": "Croatia",
      "flag": "🇭🇷",
      "code": "HR"
  },
  {
      "currency": "ISK",
      "country": "Iceland",
      "flag": "🇮🇸",
      "code": "IS"
  },
  {
      "currency": "GEL",
      "country": "Georgia",
      "flag": "🇬🇪",
      "code": "GE"
  },
  {
      "currency": "AMD",
      "country": "Armenia",
      "flag": "🇦🇲",
      "code": "AM"
  },
  {
      "currency": "AZN",
      "country": "Azerbaijan",
      "flag": "🇦🇿",
      "code": "AZ"
  },
  {
      "currency": "GHS",
      "country": "Ghana",
      "flag": "🇬🇭",
      "code": "GH"
  },
  {
      "currency": "KES",
      "country": "Kenya",
      "flag": "🇰🇪",
      "code": "KE"
  },
  {
      "currency": "TZS",
      "country": "Tanzania",
      "flag": "🇹🇿",
      "code": "TZ"
  },
  {
      "currency": "UGX",
      "country": "Uganda",
      "flag": "🇺🇬",
      "code": "UG"
  },
  {
      "currency": "ETB",
      "country": "Ethiopia",
      "flag": "🇪🇹",
      "code": "ET"
  },
  {
      "currency": "MWK",
      "country": "Malawi",
      "flag": "🇲🇼",
      "code": "MW"
  },
  {
      "currency": "ZMW",
      "country": "Zambia",
      "flag": "🇿🇲",
      "code": "ZM"
  },
  {
      "currency": "BWP",
      "country": "Botswana",
      "flag": "🇧🇼",
      "code": "BW"
  },
  {
      "currency": "NAD",
      "country": "Namibia",
      "flag": "🇳🇦",
      "code": "NA"
  },
  {
      "currency": "LSL",
      "country": "Lesotho",
      "flag": "🇱🇸",
      "code": "LS"
  },
  {
      "currency": "SZL",
      "country": "Eswatini",
      "flag": "🇸🇿",
      "code": "SZ"
  },
  {
      "currency": "MGA",
      "country": "Madagascar",
      "flag": "🇲🇬",
      "code": "MG"
  },
  {
      "currency": "SCR",
      "country": "Seychelles",
      "flag": "🇸🇨",
      "code": "SC"
  },
  {
      "currency": "MUR",
      "country": "Mauritius",
      "flag": "🇲🇺",
      "code": "MU"
  },
  {
      "currency": "DJF",
      "country": "Djibouti",
      "flag": "🇩🇯",
      "code": "DJ"
  },
  {
      "currency": "CDF",
      "country": "Democratic Republic of the Congo",
      "flag": "🇨🇩",
      "code": "CD"
  },
  {
      "currency": "XAF",
      "country": "Central African CFA Franc",
      "flag": "🇨🇲 🇨🇫 🇹🇩 🇨🇬 🇬🇶 🇬🇦",
      "code": "XAF"
  },
  {
      "currency": "XOF",
      "country": "West African CFA Franc",
      "flag": "🇧🇯 🇧🇫 🇨🇮 🇬🇼 🇲🇱 🇳🇪 🇸🇳 🇹🇬",
      "code": "XOF"
  },
  {
      "currency": "GNF",
      "country": "Guinea",
      "flag": "🇬🇳",
      "code": "GN"
  },
  {
      "currency": "SLL",
      "country": "Sierra Leone",
      "flag": "🇸🇱",
      "code": "SL"
  },
  {
      "currency": "LRD",
      "country": "Liberia",
      "flag": "🇱🇷",
      "code": "LR"
  },
  {
      "currency": "GMD",
      "country": "Gambia",
      "flag": "🇬🇲",
      "code": "GM"
  },
  {
      "currency": "CVE",
      "country": "Cape Verde",
      "flag": "🇨🇻",
      "code": "CV"
  },
  {
      "currency": "AOA",
      "country": "Angola",
      "flag": "🇦🇴",
      "code": "AO"
  },
  {
      "currency": "MZN",
      "country": "Mozambique",
      "flag": "🇲🇿",
      "code": "MZ"
  },
  {
      "currency": "STD",
      "country": "São Tomé and Príncipe",
      "flag": "🇸🇹",
      "code": "ST"
  },
  {
      "currency": "KMF",
      "country": "Comoros",
      "flag": "🇰🇲",
      "code": "KM"
  },
  {
      "currency": "SSP",
      "country": "South Sudan",
      "flag": "🇸🇸",
      "code": "SS"
  },
  {
      "currency": "ERN",
      "country": "Eritrea",
      "flag": "🇪🇷",
      "code": "ER"
  },
  {
      "currency": "SHP",
      "country": "Saint Helena",
      "flag": "🇸🇭",
      "code": "SH"
  },
  {
      "currency": "ANG",
      "country": "Netherlands Antillean Guilder",
      "flag": "🇳🇱",
      "code": "ANG"
  },
  {
      "currency": "AWG",
      "country": "Aruba",
      "flag": "🇦🇼",
      "code": "AW"
  },
  {
      "currency": "BSD",
      "country": "Bahamas",
      "flag": "🇧🇸",
      "code": "BS"
  },
  {
      "currency": "BBD",
      "country": "Barbados",
      "flag": "🇧🇧",
      "code": "BB"
  },
  {
      "currency": "BZD",
      "country": "Belize",
      "flag": "🇧🇿",
      "code": "BZ"
  },
  {
      "currency": "BMD",
      "country": "Bermuda",
      "flag": "🇧🇲",
      "code": "BM"
  },
  {
      "currency": "KYD",
      "country": "Cayman Islands",
      "flag": "🇰🇾",
      "code": "KY"
  },
  {
      "currency": "GYD",
      "country": "Guyana",
      "flag": "🇬🇾",
      "code": "GY"
  },
  {
      "currency": "JMD",
      "country": "Jamaica",
      "flag": "🇯🇲",
      "code": "JM"
  },
  {
      "currency": "TTD",
      "country": "Trinidad and Tobago",
      "flag": "🇹🇹",
      "code": "TT"
  },
  {
      "currency": "HTG",
      "country": "Haiti",
      "flag": "🇭🇹",
      "code": "HT"
  },
  {
      "currency": "ANG",
      "country": "Netherlands Antilles",
      "flag": "🇳🇱",
      "code": "AN"
  },
  {
      "currency": "SRD",
      "country": "Suriname",
      "flag": "🇸🇷",
      "code": "SR"
  },
  {
      "currency": "BIF",
      "country": "Burundi",
      "flag": "🇧🇮",
      "code": "BI"
  },
  {
      "currency": "XCD",
      "country": "East Caribbean Dollar",
      "flag": "🇪🇨",
      "code": "XCD"
  },
  {
      "currency": "BZD",
      "country": "Belize",
      "flag": "🇧🇿",
      "code": "BZ"
  },
  {
      "currency": "CDF",
      "country": "Democratic Republic of the Congo",
      "flag": "🇨🇩",
      "code": "CD"
  },
  {
      "currency": "HTG",
      "country": "Haiti",
      "flag": "🇭🇹",
      "code": "HT"
  }
] as const;


const uniqueCountryCodes = Array.from(new Set(currencies.map((country) => country.code)))
const uniqueCurrencyCodes = Array.from(new Set(currencies.map((country) => country.currency)))

const countryCodes = uniqueCountryCodes.map((code) => code)

const currenciesInputOptions = uniqueCurrencyCodes.map((code) => {
  const country = currencies.find((country) => country.currency === code)
  return {
    label: `${country?.flag} ${country?.currency}`,
    value: country?.currency ?? "",
  }
}).filter((c) => c.value)

const countryInputOptions = uniqueCountryCodes.map((country) => {
  const countryData = currencies.find((c) => c.code === country)
  return {
    label: `${countryData?.flag} ${countryData?.country}`,
    value: countryData?.code ?? "",
  }
})
  
export { currencies, countryCodes, currenciesInputOptions, countryInputOptions };
