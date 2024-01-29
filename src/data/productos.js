const productos = [
  {
      nombre: "Actividades Reacreativas",
      beneficio: "$8.000 mensuales",
      informacion_complementaria: "$96.000 anuales",
      categoria_id: 1,
      id: 1,
      descripcion:"Destinado a afiliados al S. B. que practican una actividad físico-deportiva o artística-cultural, tendiente al desarrollo de la persona y bajo instrucción de un establecimiento o persona autorizada.",
      requisitos: ` 
      • Bonificable contra la presentación de Boleta de Ventas y Servicio, nominativa, debe incluir el nombre y apellido del funcionario, C. I., mes de cobro y la actividad que realiza
      `,
      causante: "Afiliado",
      tipo: "Bonificación"
  },
  {
      nombre: "Actividad Recreativa Carga Familiar",
      beneficio: "$4.000 mensuales",
      informacion_complementaria: "$48.000 anuales",
      categoria_id: 1,
      id: 2,
      descripcion: "• Destinado a afiliados al S. B. que practican una actividad físico-deportiva o artística-cultural, tendiente al desarrollo de la persona y bajo instrucción de un establecimiento o persona autorizada.",
      requisitos: ` 
      • Bonificable contra la presentación de Boleta de Ventas y Servicio, nominativa, debe incluir el nombre y apellido del funcionario, C. I., mes de cobro y la actividad que realiza
      `,
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Beca Enseñanza Superior Funcionario",
      beneficio: "60% del Arancel",
      informacion_complementaria: "Hasta $500.000 Primera Carrera",
      categoria_id: 2,
      id: 3,
      descripcion: "Dirigido a los funcionarios que no tengan título universitario, técnico universitario, institutos profesionales o centro de formación técnica y que cursen educación superior regular en establecimientos del Estado o reconocidos por éste y que cumplan con los requisitos que anualmente, se establecen para la postulación.",
      requisitos: `
      • Beneficio cuenta con reglamento propio
      • Certificado de duración de la carrera, con fecha de inicio y de termino
      • Certificado de Alumno regular 
      • Certificado de arancel anual de la carrera
      • Avance en la malla curricular de la carrera
      `, 
      reglamento_propio: true,
      nombre_reglamento: "Reglamento Beca de estudios por mérito académico Servicio Bienestar I. Municipalidad Valparaíso",
      link_reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
      qr_reglamento: "#",
      causante: "Afiliado",
      tipo: "Bonificación",
  },
  {
      nombre: "Beca Excelencia Académica Cargas Familiares Básica",
      beneficio: "$45.000",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 4,
      descripcion: "Dirigido a las cargas familiares que se encuentren estudiando enseñanza básica a partir de 2°año Ed. Básica con notas sobresalientes",
      requisitos: `
      • Certificado de notas en educación básica del año anterior con promedio de notas
      igual o superior a 6.0 (seis)
      • Certificado de alumno regular 
      `, 
      reglamento_propio: true,
      nombre_reglamento: "Reglamento Beca de estudios por mérito académico Servicio Bienestar I. Municipalidad Valparaíso",
      link_reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
      qr_reglamento: "#",
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Beca Excelencia Académica Cargas Familiares Media",
      beneficio: "$65.000",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 5,
      descripcion: "Dirigido a las cargas familiares que se encuentren estudiando enseñanza media incluyendo a los alumnos que egresaron de 4°año medio",
      requisitos: `
      • Certificado de notas en educación básica del año anterior con promedio de notas
      igual o superior a 6.0 (seis)
      • Certificado de alumno regular 
      `, 
      reglamento_propio: true,
      nombre_reglamento: "Reglamento Beca de estudios por mérito académico Servicio Bienestar I. Municipalidad Valparaíso",
      link_reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
      qr_reglamento: "#",
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Beca Excelencia Académica Cargas Familiares Ed. Superior",
      beneficio: "$135.000",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 6,
      descripcion: "Dirigido a las cargas familiares que se encuentren estudiando enseñanza superior en instituciones reconocidas por el estado",
      requisitos: `
      • Certificado final de notas, en original y correspondiente a Primer Semestre y Segundo Semestre del período académico que antecede a la postulación con promedio de notas igual o superior a 5.5
      • Certificado de alumno regular 
      • Para quienes ingresan al primer año de su educación superior, podrán hacer uso del certificado de notas de ed. media con certificado final de notas correspondiente a 4°año medio 
      `, 
      reglamento_propio: true,
      nombre_reglamento: "Reglamento Beca de estudios por mérito académico Servicio Bienestar I. Municipalidad Valparaíso",
      link_reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
      qr_reglamento: "#",
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Bono Escolar Bienestar Básica",
      beneficio: "$32.000",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 7,
      descripcion: "Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del Estado o reconocidos por éste",
      requisitos: `
      • Beneficio para cargas familiares reconocidas en el Servicio de Bienestar. 
      • Certificado de alumno regular para Kínder y Educación Básica.
      • Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del Estado o reconocidos por éste
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Bono Escolar Bienestar Media",
      beneficio: "$40.500",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 8,
      descripcion: "Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del Estado o reconocidos por éste",
      requisitos: `
      • Beneficio para cargas familiares reconocidas en el Servicio de Bienestar. 
      • Certificado de alumno regular de Educación Media.
      • Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del Estado o reconocidos por éste
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Bono Escolar Bienestar Superior",
      beneficio: "$120.000",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 9,
      descripcion: "Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del Estado o reconocidos por éste",
      requisitos: `
      • Beneficio para cargas familiares reconocidas en el Servicio de Bienestar. 
      • Certificado de alumno regular de Educación Media.
      • Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del Estado o reconocidos por éste
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Bono Nivelación de Estudios",
      beneficio: "$50.000 anual",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 10,
      descripcion: "Dirigido a los funcionarios que se encuentren completando su escolaridad básica y media.",
      requisitos: `
      • Tener a lo menos 6 meses de permanencia efectiva como afiliado a bienestar, al primero de marzo del año que se solicita el beneficio.
      • Certificado de promoción anual de estudios.
      • Certificado de licencia de educación media emitido por el Mineduc.
       ` ,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Capacitación",
      beneficio: "$250.000 anual",
      informacion_complementaria: "Reglamento Propio",
      categoria_id: 2,
      id: 11,
      descripcion: "Dirigido a los funcionarios que deseen realizar una capacitación que tenga relación con la labor, rol o función que realice el funcionario dentro del Municipio o la Corporación, debe ser impartida en establecimientos del Estado o reconocidos por este y que cumplan con los requisitos que se establecen en el reglamento",
      requisitos: `
      a) El beneficio puede ser cobrado, una vez que el funcionario que haya concluido la capacitación.
      b) La capacitación debe ser orientada a la labor, rol o función que cumple dentro del Municipio o Corporación.
      c) Deber presentar, Boleta de pago de la capacitación, emitida por la institución, en donde tengan contenida nombre y Rut del funcionario que solicita el beneficio.
      d) Malla curricular o programa y duración de la capacitación, mediante certificado extendido por el establecimiento respectivo.
      e) Fotocopia de certificado o diploma entregado por la institución que acredite que el funcionario completo la capacitación.
       ` ,
      causante: "Afiliado",
      tipo: "Beneficio",
      reglamento_propio: true,
      nombre_reglamento: "Reglamento Subsidio por Estudios de Capacitación Servicio Bienestar I. Municipalidad Valparaíso",
      link_reglamento: "https://drive.google.com/file/d/18_zLeZ5n1PPD7HbRzVafxI6glWlK6Pj7/view" ,
      qr_reglamento: "#",
  },
  {
      nombre: "Club Escolar",
      beneficio: "50% mensualidad",
      informacion_complementaria: "28.000 máximo de devolución",
      categoria_id: 2,
      id: 12,
      descripcion: "Dirigido a los funcionarios que se encuentren completando su escolaridad básica y media.",
      requisitos: `
      • Los funcionarios varones cuyas cargas asistan a Club Escolar y que quieran acceder al beneficio deberán presentar solicitud al Comité de Bienestar, siempre que su cónyuge trabaje regularmente, para lo cual deberá presentar contrato de trabajo y semestralmente certificado de cotizaciones de la madre del menor.
      • Boleta Original del Jardín Infantil, con datos de la carga  (Nombre, apellidos), datos del afiliado (Nombre, Apellidos, C.I), monto cobrado y mes del Servicio prestado. 
      • El beneficio de Club Escolar es de Marzo a Diciembre de cada año. 
      • El beneficio debe ser cobrado por mes vencido y mensualmente. 
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
      reglamento_propio: true,
      nombre_reglamento: "Instructivo Para Beneficiarios de Jardín Infantil y Club Escolar",
      link_reglamento: "https://drive.google.com/file/d/1-6QMmPccUF8bsNSyvlmYg4Txy592ln-m/view" ,
      qr_reglamento: "#",
  },
 
  {
      nombre: "Gastos de Titulación",
      beneficio: "Hasta $300.000",
      informacion_complementaria: "Solo para el afiliado",
      categoria_id: 2,
      id: 13,
      descripcion: "Sólo para funcionarios afiliados a Bienestar y por Carreras profesionales y Técnico Profesional en Universidades, Institutos Profesionales y Centros de Formación Técnica. (sobre 4 semestres)",
      requisitos: `
      • Presentar copia visada de certificado de título. 
      • Boletas de la institución educacional por los gastos de titulación. 
       ` ,
      causante: "Afiliado",
      tipo: "Bonificación",
  },
  {
      nombre: "Jardín Infantil Jornada Completa",
      beneficio: "Hasta $44.000",
      informacion_complementaria: "Asistencia Jornada Completa",
      categoria_id: 2,
      id: 14,
      descripcion: "Beneficio destinado para las funcionarios y cargas familiares reconocidas en Bienestar con edad superior a 2 años y hasta 5 años cumplidos al 31 de Marzo del año escolar correspondiente que se encuentre cursando el pre kínder.",
      requisitos: `
      • Los afiliados varones cuyas cargas familiares reconocidas asistan a Jardín Infantil y que deseen acceder al beneficio deberán presentar solicitud al Comité de Bienestar, siempre que su cónyuge trabaje regularmente, para lo cual deberá presentar contrato de trabajo y semestralmente certificado de cotizaciones de la madre del menor. 
      • Boleta Original del Jardín Infantil, con datos de la carga (Nombre, apellidos), datos del afiliado (Nombre, Apellidos, C.I), monto cobrado y mes del Servicio prestado. 
      • Certificado de asistencia del menor, indicando el mes y la jornada. 
      • Certificado médico en caso de inasistencia del menor por enfermedad
      • El beneficio debe ser cobrado por mes vencido y mensualmente.
      
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
      reglamento_propio: true,
      nombre_reglamento: "Instructivo Para Beneficiarios de Jardín Infantil y Club Escolar",
      link_reglamento: "https://drive.google.com/file/d/1-6QMmPccUF8bsNSyvlmYg4Txy592ln-m/view" ,
      qr_reglamento: "#",
  },   
  {
      nombre: "Jardín Infantil Jornada Completa",
      beneficio: "Hasta $44.000",
      informacion_complementaria: "Asistencia Jornada Completa",
      categoria_id: 2,
      id: 15,
      descripcion: "Beneficio destinado para las funcionarios y cargas familiares reconocidas en Bienestar con edad superior a 2 años y hasta 5 años cumplidos al 31 de Marzo del año escolar correspondiente que se encuentre cursando el pre kínder.",
      requisitos: `
      • Los afiliados varones cuyas cargas familiares reconocidas asistan a Jardín Infantil y que deseen acceder al beneficio deberán presentar solicitud al Comité de Bienestar, siempre que su cónyuge trabaje regularmente, para lo cual deberá presentar contrato de trabajo y semestralmente certificado de cotizaciones de la madre del menor. 
      • Boleta Original del Jardín Infantil, con datos de la carga (Nombre, apellidos), datos del afiliado (Nombre, Apellidos, C.I), monto cobrado y mes del Servicio prestado. 
      • Certificado de asistencia del menor, indicando el mes y la jornada. 
      • Certificado médico en caso de inasistencia del menor por enfermedad
      • El beneficio debe ser cobrado por mes vencido y mensualmente.
      
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
      reglamento_propio: true,
      nombre_reglamento: "Instructivo Para Beneficiarios de Jardín Infantil y Club Escolar",
      link_reglamento: "https://drive.google.com/file/d/1-6QMmPccUF8bsNSyvlmYg4Txy592ln-m/view" ,
      qr_reglamento: "#",
  },   
  {
      nombre: "Pos Título",
      beneficio: "50% del Arancel",
      informacion_complementaria: "Hasta $400.000",
      categoria_id: 2,
      id: 16,
      descripcion: "Dirigido a los funcionarios que tengan título universitario, técnico universitario, institutos profesionales o centros de formación técnica y que deseen realizar una especialización en relación a su carrera en establecimientos del Estado o reconocidos por este y que cumplan conlos requisitos que se establecen en el reglamento.",
      requisitos: `
      A) Para solicitar el beneficio:
      • Certificado de alumno regular,
      • Valor total del arancel del programa de post título, 
      • Malla curricular y duración del programa de post título, mediante certificado extendido por el establecimiento respectivo.
      B) Para renovar el beneficio:
      • Certificado de alumno regular,
      • Aprobación de, a lo menos, el 80% de la malla curricular del programa de post título.
       ` ,
      causante: "Afiliado",
      tipo: "Beneficio",
      reglamento_propio: true,
      nombre_reglamento: "Reglamento Subsidio por Estudios Post Título",
      link_reglamento: "https://drive.google.com/file/d/1ti6ZA7G3usxi6QU9gi5b4k33OWb4484A/view" ,
      qr_reglamento: "#",
  },  
  {
      nombre: "Pre Universitario",
      beneficio: "$10.000 mensual",
      informacion_complementaria: "Hasta $100.000 por carga familiar",
      categoria_id: 2,
      id: 17,
      descripcion: "Beneficio destinado para las cargas familiares reconocidas e inscritas en Bienestar hasta los 18 años, en el caso de ser egresado de 4°medio y que dejo de ser carga familiar",
      requisitos: `
      • Beneficio destinado para las cargas familiares reconocidas e inscritas en Bienestar hasta los 18 años, en el caso de ser egresado de 4°medio y que dejo de ser carga familiar, se le cancelará el beneficio al funcionario, para lo cual deberá presentar la boleta o factura a nombre del hijo y que se representa en ella que el pago lo realiza el funcionario, pueda quedar acreditado en la boleta, factura o contrato.
      • Boleta Original del Pre Universitario; debe ser presentada mensualmente 
       ` ,
      causante: "Carga familiar",
      tipo: "Bonificación",
  },  
  {
      nombre: "Renovación de licencia de conducir conductores municipales",
      beneficio: "$25.000",
      informacion_complementaria: "Socios con labor de conductor - Cada 4 años",
      categoria_id: 2,
      id: 18,
      descripcion: "Renovación de licencia de conducir para funcionarios que desempeñen funciones de Conductor en la I.M.V. o Corporación Municipal Área Salud. ",
      requisitos:` 
      • Debe presentar BIM, Original por la renovación de Licencia de Conducir.
      • Beneficio para funcionarios afiliados al S. B. que desempeñen labor de conductor en forma permanente.
      • Presentar constancia de función desempeñada en la IMV. (Solicitar en oficina de Archivo y Mantención de Antecedente de la Sección de Personal de Recursos Humanos Anexo 9137) 
       ` ,
      causante: "Afiliado",
      tipo: "Bonificación",
  },  
  {
      nombre: "Beneficio Catastrófico",
      beneficio: "30% Valor copago",
      informacion_complementaria: "Hasta $500.000",
      categoria_id: 3,
      id: 19,
      descripcion: "El beneficio de enfermedad catastrófica con tope de $500.000, operara independiente del cupo normal de rembolsos, es decir todos los rembolsos que se produzcan al nombre del paciente que sufre de la enfermedad catastrófica serán cargados a este ítem, con el fin de no perjudicar el saldo de los topes de los otros beneficios indicados en el plan anual.",
      requisitos:` 
      • Certificado médico que acredite enfermedad catastrófica.
      • Formulario de Solicitud beneficio Catastrófico 
      ` ,
      causante: "Grupo Familiar",
      tipo: "Beneficio",
      reglamento_propio: true,
      nombre_reglamento: "Solicitud deincorporación beneficio para enfermedades catastróficas Bienestar IMV”",
      link_reglamento: "https://drive.google.com/file/d/1ti6ZA7G3usxi6QU9gi5b4k33OWb4484A/view" ,
      qr_reglamento: "#",
  }, 
  {
      nombre: "Consulta Alta Especialidad",
      beneficio: "Hasta $10.000",
      informacion_complementaria: "$96.000 Grupo familiar",
      categoria_id: 3,
      id: 20,
      descripcion: "Reembolso directo por atenciones médicas de alta especialidad u alto costo",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión. 
      ` ,
      coberturas: ` 
      • Otorrinolaringología, 
      • Oftalmología, 
      • Podología, 
      • Geriatría, 
      • Oncología, 
      • Nutrición, 
      • Endocrinología,
      • Reumatología, 
      • Hematología y Dermatología, 
      • Bonos o boletas honorario emitidos que superen los *$15.000* (Valor segun valorización alto costo de Fonasa)
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Consulta General",
      beneficio: "Hasta 3.500",
      informacion_complementaria: "$90.000 Grupo familiar",
      categoria_id: 3,
      id: 21,
      descripcion: "Reembolso directo por atenciones médicas básicas incluyendo las de fonoaudiología",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión. 
      ` ,
      coberturas: ` 
      • Todas las consultas médicas,
      • Sesiones fonoaudilogicas serán consideradas como bono consulta y las respectivas boletas deben indicar el número de sesiones realizadas
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Dentales",
      beneficio: "40% del valor copago",
      informacion_complementaria: "$500.000 Grupo familiar",
      categoria_id: 3,
      id: 22,
      descripcion: "Reembolso proporcional al costo de atenciones dentales",
      requisitos:` 
      • Presupuesto del tratamiento dental que indique el nombre del paciente y fecha de emisión.
      • Boleta de Honorarios, Factura o Boleta de Prestación de Servicios, con nombre del paciente y con fecha de emisión. 
      ` ,
      coberturas: ` 
      • Atenciones dentales con presupuesto dental,
      • Atenciones de urgencia: Boleta de Honorarios, Factura o Boleta de Prestación de Servicios con nombre del paciente, con
      fecha de emisión y detalle del tipo de urgencias y sus respectivos montos. 
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Exámenes",
      beneficio: "35% del valor copago",
      informacion_complementaria: "$200.000 Grupo familiar",
      categoria_id: 3,
      id: 23,
      descripcion: "Reembolso proporcional al costo de examenes médicos",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión.  
      ` ,
      coberturas: ` 
      • Examenes relacionados a la salud del funcionario y sus cargas familiares
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },  
  {
      nombre: "Farmacia (Medicamentos y pañales de adulto)",
      beneficio: "50% del valor copago",
      informacion_complementaria: "$400.000 Grupo familiar",
      categoria_id: 3,
      id: 24,
      descripcion: "Reembolso proporcional al costo médicamentos y pañales para adulto recetados por un médico/a",
      requisitos:` 
      Requisitos sobre las boletas
      • Receta médica original, con nombre del paciente, fecha de emisión y duración del tratamiento.
      • La fecha de la boleta debe consignar la misma fecha de la receta o posterior a la fecha de la receta médica, teniendo 30 días de vigencia a contar de la emisión.
      • Las boletas deben indicar solo los medicamentos prescritos en la respectiva Receta Médica, en caso de que en la boleta no consigne el o los nombres de los medicamentos prescritos se debe adjuntar el detalle con timbre de la Farmacia. 
      
      Requisitos sobre los vaucher
      • Al pagar con una tarjeta, la maquina registra en un ticket su compra, lo que no sirve para efectos de reembolsos, ya que no indica lo comprado, para validarlo deberá acreditarlo con nota y timbre de la farmacia. 
      
      Requisitos sobre las recetas:
      • Medicamentos permanentes o por periodos: Se presenta para efecto del reembolso, fotocopia de la receta, siempre que la original indique que el medicamento es permanente o por un periodo determinado.
      • Recetas retenidas: Se presenta fotocopia de la receta con timbre de la farmacia que indique: “Receta Retenida”. No se aceptará otra forma conforme a lo indicado.
      • Cambio de medicamentos genéricos y/o bioequivalente: Toda prescripción de medicamentos que sea cambiado por su genérico o bioequivalente deberá constar el hecho por escrito y bajo firma y timbre del Químico Farmacéutico a cargo de la Farmacia que lo expende o en su defecto adjuntar la caja del medicamento que indica la droga recetada por el médico.
      
      Requisitos sobre los pañales, apósitos, sabanillas (todos para adulto)
      • Se presenta para efecto del reembolso, receta a nombre del funcionario o carga acreditada en bienestar y boleta de compra.
      ` ,

  
      coberturas: ` 
      • Todos los médicamento o insumos incluyendo pañales, apósitos, sabanillas (todos para adulto) indicados en recetas médicas
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Fertilización Asistida",
      beneficio: "35% del valor copago",
      informacion_complementaria: "$400.000 Grupo familiar",
      categoria_id: 3,
      id: 25,
      descripcion: "Reembolso proporcional a los procesos de fertilización asistida",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión. 
      ` ,
      coberturas: ` 
      • Fecundación in vitro, 
      • Inseminación artificial,
      • Ovo donación 
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Hospitalización, Cirugia e Insumos",
      beneficio: "40% del valor copago",
      informacion_complementaria: "$400.000 Grupo familiar",
      categoria_id: 3,
      id: 26,
      descripcion: "Reembolso proporcional a los costos del programa médico",
      requisitos:` 
      • Bonos FONASA o ISAPRE Programa Médico Original.
      • Los Bonos deben concordar con el Programa Médico
      • No sirve informe de Finanzas
      ` ,
      coberturas: ` 
      Insumos: se consideran los gastos por aerocámaras y jeringas, con receta médica que indique el nombre del paciente y fecha de emisión.
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Lente Intraocular",
      beneficio: "40% del valor copago",
      informacion_complementaria: "$400.000 Grupo familiar",
      categoria_id: 3,
      id: 27,
      descripcion: "Reembolso proporcional a los costos del programa médico",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión. 
      ` ,
      coberturas: ` 
      Lente intraocular, para tratamiento de enfermedades visuales. 
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Óptica Lentes",
      beneficio: "Hasta $43.000",
      informacion_complementaria: "1 Beneficio por afiliado y cada carga",
      categoria_id: 3,
      id: 28,
      descripcion: "Reembolso de hasta $43.000 o el 100% de la boleta en caso de haber pagado menos de ese monto, para el funcionario y cada una de sus cargas familiares reconocidas en bienestar una vez al año",
      requisitos:` 
      • Presentar receta original más una copia, esta tendrá vigencia de un año
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión. 
      ` ,
      coberturas: ` 
      Marcos y Cristales o Lentes de Contacto
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Óptica Marcos o Cristales",
      beneficio: "Hasta $16.500",
      informacion_complementaria: "1 Beneficio por afiliado y cada carga",
      categoria_id: 3,
      id: 29,
      descripcion: "Reembolso de hasta $16.500 o el 100% de la boleta en caso de haber pagado menos de ese monto, para el funcionario y cada una de sus cargas familiares reconocidas en bienestar una vez al año",
      requisitos:` 
      • Presentar receta original más una copia, esta tendrá vigencia de un año
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión. 
      ` ,
      coberturas: ` 
      Marcos y Cristales o Lentes de Contacto
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  }, 
  {
      nombre: "Órtesis, prótesis, audifonos y marcapasos",
      beneficio: "50% copago",
      informacion_complementaria: "$400.000 grupo familiar",
      categoria_id: 3,
      id: 30,
      descripcion: "Reembolso por la compra de Órtesis, prótesis, endroprótesis, audifonos y marcapasos",
      requisitos:` 
      • Presupuesto de la prótesis o instalación de ortodoncia con nombre del paciente, la que debe consignar fecha de emisión. 
      • Boleta de Venta y Servicio con nombre del paciente y fecha de emisión.
      `,
      coberturas: ` 
      • Órtesis, 
      • Prótesis, 
      • Endroprótesis, 
      • Audifonos,
      • Marcapasos
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Procedimientos de programación médica y tratamientos ",
      beneficio: "35% copago",
      informacion_complementaria: "$200.000 grupo familiar",
      categoria_id: 3,
      id: 31,
      descripcion: "Reembolso por las boletas de gastos médicos en atenciones ambulatorias",
      requisitos:` 
      • Copia de bono FONASA cursando en original.
      • Comprobante de reembolso de Isapre, en original.
      • Boleta de honorarios por prestación de servicios, profesionales en original
      `,
      coberturas: ` 
      • Procedimientos ambulatorios (sin día de cama, ni hospitalización), 
      • Tratamientos kinesiológicos,
      • Infiltraciones
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Protesis Dental y Brackets",
      beneficio: "Hasta $200.000",
      informacion_complementaria: "$200.000 por Grupo Familiar",
      categoria_id: 3,
      id: 32,
      descripcion: "Reembolso por las boletas de gastos médicos en atenciones ambulatorias",
      requisitos:` 
      • Presupuesto de la prótesis o instalación de ortodoncia con nombre del paciente, la que debe consignar fecha de emisión.
      • Boleta de Venta y Servicio con nombre del paciente y fecha de emisión. 
      `,
      coberturas: ` 
      • Prótesis dental fija o removible e instalación de ortodoncia (instalación y extracción brackets)
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Rehabilitación de Adicciones",
      beneficio: "% Subsidiado",
      informacion_complementaria: "Requiere evaluación de Asistente Social",
      categoria_id: 3,
      id: 33,
      descripcion: "Reembolso de un % del costo del tratamiento de rehabilitación por consumo farmaco-dependiente, drogas y/o alcoholismo",
      requisitos:` 
      • Programa Médico CONACE y/o Servicio de Salud Pública. 
      • Una vez por afiliado y/o carga familiar, debiendo ser evaluado por A. Social del Servicio de Bienestar
      `,
      causante: "Grupo Familiar",
      tipo: "Beneficio",
  },
  {
      nombre: "Salud Mental",
      beneficio: "Hasta $10.000",
      informacion_complementaria: "$300.000 por Grupo Familiar",
      categoria_id: 3,
      id: 34,
      descripcion: "Reembolso por las boletas de gastos en atenciones especificas de salud mental",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión.
      `,
      coberturas: ` 
      • Consulta psicológica, 
      • Consulta psiquiátrica, 
      • Consultas neurológicas
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Traslado de ambulancia",
      beneficio: "50% copago hasta $35.000",
      informacion_complementaria: "$100.000 por Grupo Familiar",
      categoria_id: 3,
      id: 35,
      descripcion: "Reembolso por las boletas de gastos en atenciones especificas de salud mental",
      requisitos:` 
      • Presentación de boleta o factura del gasto de ambulancia, se excluyen contratos anuales con servicios de ambulancias.
      `,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Tratamientos Radiológicos",
      beneficio: "35% del valor copago",
      informacion_complementaria: "$500.000 por Grupo Familiar",
      categoria_id: 3,
      id: 36,
      descripcion: "Reembolso por las boletas de gastos en atenciones especificas de salud mental",
      requisitos:` 
      • Copia de bono FONASA en original.
      • Comprobantes de reembolso de ISAPRE, en original.
      • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con fecha de emisión.
      `,
      coberturas: ` 
      • Quimioterapia,
      • Inmunoterapia,
      • Radiación
     ` ,
      causante: "Grupo Familiar",
      tipo: "Bonificación",
  },
  {
      nombre: "Defunción de Afiliado(a)",
      beneficio: "$350.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 37,
      descripcion: "Apoyo ecónomica a las personas designadas para enfrentar el fallecimiento del afiliado/a",
      requisitos:` 
      • Certificado de defunción original.
      • Si el beneficio es cobrado por el cónyuge, se debe agregar el respectivo Certificado de
      Matrimonio original.
      • El Beneficio se cancelará en el siguiente orden de exclusión:
          a) Persona designada en vida por el Afiliado.
          b) Cónyuge sobreviviente.
          c) Hijos
          d) Persona que acredite fehacientemente haber efectuado los gastos del funeral (Mediante Factura emitida a nombre de quién realiza el gasto).
      
          Los familiares de un funcionario tendrán un plazo de 24 meses desde el momento de fallecimiento del causante para cobrar el beneficio
      `,
      causante: "Grupo Familiar",
      tipo: "Beneficio",
  },
  {
      nombre: "Defunción Carga Familiar",
      beneficio: "300.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 38,
      descripcion: "Apoyo económico al afiliado/a para enfrentar el fallecimiento de una carga familiar inscrita en bienestar",
      requisitos:` 
      • El beneficio está dirigido a cargas familiares reconocidas en el S. B. 
      • Presentar Certificado de defunción original
      • El beneficio también incluye situaciones caso de nonato o mortinato (fallecimiento con una gestación de 5 meses)
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Defunción Familiar No Carga",
      beneficio: "300.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 39,
      descripcion: "Apoyo económico al afiliado/a para enfrentar el fallecimiento de familiares cercanos que no sean cargas familiares",
      requisitos:` 
      • El beneficio está dirigido a cargas familiares reconocidas en el S. B. 
      • Presentar Certificado de defunción original
      • El beneficio también incluye situaciones caso de nonato o mortinato (fallecimiento con una gestación de 5 meses)
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Fiestas Patrias",
      beneficio: "Relativo a presupuesto",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 40,
      descripcion: "Celebración de fiestas patrias, según lo definido por el comite de bienestar",
      requisitos:` 
      • No tiene requisitos
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Incendio con pérdida parcial",
      beneficio: "$250.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 41,
      descripcion: "Apoyo económico al afiliado/a para enfrentar el incendio de su domicilio con perdidas parciales",
      requisitos:` 
      • Se otorga el beneficio a los afiliados al S. B. con la acreditación de las perdidas. 
      • Informe de Bomberos. 
      • Informe de Técnico. (El S.B lo solicita a un Profesional Municipal) 
      • Evaluación de Asistente Social del S. B. 
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Incendio con pérdida total",
      beneficio: "$500.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 42,
      descripcion: "Apoyo económico al afiliado/a para enfrentar el incendio de su domicilio con perdidas total",
      requisitos:` 
      • Se otorga el beneficio a los afiliados al S. B. con la acreditación de las perdidas. 
      • Informe de Bomberos. 
      • Informe de Técnico. (El S.B lo solicita a un Profesional Municipal) 
      • Evaluación de Asistente Social del S. B. 
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Matrimonio o unión civil de afiliado",
      beneficio: "$110.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 43,
      descripcion: "Apoyo económico al afiliado/a para celebrar su matrimonio o unión civil",
      requisitos:` 
      • Para funcionarios afiliados al S. B.
      • Certificado de Matrimonio o Unión Civil Original
      • Si ambos contrayentes son afiliados al S. B. pagará el beneficio a cada uno de ellos.
      • Este beneficio se cancelará por una sola vez, excepto en caso de viudez. 
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Nacimiento Hijo (a)",
      beneficio: "$110.000",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 44,
      descripcion: "Apoyo económico al afiliado/a para celebrar su matrimonio o unión civil",
      requisitos:` 
      • 
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Nacimiento Múltiple (desde 3 hijos-as)",
      beneficio: "$50.000 mensuales",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 45,
      descripcion: "Apoyo económico al afiliado/a para enfrentar los costos de un nacimiento múltiple",
      requisitos:` 
      • Para cargas familiares reconocidas, de funcionarios afiliados al S. B. 
      • Certificado de Nacimiento Original de los niños (a). 
      • Si ambos padres son afiliados al S. B; se pagará el beneficio solo a uno de los padres, es decir se cancelará por grupo familiar. 
      • Debe realizarse informe social de parte del SB. para el estudio de cada caso y ver el tipo de ayuda a entregar. 
      • El beneficio se entregará hasta que las cargas cumplan 2 años 
      • El comité de bienestar al estudiar el caso, puede determinar si entrega la ayuda en dinero o especies, según las necesidades del caso, previo informe social. 
      • El beneficio se comienza a cobrar desde la fecha en que se reconoce la carga familiar en el SB. en adelante. 
      • El beneficio no es retroactivo. 
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Navidad Fiesta Infantil",
      beneficio: "Actividad Familiar",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 46,
      descripcion: "Celebrar la navidad de los niños/as más pequeños que son cargas familiares en bienestar",
      requisitos:` 
      • El financiamiento comprometido se programará el 2º semestre 2024 y no tiene costo para los afiliados. 
      • Dirigido a los hijos y/o cargas familiares legal, reconocida ante el S. B. en 0 y 12 años de edad
      `,
      causante: "Cargas Familiares",
      tipo: "Beneficio",
  },
  {
      nombre: "Navidad Bono Funcionarios",
      beneficio: "$70.000 por afiliado",
      informacion_complementaria: "$6.000 por cada carga familiar",
      categoria_id: 4,
      id: 47,
      descripcion: "Entregar una bonificación en dinero para que cada afiliado pueda disponer como guste en el periodo de navidad",
      requisitos:` 
      • El financiamiento comprometido se programará el 2º semestre 2024 y no tiene costo para los afiliados. 
      • Dirigido a los hijos y/o cargas familiares legal, reconocida ante el S. B. en 0 y 12 años de edad
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Subsidio hijo con discapacidad",
      beneficio: "$30.000 Mensuales",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 48,
      descripcion: "Beneficio social destinado a funcionarios con cargas duplo y también para aquellos funcionarios con cargas que tengan enfermedades no cubiertas por el GES (AUGE) y que además se consideren enfermedades crónicas.",
      requisitos:` 
      • El financiamiento comprometido se programará el 2º semestre 2024 y no tiene costo para los afiliados. 
      • Dirigido a los hijos y/o cargas familiares legal, reconocida ante el S. B. en 0 y 12 años de edad
      `,
      causante: "Grupo familiar",
      tipo: "Beneficio",
  },
  {
      nombre: "Premiación 40 años de Servicio",
      beneficio: "$120.000 Mensuales",
      informacion_complementaria: "",
      categoria_id: 4,
      id: 49,
      descripcion: "Reconocimiento y bonificación a los afiliados que cumplieron 40 años de servicio en el Municipio",
      requisitos:` 
      • Se le entrega el beneficio al funcionario que sea acreditado por gestión de personal o quien
      corresponda con la antigüedad que se solicita.
      • La fecha de corte para este beneficio es al 31 de Marzo de cada año, es decir, se pagará a aquellos que al 31 de Marzo de cada año cumplan los 40 años de servicio. 
      `,
      causante: "Afiliado",
      tipo: "Beneficio",
  },
  {
      nombre: "Examen electrocardiograma y Hemoglucotest",
      beneficio: "$1.000 costo por Examen",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 50,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Solicitar hora al anexo #9333 servicio policlínico
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },
  {
      nombre: "Kinesiología y Quiropráctica",
      beneficio: "$10.000 costo por atención",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 51,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Solicitar hora al anexo #9333 servicio policlínico
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },
  {
      nombre: "Laboratorio Clínico",
      beneficio: "Toma de muestras a precio rebajado",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 52,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Solicitar hora al anexo #9333 servicio policlínico
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },
  {
      nombre: "Consulta Médica",
      beneficio: "Atención de un médico",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 53,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Ser mayor de 14 años
      • Solicitar hora de agenda para atención
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },
  {
      nombre: "Atención apoyo ortopédico",
      beneficio: "Entrega de ayuda técnica segun disponibilidad",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 54,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Sujeto a disponibilidad de las ayudas técnicas
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },
  {
      nombre: "Paramédico",
      beneficio: "Atención de paramédico",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 55,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Ser mayor de 14 años
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },
  {
      nombre: "Psicólogo",
      beneficio: "Atención psicologica",
      informacion_complementaria: "",
      categoria_id: 5,
      id: 56,
      descripcion: "Atención en el servicio policlínico para el funcionario y sus cargas familiares",
      requisitos:` 
      • Costo de $20.000 por sesión
      • Solicitar hora de agenda para atención
      `,
      causante: "Grupo Familiar",
      tipo: "Atención",
  },





]


export {
  productos 
}