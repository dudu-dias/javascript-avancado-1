class DataHelper{

    textoParaData(texto){
       return new Date(...texto.value.split('-').map((item, indice) => item - indice % 2));
    }

    dataParaTexto(data){

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();

    }


}