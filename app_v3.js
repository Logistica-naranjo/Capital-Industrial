var DU="https://logistica-naranjo-api.j-solares.workers.dev/data";
var TODAY=new Date();
var PN=["Mezanines y Techados","Estructura Principal","Acabados"];
var PC=["#E07B2A","#185FA5","#1D9E75"];
var PK=["Mezanines y Techados","Estructura Principal","Acabados"];
var ON=["Cimentación","Muro Cifa","Block en Fachadas","Contrapisos","Inst. Eléctricas"];
var OC=["#534AB7","#0F6E56","#854F0B","#0C447C","#A32D2D"];
var SL=[["Montaje de estructura","Instalación de losacero","Armado de electromalla","Fundición"],["Montaje de tijeras","Costaneras","Canales","Enlaminado"],["Tablayeso + ventanas","Piso","Pintura","Puertas"]];
var UA=[{n:"Finalización base suelo cemento",i:"2026-06-22",f:"2026-07-12"},{n:"Contrapiso de calles",i:"2026-07-07",f:"2026-08-06"},{n:"Banquetas",i:"2026-06-16",f:"2026-07-31"},{n:"Muro perimetral Cifarreja",i:"2026-07-01",f:"2026-08-10"},{n:"Muros de contención",i:"2026-06-25",f:"2026-07-24"},{n:"Pintura y señalización en calles",i:"2026-07-22",f:"2026-08-21"},{n:"Garita",i:"2026-06-22",f:"2026-08-31"},{n:"Trabajos de herrería",i:"2026-07-07",f:"2026-08-21"},{n:"Planta de tratamiento",i:"2026-06-22",f:"2026-08-31"},{n:"Cisterna",i:"2026-06-22",f:"2026-07-12"},{n:"Pozo mecánico",i:"2026-06-22",f:"2026-08-21"}];
var UB=[{n:"Finalización base suelo cemento",i:"2026-07-01",f:"2026-08-10"},{n:"Contrapiso de calles",i:"2026-07-16",f:"2026-08-30"},{n:"Banquetas",i:"2026-07-21",f:"2026-09-19"},{n:"Muro perimetral Cifarreja",i:"2026-06-16",f:"2026-07-27"},{n:"Muros de contención",i:"2026-06-30",f:"2026-09-08"},{n:"Pintura y señalización",i:"2026-08-10",f:"2026-09-09"},{n:"Garita",i:"2026-07-07",f:"2026-09-15"},{n:"Trabajos de herrería",i:"2026-07-22",f:"2026-09-05"}];
var DB={"Distrito A":{"Cluster 1":["Bodega 31","Bodega 32","Bodega 33","Bodega 34"],"Cluster 2":["Bodega 27","Bodega 28","Bodega 29","Bodega 30"],"Cluster 3":["Bodega 22","Bodega 23","Bodega 24","Bodega 25","Bodega 26"],"Cluster 4":["Bodega 3","Bodega 4","Bodega 5","Bodega 6","Bodega 7"],"Cluster 5":["Bodega 8","Bodega 9","Bodega 10","Bodega 11"],"Cluster 6":["Bodega 12","Bodega 13","Bodega 14","Bodega 15"],"Cluster 7":["Bodega 16","Bodega 17","Bodega 18","Bodega 19"],"Cluster 8":["Bodega 1","Bodega 2","Bodega 20","Bodega 21","Bodega 35","Bodega 36"]},"Distrito B":{"Cluster 1":["Bodega 2","Bodega 3","Bodega 4","Bodega 5"],"Cluster 2":["Bodega 6","Bodega 7","Bodega 8","Bodega 9"],"Cluster 3":["Bodega 12","Bodega 13","Bodega 14","Bodega 15"],"Cluster 4":["Bodega 16","Bodega 17","Bodega 18","Bodega 19"],"Cluster 5":["Bodega 1","Bodega 10","Bodega 11","Bodega 20"]}};
var PLAN={
"Distrito A|Cluster 1|Bodega 34|Cimentacion":{i:"2026-06-16",f:"2026-06-20"},
"Distrito A|Cluster 1|Bodega 33|Cimentacion":{i:"2026-06-16",f:"2026-06-20"},
"Distrito A|Cluster 1|Bodega 32|Cimentacion":{i:"2026-06-16",f:"2026-06-20"},
"Distrito A|Cluster 1|Bodega 31|Cimentacion":{i:"2026-06-16",f:"2026-06-20"},
"Distrito A|Cluster 1|Bodega 34|Muro Cifa":{i:"2026-06-20",f:"2026-06-22"},
"Distrito A|Cluster 1|Bodega 33|Muro Cifa":{i:"2026-06-20",f:"2026-06-22"},
"Distrito A|Cluster 1|Bodega 32|Muro Cifa":{i:"2026-06-20",f:"2026-06-22"},
"Distrito A|Cluster 1|Bodega 31|Muro Cifa":{i:"2026-06-20",f:"2026-06-22"},
"Distrito A|Cluster 1|Bodega 34|Levantado de Block en Fachadas":{i:"2026-06-22",f:"2026-06-28"},
"Distrito A|Cluster 1|Bodega 33|Levantado de Block en Fachadas":{i:"2026-06-22",f:"2026-06-28"},
"Distrito A|Cluster 1|Bodega 32|Levantado de Block en Fachadas":{i:"2026-06-22",f:"2026-06-28"},
"Distrito A|Cluster 1|Bodega 31|Levantado de Block en Fachadas":{i:"2026-06-22",f:"2026-06-28"},
"Distrito A|Cluster 1|Bodega 34|Contrapisos":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 1|Bodega 33|Contrapisos":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 1|Bodega 32|Contrapisos":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 1|Bodega 31|Contrapisos":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 1|Bodega 34|Inst. Electricas Bodegas":{i:"2026-06-30",f:"2026-07-03"},
"Distrito A|Cluster 1|Bodega 33|Inst. Electricas Bodegas":{i:"2026-06-30",f:"2026-07-03"},
"Distrito A|Cluster 1|Bodega 32|Inst. Electricas Bodegas":{i:"2026-06-30",f:"2026-07-03"},
"Distrito A|Cluster 1|Bodega 31|Inst. Electricas Bodegas":{i:"2026-06-30",f:"2026-07-03"},
"Distrito A|Cluster 2|Bodega 30|Cimentacion":{i:"2026-06-20",f:"2026-06-24"},
"Distrito A|Cluster 2|Bodega 29|Cimentacion":{i:"2026-06-20",f:"2026-06-24"},
"Distrito A|Cluster 2|Bodega 28|Cimentacion":{i:"2026-06-20",f:"2026-06-24"},
"Distrito A|Cluster 2|Bodega 27|Cimentacion":{i:"2026-06-20",f:"2026-06-24"},
"Distrito A|Cluster 2|Bodega 30|Muro Cifa":{i:"2026-06-24",f:"2026-06-26"},
"Distrito A|Cluster 2|Bodega 29|Muro Cifa":{i:"2026-06-24",f:"2026-06-26"},
"Distrito A|Cluster 2|Bodega 28|Muro Cifa":{i:"2026-06-24",f:"2026-06-26"},
"Distrito A|Cluster 2|Bodega 27|Muro Cifa":{i:"2026-06-24",f:"2026-06-26"},
"Distrito A|Cluster 2|Bodega 30|Levantado de Block en Fachadas":{i:"2026-06-26",f:"2026-07-02"},
"Distrito A|Cluster 2|Bodega 29|Levantado de Block en Fachadas":{i:"2026-06-26",f:"2026-07-02"},
"Distrito A|Cluster 2|Bodega 28|Levantado de Block en Fachadas":{i:"2026-06-26",f:"2026-07-02"},
"Distrito A|Cluster 2|Bodega 27|Levantado de Block en Fachadas":{i:"2026-06-26",f:"2026-07-02"},
"Distrito A|Cluster 2|Bodega 30|Contrapisos":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 2|Bodega 29|Contrapisos":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 2|Bodega 28|Contrapisos":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 2|Bodega 27|Contrapisos":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 2|Bodega 30|Inst. Electricas Bodegas":{i:"2026-07-04",f:"2026-07-07"},
"Distrito A|Cluster 2|Bodega 29|Inst. Electricas Bodegas":{i:"2026-07-04",f:"2026-07-07"},
"Distrito A|Cluster 2|Bodega 28|Inst. Electricas Bodegas":{i:"2026-07-04",f:"2026-07-07"},
"Distrito A|Cluster 2|Bodega 27|Inst. Electricas Bodegas":{i:"2026-07-04",f:"2026-07-07"},
"Distrito A|Cluster 3|Bodega 26|Cimentacion":{i:"2026-06-24",f:"2026-06-28"},
"Distrito A|Cluster 3|Bodega 25|Cimentacion":{i:"2026-06-24",f:"2026-06-28"},
"Distrito A|Cluster 3|Bodega 24|Cimentacion":{i:"2026-06-24",f:"2026-06-28"},
"Distrito A|Cluster 3|Bodega 23|Cimentacion":{i:"2026-06-24",f:"2026-06-28"},
"Distrito A|Cluster 3|Bodega 22|Cimentacion":{i:"2026-06-24",f:"2026-06-28"},
"Distrito A|Cluster 3|Bodega 26|Muro Cifa":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 3|Bodega 25|Muro Cifa":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 3|Bodega 24|Muro Cifa":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 3|Bodega 23|Muro Cifa":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 3|Bodega 22|Muro Cifa":{i:"2026-06-28",f:"2026-06-30"},
"Distrito A|Cluster 3|Bodega 26|Levantado de Block en Fachadas":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 3|Bodega 25|Levantado de Block en Fachadas":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 3|Bodega 24|Levantado de Block en Fachadas":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 3|Bodega 23|Levantado de Block en Fachadas":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 3|Bodega 22|Levantado de Block en Fachadas":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 3|Bodega 26|Contrapisos":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 3|Bodega 25|Contrapisos":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 3|Bodega 24|Contrapisos":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 3|Bodega 23|Contrapisos":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 3|Bodega 22|Contrapisos":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 3|Bodega 26|Inst. Electricas Bodegas":{i:"2026-07-08",f:"2026-07-11"},
"Distrito A|Cluster 3|Bodega 25|Inst. Electricas Bodegas":{i:"2026-07-08",f:"2026-07-11"},
"Distrito A|Cluster 3|Bodega 24|Inst. Electricas Bodegas":{i:"2026-07-08",f:"2026-07-11"},
"Distrito A|Cluster 3|Bodega 23|Inst. Electricas Bodegas":{i:"2026-07-08",f:"2026-07-11"},
"Distrito A|Cluster 3|Bodega 22|Inst. Electricas Bodegas":{i:"2026-07-08",f:"2026-07-11"},
"Distrito A|Cluster 4|Bodega 3|Cimentacion":{i:"2026-06-28",f:"2026-07-02"},
"Distrito A|Cluster 4|Bodega 4|Cimentacion":{i:"2026-06-28",f:"2026-07-02"},
"Distrito A|Cluster 4|Bodega 5|Cimentacion":{i:"2026-06-28",f:"2026-07-02"},
"Distrito A|Cluster 4|Bodega 6|Cimentacion":{i:"2026-06-28",f:"2026-07-02"},
"Distrito A|Cluster 4|Bodega 7|Cimentacion":{i:"2026-06-28",f:"2026-07-02"},
"Distrito A|Cluster 4|Bodega 3|Muro Cifa":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 4|Bodega 4|Muro Cifa":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 4|Bodega 5|Muro Cifa":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 4|Bodega 6|Muro Cifa":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 4|Bodega 7|Muro Cifa":{i:"2026-07-02",f:"2026-07-04"},
"Distrito A|Cluster 4|Bodega 3|Levantado de Block en Fachadas":{i:"2026-07-04",f:"2026-07-10"},
"Distrito A|Cluster 4|Bodega 4|Levantado de Block en Fachadas":{i:"2026-07-04",f:"2026-07-10"},
"Distrito A|Cluster 4|Bodega 5|Levantado de Block en Fachadas":{i:"2026-07-04",f:"2026-07-10"},
"Distrito A|Cluster 4|Bodega 6|Levantado de Block en Fachadas":{i:"2026-07-04",f:"2026-07-10"},
"Distrito A|Cluster 4|Bodega 7|Levantado de Block en Fachadas":{i:"2026-07-04",f:"2026-07-10"},
"Distrito A|Cluster 4|Bodega 3|Contrapisos":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 4|Contrapisos":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 5|Contrapisos":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 6|Contrapisos":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 7|Contrapisos":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 3|Inst. Electricas Bodegas":{i:"2026-07-12",f:"2026-07-15"},
"Distrito A|Cluster 4|Bodega 4|Inst. Electricas Bodegas":{i:"2026-07-12",f:"2026-07-15"},
"Distrito A|Cluster 4|Bodega 5|Inst. Electricas Bodegas":{i:"2026-07-12",f:"2026-07-15"},
"Distrito A|Cluster 4|Bodega 6|Inst. Electricas Bodegas":{i:"2026-07-12",f:"2026-07-15"},
"Distrito A|Cluster 4|Bodega 7|Inst. Electricas Bodegas":{i:"2026-07-12",f:"2026-07-15"},
"Distrito A|Cluster 5|Bodega 8|Cimentacion":{i:"2026-07-02",f:"2026-07-06"},
"Distrito A|Cluster 5|Bodega 9|Cimentacion":{i:"2026-07-02",f:"2026-07-06"},
"Distrito A|Cluster 5|Bodega 10|Cimentacion":{i:"2026-07-02",f:"2026-07-06"},
"Distrito A|Cluster 5|Bodega 11|Cimentacion":{i:"2026-07-02",f:"2026-07-06"},
"Distrito A|Cluster 5|Bodega 8|Muro Cifa":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 5|Bodega 9|Muro Cifa":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 5|Bodega 10|Muro Cifa":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 5|Bodega 11|Muro Cifa":{i:"2026-07-06",f:"2026-07-08"},
"Distrito A|Cluster 5|Bodega 8|Levantado de Block en Fachadas":{i:"2026-07-08",f:"2026-07-14"},
"Distrito A|Cluster 5|Bodega 9|Levantado de Block en Fachadas":{i:"2026-07-08",f:"2026-07-14"},
"Distrito A|Cluster 5|Bodega 10|Levantado de Block en Fachadas":{i:"2026-07-08",f:"2026-07-14"},
"Distrito A|Cluster 5|Bodega 11|Levantado de Block en Fachadas":{i:"2026-07-08",f:"2026-07-14"},
"Distrito A|Cluster 5|Bodega 8|Contrapisos":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 5|Bodega 9|Contrapisos":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 5|Bodega 10|Contrapisos":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 5|Bodega 11|Contrapisos":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 5|Bodega 8|Inst. Electricas Bodegas":{i:"2026-07-16",f:"2026-07-19"},
"Distrito A|Cluster 5|Bodega 9|Inst. Electricas Bodegas":{i:"2026-07-16",f:"2026-07-19"},
"Distrito A|Cluster 5|Bodega 10|Inst. Electricas Bodegas":{i:"2026-07-16",f:"2026-07-19"},
"Distrito A|Cluster 5|Bodega 11|Inst. Electricas Bodegas":{i:"2026-07-16",f:"2026-07-19"},
"Distrito A|Cluster 6|Bodega 12|Cimentacion":{i:"2026-07-06",f:"2026-07-10"},
"Distrito A|Cluster 6|Bodega 13|Cimentacion":{i:"2026-07-06",f:"2026-07-10"},
"Distrito A|Cluster 6|Bodega 14|Cimentacion":{i:"2026-07-06",f:"2026-07-10"},
"Distrito A|Cluster 6|Bodega 15|Cimentacion":{i:"2026-07-06",f:"2026-07-10"},
"Distrito A|Cluster 6|Bodega 12|Muro Cifa":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 6|Bodega 13|Muro Cifa":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 6|Bodega 14|Muro Cifa":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 6|Bodega 15|Muro Cifa":{i:"2026-07-10",f:"2026-07-12"},
"Distrito A|Cluster 6|Bodega 12|Levantado de Block en Fachadas":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 13|Levantado de Block en Fachadas":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 14|Levantado de Block en Fachadas":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 15|Levantado de Block en Fachadas":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 12|Contrapisos":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 6|Bodega 13|Contrapisos":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 6|Bodega 14|Contrapisos":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 6|Bodega 15|Contrapisos":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 6|Bodega 12|Inst. Electricas Bodegas":{i:"2026-07-20",f:"2026-07-23"},
"Distrito A|Cluster 6|Bodega 13|Inst. Electricas Bodegas":{i:"2026-07-20",f:"2026-07-23"},
"Distrito A|Cluster 6|Bodega 14|Inst. Electricas Bodegas":{i:"2026-07-20",f:"2026-07-23"},
"Distrito A|Cluster 6|Bodega 15|Inst. Electricas Bodegas":{i:"2026-07-20",f:"2026-07-23"},
"Distrito A|Cluster 7|Bodega 16|Cimentacion":{i:"2026-07-10",f:"2026-07-14"},
"Distrito A|Cluster 7|Bodega 17|Cimentacion":{i:"2026-07-10",f:"2026-07-14"},
"Distrito A|Cluster 7|Bodega 18|Cimentacion":{i:"2026-07-10",f:"2026-07-14"},
"Distrito A|Cluster 7|Bodega 19|Cimentacion":{i:"2026-07-10",f:"2026-07-14"},
"Distrito A|Cluster 7|Bodega 16|Muro Cifa":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 7|Bodega 17|Muro Cifa":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 7|Bodega 18|Muro Cifa":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 7|Bodega 19|Muro Cifa":{i:"2026-07-14",f:"2026-07-16"},
"Distrito A|Cluster 7|Bodega 16|Levantado de Block en Fachadas":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 7|Bodega 17|Levantado de Block en Fachadas":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 7|Bodega 18|Levantado de Block en Fachadas":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 7|Bodega 19|Levantado de Block en Fachadas":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 7|Bodega 16|Contrapisos":{i:"2026-07-22",f:"2026-07-24"},
"Distrito A|Cluster 7|Bodega 17|Contrapisos":{i:"2026-07-22",f:"2026-07-24"},
"Distrito A|Cluster 7|Bodega 18|Contrapisos":{i:"2026-07-22",f:"2026-07-24"},
"Distrito A|Cluster 7|Bodega 19|Contrapisos":{i:"2026-07-22",f:"2026-07-24"},
"Distrito A|Cluster 7|Bodega 16|Inst. Electricas Bodegas":{i:"2026-07-24",f:"2026-07-27"},
"Distrito A|Cluster 7|Bodega 17|Inst. Electricas Bodegas":{i:"2026-07-24",f:"2026-07-27"},
"Distrito A|Cluster 7|Bodega 18|Inst. Electricas Bodegas":{i:"2026-07-24",f:"2026-07-27"},
"Distrito A|Cluster 7|Bodega 19|Inst. Electricas Bodegas":{i:"2026-07-24",f:"2026-07-27"},
"Distrito A|Cluster 8|Bodega 1|Cimentacion":{i:"2026-07-14",f:"2026-07-18"},
"Distrito A|Cluster 8|Bodega 1|Muro Cifa":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 8|Bodega 1|Levantado de Block en Fachadas":{i:"2026-07-20",f:"2026-07-26"},
"Distrito A|Cluster 8|Bodega 1|Contrapisos":{i:"2026-07-26",f:"2026-07-28"},
"Distrito A|Cluster 8|Bodega 1|Inst. Electricas Bodegas":{i:"2026-07-28",f:"2026-07-31"},
"Distrito A|Cluster 8|Bodega 1|Mezanines y Techados":{i:"2026-07-06",f:"2026-07-13"},
"Distrito A|Cluster 8|Bodega 1|Estructura Principal":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 8|Bodega 1|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 8|Bodega 2|Cimentacion":{i:"2026-07-14",f:"2026-07-18"},
"Distrito A|Cluster 8|Bodega 2|Muro Cifa":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 8|Bodega 2|Levantado de Block en Fachadas":{i:"2026-07-20",f:"2026-07-26"},
"Distrito A|Cluster 8|Bodega 2|Contrapisos":{i:"2026-07-26",f:"2026-07-28"},
"Distrito A|Cluster 8|Bodega 2|Inst. Electricas Bodegas":{i:"2026-07-28",f:"2026-07-31"},
"Distrito A|Cluster 8|Bodega 2|Mezanines y Techados":{i:"2026-07-06",f:"2026-07-13"},
"Distrito A|Cluster 1|Bodega 34|Mezanines y Techados":{i:"2026-06-22",f:"2026-06-29"},
"Distrito A|Cluster 1|Bodega 33|Mezanines y Techados":{i:"2026-06-22",f:"2026-06-29"},
"Distrito A|Cluster 1|Bodega 32|Mezanines y Techados":{i:"2026-06-22",f:"2026-06-29"},
"Distrito A|Cluster 1|Bodega 31|Mezanines y Techados":{i:"2026-06-22",f:"2026-06-29"},
"Distrito A|Cluster 2|Bodega 30|Mezanines y Techados":{i:"2026-06-24",f:"2026-07-01"},
"Distrito A|Cluster 2|Bodega 29|Mezanines y Techados":{i:"2026-06-24",f:"2026-07-01"},
"Distrito A|Cluster 2|Bodega 28|Mezanines y Techados":{i:"2026-06-24",f:"2026-07-01"},
"Distrito A|Cluster 2|Bodega 27|Mezanines y Techados":{i:"2026-06-24",f:"2026-07-01"},
"Distrito A|Cluster 3|Bodega 26|Mezanines y Techados":{i:"2026-06-26",f:"2026-07-03"},
"Distrito A|Cluster 3|Bodega 25|Mezanines y Techados":{i:"2026-06-26",f:"2026-07-03"},
"Distrito A|Cluster 3|Bodega 24|Mezanines y Techados":{i:"2026-06-26",f:"2026-07-03"},
"Distrito A|Cluster 3|Bodega 23|Mezanines y Techados":{i:"2026-06-26",f:"2026-07-03"},
"Distrito A|Cluster 3|Bodega 22|Mezanines y Techados":{i:"2026-06-26",f:"2026-07-03"},
"Distrito A|Cluster 4|Bodega 3|Mezanines y Techados":{i:"2026-06-28",f:"2026-07-05"},
"Distrito A|Cluster 4|Bodega 4|Mezanines y Techados":{i:"2026-06-28",f:"2026-07-05"},
"Distrito A|Cluster 4|Bodega 5|Mezanines y Techados":{i:"2026-06-28",f:"2026-07-05"},
"Distrito A|Cluster 4|Bodega 6|Mezanines y Techados":{i:"2026-06-28",f:"2026-07-05"},
"Distrito A|Cluster 4|Bodega 7|Mezanines y Techados":{i:"2026-06-28",f:"2026-07-05"},
"Distrito A|Cluster 5|Bodega 8|Mezanines y Techados":{i:"2026-06-30",f:"2026-07-07"},
"Distrito A|Cluster 5|Bodega 9|Mezanines y Techados":{i:"2026-06-30",f:"2026-07-07"},
"Distrito A|Cluster 5|Bodega 10|Mezanines y Techados":{i:"2026-06-30",f:"2026-07-07"},
"Distrito A|Cluster 5|Bodega 11|Mezanines y Techados":{i:"2026-06-30",f:"2026-07-07"},
"Distrito A|Cluster 6|Bodega 12|Mezanines y Techados":{i:"2026-07-02",f:"2026-07-09"},
"Distrito A|Cluster 6|Bodega 13|Mezanines y Techados":{i:"2026-07-02",f:"2026-07-09"},
"Distrito A|Cluster 6|Bodega 14|Mezanines y Techados":{i:"2026-07-02",f:"2026-07-09"},
"Distrito A|Cluster 6|Bodega 15|Mezanines y Techados":{i:"2026-07-02",f:"2026-07-09"},
"Distrito A|Cluster 7|Bodega 16|Mezanines y Techados":{i:"2026-07-04",f:"2026-07-11"},
"Distrito A|Cluster 7|Bodega 17|Mezanines y Techados":{i:"2026-07-04",f:"2026-07-11"},
"Distrito A|Cluster 7|Bodega 18|Mezanines y Techados":{i:"2026-07-04",f:"2026-07-11"},
"Distrito A|Cluster 7|Bodega 19|Mezanines y Techados":{i:"2026-07-04",f:"2026-07-11"},
"Distrito A|Cluster 8|Bodega 2|Estructura Principal":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 8|Bodega 2|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 8|Bodega 20|Cimentacion":{i:"2026-07-14",f:"2026-07-18"},
"Distrito A|Cluster 8|Bodega 20|Muro Cifa":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 8|Bodega 20|Levantado de Block en Fachadas":{i:"2026-07-20",f:"2026-07-26"},
"Distrito A|Cluster 8|Bodega 20|Contrapisos":{i:"2026-07-26",f:"2026-07-28"},
"Distrito A|Cluster 8|Bodega 20|Inst. Electricas Bodegas":{i:"2026-07-28",f:"2026-07-31"},
"Distrito A|Cluster 8|Bodega 20|Mezanines y Techados":{i:"2026-07-06",f:"2026-07-13"},
"Distrito A|Cluster 8|Bodega 20|Estructura Principal":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 1|Bodega 34|Estructura Principal":{i:"2026-06-27",f:"2026-07-03"},
"Distrito A|Cluster 1|Bodega 33|Estructura Principal":{i:"2026-06-27",f:"2026-07-03"},
"Distrito A|Cluster 1|Bodega 32|Estructura Principal":{i:"2026-06-27",f:"2026-07-03"},
"Distrito A|Cluster 1|Bodega 31|Estructura Principal":{i:"2026-06-27",f:"2026-07-03"},
"Distrito A|Cluster 2|Bodega 30|Estructura Principal":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 2|Bodega 29|Estructura Principal":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 2|Bodega 28|Estructura Principal":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 2|Bodega 27|Estructura Principal":{i:"2026-06-30",f:"2026-07-06"},
"Distrito A|Cluster 3|Bodega 26|Estructura Principal":{i:"2026-07-03",f:"2026-07-09"},
"Distrito A|Cluster 3|Bodega 25|Estructura Principal":{i:"2026-07-03",f:"2026-07-09"},
"Distrito A|Cluster 3|Bodega 24|Estructura Principal":{i:"2026-07-03",f:"2026-07-09"},
"Distrito A|Cluster 3|Bodega 23|Estructura Principal":{i:"2026-07-03",f:"2026-07-09"},
"Distrito A|Cluster 3|Bodega 22|Estructura Principal":{i:"2026-07-03",f:"2026-07-09"},
"Distrito A|Cluster 4|Bodega 3|Estructura Principal":{i:"2026-07-06",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 4|Estructura Principal":{i:"2026-07-06",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 5|Estructura Principal":{i:"2026-07-06",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 6|Estructura Principal":{i:"2026-07-06",f:"2026-07-12"},
"Distrito A|Cluster 4|Bodega 7|Estructura Principal":{i:"2026-07-06",f:"2026-07-12"},
"Distrito A|Cluster 5|Bodega 8|Estructura Principal":{i:"2026-07-09",f:"2026-07-15"},
"Distrito A|Cluster 5|Bodega 9|Estructura Principal":{i:"2026-07-09",f:"2026-07-15"},
"Distrito A|Cluster 5|Bodega 10|Estructura Principal":{i:"2026-07-09",f:"2026-07-15"},
"Distrito A|Cluster 5|Bodega 11|Estructura Principal":{i:"2026-07-09",f:"2026-07-15"},
"Distrito A|Cluster 6|Bodega 12|Estructura Principal":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 13|Estructura Principal":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 14|Estructura Principal":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 6|Bodega 15|Estructura Principal":{i:"2026-07-12",f:"2026-07-18"},
"Distrito A|Cluster 7|Bodega 16|Estructura Principal":{i:"2026-07-15",f:"2026-07-21"},
"Distrito A|Cluster 7|Bodega 17|Estructura Principal":{i:"2026-07-15",f:"2026-07-21"},
"Distrito A|Cluster 7|Bodega 18|Estructura Principal":{i:"2026-07-15",f:"2026-07-21"},
"Distrito A|Cluster 7|Bodega 19|Estructura Principal":{i:"2026-07-15",f:"2026-07-21"},
"Distrito A|Cluster 8|Bodega 20|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 8|Bodega 21|Cimentacion":{i:"2026-07-14",f:"2026-07-18"},
"Distrito A|Cluster 8|Bodega 21|Muro Cifa":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 8|Bodega 21|Levantado de Block en Fachadas":{i:"2026-07-20",f:"2026-07-26"},
"Distrito A|Cluster 8|Bodega 21|Contrapisos":{i:"2026-07-26",f:"2026-07-28"},
"Distrito A|Cluster 8|Bodega 21|Inst. Electricas Bodegas":{i:"2026-07-28",f:"2026-07-31"},
"Distrito A|Cluster 8|Bodega 21|Mezanines y Techados":{i:"2026-07-06",f:"2026-07-13"},
"Distrito A|Cluster 8|Bodega 21|Estructura Principal":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 1|Bodega 34|Acabados":{i:"2026-06-30",f:"2026-07-20"},
"Distrito A|Cluster 1|Bodega 33|Acabados":{i:"2026-06-30",f:"2026-07-20"},
"Distrito A|Cluster 1|Bodega 32|Acabados":{i:"2026-06-30",f:"2026-07-20"},
"Distrito A|Cluster 1|Bodega 31|Acabados":{i:"2026-06-30",f:"2026-07-20"},
"Distrito A|Cluster 2|Bodega 30|Acabados":{i:"2026-07-01",f:"2026-07-21"},
"Distrito A|Cluster 2|Bodega 29|Acabados":{i:"2026-07-01",f:"2026-07-21"},
"Distrito A|Cluster 2|Bodega 28|Acabados":{i:"2026-07-01",f:"2026-07-21"},
"Distrito A|Cluster 2|Bodega 27|Acabados":{i:"2026-07-01",f:"2026-07-21"},
"Distrito A|Cluster 3|Bodega 26|Acabados":{i:"2026-07-14",f:"2026-08-04"},
"Distrito A|Cluster 3|Bodega 25|Acabados":{i:"2026-07-14",f:"2026-08-04"},
"Distrito A|Cluster 3|Bodega 24|Acabados":{i:"2026-07-14",f:"2026-08-04"},
"Distrito A|Cluster 3|Bodega 23|Acabados":{i:"2026-07-14",f:"2026-08-04"},
"Distrito A|Cluster 3|Bodega 22|Acabados":{i:"2026-07-14",f:"2026-08-04"},
"Distrito A|Cluster 4|Bodega 3|Acabados":{i:"2026-07-15",f:"2026-08-04"},
"Distrito A|Cluster 4|Bodega 4|Acabados":{i:"2026-07-15",f:"2026-08-04"},
"Distrito A|Cluster 4|Bodega 5|Acabados":{i:"2026-07-15",f:"2026-08-04"},
"Distrito A|Cluster 4|Bodega 6|Acabados":{i:"2026-07-15",f:"2026-08-04"},
"Distrito A|Cluster 4|Bodega 7|Acabados":{i:"2026-07-15",f:"2026-08-04"},
"Distrito A|Cluster 5|Bodega 8|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 5|Bodega 9|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 5|Bodega 10|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 5|Bodega 11|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 6|Bodega 12|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 6|Bodega 13|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 6|Bodega 14|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 6|Bodega 15|Acabados":{i:"2026-07-28",f:"2026-08-17"},
"Distrito A|Cluster 7|Bodega 16|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 7|Bodega 17|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 7|Bodega 18|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 7|Bodega 19|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 8|Bodega 21|Acabados":{i:"2026-08-10",f:"2026-08-30"},
"Distrito A|Cluster 8|Bodega 35|Cimentacion":{i:"2026-07-14",f:"2026-07-18"},
"Distrito A|Cluster 8|Bodega 35|Muro Cifa":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 8|Bodega 35|Levantado de Block en Fachadas":{i:"2026-07-20",f:"2026-07-26"},
"Distrito A|Cluster 8|Bodega 35|Contrapisos":{i:"2026-07-26",f:"2026-07-28"},
"Distrito A|Cluster 8|Bodega 35|Inst. Electricas Bodegas":{i:"2026-07-28",f:"2026-07-31"},
"Distrito A|Cluster 8|Bodega 35|Mezanines y Techados":{i:"2026-07-06",f:"2026-07-13"},
"Distrito B|Cluster 1|Bodega 2|Cimentacion":{i:"2026-07-11",f:"2026-07-15"},
"Distrito B|Cluster 1|Bodega 3|Cimentacion":{i:"2026-07-11",f:"2026-07-15"},
"Distrito B|Cluster 1|Bodega 4|Cimentacion":{i:"2026-07-11",f:"2026-07-15"},
"Distrito B|Cluster 1|Bodega 5|Cimentacion":{i:"2026-07-11",f:"2026-07-15"},
"Distrito B|Cluster 1|Bodega 2|Muro Cifa":{i:"2026-07-15",f:"2026-07-19"},
"Distrito B|Cluster 1|Bodega 3|Muro Cifa":{i:"2026-07-15",f:"2026-07-19"},
"Distrito B|Cluster 1|Bodega 4|Muro Cifa":{i:"2026-07-15",f:"2026-07-19"},
"Distrito B|Cluster 1|Bodega 5|Muro Cifa":{i:"2026-07-15",f:"2026-07-19"},
"Distrito B|Cluster 1|Bodega 2|Levantado de Block en Fachadas":{i:"2026-07-19",f:"2026-07-25"},
"Distrito B|Cluster 1|Bodega 3|Levantado de Block en Fachadas":{i:"2026-07-19",f:"2026-07-25"},
"Distrito B|Cluster 1|Bodega 4|Levantado de Block en Fachadas":{i:"2026-07-19",f:"2026-07-25"},
"Distrito B|Cluster 1|Bodega 5|Levantado de Block en Fachadas":{i:"2026-07-19",f:"2026-07-25"},
"Distrito B|Cluster 1|Bodega 2|Contrapisos":{i:"2026-07-25",f:"2026-07-27"},
"Distrito B|Cluster 1|Bodega 3|Contrapisos":{i:"2026-07-25",f:"2026-07-27"},
"Distrito B|Cluster 1|Bodega 4|Contrapisos":{i:"2026-07-25",f:"2026-07-27"},
"Distrito B|Cluster 1|Bodega 5|Contrapisos":{i:"2026-07-25",f:"2026-07-27"},
"Distrito B|Cluster 1|Bodega 2|Inst. Electricas Bodegas":{i:"2026-07-27",f:"2026-07-30"},
"Distrito B|Cluster 1|Bodega 3|Inst. Electricas Bodegas":{i:"2026-07-27",f:"2026-07-30"},
"Distrito B|Cluster 1|Bodega 4|Inst. Electricas Bodegas":{i:"2026-07-27",f:"2026-07-30"},
"Distrito B|Cluster 1|Bodega 5|Inst. Electricas Bodegas":{i:"2026-07-27",f:"2026-07-30"},
"Distrito B|Cluster 2|Bodega 6|Cimentacion":{i:"2026-07-16",f:"2026-07-20"},
"Distrito B|Cluster 2|Bodega 7|Cimentacion":{i:"2026-07-16",f:"2026-07-20"},
"Distrito B|Cluster 2|Bodega 8|Cimentacion":{i:"2026-07-16",f:"2026-07-20"},
"Distrito B|Cluster 2|Bodega 9|Cimentacion":{i:"2026-07-16",f:"2026-07-20"},
"Distrito B|Cluster 2|Bodega 6|Muro Cifa":{i:"2026-07-20",f:"2026-07-24"},
"Distrito B|Cluster 2|Bodega 7|Muro Cifa":{i:"2026-07-20",f:"2026-07-24"},
"Distrito B|Cluster 2|Bodega 8|Muro Cifa":{i:"2026-07-20",f:"2026-07-24"},
"Distrito B|Cluster 2|Bodega 9|Muro Cifa":{i:"2026-07-20",f:"2026-07-24"},
"Distrito B|Cluster 2|Bodega 6|Levantado de Block en Fachadas":{i:"2026-07-24",f:"2026-07-30"},
"Distrito B|Cluster 2|Bodega 7|Levantado de Block en Fachadas":{i:"2026-07-24",f:"2026-07-30"},
"Distrito B|Cluster 2|Bodega 8|Levantado de Block en Fachadas":{i:"2026-07-24",f:"2026-07-30"},
"Distrito B|Cluster 2|Bodega 9|Levantado de Block en Fachadas":{i:"2026-07-24",f:"2026-07-30"},
"Distrito B|Cluster 2|Bodega 6|Contrapisos":{i:"2026-07-30",f:"2026-08-01"},
"Distrito B|Cluster 2|Bodega 7|Contrapisos":{i:"2026-07-30",f:"2026-08-01"},
"Distrito B|Cluster 2|Bodega 8|Contrapisos":{i:"2026-07-30",f:"2026-08-01"},
"Distrito B|Cluster 2|Bodega 9|Contrapisos":{i:"2026-07-30",f:"2026-08-01"},
"Distrito B|Cluster 2|Bodega 6|Inst. Electricas Bodegas":{i:"2026-08-01",f:"2026-08-04"},
"Distrito B|Cluster 2|Bodega 7|Inst. Electricas Bodegas":{i:"2026-08-01",f:"2026-08-04"},
"Distrito B|Cluster 2|Bodega 8|Inst. Electricas Bodegas":{i:"2026-08-01",f:"2026-08-04"},
"Distrito B|Cluster 2|Bodega 9|Inst. Electricas Bodegas":{i:"2026-08-01",f:"2026-08-04"},
"Distrito B|Cluster 3|Bodega 12|Cimentacion":{i:"2026-07-21",f:"2026-07-25"},
"Distrito B|Cluster 3|Bodega 13|Cimentacion":{i:"2026-07-21",f:"2026-07-25"},
"Distrito B|Cluster 3|Bodega 14|Cimentacion":{i:"2026-07-21",f:"2026-07-25"},
"Distrito B|Cluster 3|Bodega 15|Cimentacion":{i:"2026-07-21",f:"2026-07-25"},
"Distrito B|Cluster 3|Bodega 12|Muro Cifa":{i:"2026-07-25",f:"2026-07-29"},
"Distrito B|Cluster 3|Bodega 13|Muro Cifa":{i:"2026-07-25",f:"2026-07-29"},
"Distrito B|Cluster 3|Bodega 14|Muro Cifa":{i:"2026-07-25",f:"2026-07-29"},
"Distrito B|Cluster 3|Bodega 15|Muro Cifa":{i:"2026-07-25",f:"2026-07-29"},
"Distrito B|Cluster 3|Bodega 12|Levantado de Block en Fachadas":{i:"2026-07-29",f:"2026-08-04"},
"Distrito B|Cluster 3|Bodega 13|Levantado de Block en Fachadas":{i:"2026-07-29",f:"2026-08-04"},
"Distrito B|Cluster 3|Bodega 14|Levantado de Block en Fachadas":{i:"2026-07-29",f:"2026-08-04"},
"Distrito B|Cluster 3|Bodega 15|Levantado de Block en Fachadas":{i:"2026-07-29",f:"2026-08-04"},
"Distrito B|Cluster 3|Bodega 12|Contrapisos":{i:"2026-08-04",f:"2026-08-06"},
"Distrito B|Cluster 3|Bodega 13|Contrapisos":{i:"2026-08-04",f:"2026-08-06"},
"Distrito B|Cluster 3|Bodega 14|Contrapisos":{i:"2026-08-04",f:"2026-08-06"},
"Distrito B|Cluster 3|Bodega 15|Contrapisos":{i:"2026-08-04",f:"2026-08-06"},
"Distrito B|Cluster 3|Bodega 12|Inst. Electricas Bodegas":{i:"2026-08-06",f:"2026-08-09"},
"Distrito B|Cluster 3|Bodega 13|Inst. Electricas Bodegas":{i:"2026-08-06",f:"2026-08-09"},
"Distrito B|Cluster 3|Bodega 14|Inst. Electricas Bodegas":{i:"2026-08-06",f:"2026-08-09"},
"Distrito B|Cluster 3|Bodega 15|Inst. Electricas Bodegas":{i:"2026-08-06",f:"2026-08-09"},
"Distrito B|Cluster 4|Bodega 16|Cimentacion":{i:"2026-07-26",f:"2026-07-30"},
"Distrito B|Cluster 4|Bodega 17|Cimentacion":{i:"2026-07-26",f:"2026-07-30"},
"Distrito B|Cluster 4|Bodega 18|Cimentacion":{i:"2026-07-26",f:"2026-07-30"},
"Distrito B|Cluster 4|Bodega 19|Cimentacion":{i:"2026-07-26",f:"2026-07-30"},
"Distrito B|Cluster 4|Bodega 16|Muro Cifa":{i:"2026-07-30",f:"2026-08-03"},
"Distrito B|Cluster 4|Bodega 17|Muro Cifa":{i:"2026-07-30",f:"2026-08-03"},
"Distrito B|Cluster 4|Bodega 18|Muro Cifa":{i:"2026-07-30",f:"2026-08-03"},
"Distrito B|Cluster 4|Bodega 19|Muro Cifa":{i:"2026-07-30",f:"2026-08-03"},
"Distrito B|Cluster 4|Bodega 16|Levantado de Block en Fachadas":{i:"2026-08-03",f:"2026-08-09"},
"Distrito B|Cluster 4|Bodega 17|Levantado de Block en Fachadas":{i:"2026-08-03",f:"2026-08-09"},
"Distrito B|Cluster 4|Bodega 18|Levantado de Block en Fachadas":{i:"2026-08-03",f:"2026-08-09"},
"Distrito B|Cluster 4|Bodega 19|Levantado de Block en Fachadas":{i:"2026-08-03",f:"2026-08-09"},
"Distrito B|Cluster 4|Bodega 16|Contrapisos":{i:"2026-08-09",f:"2026-08-11"},
"Distrito B|Cluster 4|Bodega 17|Contrapisos":{i:"2026-08-09",f:"2026-08-11"},
"Distrito B|Cluster 4|Bodega 18|Contrapisos":{i:"2026-08-09",f:"2026-08-11"},
"Distrito B|Cluster 4|Bodega 19|Contrapisos":{i:"2026-08-09",f:"2026-08-11"},
"Distrito B|Cluster 4|Bodega 16|Inst. Electricas Bodegas":{i:"2026-08-11",f:"2026-08-14"},
"Distrito B|Cluster 4|Bodega 17|Inst. Electricas Bodegas":{i:"2026-08-11",f:"2026-08-14"},
"Distrito B|Cluster 4|Bodega 18|Inst. Electricas Bodegas":{i:"2026-08-11",f:"2026-08-14"},
"Distrito B|Cluster 4|Bodega 19|Inst. Electricas Bodegas":{i:"2026-08-11",f:"2026-08-14"},
"Distrito B|Cluster 5|Bodega 20|Cimentacion":{i:"2026-07-31",f:"2026-08-04"},
"Distrito B|Cluster 5|Bodega 10|Cimentacion":{i:"2026-07-31",f:"2026-08-04"},
"Distrito B|Cluster 5|Bodega 11|Cimentacion":{i:"2026-07-31",f:"2026-08-04"},
"Distrito B|Cluster 5|Bodega 1|Cimentacion":{i:"2026-07-31",f:"2026-08-04"},
"Distrito B|Cluster 5|Bodega 20|Muro Cifa":{i:"2026-08-04",f:"2026-08-08"},
"Distrito B|Cluster 5|Bodega 10|Muro Cifa":{i:"2026-08-04",f:"2026-08-08"},
"Distrito B|Cluster 5|Bodega 11|Muro Cifa":{i:"2026-08-04",f:"2026-08-08"},
"Distrito B|Cluster 5|Bodega 1|Muro Cifa":{i:"2026-08-04",f:"2026-08-08"},
"Distrito B|Cluster 5|Bodega 20|Levantado de Block en Fachadas":{i:"2026-08-08",f:"2026-08-14"},
"Distrito B|Cluster 5|Bodega 10|Levantado de Block en Fachadas":{i:"2026-08-08",f:"2026-08-14"},
"Distrito B|Cluster 5|Bodega 11|Levantado de Block en Fachadas":{i:"2026-08-08",f:"2026-08-14"},
"Distrito B|Cluster 5|Bodega 1|Levantado de Block en Fachadas":{i:"2026-08-08",f:"2026-08-14"},
"Distrito B|Cluster 5|Bodega 20|Contrapisos":{i:"2026-08-14",f:"2026-08-16"},
"Distrito B|Cluster 5|Bodega 10|Contrapisos":{i:"2026-08-14",f:"2026-08-16"},
"Distrito B|Cluster 5|Bodega 11|Contrapisos":{i:"2026-08-14",f:"2026-08-16"},
"Distrito B|Cluster 5|Bodega 1|Contrapisos":{i:"2026-08-14",f:"2026-08-16"},
"Distrito B|Cluster 5|Bodega 20|Inst. Electricas Bodegas":{i:"2026-08-16",f:"2026-08-19"},
"Distrito B|Cluster 5|Bodega 10|Inst. Electricas Bodegas":{i:"2026-08-16",f:"2026-08-19"},
"Distrito B|Cluster 5|Bodega 11|Inst. Electricas Bodegas":{i:"2026-08-16",f:"2026-08-19"},
"Distrito B|Cluster 5|Bodega 1|Inst. Electricas Bodegas":{i:"2026-08-16",f:"2026-08-19"},
"Distrito B|Cluster 1|Bodega 2|Mezanines y Techados":{i:"2026-07-11",f:"2026-07-23"},
"Distrito B|Cluster 1|Bodega 3|Mezanines y Techados":{i:"2026-07-11",f:"2026-07-23"},
"Distrito B|Cluster 1|Bodega 4|Mezanines y Techados":{i:"2026-07-11",f:"2026-07-23"},
"Distrito B|Cluster 1|Bodega 5|Mezanines y Techados":{i:"2026-07-11",f:"2026-07-23"},
"Distrito B|Cluster 2|Bodega 6|Mezanines y Techados":{i:"2026-07-13",f:"2026-07-25"},
"Distrito B|Cluster 2|Bodega 7|Mezanines y Techados":{i:"2026-07-13",f:"2026-07-25"},
"Distrito B|Cluster 2|Bodega 8|Mezanines y Techados":{i:"2026-07-13",f:"2026-07-25"},
"Distrito B|Cluster 2|Bodega 9|Mezanines y Techados":{i:"2026-07-13",f:"2026-07-25"},
"Distrito B|Cluster 3|Bodega 12|Mezanines y Techados":{i:"2026-07-15",f:"2026-07-27"},
"Distrito B|Cluster 3|Bodega 13|Mezanines y Techados":{i:"2026-07-15",f:"2026-07-27"},
"Distrito B|Cluster 3|Bodega 14|Mezanines y Techados":{i:"2026-07-15",f:"2026-07-27"},
"Distrito B|Cluster 3|Bodega 15|Mezanines y Techados":{i:"2026-07-15",f:"2026-07-27"},
"Distrito B|Cluster 4|Bodega 16|Mezanines y Techados":{i:"2026-07-17",f:"2026-07-29"},
"Distrito B|Cluster 4|Bodega 17|Mezanines y Techados":{i:"2026-07-17",f:"2026-07-29"},
"Distrito B|Cluster 4|Bodega 18|Mezanines y Techados":{i:"2026-07-17",f:"2026-07-29"},
"Distrito B|Cluster 4|Bodega 19|Mezanines y Techados":{i:"2026-07-17",f:"2026-07-29"},
"Distrito B|Cluster 5|Bodega 20|Mezanines y Techados":{i:"2026-07-19",f:"2026-07-31"},
"Distrito B|Cluster 5|Bodega 10|Mezanines y Techados":{i:"2026-07-19",f:"2026-07-31"},
"Distrito B|Cluster 5|Bodega 11|Mezanines y Techados":{i:"2026-07-19",f:"2026-07-31"},
"Distrito B|Cluster 5|Bodega 1|Mezanines y Techados":{i:"2026-07-19",f:"2026-07-31"},
"Distrito B|Cluster 1|Bodega 2|Estructura Principal":{i:"2026-07-18",f:"2026-08-02"},
"Distrito B|Cluster 1|Bodega 3|Estructura Principal":{i:"2026-07-18",f:"2026-08-02"},
"Distrito B|Cluster 1|Bodega 4|Estructura Principal":{i:"2026-07-18",f:"2026-08-02"},
"Distrito B|Cluster 1|Bodega 5|Estructura Principal":{i:"2026-07-18",f:"2026-08-02"},
"Distrito B|Cluster 2|Bodega 6|Estructura Principal":{i:"2026-07-23",f:"2026-08-07"},
"Distrito B|Cluster 2|Bodega 7|Estructura Principal":{i:"2026-07-23",f:"2026-08-07"},
"Distrito B|Cluster 2|Bodega 8|Estructura Principal":{i:"2026-07-23",f:"2026-08-07"},
"Distrito B|Cluster 2|Bodega 9|Estructura Principal":{i:"2026-07-23",f:"2026-08-07"},
"Distrito B|Cluster 3|Bodega 12|Estructura Principal":{i:"2026-07-28",f:"2026-08-12"},
"Distrito B|Cluster 3|Bodega 13|Estructura Principal":{i:"2026-07-28",f:"2026-08-12"},
"Distrito B|Cluster 3|Bodega 14|Estructura Principal":{i:"2026-07-28",f:"2026-08-12"},
"Distrito B|Cluster 3|Bodega 15|Estructura Principal":{i:"2026-07-28",f:"2026-08-12"},
"Distrito B|Cluster 4|Bodega 16|Estructura Principal":{i:"2026-08-02",f:"2026-08-17"},
"Distrito B|Cluster 4|Bodega 17|Estructura Principal":{i:"2026-08-02",f:"2026-08-17"},
"Distrito B|Cluster 4|Bodega 18|Estructura Principal":{i:"2026-08-02",f:"2026-08-17"},
"Distrito B|Cluster 4|Bodega 19|Estructura Principal":{i:"2026-08-02",f:"2026-08-17"},
"Distrito B|Cluster 5|Bodega 20|Estructura Principal":{i:"2026-08-07",f:"2026-08-22"},
"Distrito B|Cluster 5|Bodega 10|Estructura Principal":{i:"2026-08-07",f:"2026-08-22"},
"Distrito B|Cluster 5|Bodega 11|Estructura Principal":{i:"2026-08-07",f:"2026-08-22"},
"Distrito B|Cluster 5|Bodega 1|Estructura Principal":{i:"2026-08-07",f:"2026-08-22"},
"Distrito B|Cluster 1|Bodega 2|Acabados":{i:"2026-08-02",f:"2026-08-24"},
"Distrito B|Cluster 1|Bodega 3|Acabados":{i:"2026-08-02",f:"2026-08-24"},
"Distrito B|Cluster 1|Bodega 4|Acabados":{i:"2026-08-02",f:"2026-08-24"},
"Distrito B|Cluster 1|Bodega 5|Acabados":{i:"2026-08-02",f:"2026-08-24"},
"Distrito B|Cluster 2|Bodega 6|Acabados":{i:"2026-08-05",f:"2026-08-27"},
"Distrito B|Cluster 2|Bodega 7|Acabados":{i:"2026-08-05",f:"2026-08-27"},
"Distrito B|Cluster 2|Bodega 8|Acabados":{i:"2026-08-05",f:"2026-08-27"},
"Distrito B|Cluster 2|Bodega 9|Acabados":{i:"2026-08-05",f:"2026-08-27"},
"Distrito B|Cluster 3|Bodega 12|Acabados":{i:"2026-08-20",f:"2026-09-11"},
"Distrito B|Cluster 3|Bodega 13|Acabados":{i:"2026-08-20",f:"2026-09-11"},
"Distrito B|Cluster 3|Bodega 14|Acabados":{i:"2026-08-20",f:"2026-09-11"},
"Distrito B|Cluster 3|Bodega 15|Acabados":{i:"2026-08-20",f:"2026-09-11"},
"Distrito B|Cluster 4|Bodega 16|Acabados":{i:"2026-08-21",f:"2026-09-12"},
"Distrito B|Cluster 4|Bodega 17|Acabados":{i:"2026-08-21",f:"2026-09-12"},
"Distrito B|Cluster 4|Bodega 18|Acabados":{i:"2026-08-21",f:"2026-09-12"},
"Distrito B|Cluster 4|Bodega 19|Acabados":{i:"2026-08-21",f:"2026-09-12"},
"Distrito B|Cluster 5|Bodega 20|Acabados":{i:"2026-09-05",f:"2026-09-27"},
"Distrito B|Cluster 5|Bodega 10|Acabados":{i:"2026-09-05",f:"2026-09-27"},
"Distrito B|Cluster 5|Bodega 11|Acabados":{i:"2026-09-05",f:"2026-09-27"},
"Distrito B|Cluster 5|Bodega 1|Acabados":{i:"2026-09-05",f:"2026-09-27"},
"Distrito A|Cluster 8|Bodega 36|Cimentacion":{i:"2026-07-14",f:"2026-07-18"},
"Distrito A|Cluster 8|Bodega 36|Muro Cifa":{i:"2026-07-18",f:"2026-07-20"},
"Distrito A|Cluster 8|Bodega 36|Levantado de Block en Fachadas":{i:"2026-07-20",f:"2026-07-26"},
"Distrito A|Cluster 8|Bodega 36|Contrapisos":{i:"2026-07-26",f:"2026-07-28"},
"Distrito A|Cluster 8|Bodega 36|Inst. Electricas Bodegas":{i:"2026-07-28",f:"2026-07-31"},
"Distrito A|Cluster 8|Bodega 36|Mezanines y Techados":{i:"2026-07-06",f:"2026-07-13"},
"Distrito A|Cluster 8|Bodega 36|Estructura Principal":{i:"2026-07-16",f:"2026-07-22"},
"Distrito A|Cluster 8|Bodega 36|Acabados":{i:"2026-08-10",f:"2026-08-30"},
};

var LD2={},SFF="all",CV="dist",CD=null,CC=null,CB=null,CU="A",bch=null,cch=null;

function dt(s){return new Date(s+"T00:00:00");}
function SS(ini,fin,av){
  var f=dt(fin),i=dt(ini);
  if(av>=100)return "done";
  if(TODAY<i)return "pend";
  if(TODAY>f)return "late";
  var el=(TODAY-i)/(f-i),exp=Math.round(Math.min(100,el*100));
  if(av>=exp)return "ok";
  if(av>=exp*0.65)return "risk";
  return "late";
}
function GR2(d,cl,b,pk){
  if(!LD2.filas)return [];
  return LD2.filas.filter(function(r){
    return r["Distrito"]===d&&r["Cluster"]===cl&&r["Bodega"]===b&&normProc(r["Proceso"]||"").indexOf(pk)>=0;
  });
}
function PA(d,cl,b,pi){
  var rows=GR2(d,cl,b,PK[pi]);
  if(!rows.length)return 0;
  var s=0;
  rows.forEach(function(r){s+=parseFloat(r["% Avance"]||0);});
  return Math.round(s/rows.length);
}
function OGBod(d,cl,b,procKey){
  // Get OG process % for a specific bodega
  if(!LD2.filas)return 0;
  var normKey=normProc(procKey);
  var rows=LD2.filas.filter(function(r){
    return r["Distrito"]===d&&r["Cluster"]===cl&&r["Bodega"]===b&&
      normProc(r["Proceso"]||"").indexOf(normKey)>=0;
  });
  if(!rows.length)return 0;
  return Math.round(rows.reduce(function(s,r){return s+parseFloat(r["% Avance"]||0);},0)/rows.length);
}
function WP(d,cl,b){
  // Weighted average per bodega using same weights as total project
  var mez=PA(d,cl,b,0);
  var est=PA(d,cl,b,1);
  var acab=PA(d,cl,b,2);
  var cim=OGBod(d,cl,b,"Cimentacion");
  var cifa=OGBod(d,cl,b,"Muro Cifa");
  var block=OGBod(d,cl,b,"Levantado de Block");
  var contra=OGBod(d,cl,b,"Contrapisos");
  var elec=OGBod(d,cl,b,"Inst. Electricas");
  return Math.round(
    mez*0.15 + est*0.15 + acab*0.10 +
    cim*0.12 + cifa*0.10 + block*0.05 +
    contra*0.12 + elec*0.05
  );
  // Note: Urbanización is not per-bodega so not included here
}
function CP(d,cl){var bs=DB[d][cl];return Math.round(bs.reduce(function(s,b){return s+WP(d,cl,b);},0)/bs.length);}
function DP(d){var cls=Object.keys(DB[d]);return Math.round(cls.reduce(function(s,cl){return s+CP(d,cl);},0)/cls.length);}
function TP(){
  // Weighted average across all processes
  // Standard processes: avg across all 56 bodegas
  var mez=0,est=0,acab=0,tot=0,cnt=0;
  ["Distrito A","Distrito B"].forEach(function(d){
    Object.keys(DB[d]).forEach(function(cl){
      DB[d][cl].forEach(function(b){
        mez+=PA(d,cl,b,0);
        est+=PA(d,cl,b,1);
        acab+=PA(d,cl,b,2);
        cnt++;
      });
    });
  });
  var avgMez=cnt?Math.round(mez/cnt):0;
  var avgEst=cnt?Math.round(est/cnt):0;
  var avgAcab=cnt?Math.round(acab/cnt):0;
  // OG processes
  var avgCim=OGAvg("Cimentacion");
  var avgCifa=OGAvg("Muro Cifa");
  var avgBlock=OGAvg("Levantado de Block");
  var avgContra=OGAvg("Contrapisos");
  var avgElec=OGAvg("Inst. Electricas");
  // Urbanización: average of all urba rows
  var urbaRows=(LD2.filas||[]).filter(function(r){return r["Proceso"]==="Urbanización";});
  var avgUrba=urbaRows.length?Math.round(urbaRows.reduce(function(s,r){return s+parseFloat(r["% Avance"]||0);},0)/urbaRows.length):0;
  // Weighted total
  return Math.round(
    avgMez*0.15 + avgEst*0.15 + avgAcab*0.10 +
    avgCim*0.12 + avgCifa*0.10 + avgBlock*0.05 +
    avgContra*0.12 + avgElec*0.05 + avgUrba*0.16
  );
}
function CD2(){
  var n=0;
  ["Distrito A","Distrito B"].forEach(function(d){Object.keys(DB[d]).forEach(function(cl){DB[d][cl].forEach(function(b){if(WP(d,cl,b)===100)n++;});});});
  return n;
}
function CL(){
  // Count bodegas that are behind schedule
  var n=0;
  ["Distrito A","Distrito B"].forEach(function(d){
    Object.keys(DB[d]).forEach(function(cl){
      DB[d][cl].forEach(function(b){
        if(WS(d,cl,b)==="late")n++;
      });
    });
  });
  return n;
}
function procStatus(ini,fin,av){
  if(!ini||!fin)return "pend";
  var i=new Date(ini+"T00:00:00"),f=new Date(fin+"T00:00:00");
  if(TODAY<i)return "pend";
  if(av>=100)return "ok";
  if(TODAY>f)return "late";
  var el=(TODAY-i)/(f-i);
  var exp=Math.round(Math.min(100,el*100));
  var gap=exp-av;
  if(gap>=30)return "late";
  if(gap>=15)return "risk";
  return "ok";
}
function WS(d,cl,b){
  var late=0,risk=0,ok=0,pend=0;
  var allProcs=["Cimentacion","Muro Cifa","Levantado de Block en Fachadas","Contrapisos","Inst. Electricas Bodegas","Mezanines y Techados","Estructura Principal","Acabados"];
  var filas=LD2.filas||[];
  for(var pi=0;pi<allProcs.length;pi++){
    var proc=allProcs[pi];
    var normP=normProc(proc);
    // Get actual % from data.json
    var rows=filas.filter(function(r){return r["Distrito"]===d&&r["Cluster"]===cl&&r["Bodega"]===b&&normProc(r["Proceso"]||"").indexOf(normP)>=0;});
    var av=rows.length?Math.round(rows.reduce(function(s,r){return s+parseFloat(r["% Avance"]||0);},0)/rows.length):0;
    // Get plan dates — direct key lookup
    var planKey=d+"|"+cl+"|"+b+"|"+proc;
    var planEntry=PLAN[planKey];
    if(!planEntry){pend++;continue;}
    var st=procStatus(planEntry.i,planEntry.f,av);
    if(st==="late")late++;
    else if(st==="risk")risk++;
    else if(st==="ok")ok++;
    else pend++;
  }
  if(late>0)return "late";
  if(risk>0)return "risk";
  if(ok>0)return "ok";
  return "pend";
}
function ge(id){return document.getElementById(id);}
function ce(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html)e.innerHTML=html;return e;}

function ST(tab){
  document.querySelectorAll(".scr").forEach(function(s){s.classList.remove("on");});
  document.querySelectorAll(".nb").forEach(function(b){b.classList.remove("on");});
  ge("s-"+tab).classList.add("on");
  ge("bn-"+tab).classList.add("on");
  if(tab==="r")RR();
  else if(tab==="b")RB();
  else if(tab==="u")RU();
  else if(tab==="s")RS();
  else if(tab==="rp")RRP();
}

function RR(){
  var pA=DP("Distrito A"),pB=DP("Distrito B");
  ge("s-r").innerHTML=
    "<div class=\"kg\">"+
    "<div class=\"kc\"><div class=\"ki\" style=\"color:var(--or)\"><i class=\"ti ti-trending-up\"></i></div><div class=\"kv\" style=\"color:var(--or)\">"+TP()+"%</div><div class=\"kl\">Avance total ponderado</div></div>"+
    "<div class=\"kc\"><div class=\"ki\" style=\"color:var(--green)\"><i class=\"ti ti-circle-check\"></i></div><div class=\"kv\" style=\"color:var(--green)\">"+CD2()+"/56</div><div class=\"kl\">Bodegas completas</div></div>"+
    "<div class=\"kc\"><div class=\"ki\" style=\"color:var(--blue)\"><i class=\"ti ti-building-warehouse\"></i></div><div class=\"kv\" style=\"color:var(--blue)\">56</div><div class=\"kl\">Total bodegas</div></div>"+
    "<div class=\"kc\"><div class=\"ki\" style=\"color:var(--red)\"><i class=\"ti ti-alert-circle\"></i></div><div class=\"kv\" style=\"color:var(--red)\">"+CL()+"</div><div class=\"kl\">Pasos atrasados</div></div>"+
    "</div><div class=\"sec\">Avance por distrito</div>"+
    "<div class=\"dc\" data-td=\"A\">"+
      "<div class=\"dt\"><div class=\"di\" style=\"background:var(--or2);color:var(--or3)\"><i class=\"ti ti-map-pin\"></i></div>"+
      "<div style=\"flex:1\"><div class=\"dn\">Distrito A</div><div class=\"ds\">9 clusters · 36 bodegas</div></div>"+
      "<div class=\"dp\" style=\"color:var(--or)\">"+pA+"%</div>"+
      "<i class=\"ti ti-chevron-down cv\" id=\"cva\"></i></div>"+
      "<div class=\"pb\"><div class=\"pf\" style=\"width:"+pA+"%;background:var(--or)\"></div></div>"+
      "<div class=\"cl-l\" id=\"cla\"></div></div>"+
    "<div class=\"dc\" data-td=\"B\">"+
      "<div class=\"dt\"><div class=\"di\" style=\"background:var(--blue2);color:var(--blue3)\"><i class=\"ti ti-map-pin\"></i></div>"+
      "<div style=\"flex:1\"><div class=\"dn\">Distrito B</div><div class=\"ds\">5 clusters · 20 bodegas</div></div>"+
      "<div class=\"dp\" style=\"color:var(--blue)\">"+pB+"%</div>"+
      "<i class=\"ti ti-chevron-down cv\" id=\"cvb\"></i></div>"+
      "<div class=\"pb\"><div class=\"pf\" style=\"width:"+pB+"%;background:var(--blue)\"></div></div>"+
      "<div class=\"cl-l\" id=\"clb\"></div></div>"+
    "<div class=\"sec\">Avance por proceso</div><div class=\"cc2\">"+PAB()+"</div>";
}
function normProc(s){
  // Normalize process name to handle encoding variants and accents
  if(!s)return "";
  var r=s.replace(/Ã³/g,"o").replace(/Ã©/g,"e").replace(/Ã/g,"i").replace(/Ã±/g,"n").replace(/Ã¡/g,"a").replace(/Ã¼/g,"u");
  // Also strip accents for comparison
  r=r.replace(/[óòöô]/g,"o").replace(/[éèëê]/g,"e").replace(/[íìïî]/g,"i").replace(/[áàäâ]/g,"a").replace(/[úùüû]/g,"u").replace(/ñ/g,"n");
  return r;
}
function OGAvg(procKey){
  // % of bodegas with 100% completion in this process out of 56 total
  if(!LD2.filas)return 0;
  var normKey=normProc(procKey);
  var TOTAL_BODEGAS=56;
  // Group by bodega and get average per bodega
  var bodMap={};
  LD2.filas.forEach(function(r){
    var p=normProc(r["Proceso"]||"");
    if(p.indexOf(normKey)<0)return;
    var k=r["Distrito"]+"|"+r["Cluster"]+"|"+r["Bodega"];
    if(!bodMap[k]){bodMap[k]={tot:0,cnt:0};}
    bodMap[k].tot+=parseFloat(r["% Avance"]||0);
    bodMap[k].cnt++;
  });
  var completed=0;
  Object.keys(bodMap).forEach(function(k){
    var avg=bodMap[k].cnt?Math.round(bodMap[k].tot/bodMap[k].cnt):0;
    if(avg>=100)completed++;
  });
  return Math.round(completed/TOTAL_BODEGAS*100);
}

function PAB(){
  var h="";
  // Standard processes
  PN.forEach(function(n,pi){
    var tot=0,cnt=0;
    ["Distrito A","Distrito B"].forEach(function(d){Object.keys(DB[d]).forEach(function(cl){DB[d][cl].forEach(function(b){tot+=PA(d,cl,b,pi);cnt++;});});});
    var avg=cnt?Math.round(tot/cnt):0;
    h+="<div class=\"psr\"><span class=\"psn\">"+n+"</span><div class=\"psb\"><div style=\"height:100%;width:"+avg+"%;background:"+PC[pi]+";border-radius:4px;\"></div></div><span class=\"psp\" style=\"color:"+PC[pi]+"\">" +avg+"%</span></div>";
  });
  // Obra Gris processes
  var ogKeys=["Cimentacion","Muro Cifa","Levantado de Block","Contrapisos","Inst. Electricas"];
  for(var i=0;i<ON.length;i++){
    var avg2=OGAvg(ogKeys[i]);
    h+="<div class=\"psr\"><span class=\"psn\">"+ON[i]+"</span><div class=\"psb\"><div style=\"height:100%;width:"+avg2+"%;background:"+OC[i]+";border-radius:4px;\"></div></div><span class=\"psp\" style=\"color:"+OC[i]+"\">" +avg2+"%</span></div>";
  }
  // Urbanizacion
  var urbaRows=(LD2.filas||[]).filter(function(r){return r["Proceso"]==="Urbanización";});
  var urbaAvg=urbaRows.length?Math.round(urbaRows.reduce(function(s,r){return s+parseFloat(r["% Avance"]||0);},0)/urbaRows.length):0;
  h+="<div class=\"psr\"><span class=\"psn\">Urbanización</span><div class=\"psb\"><div style=\"height:100%;width:"+urbaAvg+"%;background:#185FA5;border-radius:4px;\"></div></div><span class=\"psp\" style=\"color:#185FA5\">"+urbaAvg+"%</span></div>";
  return h;
}
function TD(d){
  var cl=ge("cl"+d.toLowerCase()),cv2=ge("cv"+d.toLowerCase()),open=cl.style.display==="block";
  cl.style.display=open?"none":"block";
  cv2.classList.toggle("op",!open);
  if(!open){
    var dd="Distrito "+d,color=d==="A"?"var(--or)":"var(--blue)",h="";
    Object.keys(DB[dd]).forEach(function(cluster){
      var pct=CP(dd,cluster);
      h+="<div class=\"cl-r\" data-d=\""+dd+"\" data-cl=\""+cluster+"\">"+
        "<span class=\"cl-n\">"+cluster+"</span>"+
        "<div class=\"cl-bw\"><div class=\"cl-p\">"+pct+"%</div>"+
        "<div style=\"height:4px;background:var(--bg3);border-radius:2px;overflow:hidden;\">"+
        "<div style=\"height:100%;width:"+pct+"%;background:"+color+";border-radius:2px;\"></div></div></div>"+
        "<i class=\"ti ti-chevron-right\" style=\"font-size:12px;color:var(--txt3);margin-left:4px;\"></i></div>";
    });
    cl.innerHTML=h;
  }
}
function OC2(d,cl){CD=d;CC=cl;CV="cluster";ST("b");}
function OB(d,cl,b){CD=d;CC=cl;CB=b;CV="bodega";ST("b");}
function RB(){
  var cont=ge("bc4");
  if(CV==="dist"){cont.innerHTML="<p style=\"font-size:13px;color:var(--txt2);padding:20px;text-align:center;\">Selecciona un distrito desde Resumen</p>";return;}
  if(CV==="cluster"){
    var h="<div class=\"bk\" data-go=\"home\"><i class=\"ti ti-arrow-left\"></i>"+CD+" — "+CC+"</div><div class=\"bg2\">";
    DB[CD][CC].forEach(function(b){
      var pct=WP(CD,CC,b),bc=pct===100?"bbd":pct>0?"bbp":"bbe",lbl=pct===100?"Completa":pct>0?pct+"%":"Pendiente",mb="";
      [0,1,2].forEach(function(i){var a=PA(CD,CC,b,i);mb+="<div class=\"prr\"><span class=\"prl\">"+(i+1)+"</span><div class=\"prt\"><div style=\"height:100%;width:"+a+"%;background:"+PC[i]+";border-radius:2px;\"></div></div><span class=\"prp\">"+a+"%</span></div>";});
      h+="<div class=\"bc3\" data-d=\""+CD+"\" data-cl=\""+CC+"\" data-b=\""+b+"\"><div class=\"bt\"><span class=\"bn\">"+b+"</span><span class=\"bb "+bc+"\">"+lbl+"</span></div><div class=\"pr\">"+mb+"</div></div>";
    });
    cont.innerHTML=h+"</div>";return;
  }
  if(CV==="bodega"){
    var pct2=WP(CD,CC,CB),col=pct2===100?"var(--green)":pct2>0?"var(--or)":"var(--txt2)";
    var h2="<div class=\"bk\" data-go=\"cluster\"><i class=\"ti ti-arrow-left\"></i>"+CC+"</div>"+
      "<div class=\"wh\"><div class=\"whn\">"+CB+"</div><div class=\"whs\">"+CD+" · "+CC+"</div>"+
      "<div class=\"whp\" style=\"color:"+col+"\">"+pct2+"%</div>"+
      "<div class=\"pb\" style=\"margin-top:8px;\"><div class=\"pf\" style=\"width:"+pct2+"%;background:"+col+"\"></div></div></div>";
    var ph="";
    [0,1,2].forEach(function(pi){
      var avg=PA(CD,CC,CB,pi),c=PC[pi],rows=GR2(CD,CC,CB,PK[pi]),sh="";
      SL[pi].forEach(function(sname,si){
        var row=rows[si]||{},av=parseFloat(row["% Avance"]||0),ini=row["Inicio Proyectado"]||"",fin=row["Fin Proyectado"]||"",st=ini&&fin?SS(ini,fin,av):"pend";
        var tc={"done":"tgd","ok":"tgo","risk":"tgr","late":"tgl","pend":"tgp"}[st],tl2={"done":"Listo","ok":"En tiempo","risk":"En riesgo","late":"Atrasado","pend":"Pendiente"}[st],nota=row["Notas"]||"";
        sh+="<div class=\"si\"><div class=\"st2\"><span class=\"sn2\">"+sname+"</span><div class=\"sw\"><div class=\"str\"><div style=\"height:100%;width:"+av+"%;background:"+c+";border-radius:2px;\"></div></div><span class=\"sp3\" style=\"color:"+c+"\">"+av+"%</span><span class=\"stg "+tc+"\">"+tl2+"</span></div></div>"+(nota?"<div class=\"nota\"><i class=\"ti ti-note\" style=\"font-size:10px;\"></i> "+nota+"</div>":"")+"</div>";
      });
      ph+="<div class=\"prc\"><div class=\"ph\" data-tog=\"1\"><div class=\"pn\" style=\"background:"+c+"22;color:"+c+"\">"+(pi+1)+"</div><span class=\"pt\">"+PN[pi]+"</span><span class=\"pp\" style=\"color:"+c+"\">"+avg+"%</span><i class=\"ti ti-chevron-down\" style=\"font-size:14px;color:var(--txt3);transition:transform .2s;margin-left:8px;\"></i></div><div class=\"pmb\"><div style=\"height:100%;width:"+avg+"%;background:"+c+";border-radius:2px;\"></div></div><div class=\"sl3\" style=\"display:none\">"+sh+"</div></div>";
    });
    var ogk=CD+"|"+CC+"|"+CB;
    if(typeof OG_DB!=="undefined"&&OG_DB[ogk]){
      h2+="<div style=\"font-size:11px;font-weight:600;color:var(--txt2);text-transform:uppercase;letter-spacing:.06em;margin:13px 0 8px;\">Obra Gris</div>";
      var ogpr=OG_DB[ogk];
      Object.keys(ogpr).forEach(function(proc,ogi){
        var pasos=ogpr[proc],c=OC[ogi]||"#666",rows2=(LD2.filas||[]).filter(function(r){return r["Distrito"]===CD&&r["Cluster"]===CC&&r["Bodega"]===CB&&(r["Proceso"]||"").indexOf(proc.split(" ")[0])>=0;}),tot2=0,sh2="";
        pasos.forEach(function(paso,si){var row=rows2[si]||{},av=parseFloat(row["% Avance"]||0),nota=row["Notas"]||"";tot2+=av;sh2+="<div class=\"si\"><div class=\"st2\"><span class=\"sn2\">"+paso.p+"</span><div class=\"sw\"><div class=\"str\"><div style=\"height:100%;width:"+av+"%;background:"+c+";border-radius:2px;\"></div></div><span class=\"sp3\" style=\"color:"+c+"\">"+av+"%</span></div></div>"+(nota?"<div class=\"nota\"><i class=\"ti ti-note\" style=\"font-size:10px;\"></i> "+nota+"</div>":"")+"</div>";});
        var avg2=pasos.length?Math.round(tot2/pasos.length):0;
        ph+="<div class=\"prc\"><div class=\"ph\" data-tog=\"1\"><div class=\"pn\" style=\"background:"+c+"22;color:"+c+"\">"+(ogi+4)+"</div><span class=\"pt\">"+ON[ogi]+"</span><span class=\"pp\" style=\"color:"+c+"\">"+avg2+"%</span><i class=\"ti ti-chevron-down\" style=\"font-size:14px;color:var(--txt3);transition:transform .2s;margin-left:8px;\"></i></div><div class=\"pmb\"><div style=\"height:100%;width:"+avg2+"%;background:"+c+";border-radius:2px;\"></div></div><div class=\"sl3\" style=\"display:none\">"+sh2+"</div></div>";
      });
    }
    cont.innerHTML=h2+ph;
  }
}
function SU(d){
  CU=d;
  ge("bu-A").classList.toggle("on",d==="A");
  ge("bu-B").classList.toggle("on",d==="B");
  RU();
}
function RU(){
  var pasos=CU==="A"?UA:UB,rows=(LD2.filas||[]).filter(function(r){return r["Proceso"]==="Urbanización"&&r["Distrito"]==="Distrito "+CU;}),tot=0,h="";
  pasos.forEach(function(paso,i){
    var row=rows.find(function(r){return r["Paso"]===paso.n;})||{},av=parseFloat(row["% Avance"]||0),nota=row["Notas"]||"";
    tot+=av;
    h+="<div class=\"prc\" style=\"margin-bottom:8px;\"><div style=\"padding:10px 13px;\"><div style=\"display:flex;align-items:center;gap:8px;margin-bottom:7px;\"><div style=\"width:22px;height:22px;border-radius:50%;background:#185FA522;color:#185FA5;font-size:10px;font-weight:600;display:flex;align-items:center;justify-content:center;flex-shrink:0;\">"+(i+1)+"</div><span style=\"font-size:12px;font-weight:500;flex:1\">"+paso.n+"</span></div><div style=\"display:flex;align-items:center;gap:8px;margin-bottom:4px;\"><div style=\"flex:1;height:6px;background:var(--bg3);border-radius:3px;overflow:hidden;\"><div style=\"height:100%;width:"+av+"%;background:#185FA5;border-radius:3px;\"></div></div><span style=\"font-size:12px;font-weight:600;color:#185FA5;width:28px;text-align:right;\">"+av+"%</span></div><div style=\"font-size:10px;color:var(--txt3);margin-top:2px;\">Plan: "+paso.i+" — "+paso.f+"</div>"+(nota?"<div class=\"nota\" style=\"margin-top:5px;\"><i class=\"ti ti-note\" style=\"font-size:10px;\"></i> "+nota+"</div>":"")+"</div></div>";
  });
  var avg=pasos.length?Math.round(tot/pasos.length):0;
  ge("uc").innerHTML="<div class=\"kc\" style=\"margin-bottom:13px;\"><div class=\"ki\" style=\"color:#185FA5\"><i class=\"ti ti-road\"></i></div><div class=\"kv\" style=\"color:#185FA5\">"+avg+"%</div><div class=\"kl\">Urbanización Distrito "+CU+"</div></div>"+h;
}
function SF(f){
  SFF=f;
  document.querySelectorAll(".ep").forEach(function(b){b.classList.remove("on");});
  ge("sf-"+f).classList.add("on");
  RS();
}
function RS(){
  var items=[];
  ["Distrito A","Distrito B"].forEach(function(d){
    Object.keys(DB[d]).forEach(function(cl){
      DB[d][cl].forEach(function(b){
        var pct=WP(d,cl,b),status=WS(d,cl,b);
        if(SFF!=="all"&&SFF!==status)return;
        var dc=status==="late"?"var(--red)":status==="risk"?"var(--amber)":status==="ok"?"var(--green)":"var(--txt3)";
        var bc2=status==="late"?"smc":status==="risk"?"smk":status==="ok"?"smo":"smp2";
        var bl=status==="late"?"Atrasado":status==="risk"?"En riesgo":status==="ok"?"Al día":"Sin iniciar";
        items.push({d:d,cl:cl,b:b,pct:pct,dc:dc,bc:bc2,bl:bl});
      });
    });
  });
  var ord={late:0,risk:1,ok:2,pend:3};
  items.sort(function(a,b2){return(ord[a.status]||3)-(ord[b2.status]||3)||b2.pct-a.pct;});
  ge("sl4").innerHTML=items.map(function(it){
    return "<div class=\"sm2\" data-d=\""+it.d+"\" data-cl=\""+it.cl+"\" data-b=\""+it.b+"\" data-go=\"obs\">"+
      "<div class=\"smd\" style=\"background:"+it.dc+"\"></div>"+
      "<div class=\"smi\"><div class=\"smn\">"+it.b+"</div><div class=\"sms\">"+it.d.replace("Distrito ","D")+" · "+it.cl+"</div></div>"+
      "<span class=\"smb "+it.bc+"\">"+it.bl+"</span>"+
      "<span class=\"smp\" style=\"color:"+it.dc+"\">"+it.pct+"%</span>"+
      "<i class=\"ti ti-chevron-right\" style=\"font-size:13px;color:var(--txt3)\"></i></div>";
  }).join("")||"<p style=\"text-align:center;color:var(--txt2);padding:20px;font-size:13px;\">Sin bodegas con ese estado</p>";
}
function RRP(){RC2();RBC2();RRK2();}
function RC2(){
  var s=new Date("2026-06-16T00:00:00"),e=new Date("2026-09-27T00:00:00"),td=Math.ceil((e-s)/86400000),lab=[],proj=[],real=[];
  var sa=new Date("2026-06-16T00:00:00"),ea=new Date("2026-08-30T00:00:00"),sb=new Date("2026-07-11T00:00:00"),eb=new Date("2026-09-27T00:00:00");
  var rows=LD2.filas||[],rtot=0,racc=0;
  rows.forEach(function(r){var av=parseFloat(r["% Avance"]||0);rtot++;racc+=av/100;});
  var rreal=rtot?Math.round(racc/rtot*100):0;
  for(var day=0;day<=td;day+=7){
    var d2=new Date(s.getTime()+day*86400000);
    lab.push(d2.toLocaleDateString("es-GT",{day:"2-digit",month:"short"}));
    var pA=0,pB=0;
    if(d2>=sa){var tA=Math.min(1,(d2-sa)/(ea-sa));pA=Math.round(tA*432);}
    if(d2>=sb){var tB=Math.min(1,(d2-sb)/(eb-sb));pB=Math.round(tB*240);}
    proj.push(Math.min(100,Math.round((pA+pB)/672*100)));
    if(d2<=TODAY){var el=(d2-s)/(TODAY-s);real.push(Math.round(Math.min(1,el)*rreal));}
    else{real.push(null);}
  }
  var ctx=ge("cs").getContext("2d");
  if(cch)cch.destroy();
  cch=new Chart(ctx,{type:"line",data:{labels:lab,datasets:[{label:"Real",data:real,borderColor:"#E07B2A",backgroundColor:"rgba(224,123,42,.1)",borderWidth:2.5,pointRadius:3,pointBackgroundColor:"#E07B2A",fill:true,tension:0.4,spanGaps:false},{label:"Proyectado",data:proj,borderColor:"#185FA5",backgroundColor:"transparent",borderWidth:2,borderDash:[5,4],pointRadius:0,fill:false,tension:0.4}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{min:0,max:100,ticks:{callback:function(v){return v+"%";},font:{size:10},color:"#ABABAB"},grid:{color:"rgba(0,0,0,0.04)"},border:{display:false}},x:{ticks:{font:{size:9},color:"#ABABAB",maxRotation:45,maxTicksLimit:10},grid:{display:false},border:{display:false}}}}});
}
function RBC2(){
  var lab=[],data=[],cols=[];
  ["Distrito A","Distrito B"].forEach(function(d){Object.keys(DB[d]).forEach(function(cl){lab.push(d.slice(-1)+"·"+cl.replace("Cluster ","C"));data.push(CP(d,cl));cols.push(d==="Distrito A"?"#E07B2A":"#185FA5");});});
  var ctx=ge("bc5").getContext("2d");
  if(bch)bch.destroy();
  bch=new Chart(ctx,{type:"bar",data:{labels:lab,datasets:[{data:data,backgroundColor:cols,borderRadius:5,borderSkipped:false}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{max:100,ticks:{callback:function(v){return v+"%";},font:{size:10},color:"#ABABAB"},grid:{color:"rgba(0,0,0,0.04)"},border:{display:false}},x:{ticks:{font:{size:9},color:"#ABABAB",maxRotation:45},grid:{display:false},border:{display:false}}}}});
}
function RRK2(){
  var en=[];
  ["Distrito A","Distrito B"].forEach(function(d){Object.keys(DB[d]).forEach(function(cl){DB[d][cl].forEach(function(b){en.push({l:d.replace("Distrito ","D")+" · "+cl.replace("Cluster ","C")+" · "+b,p:WP(d,cl,b)});});});});
  en.sort(function(a,b){return b.p-a.p;});
  var cf=function(p){return p===100?"var(--green)":p>0?"var(--amber)":"var(--txt3)";};
  ge("rl3").innerHTML=en.map(function(e,i){return "<div class=\"rr2\"><span class=\"rn\">"+(i+1)+"</span><span class=\"rl2\">"+e.l+"</span><div class=\"rbw\"><div class=\"rb\"><div style=\"height:100%;width:"+e.p+"%;background:"+cf(e.p)+";border-radius:2px;\"></div></div><div class=\"rp\" style=\"color:"+cf(e.p)+"\">"+e.p+"%</div></div></div>";}).join("");
}
async function LD3(){
  try{
    var res=await fetch(DU+"?t="+Date.now(),{cache:"no-store"});
    if(!res.ok)throw new Error("HTTP "+res.status);
    LD2=await res.json();
    var upd=LD2.ultima_actualizacion;
    if(upd){var d2=new Date(upd);ge("upd").textContent=d2.toLocaleDateString("es-GT",{day:"2-digit",month:"short"})+" "+d2.toLocaleTimeString("es-GT",{hour:"2-digit",minute:"2-digit"});}
    else{ge("upd").textContent="Pendiente de datos";}
  }catch(e){LD2={filas:[]};ge("upd").textContent="Sin datos aún";}
  ge("LD").style.display="none";
  ST("r");
  SU("A");
  setTimeout(function(){location.reload();},5*60*1000);
}

// Global click delegation
document.addEventListener("click",function(e){
  // Nav buttons
  var nb=e.target.closest(".nb");
  if(nb){var id=nb.id;if(id)ST(id.replace("bn-",""));return;}
  // Urbanizacion buttons
  var ub=e.target.closest(".ub");
  if(ub){SU(ub.id==="bu-A"?"A":"B");return;}
  // Semaforo filter chips
  var ep=e.target.closest(".ep");
  if(ep){var sid=ep.id;if(sid)SF(sid.replace("sf-",""));return;}
  // Cluster row — check BEFORE district toggle to avoid parent catching it
  var cr=e.target.closest(".cl-r");
  if(cr){OC2(cr.getAttribute("data-d"),cr.getAttribute("data-cl"));return;}
  // District toggle
  var td=e.target.closest("[data-td]");
  if(td){TD(td.getAttribute("data-td"));return;}
  // Back buttons
  var go=e.target.closest("[data-go]");
  if(go){
    var g=go.getAttribute("data-go");
    if(g==="home"){CV="dist";ST("r");return;}
    if(g==="cluster"){CV="cluster";RB();return;}
    if(g==="obs"){OB(go.getAttribute("data-d"),go.getAttribute("data-cl"),go.getAttribute("data-b"));ST("b");return;}
  }
  // Process header toggle
  var tog=e.target.closest("[data-tog]");
  if(tog){
    var sl=tog.parentElement.querySelector(".sl3");
    var ch=tog.querySelector(".ti-chevron-down");
    if(sl){var op=sl.style.display==="block";sl.style.display=op?"none":"block";if(ch)ch.style.transform=op?"":"rotate(180deg)";}
    return;
  }
  // Bodega card
  var bc=e.target.closest(".bc3");
  if(bc){OB(bc.getAttribute("data-d"),bc.getAttribute("data-cl"),bc.getAttribute("data-b"));return;}
  // Semaforo card
  var sm=e.target.closest(".sm2");
  if(sm){OB(sm.getAttribute("data-d"),sm.getAttribute("data-cl"),sm.getAttribute("data-b"));ST("b");return;}
  // Cluster rows handled above by .cl-r class
});

LD3();

const OG_DB={
"Distrito A|Cluster 1|Bodega 34":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-16","f":"2026-06-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-20","f":"2026-06-22"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-22","f":"2026-06-28"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-06-28","f":"2026-06-30"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-06-30","f":"2026-07-03"}]},
"Distrito A|Cluster 1|Bodega 33":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-16","f":"2026-06-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-20","f":"2026-06-22"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-22","f":"2026-06-28"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-06-28","f":"2026-06-30"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-06-30","f":"2026-07-03"}]},
"Distrito A|Cluster 1|Bodega 32":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-16","f":"2026-06-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-20","f":"2026-06-22"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-22","f":"2026-06-28"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-06-28","f":"2026-06-30"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-06-30","f":"2026-07-03"}]},
"Distrito A|Cluster 1|Bodega 31":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-16","f":"2026-06-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-20","f":"2026-06-22"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-22","f":"2026-06-28"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-06-28","f":"2026-06-30"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-06-30","f":"2026-07-03"}]},
"Distrito A|Cluster 2|Bodega 30":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-20","f":"2026-06-24"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-24","f":"2026-06-26"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-26","f":"2026-07-02"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-02","f":"2026-07-04"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-04","f":"2026-07-07"}]},
"Distrito A|Cluster 2|Bodega 29":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-20","f":"2026-06-24"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-24","f":"2026-06-26"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-26","f":"2026-07-02"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-02","f":"2026-07-04"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-04","f":"2026-07-07"}]},
"Distrito A|Cluster 2|Bodega 28":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-20","f":"2026-06-24"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-24","f":"2026-06-26"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-26","f":"2026-07-02"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-02","f":"2026-07-04"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-04","f":"2026-07-07"}]},
"Distrito A|Cluster 2|Bodega 27":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-20","f":"2026-06-24"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-24","f":"2026-06-26"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-26","f":"2026-07-02"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-02","f":"2026-07-04"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-04","f":"2026-07-07"}]},
"Distrito A|Cluster 3|Bodega 26":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-24","f":"2026-06-28"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-28","f":"2026-06-30"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-30","f":"2026-07-06"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-06","f":"2026-07-08"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-08","f":"2026-07-11"}]},
"Distrito A|Cluster 3|Bodega 25":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-24","f":"2026-06-28"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-28","f":"2026-06-30"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-30","f":"2026-07-06"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-06","f":"2026-07-08"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-08","f":"2026-07-11"}]},
"Distrito A|Cluster 3|Bodega 24":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-24","f":"2026-06-28"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-28","f":"2026-06-30"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-30","f":"2026-07-06"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-06","f":"2026-07-08"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-08","f":"2026-07-11"}]},
"Distrito A|Cluster 3|Bodega 23":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-24","f":"2026-06-28"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-28","f":"2026-06-30"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-30","f":"2026-07-06"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-06","f":"2026-07-08"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-08","f":"2026-07-11"}]},
"Distrito A|Cluster 3|Bodega 22":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-24","f":"2026-06-28"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-06-28","f":"2026-06-30"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-06-30","f":"2026-07-06"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-06","f":"2026-07-08"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-08","f":"2026-07-11"}]},
"Distrito A|Cluster 4|Bodega 3":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-28","f":"2026-07-02"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-02","f":"2026-07-04"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-04","f":"2026-07-10"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-10","f":"2026-07-12"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-12","f":"2026-07-15"}]},
"Distrito A|Cluster 4|Bodega 4":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-28","f":"2026-07-02"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-02","f":"2026-07-04"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-04","f":"2026-07-10"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-10","f":"2026-07-12"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-12","f":"2026-07-15"}]},
"Distrito A|Cluster 4|Bodega 5":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-28","f":"2026-07-02"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-02","f":"2026-07-04"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-04","f":"2026-07-10"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-10","f":"2026-07-12"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-12","f":"2026-07-15"}]},
"Distrito A|Cluster 4|Bodega 6":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-28","f":"2026-07-02"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-02","f":"2026-07-04"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-04","f":"2026-07-10"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-10","f":"2026-07-12"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-12","f":"2026-07-15"}]},
"Distrito A|Cluster 4|Bodega 7":{"Cimentacion":[{"p":"Cimentacion","i":"2026-06-28","f":"2026-07-02"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-02","f":"2026-07-04"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-04","f":"2026-07-10"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-10","f":"2026-07-12"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-12","f":"2026-07-15"}]},
"Distrito A|Cluster 5|Bodega 8":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-02","f":"2026-07-06"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-06","f":"2026-07-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-08","f":"2026-07-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-14","f":"2026-07-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-16","f":"2026-07-19"}]},
"Distrito A|Cluster 5|Bodega 9":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-02","f":"2026-07-06"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-06","f":"2026-07-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-08","f":"2026-07-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-14","f":"2026-07-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-16","f":"2026-07-19"}]},
"Distrito A|Cluster 5|Bodega 10":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-02","f":"2026-07-06"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-06","f":"2026-07-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-08","f":"2026-07-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-14","f":"2026-07-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-16","f":"2026-07-19"}]},
"Distrito A|Cluster 5|Bodega 11":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-02","f":"2026-07-06"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-06","f":"2026-07-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-08","f":"2026-07-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-14","f":"2026-07-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-16","f":"2026-07-19"}]},
"Distrito A|Cluster 6|Bodega 12":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-06","f":"2026-07-10"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-10","f":"2026-07-12"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-12","f":"2026-07-18"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-18","f":"2026-07-20"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-20","f":"2026-07-23"}]},
"Distrito A|Cluster 6|Bodega 13":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-06","f":"2026-07-10"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-10","f":"2026-07-12"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-12","f":"2026-07-18"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-18","f":"2026-07-20"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-20","f":"2026-07-23"}]},
"Distrito A|Cluster 6|Bodega 14":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-06","f":"2026-07-10"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-10","f":"2026-07-12"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-12","f":"2026-07-18"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-18","f":"2026-07-20"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-20","f":"2026-07-23"}]},
"Distrito A|Cluster 6|Bodega 15":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-06","f":"2026-07-10"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-10","f":"2026-07-12"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-12","f":"2026-07-18"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-18","f":"2026-07-20"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-20","f":"2026-07-23"}]},
"Distrito A|Cluster 7|Bodega 16":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-10","f":"2026-07-14"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-14","f":"2026-07-16"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-16","f":"2026-07-22"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-22","f":"2026-07-24"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-24","f":"2026-07-27"}]},
"Distrito A|Cluster 7|Bodega 17":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-10","f":"2026-07-14"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-14","f":"2026-07-16"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-16","f":"2026-07-22"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-22","f":"2026-07-24"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-24","f":"2026-07-27"}]},
"Distrito A|Cluster 7|Bodega 18":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-10","f":"2026-07-14"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-14","f":"2026-07-16"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-16","f":"2026-07-22"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-22","f":"2026-07-24"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-24","f":"2026-07-27"}]},
"Distrito A|Cluster 7|Bodega 19":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-10","f":"2026-07-14"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-14","f":"2026-07-16"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-16","f":"2026-07-22"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-22","f":"2026-07-24"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-24","f":"2026-07-27"}]},
"Distrito A|Cluster 8|Bodega 1":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-14","f":"2026-07-18"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-18","f":"2026-07-20"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-20","f":"2026-07-26"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-26","f":"2026-07-28"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-28","f":"2026-07-31"}]},
"Distrito A|Cluster 8|Bodega 2":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-14","f":"2026-07-18"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-18","f":"2026-07-20"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-20","f":"2026-07-26"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-26","f":"2026-07-28"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-28","f":"2026-07-31"}]},
"Distrito A|Cluster 8|Bodega 20":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-14","f":"2026-07-18"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-18","f":"2026-07-20"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-20","f":"2026-07-26"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-26","f":"2026-07-28"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-28","f":"2026-07-31"}]},
"Distrito A|Cluster 8|Bodega 21":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-14","f":"2026-07-18"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-18","f":"2026-07-20"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-20","f":"2026-07-26"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-26","f":"2026-07-28"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-28","f":"2026-07-31"}]},
"Distrito A|Cluster 8|Bodega 35":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-14","f":"2026-07-18"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-18","f":"2026-07-20"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-20","f":"2026-07-26"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-26","f":"2026-07-28"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-28","f":"2026-07-31"}]},
"Distrito B|Cluster 1|Bodega 2":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-11","f":"2026-07-15"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-15","f":"2026-07-19"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-19","f":"2026-07-25"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-25","f":"2026-07-27"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-27","f":"2026-07-30"}]},
"Distrito B|Cluster 1|Bodega 3":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-11","f":"2026-07-15"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-15","f":"2026-07-19"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-19","f":"2026-07-25"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-25","f":"2026-07-27"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-27","f":"2026-07-30"}]},
"Distrito B|Cluster 1|Bodega 4":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-11","f":"2026-07-15"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-15","f":"2026-07-19"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-19","f":"2026-07-25"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-25","f":"2026-07-27"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-27","f":"2026-07-30"}]},
"Distrito B|Cluster 1|Bodega 5":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-11","f":"2026-07-15"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-15","f":"2026-07-19"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-19","f":"2026-07-25"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-25","f":"2026-07-27"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-27","f":"2026-07-30"}]},
"Distrito B|Cluster 2|Bodega 6":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-16","f":"2026-07-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-20","f":"2026-07-24"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-24","f":"2026-07-30"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-30","f":"2026-08-01"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-01","f":"2026-08-04"}]},
"Distrito B|Cluster 2|Bodega 7":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-16","f":"2026-07-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-20","f":"2026-07-24"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-24","f":"2026-07-30"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-30","f":"2026-08-01"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-01","f":"2026-08-04"}]},
"Distrito B|Cluster 2|Bodega 8":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-16","f":"2026-07-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-20","f":"2026-07-24"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-24","f":"2026-07-30"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-30","f":"2026-08-01"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-01","f":"2026-08-04"}]},
"Distrito B|Cluster 2|Bodega 9":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-16","f":"2026-07-20"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-20","f":"2026-07-24"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-24","f":"2026-07-30"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-30","f":"2026-08-01"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-01","f":"2026-08-04"}]},
"Distrito B|Cluster 3|Bodega 12":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-21","f":"2026-07-25"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-25","f":"2026-07-29"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-29","f":"2026-08-04"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-04","f":"2026-08-06"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-06","f":"2026-08-09"}]},
"Distrito B|Cluster 3|Bodega 13":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-21","f":"2026-07-25"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-25","f":"2026-07-29"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-29","f":"2026-08-04"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-04","f":"2026-08-06"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-06","f":"2026-08-09"}]},
"Distrito B|Cluster 3|Bodega 14":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-21","f":"2026-07-25"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-25","f":"2026-07-29"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-29","f":"2026-08-04"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-04","f":"2026-08-06"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-06","f":"2026-08-09"}]},
"Distrito B|Cluster 3|Bodega 15":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-21","f":"2026-07-25"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-25","f":"2026-07-29"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-29","f":"2026-08-04"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-04","f":"2026-08-06"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-06","f":"2026-08-09"}]},
"Distrito B|Cluster 4|Bodega 16":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-26","f":"2026-07-30"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-30","f":"2026-08-03"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-03","f":"2026-08-09"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-09","f":"2026-08-11"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-11","f":"2026-08-14"}]},
"Distrito B|Cluster 4|Bodega 17":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-26","f":"2026-07-30"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-30","f":"2026-08-03"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-03","f":"2026-08-09"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-09","f":"2026-08-11"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-11","f":"2026-08-14"}]},
"Distrito B|Cluster 4|Bodega 18":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-26","f":"2026-07-30"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-30","f":"2026-08-03"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-03","f":"2026-08-09"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-09","f":"2026-08-11"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-11","f":"2026-08-14"}]},
"Distrito B|Cluster 4|Bodega 19":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-26","f":"2026-07-30"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-30","f":"2026-08-03"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-03","f":"2026-08-09"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-09","f":"2026-08-11"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-11","f":"2026-08-14"}]},
"Distrito B|Cluster 5|Bodega 20":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-31","f":"2026-08-04"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-08-04","f":"2026-08-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-08","f":"2026-08-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-14","f":"2026-08-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-16","f":"2026-08-19"}]},
"Distrito B|Cluster 5|Bodega 10":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-31","f":"2026-08-04"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-08-04","f":"2026-08-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-08","f":"2026-08-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-14","f":"2026-08-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-16","f":"2026-08-19"}]},
"Distrito B|Cluster 5|Bodega 11":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-31","f":"2026-08-04"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-08-04","f":"2026-08-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-08","f":"2026-08-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-14","f":"2026-08-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-16","f":"2026-08-19"}]},
"Distrito B|Cluster 5|Bodega 1":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-31","f":"2026-08-04"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-08-04","f":"2026-08-08"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-08-08","f":"2026-08-14"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-08-14","f":"2026-08-16"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-08-16","f":"2026-08-19"}]},
"Distrito A|Cluster 8|Bodega 36":{"Cimentacion":[{"p":"Cimentacion","i":"2026-07-14","f":"2026-07-18"}],"Muro Cifa":[{"p":"Muro Cifa","i":"2026-07-18","f":"2026-07-20"}],"Levantado de Block en Fachadas":[{"p":"Levantado de Block en Fachada","i":"2026-07-20","f":"2026-07-26"}],"Contrapisos":[{"p":"Contrapisos interiores en Bodegas","i":"2026-07-26","f":"2026-07-28"}],"Inst. Electricas Bodegas":[{"p":"Instalaciones Electricas","i":"2026-07-28","f":"2026-07-31"}]},
};
