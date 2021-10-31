var nodes, edges,ID = 4;
var nautomatas = 1;
var estados,alfabeto,transicion,inicial,finales,unido = false,concatenados = false, esAFND = false;
var nodosf1 = [];
var nodosf2 = [];
var automata1 = [nodosf1];
var automata2 = [];
var qinicial1, qinicial2;
var xoptions = {
  edges: {
    arrows: {
      to: { enabled: true, scaleFactor: 1.2, type: "arrow" }
    }
  }
};

nodes = new vis.DataSet([
  { id: 1, label: "q1", color: "#b165fc" },
  { id: 2, label: "q2", color: "#f79bfa" },
  { id: 3, label: "q3", color: "#e30981" },
]);

var o_nodes = new vis.DataSet(nodes);

edges = new vis.DataSet([
  { id: "1-2", from: 1, to: 2, label: "b" },
  { id: "1-1", from: 1, to: 1, label: "a" },
  { id: "2-2", from: 2, to: 2, label: "a" },
  { id: "2-3", from: 2, to: 3, label: "b" },
  { id: "3-3", from: 3, to: 3, label: "a" },
]);

var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges
};

qinicial1 = estadoinicial(1).id;

function crear() {
    plog.info("Se muestran las alternativas para crear los automatas AFD o AFND");
    Swal.fire({
      icon: 'question',
      iconColor: '#7de1de',
      title: 'Crear',
      text: "Indique el automata que desea crear: ",
      allowOutsideClick: true,
      showCancelButton: false,
      showDenyButton: true,
      showCloseButton: true,
      confirmButtonText: '<i class="AFD"></i> AFD',
      confirmButtonColor: '#7de1de',
      denyButtonColor: '#ff9d00',
      denyButtonText: '<i class="ANFD"></i> AFND'
    
    }).then(result => {
      if (result.isConfirmed) {
        plog.info("Opcion seleccionada crear AFD");
        AFD();
      } else if (result.isDenied) {
        plog.info("Opcion Seleccionada crear AFND");
        AFND();
      }
    });
  }

  async function AFD() {
    if (nautomatas == 2) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: false,
      });
      Toast.fire({
        icon: "warning",
        iconColor: '#ed1c24',
        title: "El maximo de automatas es 2",
        text: "Limpia pantalla si deseas ingresar nuevos automatas "
      });
      return;
    }
    nautomatas++;
    alfabetoentrada().then(total => {
      console.log(alfabeto);
      estadostotales().then(valor => {
        console.log(estados);
        estadosfinales(valor - 1).then(valor => {
          var q = añadirestadoinicial();
          for (let i = 0; i < finales; i++) {
            añadirestadofinal();
          }
          for (let i = 0; i < estados - 1 - finales; i++) {
            añadirestadonormal();
          }
          estados = estados - 0;
          agregar(alfabeto, q, estados);
          if (nautomatas == 1) {
            qinicial1 = estadoinicial(1).id;
          }
          if (nautomatas == 2) {
            qinicial2 = q;
          }
        });
      });
    });
    plog.info("Se crea AFD");
  }

  async function alfabetoentrada() {
    plog.info("Se muestra opcion de tamaño del alfabeto de entrada");
    const { value: total } = await Swal.fire({
      icon: 'question',
      iconColor: '#eba4c8',
      title: "Seleccione el tamaño del alfabeto de entrada: ",
      allowOutsideClick: false,
      confirmButtonColor: '#ff82c8',
      confirmButtonText: 'Ingresar',
      input: "range",
      inputAttributes: {
        min: 2,
        max: 5,
        step: 1
      },
      inputValue: 2
    });
    alfabeto = total;
    return total;
  }
  async function estadostotales() {
    plog.info("Se muestra opcion de numero de estados totales");
    const { value: valor } = await Swal.fire({
      icon: 'question',
      iconColor: '#eba4c8',
      title: "Indique el numero de estados totales: ",
      allowOutsideClick: false,
      confirmButtonColor: '#ff82c8',
      confirmButtonText: 'Ingresar',
      input: "range",
      inputAttributes: {
        min: 2,
        max: 5,
        step: 1
      },
      inputValue: 2
    });
    estados = valor;
    return valor;
  }
  async function estadosfinales(rango) {
    plog.info("Se pide elegir la cantidad de estados finales");
    const { value: valor } = await Swal.fire({
      icon: 'question',
      iconColor: '#eba4c8',
      title: "Indique la cantidad de estados finales: ",
      allowOutsideClick: false,
      confirmButtonColor: '#ff82c8',
      confirmButtonText: 'Ingresar',
      input: "range",
      inputAttributes: {
        min: 1,
        max: rango,
        step: 1
      },
      inputValue: 1
    });
    finales = valor;
    return valor;
  }
  function añadirestadoinicial() {
    var Label = "q";
    nodes.add([{id: ID, label: Label + ID, color: "#b165fc"}]);
    var estadoinicial = ID;
    ID++;
    return estadoinicial;
  }
  function añadirestadofinal() {
    var Label = "q";
    nodes.add([{ id: ID, label: Label + ID, color: "#e30981" }]);
    ID++;
  }
  function añadirestadonormal() {
    var Label = "q";
    nodes.add([{ id: ID, label: Label + ID, color: "#f79bfa" }]);
    ID++;
  }
  async function agregar(alfabeto, q, estados) {  
    var f = q;
    var opciones = crearopciones(q);
    estadosfinales1(f, alfabeto, opciones).then(cantidad => {
      if (1 < estados)
        estadosfinales1(f + 1, alfabeto, opciones).then(cantidad => {
          if (2 < estados)
            estadosfinales1(f + 2, alfabeto, opciones).then(cantidad => {
              if (3 < estados)
                estadosfinales1(f + 3, alfabeto, opciones).then(cantidad => {
                  if (4 < estados)
                    estadosfinales1(f + 4, alfabeto, opciones).then(
                      cantidad => {}
                    );
                });
            });
        });
    });
  }
  async function estadosfinales1(q, alfabeto, opciones) {
    plog.info("Opciones para poder conectar AFD");
    var n = nodes.getIds();
    var titulo = "desde q" + q + " hasta :";
    console.log(n);
    if (nautomatas == 1) {
      var c = 1;
    } else {
      for (let i = 1; i < nodes.get().length; i++) {
        if (nodes.get(n[i]).color == "#e30981") {
          var encontrado = nodes.get(n[i]);
          c = encontrado.id;
        }
      }
    }
  
    var o = "q";
  
    const { value: a } = await Swal.fire({
      title: "Conectar arista " + "'a' " + titulo,
      allowOutsideClick: false,
      confirmButtonColor: '#ff82c8',
      confirmButtonText: 'Ingresar',
      input: "select",
      inputOptions: opciones
    });
    conectar(q, a, "a");
    if (1 < alfabeto) {
      const { value: b } = await Swal.fire({
        title: "Conectar arista " + "'b' " + titulo,
        allowOutsideClick: false,
        confirmButtonColor: '#ff82c8',
        confirmButtonText: 'Ingresar',
        input: "select",
        inputOptions: opciones
      });
      conectar(q, b, "b");
    }
    if (2 < alfabeto) {
      const { value: c } = await Swal.fire({
        title: "Conectar arista " + "'c' " + titulo,
        allowOutsideClick: false,
        confirmButtonColor: '#ff82c8',
        confirmButtonText: 'Ingresar',
        input: "select",
        inputOptions: opciones
      });
      conectar(q, c, "c");
    }
    if (3 < alfabeto) {
      const { value: d } = await Swal.fire({
        title: "Conectar arista " + "'d' " + titulo,
        allowOutsideClick: false,
        confirmButtonColor: '#ff82c8',
        confirmButtonText: 'Ingresar',
        input: "select",
        inputOptions: opciones
      });
      conectar(q, d, "d");
    }
    if (4 < alfabeto) {
      const { value: e } = await Swal.fire({
        title: "Conectar arista " + "'e' " + titulo,
        allowOutsideClick: false,
        confirmButtonColor: '#ff82c8',
        confirmButtonText: 'Ingresar',
        input: "select",
        inputOptions: opciones
      });
      conectar(q, e, "e");
    }
  }

  async function crearopciones(qinicial) {
    var x = nodes.getIds();
    var options = {};
    for (let i = qinicial; i <= ID - 1; i++) {
      options[nodes.get(i).id] = "q" + i;
      console.log(options);
    }
    return options;
  }

  function conectar(desde, hasta, label) {
    var aristas = edges.get();
    var contadoraristas = aristas.filter(aristas => aristas.from == desde);
    var aristarep = false;
    for (var i = 0; i < contadoraristas.length; i++) {
      if (contadoraristas[i].from == contadoraristas[i].to) {
        aristarep = true;
        break;
      }
    }
    console.log(aristarep);
    if (desde == hasta && contadoraristas != 0 && aristarep == true) {
      for (var i = 0; i < contadoraristas.length; i++) {
        if (contadoraristas[i].from == contadoraristas[i].to) {
          var obtenerid = contadoraristas[i].id;
          var obtenerlabel = contadoraristas[i].label;
        }
      }
      console.log(
        "id=" + obtenerid + "///////" + "label=" + obtenerlabel + "," + label
      );
      edges.updateOnly({ id: obtenerid, label: obtenerlabel + "," + label });
    } else {
      contadoraristas = contadoraristas.length + 1;
      edges.add([
        {
          id: desde + "-" + contadoraristas,
          from: desde,
          to: hasta,
          label: label
        }
      ]);
      return;
    }
  }
  
  async function borrar() {
    var borrar = nodes.getIds();
    if (borrar.length == 0) {
      plog.warn(
        "Se intenta eliminar los automatas pero no existe ninguno ,se le envia mensaje indicandole el error"
      );
      Swal.fire({
        icon: "warning",
        title: "No hay ningun automata que elminar",
      });
      return;
    }
    plog.warn(
      "Se intenta eliminar los automatas por completo,se le envia mensaje para confirmar accion"
    );
    Swal.fire({
      icon: 'warning',
      title: '¿Esta seguro?',
      text: "Esta accion eliminara todos los automatas",
      allowOutsideClick: true,
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      confirmButtonColor: '#7de1de',
      denyButtonColor: '#ff9d00',
      }).then(result => {
      if (result.isConfirmed) {
        for (var i = 0; i < borrar.length; i++) {
          nodes.remove(borrar[i]);
          var aristas = edges.get();
          var contadoraristas = aristas.filter(
            aristas => aristas.from == borrar[i]
          );
  
          var x = contadoraristas.length;
          console.log(contadoraristas);
          while (x != 0) {
            edges.remove(contadoraristas[x - 1].id);
            x = x - 1;
          }
  
          console.log(edges.get());
          ID = 1;
          nautomatas = 0;
          unido = false;
          concatenados = false;
          esAFND = false;
        }
      } else if (result.isDenied) {
        return;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Los automatas han sido eliminados con exito"
    });
    plog.info(
      "Se eliminan todos los automatas"
    );
  
  }


  
function estadoinicial(automata) {
    var nodos = nodes.get();
    var automata1;
    var automata2;
    var c = 0;
    for (let i = 0; i < nodos.length; i++) {
      if (nodos[i].color == "#b165fc") {
        c++;
        if (c == 1) {
          automata1 = nodos[i];
        }
        if (c == 2) {
          automata2 = nodos[i];
        }
      }
    }
    if (automata == 1) {
      return automata1;
    }
    if (automata == 2) {
      return automata2;
    }
  }