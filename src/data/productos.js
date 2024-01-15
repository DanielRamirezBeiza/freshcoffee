const productos = [
    {
        nombre: "Actividad Recreativa",
        reembolso: "$8.000 mensual",
        tope: "$96.000 anual",
        beneficiario: "Afiliado",
        imagen: "#",
        categoria_id: 1,
        id: 1,
        requisitos: `Destinado a afiliados al S. B. que practican una actividad físico-deportiva o artística-cultural, tendiente al desarrollo de la persona y bajo instrucción de un establecimiento o persona
        autorizada.  
        Bonificable contra la presentación de Boleta de Ventas y Servicio, nominativa, debe incluir el
        nombre y apellido del funcionario, C. I., mes de cobro y la actividad que realiza.`
      },
      {
        nombre: "Actividad Recreativa para Carga Familiar",
        reembolso: "$4.000 mensual",
        tope: "$48.000 anual",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 1,
        id: 2,
        requisitos: `Destinado a las cargas familiares de los afiliados al S. B. que practican una actividad físicodeportiva o artística-cultural, tendiente al desarrollo de la persona y bajo instrucción de un establecimiento o persona autorizada.
        Bonificable contra la presentación de Boleta de Ventas y Servicio, nominativa, debe incluir el nombre y apellido de la carga familia, numero de carnet de identidad, mes de cobro y la actividad que realiza.`
      },
      {
        nombre: "Beca Enseñanza Superior Funcionario",
        reembolso: "60% del arancel",
        tope: "$500.000 anual",
        beneficiario: "Afiliado",
        imagen: "#",
        categoria_id: 2,
        id: 3,
        requisitos: `Dirigido a los funcionarios que no tengan título universitario, técnico universitario, institutos
        profesionales o centro de formación técnica y que cursen educación superior regular en
        establecimientos del Estado o reconocidos por éste y que cumplan con los requisitos que anualmente,
        se establecen para la postulación.
        • Beneficio cuenta con reglamento propio
        • Certificado de duración de la carrera, con fecha de inicio y de termino
        • Certificado de Alumno regular
        • Certificado de arancel anual de la carrera
        • Avance en la malla curricular de la carrera. `,
        link_Reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
        reglamento_QR: "#"
      },
      {
        nombre: "Beca Excelencia Académica Cargas Familiares Básica",
        reembolso: "$45.000",
        tope: "",
        beneficiario: "Carga Familiar",
        imagen: "#",
        categoria_id: 2,
        id: 4,
        requisitos: `Certificado de notas en educación básica del año anterior con promedio de notas
        igual o superior a 6.0 (seis)`,
        link_Reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
        reglamento_QR: "#"
      },
      {
        nombre: "Beca Excelencia Académica Cargas Familiares Media",
        reembolso: "$45.000",
        tope: "",
        beneficiario: "Carga Familiar",
        imagen: "#",
        categoria_id: 2,
        id: 5,
        requisitos: `Certificado de notas año anterior de 1°a 4°medio, con promedio igual o superior a 6.0
        (seis)`,
        link_Reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
        reglamento_QR: "#"
      },
      {
        nombre: "Beca Excelencia Académica Cargas Familiares Superior",
        reembolso: "$135.000",
        tope: "",
        beneficiario: "Carga Familiar",
        imagen: "#",
        categoria_id: 2,
        id: 6,
        requisitos: `Certificado de notas año anterior, con promedio notas igual o superior a 5,5 (incluye
          1° y 2° semestre).
          Para alumnos ingresados el año 2023 (4°medio), con promedio de Notas igual o
          superior a 6.0 (seis)`,
        link_Reglamento: "https://drive.google.com/file/d/1uVQJFcPLg5XDiu_pBf02nPMKjyGOKYaT/view",
        reglamento_QR: "#"
      },
      {
        nombre: "Bono Escolar Bienestar Básica",
        reembolso: "$32.000",
        tope: "",
        beneficiario: "Carga Familiar",
        imagen: "#",
        categoria_id: 2,
        id: 7,
        requisitos: `Beneficio para cargas familiares reconocidas en el Servicio de Bienestar.
        • Certificado de alumno regular para Kínder, Básico, Media y Educación Superior.
        • Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del
        Estado o reconocidos por éste. `,
      },
      {
        nombre: "Bono Escolar Bienestar Media",
        reembolso: "$40.500",
        tope: "",
        beneficiario: "Carga Familiar",
        imagen: "#",
        categoria_id: 2,
        id: 8,
        requisitos: `Beneficio para cargas familiares reconocidas en el Servicio de Bienestar.
        • Certificado de alumno regular para Kínder, Básico, Media y Educación Superior.
        • Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del
        Estado o reconocidos por éste. `,
      },
      {
        nombre: "Bono Escolar Bienestar Superior",
        reembolso: "$120.00",
        tope: "",
        beneficiario: "Carga Familiar",
        imagen: "#",
        categoria_id: 2,
        id: 9,
        requisitos: `Beneficio para cargas familiares reconocidas en el Servicio de Bienestar.
        • Certificado de alumno regular para Kínder, Básico, Media y Educación Superior.
        • Beneficio sólo para cargas familiares que cursen educación regular en establecimientos del
        Estado o reconocidos por éste. `,
      },
      {
        nombre: "Bono Nivelación de Estudios",
        reembolso: "$50.000",
        tope: "",
        beneficiario: "Afiliado",
        imagen: "#",
        categoria_id: 2,
        id: 10,
        requisitos: `Dirigido a los funcionarios que se encuentren completando su escolaridad básica y media.
        • Tener a lo menos 6 meses de permanencia efectiva como afiliado a bienestar, al primero de
        marzo del año que se solicita el beneficio.
        • Certificado de promoción anual de estudios.
        • Certificado de licencia de educación media emitido por el Mineduc.`,
      },
      {
        nombre: "Capacitación",
        reembolso: "$250.000",
        tope: "",
        beneficiario: "Afiliado",
        imagen: "#",
        categoria_id: 2,
        id: 11,
        requisitos: `Beneficio cuenta con reglamento propio
        Dirigido a los funcionarios que deseen realizar una capacitación que tenga relación con la labor,
       rol o función que realice el funcionario dentro del Municipio o la Corporación, debe ser impartida
       en establecimientos del Estado o reconocidos por este y que cumplan con los requisitos que se
       establecen en el reglamento. `,
       link_reglamento: 'https://drive.google.com/file/d/18_zLeZ5n1PPD7HbRzVafxI6glWlK6Pj7/view',
       reglamento_QR: '#'
      },
      {
        nombre: "Club Escolar",
        reembolso: "$50% de lo facturado con tope de $28.000",
        tope: "28.000 mensuales",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 2,
        id: 12,
        requisitos: `Beneficio destinado para las funcionarias afiliadas y cargas familiares reconocidas e inscritas en
        Bienestar entre los niveles de Kínder y 8º Básico.
        Los funcionarios varones cuyas cargas asistan a Club Escolar y que quieran acceder al beneficio
        deberán presentar solicitud al Comité de Bienestar, siempre que su cónyuge trabaje.
        regularmente, para lo cual deberá presentar contrato de trabajo y semestralmente certificado de
        cotizaciones de la madre del menor.
        Boleta Original del Jardín Infantil, con datos de la carga.
        (Nombre, apellidos), datos del afiliado (Nombre, Apellidos, C.I), monto cobrado y mes del Servicio
        prestado.
        El beneficio de Club Escolar es de Marzo a Diciembre de cada año.
        El beneficio debe ser cobrado por mes vencido y mensualmente. `,
       link_reglamento: 'https://drive.google.com/file/d/1-6QMmPccUF8bsNSyvlmYg4Txy592ln-m/view',
       reglamento_QR: '#'
      },
      {
        nombre: "Gastos de Titulación",
        reembolso: "Hasta $300.000",
        tope: "28.000 mensuales",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 2,
        id: 13,
        requisitos: `Sólo para funcionarios afiliados a Bienestar y por Carreras profesionales y Técnico Profesional en
        Universidades, Institutos Profesionales y Centros de Formación Técnica. (sobre 4 semestres)
        Presentar copia visada de certificado de título.
        Boletas de la institución educacional por los gastos de titulación `,
      },
      {
        nombre: "Jardin Infantil Jornada Completa",
        reembolso: "$44.000",
        tope: "Asistencia completa durante el mes en Jornada Completa.",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 2,
        id: 14,
        requisitos: `Beneficio destinado para las funcionarias afiliadas y cargas familiares reconocidas e inscritas en
        Bienestar entre los niveles de Kínder y 8º Básico.
        Los funcionarios varones cuyas cargas asistan a Club Escolar y que quieran acceder al beneficio
        deberán presentar solicitud al Comité de Bienestar, siempre que su cónyuge trabaje.
        regularmente, para lo cual deberá presentar contrato de trabajo y semestralmente certificado de
        cotizaciones de la madre del menor.
        Boleta Original del Jardín Infantil, con datos de la carga.
        (Nombre, apellidos), datos del afiliado (Nombre, Apellidos, C.I), monto cobrado y mes del Servicio
        prestado.
        El beneficio de Club Escolar es de Marzo a Diciembre de cada año.
        El beneficio debe ser cobrado por mes vencido y mensualmente. `,
       link_reglamento: 'https://drive.google.com/file/d/1-6QMmPccUF8bsNSyvlmYg4Txy592ln-m/view',
       reglamento_QR: '#'
      },
      {
        nombre: "Jardin Infantil Media Jornada",
        reembolso: "$22.000",
        tope: "Asistencia inferior a 11 días durante el mes o por jornada parcial.",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 2,
        id: 15,
        requisitos: `Beneficio destinado para las funcionarias afiliadas y cargas familiares reconocidas e inscritas en
        Bienestar entre los niveles de Kínder y 8º Básico.
        Los funcionarios varones cuyas cargas asistan a Club Escolar y que quieran acceder al beneficio
        deberán presentar solicitud al Comité de Bienestar, siempre que su cónyuge trabaje.
        regularmente, para lo cual deberá presentar contrato de trabajo y semestralmente certificado de
        cotizaciones de la madre del menor.
        Boleta Original del Jardín Infantil, con datos de la carga.
        (Nombre, apellidos), datos del afiliado (Nombre, Apellidos, C.I), monto cobrado y mes del Servicio
        prestado.
        El beneficio de Club Escolar es de Marzo a Diciembre de cada año.
        El beneficio debe ser cobrado por mes vencido y mensualmente. `,
       link_reglamento: 'https://drive.google.com/file/d/1-6QMmPccUF8bsNSyvlmYg4Txy592ln-m/view',
       reglamento_QR: '#'
      },
      {
        nombre: "Post titulo",
        reembolso: "Hasta el 50% del arancel anual con tope de hasta $400.000.- ",
        tope: "Hasta $400.000",
        beneficiario: "Afiliado",
        imagen: "#",
        categoria_id: 2,
        id: 16,
        requisitos: `Dirigido a los funcionarios que tengan título universitario, técnico universitario, institutos
        profesionales o centros de formación técnica y que deseen realizar una especialización en
        relación a su carrera en establecimientos del Estado o reconocidos por este y que cumplan con
        los requisitos que se establecen en el reglamento.`,
       link_reglamento: 'https://drive.google.com/file/d/1ti6ZA7G3usxi6QU9gi5b4k33OWb4484A/view',
       reglamento_QR: '#'
      },
      {
        nombre: "Pre Universitario",
        reembolso: "$10.000",
        tope: "$100.000 anual",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 2,
        id: 17,
        requisitos: `Dirigido a los funcionarios que tengan título universitario, técnico universitario, institutos
        profesionales o centros de formación técnica y que deseen realizar una especialización en
        relación a su carrera en establecimientos del Estado o reconocidos por este y que cumplan con
        los requisitos que se establecen en el reglamento.`,
       link_reglamento: 'https://drive.google.com/file/d/1ti6ZA7G3usxi6QU9gi5b4k33OWb4484A/view',
       reglamento_QR: '#'
      },
      {
        nombre: "Pre Universitario",
        reembolso: "$10.000",
        tope: "$100.000 anual",
        beneficiario: "Carga familiar",
        imagen: "#",
        categoria_id: 2,
        id: 17,
        requisitos: `Dirigido a los funcionarios que tengan título universitario, técnico universitario, institutos
        profesionales o centros de formación técnica y que deseen realizar una especialización en
        relación a su carrera en establecimientos del Estado o reconocidos por este y que cumplan con
        los requisitos que se establecen en el reglamento.`,
       link_reglamento: 'https://drive.google.com/file/d/1ti6ZA7G3usxi6QU9gi5b4k33OWb4484A/view',
       reglamento_QR: '#'
      },
      {
        nombre: `Renovación de licencia de conducir para funcionarios que desempeñen funciones de
        Conductor en la I.M.V. o Corporación Municipal Área Salud. `,
        reembolso: "$25.000",
        tope: "$25.000 cada 4 años",
        beneficiario: "Afiliado",
        imagen: "#",
        categoria_id: 2,
        id: 18,
        requisitos: `Dirigido a los funcionarios que tengan título universitario, técnico universitario, institutos
        profesionales o centros de formación técnica y que deseen realizar una especialización en
        relación a su carrera en establecimientos del Estado o reconocidos por este y que cumplan con
        los requisitos que se establecen en el reglamento.`,
       link_reglamento: 'https://drive.google.com/file/d/1ti6ZA7G3usxi6QU9gi5b4k33OWb4484A/view',
       reglamento_QR: '#'
      },
      {
        nombre: `Beneficio Catastrófico`,
        reembolso: "30% de Copago",
        tope: "Hasta $500.000 anual",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 19,
        requisitos: `Certificado médico que acredite enfermedad catastrófica.
        Formulario de Solicitud beneficio Catastrófico`,
        coberturas: `Exámenes y Tratamientos.
        Bonos Consultas.
        Medicamentos.
        Hospitalización, Intervenciones quirúrgicas, procedimientos de programación médica e
        insumos.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Consulta Alta Especialidad`,
        reembolso: "Hasta $10.000",
        tope: "Hasta $96.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 20,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorario`,
        coberturas: `Otorrinolaringología, Oftalmología, Podología, Geriatría, Oncología, Nutrición, Endocrinología,
        Reumatología, Hematología y Dermatología, Bonos o boletas honorario emitidos que superen los
        $14.670 (lo cual sea el valor cancelado por el beneficiario)`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Consulta General`,
        reembolso: "Hasta $3.500",
        tope: "Hasta $90.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 21,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorario`,
        coberturas: `Consulta Básica o electiva, Fonoaudiología. (Esta última prestación, las sesiones serán consideradas
          como bono consulta y las respectivas boletas deben indicar el número de sesiones realizadas)`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Dentales`,
        reembolso: "40% del valor del copago",
        tope: "Hasta $500.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 22,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorario`,
        requisitos_urgencias: `Boleta de Honorarios, Factura o Boleta de Prestación de Servicios con nombre del paciente, con
        fecha de emisión y detalle del tipo de urgencias y sus respectivos montos. `,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Exámenes`,
        reembolso: "35% del valor del copago por examen",
        tope: "Hasta $200.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 23,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorario`,
        requisitos_adicionales: `Requisitos Emergencia
        Boleta de Honorarios, Factura o Boleta de Prestación de Servicios con nombre del paciente, con
        fecha de emisión y detalle del tipo de urgencias y sus respectivos montos. `,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Farmacia (Medicamentos) y Pañales Adulto `,
        reembolso: "50% del valor de lo recetado",
        tope: "Hasta $400.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 24,
        requisitos: `Receta médica original, con nombre del paciente, fecha de emisión y duración del tratamiento.
        • La fecha de la boleta debe consignar la misma fecha de la receta o posterior a la fecha de la
        receta médica, teniendo 30 días de vigencia a contar de la emisión.
        • Las boletas deben indicar solo los medicamentos prescritos en la respectiva Receta Médica, en
        caso de que en la boleta no consigne el o los nombres de los medicamentos prescritos se debe
        adjuntar el detalle con timbre de la Farmacia.
        • Sobre los Vaucher: Al pagar con una tarjeta, la maquina registra en un ticket su compra, lo que
        no sirve para efectos de reembolsos, ya que no indica lo comprado, para validarlo deberá
        acreditarlo con nota y timbre de la farmacia. 
        Medicamentos permanentes o por periodos: Se presenta para efecto del reembolso, fotocopia
de la receta, siempre que la original indique que el medicamento es permanente o por
un periodo determinado.
• Recetas retenidas: Se presenta fotocopia de la receta con timbre de la farmacia que indique:
“Receta Retenida”. No se aceptará otra forma conforme a lo indicado.
• Cambio de medicamentos genéricos y/o bioequivalente: Toda prescripción de medicamentos
que sea cambiado por su genérico o bioequivalente deberá constar el hecho por escrito y bajo
firma y timbre del Químico Farmacéutico a cargo de la Farmacia que lo expende o en su defecto
adjuntar la caja del medicamento que indica la droga recetada por el médico.
• Pañales, apósitos, sabanillas (todos para adulto): Se presenta para efecto del reembolso, receta
a nombre del funcionario o carga acreditada en bienestar y boleta de compra.`,
        requisitos_adicionales: `Requisitos Convenio farmacia cruz verde
        Pueden comprarse médicamentos con su cédula de identidad y será descontado en una cuota por planilla`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Fertilización Asistida`,
        reembolso: "35% del valor del copago",
        tope: "Hasta $400.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 25,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorario`,
        coberturas: `Fecundación in vitro, inseminación artificial, ovo donación. `,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Hospitalización, Intervención Quirúrgica, e insumos.`,
        reembolso: "40% del valor por programa médico",
        tope: "Hasta $400.000 anuales por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 26,
        requisitos: `Bonos FONASA o ISAPRE Programa Médico Original.
        • Los Bonos deben concordar con el Programa Médico
        • No sirve informe de Finanzas
        Insumos: se consideran los gastos por aerocámaras y jeringas, con receta médica que indique el nombre
        del paciente y fecha de emisión.`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      }, 
      {
        nombre: `Lente Intraocular`,
        reembolso: "40% del valor copago",
        tope: "Hasta $400.000 por grupo familiar",
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 27,
        requisitos: `Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con
        fecha de emisión. `,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Óptica Lentes (Marcos y Cristales o Lentes de Contacto)`,
        reembolso: "Hasta $43.000",
        tope: `$43.000 para el funcionario y cada una de sus cargas familiares
        reconocida en bienestar una vez al año`,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 28,
        requisitos: `• Presentar receta original más una copia, esta tendrá vigencia de un año
        • Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con
        fecha de emisión. `,
        coberturas: `Lente intraocular, para tratamiento de enfermedades visuales.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Óptica Marcos o Cristales`,
        reembolso: "Hasta $16.500",
        tope: `$16.500 para el funcionario y cada una de sus cargas familiares
        reconocida en bienestar una vez al año`,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 29,
        requisitos: `• Presentar receta original más una copia solo para el cambio de cristales. (La receta debe tener
          vigencia de un año).
          • Boleta Ventas y Servicio por la compra de los cristales o marcos.
          • Se recomienda dejar para su archivo personal copia de la receta óptica dado que el S. B. no
          proporcionara la receta en el caso que requiera reparación de Cristales.`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Órtesis, prótesis, ortopédicas, endoprótesis, audífonos, marcapasos.`,
        reembolso: "50% del valor del copago",
        tope: `$400.000 por grupo familiar`,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 30,
        requisitos: `• Presentar receta original más una copia solo para el cambio de cristales. (La receta debe tener
          vigencia de un año).
         
          • Copia de bono FONASA cursando en original.
          • Comprobante de reembolso de Isapre, en original.
          • Boleta de honorarios por prestación de servicios, profesionales en original
          • Boleta Ventas y Servicio por la compra de los cristales o marcos.
          • Se recomienda dejar para su archivo personal copia de la receta óptica dado que el S. B. no
          proporcionara la receta en el caso que requiera reparación de Cristales.`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Procedimientos de programación médica y tratamientos`,
        reembolso: "35% del valor del copago",
        tope: `$200.000 por grupo familiar`,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 31,
        requisitos: `
        • Copia de bono FONASA cursando en original.
        • Comprobante de reembolso de Isapre, en original.
        • Boleta de honorarios por prestación de servicios, profesionales en original
        `,
        coberturas: `Procedimientos ambulatorios (sin día cama, ni hospitalización), tratamientos kinesiológicos, infiltraciones.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Prótesis Dental y Brackets`,
        reembolso: "Hasta $200.000",
        tope: `$200.000 por grupo familiar`,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 32,
        requisitos: `
        •Presupuesto de la prótesis o instalación de ortodoncia con nombre del paciente, la que debe
        consignar fecha de emisión.
        • Boleta de Venta y Servicio con nombre del paciente y fecha de emisión
        `,
        coberturas: `Prótesis dental fija o removible e instalación de ortodoncia (instalación y extracción brackets) `,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Rehabilitación de Adicciones`,
        reembolso: `Porcentualmente con subsidio conforme evaluación socioeconómica de
        Asistente Social del Servicio de Bienestar`,
        tope: `Una vez por afiliado y/o carga familiar, debiendo ser evaluado por A. Social
        del Servicio de Bienestar. `,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 33,
        requisitos: `
        •Presupuesto de la prótesis o instalación de ortodoncia con nombre del paciente, la que debe
        consignar fecha de emisión.
        • Boleta de Venta y Servicio con nombre del paciente y fecha de emisión
        `,
        coberturas: `Tratamiento de rehabilitación por Fármaco-dependencia, drogas y alcoholismo `,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Salud Mental`,
        reembolso: `$10.000`,
        tope: `$300.000.- Por grupo familiar. `,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 34,
        requisitos: `
        •Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con
          fecha de emisión. 
        `,
        coberturas: `• Consulta psicológica, consulta psiquiátrica, consultas neurológicas  `,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Traslado Ambulancia`,
        reembolso: `%50 de la boleta con tope de $35.000`,
        tope: `$100.000.- Anual por grupo familiar. `,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 35,
        requisitos: `
        •Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con
          fecha de emisión. 
        `,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Tratamiento Radiológicos`,
        reembolso: `$35.000 valor del copago`,
        tope: `$500.000.- Por grupo familiar. `,
        beneficiario: "Todas las afiliaciones",
        imagen: "#",
        categoria_id: 3,
        id: 36,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con
        fecha de emisión`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Defunción de afiliado(a)`,
        reembolso: `$350.000`,
        tope: `solo se puede solicitar una vez`,
        beneficiario: "Asignado por el funcionario en su ficha",
        imagen: "#",
        categoria_id: 4,
        id: 37,
        requisitos: `• Certificado de defunción original.
        • Si el beneficio es cobrado por el cónyuge, se debe agregar el respectivo Certificado de
        Matrimonio original.
        • El Beneficio se cancelará en el siguiente orden de exclusión:
        a) Persona designada en vida por el Afiliado.
        b) Cónyuge sobreviviente.
        c) Hijos
        d) Persona que acredite fehacientemente haber efectuado los gastos del funeral (Mediante
        Factura emitida a nombre de quién realiza el gasto).
        Los familiares de un funcionario tendrán un plazo de 24 meses desde el momento de fallecimiento del
        causante para cobrar el beneficio`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Defunción de carga familiar afiliado(a)`,
        reembolso: `$300.000`,
        tope: `solo una vez`,
        beneficiario: "Asignado por el funcionario en su ficha",
        imagen: "#",
        categoria_id: 4,
        id: 38,
        requisitos: `• Copia de bono FONASA en original.
        • Comprobantes de reembolso de ISAPRE, en original.
        • Boleta de Honorarios por prestación de Servicios Profesionales en original, nominativa y con
        fecha de emisión`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Defunción Familiar No Carga `,
        reembolso: `$60.000`,
        tope: `solo una vez`,
        beneficiario: "Asignado por el funcionario en su ficha",
        imagen: "#",
        categoria_id: 4,
        id: 39,
        requisitos: `El beneficio está dirigido al funcionario que sufra la perdida de madre, padre o hijo no carga
        familiar del afiliado
        • Presentar Certificado de Defunción original
        • Acreditar relación de parentesco con el familiar por el cual se está solicitando el subsidio.`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Fiestas Patrias `,
        reembolso: `El beneficio se reajusta por el comité de bienestar cada año.`,
        tope: `solo una vez al año`,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 40,
        requisitos: ``,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Incendio con pérdida parcial`,
        reembolso: `250.000`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 41,
        requisitos: `
        • Se otorga el beneficio a los afiliados al S. B. con la acreditación de las perdidas.
        • Informe de Bomberos.
        • Informe de Técnico. (El S.B lo solicita a un Profesional Municipal)
        • Evaluación de Asistente Social del S. B. `,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Incendio con pérdida total`,
        reembolso: `500.000`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 42,
        requisitos: `
        • Se otorga el beneficio a los afiliados al S. B. con la acreditación de las perdidas.
        • Informe de Bomberos.
        • Informe de Técnico. (El S.B lo solicita a un Profesional Municipal)
        • Evaluación de Asistente Social del S. B. `,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Matrimonio o unión Civil de Afiliado (a) `,
        reembolso: `500.000`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 43,
        requisitos: `
        • Para funcionarios afiliados al S. B.
        • Certificado de Matrimonio o Unión Civil Original
        • Si ambos contrayentes son afiliados al S. B. pagará el beneficio a cada uno de ellos.
        • Este beneficio se cancelará por una sola vez, excepto en caso de viudez.`,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Nacimiento hijo (a)`,
        reembolso: `110.000`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 44,
        requisitos: `
        • Para funcionarios afiliados al S. B.
        • Certificado de Nacimiento Original.
        • Si ambos padres son afiliados al S. B; se pagará el beneficio a cada uno de ellos. `,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Nacimiento Múltiple (Desde 3 hijos-as) `,
        reembolso: `110.000`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 45,
        requisitos: `
        • Para funcionarios afiliados al S. B.
        • Certificado de Nacimiento Original.
        • Si ambos padres son afiliados al S. B; se pagará el beneficio a cada uno de ellos. `,
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Navidad Fiesta Infantil`,
        reembolso: ``,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 46,
        requisitos: `
        Dirigido a los hijos y/o cargas familiares legal, reconocida ante el S. B. en 0 y 12 años de edad
      `,
        coberturas: `El financiamiento comprometido se programa el 2º semestre 2022 y no tiene
        costo para los afiliados.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Navidad bono funcionarios`,
        reembolso: `$El beneficio se reajusta por el comité de bienestar cada año, durante el
        periodo anterior (2022) se entregó un bono de $70.000 por afiliado más
        $6.000 por cada una de sus cargas reconocidas en bienestar`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 47,
        requisitos: `
        Dirigido a los hijos y/o cargas familiares legal, reconocida ante el S. B. en 0 y 12 años de edad
      `,
        coberturas: `El financiamiento comprometido se programa el 2º semestre 2022 y no tiene
        costo para los afiliados.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Subsidio hijo con discapacidad `,
        reembolso: `$30.000 mensuales`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 48,
        requisitos: `
        Beneficio social destinado a funcionarios con cargas duplo y también para aquellos funcionarios
        con cargas que tengan enfermedades no cubiertas por el GES (AUGE) y que además se
        consideren enfermedades crónicas.
        `,
        requisitos_adicionales: ` Antecedentes Solicitados:
        1. Diagnóstico del Médico Tratante, especialista acorde a patología.
        2. Certificado discapacidad COMPIN (Servicio de Salud) superior a 50%.
        `,
        coberturas: `El financiamiento comprometido se programa el 2º semestre 2022 y no tiene
        costo para los afiliados.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Premiación 40 años de Servicio`,
        reembolso: `$120.000 mensuales`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 4,
        id: 48,
        requisitos: `
        • Dirigido a funcionarios que cumplen 40 años de servicio.
        • Se le entrega el beneficio al funcionario que sea acreditado por gestión de personal o quien
        corresponda con la antigüedad que se solicita.
        • La fecha de corte para este beneficio es al 31 de Marzo de cada año, es decir, se pagará a
        aquellos que al 31 de Marzo de cada año cumplan los 40 años de servicio. 
        `,
        requisitos_adicionales: ` Antecedentes Solicitados:
        1. Diagnóstico del Médico Tratante, especialista acorde a patología.
        2. Certificado discapacidad COMPIN (Servicio de Salud) superior a 50%.
        `,
        coberturas: `El financiamiento comprometido se programa el 2º semestre 2022 y no tiene
        costo para los afiliados.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Examen electrocardiograma y Hemoglucotest `,
        reembolso: `$`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 5,
        id: 50,
        requisitos: `
        • Dirigido a funcionarios que cumplen 40 años de servicio.
        • Se le entrega el beneficio al funcionario que sea acreditado por gestión de personal o quien
        corresponda con la antigüedad que se solicita.
        • La fecha de corte para este beneficio es al 31 de Marzo de cada año, es decir, se pagará a
        aquellos que al 31 de Marzo de cada año cumplan los 40 años de servicio. 
        `,
        coberturas: `El financiamiento comprometido se programa el 2º semestre 2022 y no tiene
        costo para los afiliados.`,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Kinesiología y Quiropráctica`,
        reembolso: `$Servicio de atención sujeto a disponibilidad de horas`,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 5,
        id: 51,
        requisitos: '',
        coberturas: ``,
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Laboratorio Clinico`,
        reembolso: ``,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 5,
        id: 53,
        requisitos: ``,
        
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Atención Apoyo Ortopédico`,
        reembolso: ``,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 5,
        id: 54,
        requisitos: ``,
        
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Paramédico`,
        reembolso: ``,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 5,
        id: 55,
        requisitos: ``,
        
       link_reglamento: '#',
       reglamento_QR: '#'
      },
      {
        nombre: `Psícologo`,
        reembolso: ``,
        tope: ``,
        beneficiario: "Todas la afiliaciones",
        imagen: "#",
        categoria_id: 5,
        id: 56,
        requisitos: ``,
        
       link_reglamento: '#',
       reglamento_QR: '#'
      },
     
     

     





]

export {
    productos
}