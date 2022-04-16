import axios from 'axios';

const URL_VOLUME = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';


const rates = {"status": "ok",
"name": "USD Exchange Trade Volume",
"unit": "Trade Volume (USD)",
"period": "day",
"description": "The total USD value of trading volume on major bitcoin exchanges.",
"values": [
{
"x": 1637107200,
"y": 831553555.683
},
{
"x": 1637193600,
"y": 549940655.7165
},
{
"x": 1637280000,
"y": 810589480.6968
},
{
"x": 1637366400,
"y": 479879941.47720003
},
{
"x": 1637452800,
"y": 233278784.7116
},
{
"x": 1637539200,
"y": 174269411.841
},
{
"x": 1637625600,
"y": 494762556.34959996
},
{
"x": 1637712000,
"y": 480199475.88900006
},
{
"x": 1637798400,
"y": 332409438.7548
},
{
"x": 1637884800,
"y": 289094884.176
},
{
"x": 1637971200,
"y": 777492583.0165
},
{
"x": 1638057600,
"y": 277078998.492
},
{
"x": 1638144000,
"y": 252736299.37800002
},
{
"x": 1638230400,
"y": 367826530.49249995
},
{
"x": 1638316800,
"y": 522506214.22769994
},
{
"x": 1638403200,
"y": 479668944.2496
},
{
"x": 1638489600,
"y": 431885271.2832
},
{
"x": 1638576000,
"y": 505379017.8231999
},
{
"x": 1638662400,
"y": 1243669815.772
},
{
"x": 1638748800,
"y": 618347670.1116
},
{
"x": 1638835200,
"y": 595736795.6247
},
{
"x": 1638921600,
"y": 308543486.1643
},
{
"x": 1639008000,
"y": 301494308.8344
},
{
"x": 1639094400,
"y": 355604123.5776
},
{
"x": 1639180800,
"y": 337628656.4944
},
{
"x": 1639267200,
"y": 212503434.6582
},
{
"x": 1639353600,
"y": 202841550.615
},
{
"x": 1639440000,
"y": 503961475.5761
},
{
"x": 1639526400,
"y": 345859882.6347
},
{
"x": 1639612800,
"y": 432899084.32320005
},
{
"x": 1639699200,
"y": 273509536.4848
},
{
"x": 1639785600,
"y": 356309895.02760005
},
{
"x": 1639872000,
"y": 159581106.35739997
},
{
"x": 1639958400,
"y": 192533517.7216
},
{
"x": 1640044800,
"y": 276202623.5283
},
{
"x": 1640131200,
"y": 345514275.7818
},
{
"x": 1640217600,
"y": 211733671.302
},
{
"x": 1640304000,
"y": 312600141.9432
},
{
"x": 1640390400,
"y": 239081657.85399997
},
{
"x": 1640476800,
"y": 123194900.1099
},
{
"x": 1640563200,
"y": 141498363.7274
},
{
"x": 1640649600,
"y": 193668918.30400002
},
{
"x": 1640736000,
"y": 358069054.04760003
},
{
"x": 1640822400,
"y": 265370559.54700002
},
{
"x": 1640908800,
"y": 266888972.0112
},
{
"x": 1640995200,
"y": 313877726.39159995
},
{
"x": 1641081600,
"y": 180494758.2702
},
{
"x": 1641168000,
"y": 127274108.004
},
{
"x": 1641254400,
"y": 200401831.049
},
{
"x": 1641340800,
"y": 246887759.41680002
},
{
"x": 1641427200,
"y": 461984932.3115
},
{
"x": 1641513600,
"y": 393637882.3188
},
{
"x": 1641600000,
"y": 488956956.8856
},
{
"x": 1641686400,
"y": 219239676.6817
},
{
"x": 1641772800,
"y": 183137667.3576
},
{
"x": 1641859200,
"y": 429424725.21000004
},
{
"x": 1641945600,
"y": 330038460.48370004
},
{
"x": 1642032000,
"y": 306079003.56
},
{
"x": 1642118400,
"y": 272189573.50680006
},
{
"x": 1642204800,
"y": 217414771.965
},
{
"x": 1642291200,
"y": 111568728.7393
},
{
"x": 1642377600,
"y": 107637568.29
},
{
"x": 1642464000,
"y": 154783167.4775
},
{
"x": 1642550400,
"y": 202865735.0568
},
{
"x": 1642636800,
"y": 219649804.1615
},
{
"x": 1642723200,
"y": 289428557.0358
},
{
"x": 1642809600,
"y": 753687064.8299999
},
{
"x": 1642896000,
"y": 446318667.4657
},
{
"x": 1642982400,
"y": 257365978.4504
},
{
"x": 1643068800,
"y": 737386595.8216001
},
{
"x": 1643155200,
"y": 288957799.11689997
},
{
"x": 1643241600,
"y": 439495100.73
},
{
"x": 1643328000,
"y": 343642909.0705
},
{
"x": 1643414400,
"y": 252375987.58350003
},
{
"x": 1643500800,
"y": 147213501.3288
},
{
"x": 1643587200,
"y": 87415311.4308
},
{
"x": 1643673600,
"y": 230446207.79169998
},
{
"x": 1643760000,
"y": 271406357.0686
},
{
"x": 1643846400,
"y": 211170059.74400002
},
{
"x": 1643932800,
"y": 163514426.92000002
},
{
"x": 1644019200,
"y": 456958267.8625
},
{
"x": 1644105600,
"y": 209490904.41120002
},
{
"x": 1644192000,
"y": 141085407.5202
},
{
"x": 1644278400,
"y": 403017431.6634
},
{
"x": 1644364800,
"y": 366731227.48639995
},
{
"x": 1644451200,
"y": 269200808.685
},
{
"x": 1644537600,
"y": 464258417.52779996
},
{
"x": 1644624000,
"y": 322559181.27099997
},
{
"x": 1644710400,
"y": 140455080.6988
},
{
"x": 1644796800,
"y": 90673301.6639
},
{
"x": 1644883200,
"y": 187826655.38700002
},
{
"x": 1644969600,
"y": 235405883.064
},
{
"x": 1645056000,
"y": 173518252.1539
},
{
"x": 1645142400,
"y": 327153771.0551
},
{
"x": 1645228800,
"y": 266751395.53800002
},
{
"x": 1645315200,
"y": 81527019.56650001
},
{
"x": 1645401600,
"y": 190749767.1736
},
{
"x": 1645488000,
"y": 376297985.0144
},
{
"x": 1645574400,
"y": 285087602.45299995
},
{
"x": 1645660800,
"y": 245165376.96400002
},
{
"x": 1645747200,
"y": 846061849.3402
},
{
"x": 1645833600,
"y": 290502971.352
},
{
"x": 1645920000,
"y": 146389006.43690002
},
{
"x": 1646006400,
"y": 249386254.8432
},
{
"x": 1646092800,
"y": 586750288.004
},
{
"x": 1646179200,
"y": 600026434.7954
},
{
"x": 1646265600,
"y": 384922007.82
},
{
"x": 1646352000,
"y": 346402069.068
},
{
"x": 1646438400,
"y": 495957604.5125
},
{
"x": 1646524800,
"y": 118294086.9836
},
{
"x": 1646611200,
"y": 175544267.5295
},
{
"x": 1646697600,
"y": 296985143.40000004
},
{
"x": 1646784000,
"y": 279092850.64199996
},
{
"x": 1646870400,
"y": 409676985.0096
},
{
"x": 1646956800,
"y": 360028497.81
},
{
"x": 1647043200,
"y": 267911337.6576
},
{
"x": 1647129600,
"y": 116260660.526
},
{
"x": 1647216000,
"y": 138991446.0656
},
{
"x": 1647302400,
"y": 240023981.33999997
},
{
"x": 1647388800,
"y": 213584009.7006
},
{
"x": 1647475200,
"y": 652943632.6044
},
{
"x": 1647561600,
"y": 208715564.8872
},
{
"x": 1647648000,
"y": 246251063.8129
},
{
"x": 1647734400,
"y": 117217182.5608
},
{
"x": 1647820800,
"y": 143098716.7617
},
{
"x": 1647907200,
"y": 188238486.312
},
{
"x": 1647993600,
"y": 326642014.7693
},
{
"x": 1648080000,
"y": 227640947.79139996
},
{
"x": 1648166400,
"y": 279553357.1948
},
{
"x": 1648252800,
"y": 294807777.4845
},
{
"x": 1648339200,
"y": 87655860.1288
},
{
"x": 1648425600,
"y": 215085807.13829997
},
{
"x": 1648512000,
"y": 363200213.7945
},
{
"x": 1648598400,
"y": 222767932.4699
},
{
"x": 1648684800,
"y": 198230006.14560002
},
{
"x": 1648771200,
"y": 217720733.859
},
{
"x": 1648857600,
"y": 343182405.4464
},
{
"x": 1648944000,
"y": 128666154.54
},
{
"x": 1649030400,
"y": 134898633.464
},
{
"x": 1649116800,
"y": 222101255.5622
},
{
"x": 1649203200,
"y": 183110273.2288
},
{
"x": 1649289600,
"y": 414304824.9626
},
{
"x": 1649376000,
"y": 172917581.4016
},
{
"x": 1649462400,
"y": 210672152.9154
},
{
"x": 1649548800,
"y": 68207000.8752
},
{
"x": 1649635200,
"y": 107486751.4035
},
{
"x": 1649721600,
"y": 309663439.8608
},
{
"x": 1649808000,
"y": 239384869.614
},
{
"x": 1649894400,
"y": 225976504.4274
},
{
"x": 1649980800,
"y": 168764849.25300002
},
{
"x": 1650067200,
"y": 112772413.352
}
]
}

async function getRates() {
    try {
        const res = await axios.get(URL_VOLUME);
        return res.data;
        // return rates;
    } catch (err) {
        console.log('Had an error getting your date', err.message);
    }
}




export const cryptoService = {
    getRates
};