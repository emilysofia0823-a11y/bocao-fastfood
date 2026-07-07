/* ============================================================
   RECETAS DE BOCA'O — Fuente única de verdad
   La usa pos.html (para descontar inventario automáticamente)
   y recetas.html (para visualizarlas).
   Formato: id_producto : [ [ingrediente, cantidad], ... ]
   Los nombres de ingrediente deben coincidir con el inventario.
   ============================================================ */

var RECETAS = {
  // ── HAMBURGUESAS ──
  h1:[['Pan de hamburguesa',1],['CARNE DE HAMBURGUESA',90],['mozarella',0.5],['Lonchita amarilla',0.5],['tomate',25],['lechuga crespa',5],['SALSA BASE',20],['SALSA TARTARA',10],['PAPEL PARAFINADO',1],['BOLSAS DE PAPEL',1],['PALILLO SENCILLO',1],['SALSERO 0.5',1]],
  h3:[['Pan de hamburguesa',1],['CARNE DE HAMBURGUESA',90],['mozarella',0.5],['Lonchita amarilla',0.5],['tomate',25],['lechuga crespa',5],['TOCINETA',25],['SALSA BASE',15],['AROS DE CEBOLLA',30],['SALSA TARTARA',10],['PAPEL PARAFINADO',1],['BOLSAS DE PAPEL',1],['PALILLO BANDERA',1],['SALSERO 0.5',1]],
  h4:[['Pan de hamburguesa',1],['CARNE DE HAMBURGUESA',180],['mozarella',0.5],['Lonchita amarilla',0.5],['tomate',25],['lechuga crespa',5],['TOCINETA',25],['CEBOLLA CARAMELIZADA',25],['SALSA BASE',20],['SALSA TARTARA',10],['PAPEL PARAFINADO',1],['PALILLO BANDERA',1],['BOLSAS DE PAPEL',1],['SALSERO 0.5',1]],
  // ── PERROS ──
  p1:[['pan perro',1],['salchicha de perro',1],['lechuga batavia',10],['SALSA TARTARA',15],['queso duro',10],['papa chongo',15],['GEL DE PIÑA',15],['PAPEL ALUMINIO',1],['BOLSA BLANCA 3KL',1]],
  p2:[['pan perro',1],['salchicha de perro',1],['papa chongo',15],['queso duro',15],['SALSA TARTARA',15],['GEL DE PIÑA',15],['mozarella',1],['K1',1],['BOLSA BLANCA 3KL',1]],
  p3:[['pan perro',1],['salchicha de perro',2],['papa chongo',15],['queso duro',20],['SALSA TARTARA',20],['GEL DE PIÑA',15],['lechuga batavia',10],['PAPEL ALUMINIO',1],['BOLSA BLANCA 3KL',1]],
  p4:[['pan perro',1],['queso duro',15],['papa chongo',15],['lechuga batavia',15],['SALSA TARTARA',15],['GEL DE PIÑA',15],['maiz dulce',15],['TOCINETA',25],['mozarella',1],['K1',1],['Salchicha suiza',0.5],['BOLSA BLANCA 3KL',1]],
  // ── SALCHIPAPAS ──
  s1:[['papas fritas',200],['manguera',0.5],['SALSA TARTARA',40],['lechuga batavia',20],['GEL DE PIÑA',20],['queso duro',40],['papa chongo',40],['J1',1],['TENEDORES',1],['BOLSAS BLANCAS',1]],
  s2:[['papas fritas',200],['manguera',0.5],['papa chongo',40],['queso duro',40],['pollo',100],['SALSA TARTARA',40],['lechuga batavia',20],['GEL DE PIÑA',30],['J1',1],['TENEDORES',1],['BOLSAS BLANCAS',1]],
  s4:[['papas fritas',300],['manguera',0.5],['papa chongo',40],['queso duro',40],['BUTIFARRA',2],['SALSA TARTARA',50],['GEL DE PIÑA',40],['lechuga batavia',30],['maiz dulce',25],['mozarella',2],['J1',1],['TENEDORES',2],['BOLSAS BLANCAS',1],['Salchicha suiza',0.5]],
  s6:[['manguera',1],['papas fritas',500],['papa chongo',30],['SALSA TARTARA',50],['pollo',100],['chorizo',1],['cerdo',80],['lechuga batavia',20],['queso duro',30],['GEL DE PIÑA',30],['TENEDORES',3],['BOLSAS BLANCAS',1],['BANDEJA HONDA',1]],
  s5:[['papa chongo',120],['SALSA TARTARA',120],['lechuga batavia',80],['GEL DE PIÑA',100],['chorizo',2],['pollo',200],['BUTIFARRA',2],['queso duro',80],['BANDEJA HONDA',1],['PAPEL ALUMINIO',1],['TENEDORES',4],['BOLSAS BLANCAS',1],['manguera',1],['cerdo',160],['papas fritas',700]],
  // ── COMBOS ──
  co2:[['Pan de hamburguesa',1],['CARNE DE HAMBURGUESA',90],['mozarella',0.5],['Lonchita amarilla',0.5],['tomate',25],['lechuga batavia',5],['SALSA BASE',20],['SALSA TARTARA',10],['papas fritas',100],['bebida gaseosa postobon cero 250ml',1],['PAPEL PARAFINADO',1],['BOLSAS DE PAPEL',1],['PALILLO SENCILLO',1],['BOLSAS BLANCAS',1],['SALSERO 0.5',1]],
  co6:[['pan perro',3],['salchicha de perro',3],['SALSA TARTARA',45],['lechuga batavia',30],['queso duro',30],['papa chongo',45],['GEL DE PIÑA',45],['bebida gaseosa postobon cero 250ml',3],['PAPEL ALUMINIO',3],['BOLSA BLANCA 3KL',3]],
  co3:[['papas fritas',200],['manguera',0.5],['J1',1],['TENEDORES',1],['BOLSAS BLANCAS',1],['pan perro',1],['salchicha de perro',2],['SALSA TARTARA',80],['queso duro',50],['papa chongo',50],['lechuga batavia',30],['GEL DE PIÑA',60],['BOLSA BLANCA 3KL',1],['PAPEL ALUMINIO',1],['bebida gaseosa postobon cero 250ml',2]],
  co4:[['papas fritas',200],['bebida gaseosa postobon 1.5ml',1],['CARNE DE HAMBURGUESA',180],['lechuga crespa',10],['tomate',50],['mozarella',1],['Lonchita amarilla',1],['SALSERO 0.5',2],['SALSA BASE',40],['SALSA TARTARA',10],['PALILLO SENCILLO',2],['PAPEL PARAFINADO',2],['BOLSAS DE PAPEL',2],['Pan de hamburguesa',2]],
  co7:[['Pan de hamburguesa',2],['AROS DE CEBOLLA',2],['lechuga crespa',6],['tomate',30],['mozarella',1],['Lonchita amarilla',1],['TOCINETA',26],['SALSA TARTARA',44],['SALSA BASE',30],['papas fritas',200],['PAPEL PARAFINADO',3],['BOLSAS DE PAPEL',2],['PALILLO BANDERA',2],['bebida gaseosa postobon cero 250ml',2]],
  co8:[['PAPAS FRANCESA',200],['manguera',0.5],['pan perro',1],['salchicha de perro',1],['Pan de hamburguesa',1],['CARNE DE HAMBURGUESA',90],['lechuga batavia',30],['lechuga crespa',3],['tomate',15],['SALSA BASE',15],['Lonchita amarilla',1],['SALSA TARTARA',70],['queso duro',40],['papa chongo',45],['GEL DE PIÑA',45],['J1',1],['TENEDORES',1],['BOLSAS BLANCAS',1],['BOLSAS DE PAPEL',1],['PAPEL PARAFINADO',1],['PALILLO SENCILLO',1],['SALSERO 0.5',1],['BOLSA BLANCA 3KL',1],['bebida gaseosa postobon cero 250ml',3],['K1',1]],
  co9:[['Pan de hamburguesa',2],['CARNE DE HAMBURGUESA',180],['lechuga batavia',6],['tomate',26],['Lonchita amarilla',1],['SALSA BASE',30],['papas fritas',400],['manguera',0.5],['pollo',100],['pan perro',2],['salchicha de perro',2],['SALSA TARTARA',85],['GEL DE PIÑA',60],['queso duro',50],['papa chongo',60],['J1',1],['TENEDORES',1],['BOLSAS BLANCAS',1],['BOLSAS DE PAPEL',2],['SALSERO 0.5',2],['PAPEL PARAFINADO',4],['bebida gaseosa postobon 1.5ml',1],['PAPEL ALUMINIO',2],['BOLSA BLANCA 3KL',2]],
  // ── ADICIONALES ──
  a1:[['cerdo',80]],
  a2:[['papas fritas',200],['PAPEL PARAFINADO',1]],
  a3:[['mozarella',1]],
  a4:[['maiz dulce',20]],
  a5:[['TOCINETA',25]],
  a6:[['CEBOLLA CARAMELIZADA',25]],
  a9:[['Salchicha suiza',0.5]],
  // ── BEBIDAS ──
  b1:[['bebida gaseosa postobon cero 250ml',1]],
  b2:[['bebida gaseosa coca cola 400ml',1]],
  b3:[['bebida gaseosa postobon 1.5ml',1]],
  // ── PROMOCIONES ──
  pr1:[['pan perro',1],['salchicha de perro',1],['lechuga batavia',10],['SALSA TARTARA',15],['queso duro',10],['papa chongo',15],['GEL DE PIÑA',15],['PAPEL ALUMINIO',1],['BOLSA BLANCA 3KL',1]],
  pr2:[['pan perro',3],['salchicha de perro',3],['SALSA TARTARA',45],['lechuga batavia',30],['queso duro',30],['papa chongo',45],['GEL DE PIÑA',45],['bebida gaseosa postobon cero 250ml',1],['PAPEL ALUMINIO',3],['BOLSA BLANCA 3KL',3]],
  pr3:[['pan perro',3],['salchicha de perro',3],['queso duro',30],['papa chongo',45],['SALSA TARTARA',45],['GEL DE PIÑA',45],['BUTIFARRA',4],['PAPEL ALUMINIO',3],['BOLSA BLANCA 3KL',3],['bebida gaseosa postobon cero 250ml',1]]
};

// Nombre visible y categoría de cada producto (para la vista de recetas)
var MENU_INFO = {
  h1:{nombre:'Hamburguesa Clásica',cat:'🍔 Hamburguesas'},
  h3:{nombre:'Hamburguesa Crunch Bacon',cat:'🍔 Hamburguesas'},
  h4:{nombre:'Hamburguesa Rompedieta',cat:'🍔 Hamburguesas'},
  p1:{nombre:'Perro Sencillo',cat:'🌭 Perros'},
  p2:{nombre:'Perro Gratinado',cat:'🌭 Perros'},
  p3:{nombre:'Perro Gemelo',cat:'🌭 Perros'},
  p4:{nombre:'Perro Suizo Loco',cat:'🌭 Perros'},
  s1:{nombre:'Salchipapa Sencilla',cat:'🍟 Salchipapas'},
  s2:{nombre:'Salchipapa Salchipollo',cat:'🍟 Salchipapas'},
  s4:{nombre:"Salchipapa Boca'o (Para 2)",cat:'🍟 Salchipapas'},
  s6:{nombre:'Salvajada (Para 3)',cat:'🍟 Salchipapas'},
  s5:{nombre:'Rompecintura (Para 4-5)',cat:'🍟 Salchipapas'},
  co2:{nombre:'Combo Clásico',cat:'🎁 Combos'},
  co6:{nombre:'Combo Triple Antojo',cat:'🎁 Combos'},
  co3:{nombre:'Combo Bacano',cat:'🎁 Combos'},
  co4:{nombre:'Combo Doble Golpe',cat:'🎁 Combos'},
  co7:{nombre:'Combo Dúo Crunch',cat:'🎁 Combos'},
  co8:{nombre:'Combo Trio Salvaje',cat:'🎁 Combos'},
  co9:{nombre:'Combo Familiar',cat:'🎁 Combos'},
  a1:{nombre:'Adicional Pollo / Cerdo',cat:'➕ Adicionales'},
  a2:{nombre:'Adicional Papas Fritas',cat:'➕ Adicionales'},
  a3:{nombre:'Adicional Queso Mozzarella',cat:'➕ Adicionales'},
  a4:{nombre:'Adicional Maíz',cat:'➕ Adicionales'},
  a5:{nombre:'Adicional Tocineta',cat:'➕ Adicionales'},
  a6:{nombre:'Adicional Cebolla Caramelizada',cat:'➕ Adicionales'},
  a9:{nombre:'Adicional ½ Suiza',cat:'➕ Adicionales'},
  b1:{nombre:'Postobón Cero 250ml',cat:'🥤 Bebidas'},
  b2:{nombre:'Coca Cola 400ml',cat:'🥤 Bebidas'},
  b3:{nombre:'Postobón 1.75L',cat:'🥤 Bebidas'},
  pr1:{nombre:'Perro Sencillo Viernes',cat:'🎉 Promociones'},
  pr2:{nombre:'3 Perros Sencillos + Gaseosa',cat:'🎉 Promociones'},
  pr3:{nombre:'3 Butiperros + Gaseosa',cat:'🎉 Promociones'}
};

// Ingredientes medidos en UNIDADES (el resto se asume en GRAMOS)
var ING_UNIDAD = {};
['Pan de hamburguesa','pan perro','bollo limpio','mozarella','Lonchita amarilla',
 'salchicha de perro','Salchicha suiza','chorizo','BUTIFARRA','manguera',
 'PAPEL PARAFINADO','PAPEL ALUMINIO','BOLSAS DE PAPEL','BOLSAS BLANCAS','BOLSA BLANCA 3KL',
 'PALILLO SENCILLO','PALILLO BANDERA','SALSERO 0.5','TENEDORES','BANDEJA HONDA','J1','K1',
 'bebida gaseosa postobon cero 250ml','bebida gaseosa coca cola 400ml','bebida gaseosa postobon 1.5ml'
].forEach(function(n){ ING_UNIDAD[n]=true; });

function unidadDe(ing){ return ING_UNIDAD[ing] ? 'und' : 'g'; }

// Normaliza nombres para hacer match con el inventario (ignora mayúsculas/acentos)
function normIng(s){ return (s||'').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ').trim(); }
