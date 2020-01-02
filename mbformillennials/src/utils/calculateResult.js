export const calculateResult = values => {
    let ie = '';
    let sn = '';
    let ft = '';
    let jp = '';

    const ieResult = 30 - values[2] - values[6] - values[10] + values[14] - values[18] + values[22] + values[26] - values[30];
    const snResult = 12 + values[3] + values[7] + values[11] + values[15] + values[19] - values[23] - values[27] + values[31];
    const ftResult = 30 - values[1] + values[5] + values[9] - values[13] - values[17] + values[21] - values[25] - values[29];
    const jpResult = 18 + values[0] + values[4] - values[8] + values[12] - values[16] + values[20] - values[24] + values[28];

    if (ieResult > 24) {
        ie = 'E';
    } else {
        ie = 'I';
    };

    if (snResult > 24) {
        sn = 'N';
    } else {
        sn = 'S';
    };

    if (ftResult > 24) {
        ft = 'T';
    } else {
        ft = 'F';
    };

    if (jpResult > 24) {
        jp = 'P';
    } else {
        jp = 'J';
    };

    return ie + sn + ft + jp;
};