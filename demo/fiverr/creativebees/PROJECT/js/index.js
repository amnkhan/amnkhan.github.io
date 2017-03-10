$(function(){
   var valor = {
  "AF": 0,
  "AL": 0,
  "DZ": 0,
  "AO": 0,
  "AG": 0,
  "AR": 0,
  "AM": 0,
  "AU": 10,
  "AT": 1,
  "AZ": 1,
  "BS": 0,
  "BH": 0,
  "BD": 2,
  "BB": 0,
  "BY": 3,
  "BE": 2,
  "BZ": 0,
  "BJ": 3,
  "BT": 0,
  "BO": 0,
  "BA": 0,
  "BW": 0,
  "BR": 0,
  "BN": 2,
  "BG": 1,
  "BF": 0,
  "BI": 0,
  "KH": 0,
  "CM": 0,
  "CA": 24,
  "CV": 0,
  "CF": 0,
  "TD": 0,
  "CL": 0,
  "CN": 0,
  "CO": 3,
  "KM": 0,
  "CD": 0,
  "CG": 0,
  "CR": 0,
  "CI": 0,
  "HR": 0,
  "CY": 0,
  "CZ": 0,
  "DK": 0,
  "DJ": 0,
  "DM": 0,
  "DO": 0,
  "EC": 0,
  "EG": 2,
  "SV": 0,
  "GQ": 0,
  "ER": 0,
  "EE": 0,
  "ET": 0,
  "FJ": 0,
  "FI": 0,
  "FR": 5,
  "GA": 0,
  "GM": 0,
  "GE": 6,
  "DE": 0,
  "GH": 2,
  "GR": 0,
  "GD": 0,
  "GT": 0,
  "GN": 0,
  "GW": 0,
  "GY": 0,
  "HT": 0,
  "HN": 0,
  "HK": 0,
  "HU": 1,
  "IS": 0,
  "IN": 26,
  "ID": 0,
  "IR": 0,
  "IQ": 0,
  "IE": 7,
  "IL": 1,
  "IT": 0,
  "JM": 0,
  "JP": 0,
  "JO": 0,
  "KZ": 0,
  "KE": 0,
  "KI": 0,
  "KR": 0,
  "UNDEFINED": 0,
  "KW": 0,
  "KG": 0,
  "LA": 0,
  "LV": 1,
  "LB": 0,
  "LS": 0,
  "LR": 0,
  "LY": 0,
  "LT": 1,
  "LU": 0,
  "MK": 0,
  "MG": 0,
  "MW": 0,
  "MY": 4,
  "MV": 0,
  "ML": 0,
  "MT": 0,
  "MR": 0,
  "MU": 0,
  "MX": 1,
  "MD": 0,
  "MN": 0,
  "ME": 0,
  "MA": 1,
  "MZ": 0,
  "MM": 0,
  "NA": 0,
  "NP": 0,
  "NL": 2,
  "NZ": 1,
  "NI": 0,
  "NE": 0,
  "NG": 7,
  "NO": 0,
  "OM": 0,
  "PK": 2,
  "PA": 0,
  "PG": 0,
  "PY": 0,
  "PE": 0,
  "PH": 5,
  "PL": 5,
  "PT": 0,
  "QA": 0,
  "RO": 1,
  "RU": 0,
  "RW": 0,
  "WS": 0,
  "ST": 0,
  "SA": 2,
  "SN": 0,
  "RS": 0,
  "SC": 0,
  "SL": 0,
  "SG": 0,
  "SK": 0,
  "SI": 0,
  "SB": 0,
  "ZA": 3,
  "ES": 3,
  "LK": 0,
  "KN": 0,
  "LC": 0,
  "VC": 0,
  "SD": 0,
  "SR": 0,
  "SZ": 0,
  "SE": 0,
  "CH": 0,
  "SY": 0,
  "TW": 0,
  "TJ": 0,
  "TZ": 0,
  "TH": 3,
  "TL": 0,
  "TG": 0,
  "TO": 0,
  "TT": 0,
  "TN": 0,
  "TR": 0,
  "TM": 0,
  "UG": 1,
  "UA": 0,
  "AE": 0,
  "GB": 408,
  "US": 119,
  "UY": 1,
  "UZ": 0,
  "VU": 0,
  "VE": 0,
  "VN": 0,
  "YE": 0,
  "ZM": 0,
  "ZW": 0};
      var map={ "country" :[
{"code":"BD","value":2,"name":"Bangladesh"}
,{"code":"BE","value":8,"name":"Belgium"}
,{"code":"BF","value":1,"name":"Burkina Faso"}
,{"code":"BG","value":1,"name":"Bulgaria"}
,{"code":"BA","value":1,"name":"Bosnia and Herz."}
,{"code":"BN","value":1,"name":"Brunei"}
,{"code":"BO","value":1,"name":"Bolivia"}
,{"code":"JP","value":1,"name":"Japan"}
,{"code":"BI","value":2,"name":"Burundi"}
,{"code":"BJ","value":1,"name":"Benin"}
,{"code":"BT","value":1,"name":"Bhutan"}
,{"code":"JM","value":1,"name":"Jamaica"}
,{"code":"BW","value":1,"name":"Botswana"}
,{"code":"BR","value":3,"name":"Brazil"}
,{"code":"BS","value":1,"name":"Bahamas"}
,{"code":"BY","value":2,"name":"Belarus"}
,{"code":"BZ","value":1,"name":"Belize"}
,{"code":"RU","value":1,"name":"Russia"}
,{"code":"RW","value":1,"name":"Rwanda"}
,{"code":"RS","value":3,"name":"Serbia"}
,{"code":"TL","value":1,"name":"Timor-Leste"}
,{"code":"TM","value":1,"name":"Turkmenistan"}
,{"code":"TJ","value":1,"name":"Tajikistan"}
,{"code":"RO","value":4,"name":"Romania"}
,{"code":"GW","value":1,"name":"Guinea-Bissau"}
,{"code":"GT","value":1,"name":"Guatemala"}
,{"code":"GR","value":4,"name":"Greece"}
,{"code":"GQ","value":1,"name":"Eq. Guinea"}
,{"code":"GY","value":1,"name":"Guyana"}
,{"code":"GE","value":1,"name":"Georgia"}
,{"code":"GB","value":386,"name":"United Kingdom"}
,{"code":"GA","value":1,"name":"Gabon"}
,{"code":"GN","value":1,"name":"Guinea"}
,{"code":"GM","value":1,"name":"Gambia"}
,{"code":"GL","value":1,"name":"Greenland"}
,{"code":"GH","value":2,"name":"Ghana"}
,{"code":"OM","value":1,"name":"Oman"}
,{"code":"TN","value":1,"name":"Tunisia"}
,{"code":"JO","value":1,"name":"Jordan"}
,{"code":"HR","value":2,"name":"Croatia"}
,{"code":"HT","value":1,"name":"Haiti"}
,{"code":"HU","value":3,"name":"Hungary"}
,{"code":"HN","value":1,"name":"Honduras"}
,{"code":"PR","value":1,"name":"Puerto Rico"}
,{"code":"PS","value":1,"name":"Palestine"}
,{"code":"PT","value":1,"name":"Portugal"}
,{"code":"PY","value":1,"name":"Paraguay"}
,{"code":"PA","value":1,"name":"Panama"}
,{"code":"P","value":1,"name":"Papua New Guinea"}
,{"code":"PE","value":3,"name":"Peru"}
,{"code":"PK","value":2,"name":"Pakistan"}
,{"code":"PH","value":7,"name":"Philippines"}
,{"code":"PL","value":7,"name":"Poland"}
,{"code":"ZM","value":1,"name":"Zambia"}
,{"code":"EH","value":1,"name":"W. Sahara"}
,{"code":"EE","value":1,"name":"Estonia"}
,{"code":"EG","value":2,"name":"Egypt"}
,{"code":"ZA","value":1,"name":"South Africa"}
,{"code":"EC","value":1,"name":"Ecuador"}
,{"code":"IT","value":4,"name":"Italy"}
,{"code":"VN","value":1,"name":"Vietnam"}
,{"code":"SB","value":1,"name":"Solomon Is."}
,{"code":"ET","value":1,"name":"Ethiopia"}
,{"code":"SO","value":1,"name":"Somalia"}
,{"code":"ZW","value":1,"name":"Zimbabwe"}
,{"code":"ES","value":5,"name":"Spain"}
,{"code":"ER","value":1,"name":"Eritrea"}
,{"code":"ME","value":2,"name":"Montenegro"}
,{"code":"MD","value":1,"name":"Moldova"}
,{"code":"MG","value":1,"name":"Madagascar"}
,{"code":"MA","value":2,"name":"Morocco"}
,{"code":"UZ","value":1,"name":"Uzbekistan"}
,{"code":"MM","value":1,"name":"Myanmar"}
,{"code":"ML","value":1,"name":"Mali"}
,{"code":"MN","value":1,"name":"Mongolia"}
,{"code":"MK","value":1,"name":"Macedonia"}
,{"code":"MW","value":1,"name":"Malawi"}
,{"code":"MR","value":1,"name":"Mauritania"}
,{"code":"UG","value":1,"name":"Uganda"}
,{"code":"MY","value":6,"name":"Malaysia"}
,{"code":"MX","value":4,"name":"Mexico"}
,{"code":"IL","value":2,"name":"Israel"}
,{"code":"FR","value":11,"name":"France"}
,{"code":"XS","value":1,"name":"Somaliland"}
,{"code":"FI","value":1,"name":"Finland"}
,{"code":"FJ","value":1,"name":"Fiji"}
,{"code":"FK","value":1,"name":"Falkland Is."}
,{"code":"NI","value":1,"name":"Nicaragua"}
,{"code":"NL","value":8,"name":"Netherlands"}
,{"code":"NO","value":1,"name":"Norway"}
,{"code":"NA","value":1,"name":"Namibia"}
,{"code":"VU","value":1,"name":"Vanuatu"}
,{"code":"NC","value":1,"name":"New Caledonia"}
,{"code":"NE","value":1,"name":"Niger"}
,{"code":"NG","value":7,"name":"Nigeria"}
,{"code":"NZ","value":6,"name":"New Zealand"}
,{"code":"NP","value":1,"name":"Nepal"}
,{"code":"XK","value":1,"name":"Kosovo"}
,{"code":"CI","value":1,"name":"Côte d'Ivoire"}
,{"code":"CH","value":8,"name":"Switzerland"}
,{"code":"CO","value":3,"name":"Colombia"}
,{"code":"CN","value":5,"name":"China"}
,{"code":"CM","value":1,"name":"Cameroon"}
,{"code":"CL","value":1,"name":"Chile"}
,{"code":"XC","value":1,"name":"N. Cyprus"}
,{"code":"CA","value":31,"name":"Canada"}
,{"code":"CG","value":1,"name":"Congo"}
,{"code":"CF","value":1,"name":"Central African Rep."}
,{"code":"CD","value":1,"name":"Dem. Rep. Congo"}
,{"code":"CZ","value":1,"name":"Czech Rep."}
,{"code":"CY","value":1,"name":"Cyprus"}
,{"code":"CR","value":2,"name":"Costa Rica"}
,{"code":"CU","value":1,"name":"Cuba"}
,{"code":"SZ","value":1,"name":"Swaziland"}
,{"code":"SY","value":1,"name":"Syria"}
,{"code":"KG","value":1,"name":"Kyrgyzstan"}
,{"code":"KE","value":1,"name":"Kenya"}
,{"code":"SS","value":1,"name":"S. Sudan"}
,{"code":"SR","value":1,"name":"Suriname"}
,{"code":"KH","value":1,"name":"Cambodia"}
,{"code":"SV","value":1,"name":"El Salvador"}
,{"code":"SK","value":1,"name":"Slovakia"}
,{"code":"KR","value":1,"name":"Korea"}
,{"code":"SI","value":2,"name":"Slovenia"}
,{"code":"KP","value":1,"name":"Dem. Rep. Korea"}
,{"code":"KW","value":1,"name":"Kuwait"}
,{"code":"SN","value":1,"name":"Senegal"}
,{"code":"SL","value":1,"name":"Sierra Leone"}
,{"code":"KZ","value":1,"name":"Kazakhstan"}
,{"code":"SA","value":1,"name":"Saudi Arabia"}
,{"code":"SE","value":5,"name":"Sweden"}
,{"code":"SD","value":1,"name":"Sudan"}
,{"code":"DO","value":1,"name":"Dominican Rep."}
,{"code":"DJ","value":1,"name":"Djibouti"}
,{"code":"DK","value":6,"name":"Denmark"}
,{"code":"DE","value":14,"name":"Germany"}
,{"code":"YE","value":1,"name":"Yemen"}
,{"code":"DZ","value":1,"name":"Algeria"}
,{"code":"US","value":132,"name":"United States"}
,{"code":"UY","value":1,"name":"Uruguay"}
,{"code":"LB","value":1,"name":"Lebanon"}
,{"code":"LA","value":1,"name":"Lao PDR"}
,{"code":"TW","value":1,"name":"Taiwan"}
,{"code":"TT","value":1,"name":"Trinidad and Tobago"}
,{"code":"TR","value":1,"name":"Turkey"}
,{"code":"LK","value":1,"name":"Sri Lanka"}
,{"code":"LV","value":1,"name":"Latvia"}
,{"code":"LT","value":2,"name":"Lithuania"}
,{"code":"LU","value":2,"name":"Luxembourg"}
,{"code":"LR","value":1,"name":"Liberia"}
,{"code":"LS","value":1,"name":"Lesotho"}
,{"code":"TH","value":1,"name":"Thailand"}
,{"code":"TF","value":1,"name":"Fr. S. Antarctic Lands"}
,{"code":"TG","value":1,"name":"Togo"}
,{"code":"TD","value":1,"name":"Chad"}
,{"code":"LY","value":1,"name":"Libya"}
,{"code":"AE","value":2,"name":"United Arab Emirates"}
,{"code":"VE","value":1,"name":"Venezuela"}
,{"code":"AF","value":1,"name":"Afghanistan"}
,{"code":"IQ","value":1,"name":"Iraq"}
,{"code":"IS","value":1,"name":"Iceland"}
,{"code":"IR","value":1,"name":"Iran"}
,{"code":"AM","value":1,"name":"Armenia"}
,{"code":"AL","value":2,"name":"Albania"}
,{"code":"AO","value":1,"name":"Angola"}
,{"code":"AR","value":1,"name":"Argentina"}
,{"code":"AU","value":22,"name":"Australia"}
,{"code":"AT","value":5,"name":"Austria"}
,{"code":"IN","value":29,"name":"India"}
,{"code":"TZ","value":1,"name":"Tanzania"}
,{"code":"AZ","value":1,"name":"Azerbaijan"}
,{"code":"IE","value":18,"name":"Ireland"}
,{"code":"ID","value":3,"name":"Indonesia"}
,{"code":"UA","value":1,"name":"Ukraine"}
,{"code":"QA","value":1,"name":"Qatar"}
,{"code":"MZ","value":1,"name":"Mozambique"}
]};
  $('#world-map-gdp').vectorMap({
    map: 'world_mill_en',
    
    onRegionTipShow: function(e, el, code){
      
     
     
        for(var i in map.country){
          if(el.html() == map.country[i].name){
             $("#test").html(el.html());
            el.html(el.html()+' '+map.country[i].value+'');
          }
      };
      
    
                
    },
    series: {
      regions: [{
        values: valor,
        scale: ['#EFFAFF','#8CD7F9', '#0071A4'],
        normalizeFunction: 'polynomial'
      }]
    }
  });
});