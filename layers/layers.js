var wms_layers = [];


        var lyr_EsriNationalGeographic_0 = new ol.layer.Tile({
            'title': 'Esri National Geographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Usodesuelo_1 = new ol.format.GeoJSON();
var features_Usodesuelo_1 = format_Usodesuelo_1.readFeatures(json_Usodesuelo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usodesuelo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usodesuelo_1.addFeatures(features_Usodesuelo_1);
var lyr_Usodesuelo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Usodesuelo_1, 
                style: style_Usodesuelo_1,
                popuplayertitle: 'Uso de suelo',
                interactive: true,
    title: 'Uso de suelo<br />\
    <img src="styles/legend/Usodesuelo_1_0.png" /> Áreas Desprovistas de Vegetación<br />\
    <img src="styles/legend/Usodesuelo_1_1.png" /> Asentamientos<br />\
    <img src="styles/legend/Usodesuelo_1_2.png" /> Bosque Nativo<br />\
    <img src="styles/legend/Usodesuelo_1_3.png" /> Cuerpos de Agua<br />\
    <img src="styles/legend/Usodesuelo_1_4.png" /> Humedales<br />\
    <img src="styles/legend/Usodesuelo_1_5.png" /> Matorral<br />\
    <img src="styles/legend/Usodesuelo_1_6.png" /> Matorral Arborescente<br />\
    <img src="styles/legend/Usodesuelo_1_7.png" /> Nieves y Glaciares<br />\
    <img src="styles/legend/Usodesuelo_1_8.png" /> Plantación<br />\
    <img src="styles/legend/Usodesuelo_1_9.png" /> Praderas<br />\
    <img src="styles/legend/Usodesuelo_1_10.png" /> Tierras de Cultivo<br />\
    <img src="styles/legend/Usodesuelo_1_11.png" /> <br />' });
var format_Asentamientos_2 = new ol.format.GeoJSON();
var features_Asentamientos_2 = format_Asentamientos_2.readFeatures(json_Asentamientos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asentamientos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asentamientos_2.addFeatures(features_Asentamientos_2);
var lyr_Asentamientos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asentamientos_2, 
                style: style_Asentamientos_2,
                popuplayertitle: 'Asentamientos',
                interactive: true,
                title: '<img src="styles/legend/Asentamientos_2.png" /> Asentamientos'
            });
var format_Atractivosturisticos_3 = new ol.format.GeoJSON();
var features_Atractivosturisticos_3 = format_Atractivosturisticos_3.readFeatures(json_Atractivosturisticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atractivosturisticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atractivosturisticos_3.addFeatures(features_Atractivosturisticos_3);
var lyr_Atractivosturisticos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atractivosturisticos_3, 
                style: style_Atractivosturisticos_3,
                popuplayertitle: 'Atractivos turisticos',
                interactive: true,
                title: '<img src="styles/legend/Atractivosturisticos_3.png" /> Atractivos turisticos'
            });
var format_Areadeestudio_4 = new ol.format.GeoJSON();
var features_Areadeestudio_4 = format_Areadeestudio_4.readFeatures(json_Areadeestudio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areadeestudio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areadeestudio_4.addFeatures(features_Areadeestudio_4);
var lyr_Areadeestudio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areadeestudio_4, 
                style: style_Areadeestudio_4,
                popuplayertitle: 'Area de estudio',
                interactive: false,
                title: '<img src="styles/legend/Areadeestudio_4.png" /> Area de estudio'
            });

lyr_EsriNationalGeographic_0.setVisible(true);lyr_Usodesuelo_1.setVisible(true);lyr_Asentamientos_2.setVisible(true);lyr_Atractivosturisticos_3.setVisible(true);lyr_Areadeestudio_4.setVisible(true);
var layersList = [lyr_EsriNationalGeographic_0,lyr_Usodesuelo_1,lyr_Asentamientos_2,lyr_Atractivosturisticos_3,lyr_Areadeestudio_4];
lyr_Usodesuelo_1.set('fieldAliases', {'fid': 'fid', 'SUB_IPCC21': 'SUB_IPCC21', });
lyr_Asentamientos_2.set('fieldAliases', {'fid': 'fid', 'PROV_NOM': 'PROV_NOM', 'SUB_TIPO': 'SUB_TIPO', 'km2': 'km2', });
lyr_Atractivosturisticos_3.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'REGION': 'REGION', 'COMUNA': 'COMUNA', });
lyr_Areadeestudio_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_CUEN': 'COD_CUEN', 'COD_SUBC': 'COD_SUBC', 'NOM_SUBC': 'NOM_SUBC', 'Area_km2': 'Area_km2', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'URL_SIMBIO': 'URL_SIMBIO', 'Ylat': 'Ylat', 'Xlong': 'Xlong', });
lyr_Usodesuelo_1.set('fieldImages', {'fid': 'TextEdit', 'SUB_IPCC21': 'TextEdit', });
lyr_Asentamientos_2.set('fieldImages', {'fid': 'TextEdit', 'PROV_NOM': 'TextEdit', 'SUB_TIPO': 'TextEdit', 'km2': 'TextEdit', });
lyr_Atractivosturisticos_3.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGION': 'TextEdit', 'COMUNA': 'TextEdit', });
lyr_Areadeestudio_4.set('fieldImages', {'OBJECTID': 'Range', 'COD_CUEN': 'TextEdit', 'COD_SUBC': 'TextEdit', 'NOM_SUBC': 'TextEdit', 'Area_km2': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'URL_SIMBIO': 'TextEdit', 'Ylat': 'TextEdit', 'Xlong': 'TextEdit', });
lyr_Usodesuelo_1.set('fieldLabels', {'fid': 'no label', 'SUB_IPCC21': 'no label', });
lyr_Asentamientos_2.set('fieldLabels', {'fid': 'no label', 'PROV_NOM': 'inline label - visible with data', 'SUB_TIPO': 'header label - visible with data', 'km2': 'no label', });
lyr_Atractivosturisticos_3.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', });
lyr_Areadeestudio_4.set('fieldLabels', {'OBJECTID': 'no label', 'COD_CUEN': 'no label', 'COD_SUBC': 'no label', 'NOM_SUBC': 'no label', 'Area_km2': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', 'URL_SIMBIO': 'no label', 'Ylat': 'no label', 'Xlong': 'no label', });
lyr_Areadeestudio_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});