const excelToJson = require('convert-excel-to-json');

const treinamento = excelToJson({
    sourceFile: 'cancerdados.xlsx',
    range: 'A1:J250',
    columnToKey: {
        A: 'Classe',
        B: 'Idade',
        C: 'Menopausa',
        D: 'Tamanho',
        E: 'Inv-nodes',
        F: 'Node-caps',
        G: 'Deg-malig',
        H: 'Mama',
        J: 'Irradiar',
        I: 'Peito-quadril',
    }
    
});

const teste = excelToJson({
    sourceFile: 'cancerdados.xlsx',
    range: 'A250:J287',
    
});

console.log(treinamento)