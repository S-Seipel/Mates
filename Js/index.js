
const Titulos = [
    {
        id: "mates",
        titulo: "Tipos de mates"
    },
    {
        id: "yerbas",
        titulo: "Tipos de yerbas"
    },
    {
        id: "bombillas",
        titulo: "Tipos de bombillas"
    },
];

const Mates = [
    {
        Id: "mate-1",
        titulo: "Calabaza",
        imagen: "./mates/Calabaza.jpeg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Se encuentran realizados en la fruta de la calabaza ya que su forma redondeada y la cascara dura que la recubre en el exterior permiten que sea utilizada como mate. Para formar el hueco del interior se debe extraer la pulpa. Luego, estas frutas se ponen a secar para que queden listas para ser decoradas artesanalmente, lo que le añade un plus muy atractivo."
    },
    {
        Id: "mate-2",
        titulo: "Alpaca",
        imagen: "./mates/Alpaca.jpg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Estos mates son similares a los anteriores ya que también se encuentran realizados con calabazas, la diferencia es que su decoración artesanal incluye adornos de metal como la plata y la alpaca. También hay mates fundidos en plata, es decir que están realizados completamente en este metal. El trabajo comienza con el diseño, luego el fundido del metal y el moldeo con la forma deseada, por último se lo decora con pulido o grabado."
    },
    {
        Id: "mate-3",
        titulo: "Cuernos vacuno",
        imagen: "./mates/Cuero.jpg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Uno de los mates preferidos por los amantes de esta infusión son los confeccionados en cuernos vacunos. Estos mates están realizados con astas y guampas que son más anchos en la parte de la base para que tengan un buen apoyo. En su exterior son cubiertos con una capa de metal y decorados con detalles estéticos, generalmente en plata."
    },
    {
        Id: "mate-4",
        titulo: "Madera",
        imagen: "./mates/Madera.jpeg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Los mates de maderas son muy vistosos ya que este es un material natural que aporta ese detalle rústico y sus decoraciones pueden ser muy variadas, según el gusto de cada persona. Las maderas más utilizadas para los mates de madera son: quebracho, palo santo y roble. Cada tipo de madera influye en el sabor del mate por esta razón es que también se deben evitar maderas aromáticas ya que podrían afectar negativamente al sabor de la infusión."
    },
    {
        Id: "mate-5",
        titulo: "Caña",
        imagen: "./mates/Caña.jpg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Estos mates se encuentran realizados con cañas de bambú. Este es un tipo de madera muy resistente ya que se cultiva y crece en ambientes de temperaturas extremas, esta es una ventaja ya que resiste muy bien al agua caliente. Las cañas son seleccionadas para la fabricación de los mates, luego se las pule y se le aplica una capa de barniz. El sabor del mate en cañas de bambú es muy diferente al del resto, vale la pena probarlo."
    },
    {
        Id: "mate-6",
        titulo: "Vidrio",
        imagen: "./mates/Vidrio.jpg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "En la actualidad también se pueden encontrar mates de vidrio. Se trata de recipientes fundidos en vidrio, en la mayoría de los casos se trata de vidrio reciclado. Una de las ventajas que tiene este tipo de mate es que el vidrio es un material que no tiene efectos en el sabor de la infusión. Con este mate se puede sentir el verdadero sabor de la yerba mate."
    },
    {
        Id: "mate-7",
        titulo: "Metal",
        imagen: "./mates/Metal.jpg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Ya hemos hablado de los mates de metal cuando mencionamos a los mates de plata, pero también estos recipientes pueden realizarse en otros materiales como el acero inoxidable. Se trata de mates muy duraderos ya que el metal es muy resistente a los golpes y caídas, como también a la corrosión y oxido. No necesita ser curado ya que el metal no es un material poroso, por esta razón también se destaca como un mate de fácil limpieza lo que es importante para que no quede acumulado yerba."
    },
    {
        Id: "mate-8",
        titulo: "Plastico",
        imagen: "./mates/Plastico.jpg",
        categoria:{
            Id: "mates"
        },
        especificaciones: "Por último tenemos a los mates de plástico que son los mates más modernos, son tendencia en la actualidad por sus colores y formas tan originales. El plástico es un material sintético muy económico por lo que estos mates pueden conseguirse a un precio accesible en el mercado. Se destacan por ser muy estéticos con sus diseños modernos, pero también súper prácticos ya que no necesitan ser curados, son de fácil limpieza, no acumulan bacterias y mantienen en temperatura el agua del mate."
    },
    {
        Id: "yerba-1",
        titulo: "Con palo",
        imagen: "./yerbas/yerba-con-palo.jpg",
        categoria:{
            Id: "yerbas"
        },
        especificaciones: "Si queremos disfrutar de un mate suave, la Yerba Mate tradicional es una buena opción. Posee un promedio de 70% hojas secas y trituradas y un 30% de palo. Es importante recordar, que según el Código Alimentario Argentino, tiene que tener al menos un 65% de hojas desecadas, rotas o pulverizadas y no más de un 35% de palo."
    },
    {
        Id: "yerba-2",
        titulo: "Despalada",
        imagen: "./yerbas/Despalada.webp",
        categoria:{
            Id: "yerbas"
        },
        especificaciones: "Contiene hierbas como el boldo, tilo, manzanilla, poleo (entre otras). A las propiedades antioxidantes y energizantes de la Yerba Mate, se suman las propiedades de las hierbas naturales. Algunas pueden tomarse después de una comida, ya que muchas de estas hierbas son digestivas. Otras producen una sensación reconfortante, relajante y de bienestar. El Código Alimentario Argentino dice que cada paquete debe contener hasta un 40% de hierbas aromáticas , el 60% restante deberá contener yerba mate."
    },
    {
        Id: "yerba-3",
        titulo: "Saborizada",
        imagen: "./yerbas/Saborizada.jpg",
        categoria:{
            Id: "yerbas"
        },
        especificaciones: "Para los que prefieren ir cambiando los sabores y no gustan de los mates amargos e intensos, pueden encontrar en las góndolas una amplia variedad de yerbas elaboradas con esencias naturales y sabores que van desde los cítricos (pomelo, limón, naranja) hasta los exóticos como frutos del bosque y tropicales."
    },
    {
        Id: "bombilla-1",
        titulo: "Acero, alpaca o plata",
        imagen: "./bombillas/Alpaca.jpg",
        categoria:{
            Id: "bombillas"
        },
        especificaciones: "Son quizá las más comunes y presentes en el mercado. Su gran ventaja es que no afectan el sabor de la yerba, por lo que al emplearlas se podrá disfrutar al 100% el sabor de la infusión. Además, son fáciles de lavar y, si se cuidan adecuadamente, no se deterioran con el paso del tiempo. Dentro de esta categoría pueden encontrarse modelos con la boquilla redondeada o plana; e incluso modelos con la parte inferior o filtro desmontable para una mejor higiene."
    },
    {
        Id: "bombilla-2",
        titulo: "Madera o bambú",
        imagen: "./bombillas/Madera.jpg",
        categoria:{
            Id: "bombillas"
        },
        especificaciones: "Este tipo de bombillas utilizadas para seguir tendencias modernas recuerdan a los orígenes del mate. Aunque estéticamente pueden resultar atractivas, la forma en que la madera sea tratada y la higiene de la misma pueden afectar el sabor del mate. Por lo que si se busca aprovechar al máximo el gusto de la Yerba Mate, será necesario cambiarlas con frecuencia y prestar especial atención a su limpieza"
    },
    {
        Id: "bombilla-3",
        titulo: "Plastico",
        imagen: "./bombillas/Plastico.jpg",
        categoria:{
            Id: "bombillas"
        },
        especificaciones: "Elegidas por la gran variedad de colores y combinaciones que pueden ofrecer, las bombillas de plástico o materiales similares han ganado popularidad.  Al momento de optar por este tipo de bombilla es necesario tener certeza sobre su fabricación para asegurar que el contacto frecuente con agua caliente no la deforme o afecte de forma negativa el sabor del mate. Lo recomendable al utilizarlas es emplear el agua a una temperatura más baja y cambiarlas con frecuencia – lo que no es recomendable para el medio ambiente"
    },
];


const contenedorPoductos = document.querySelector("#contenedor--productos");
const contenedorTitulo = document.querySelector("#contenedor--titulos");
const botonCategoria = document.querySelectorAll(".menu__btn");


function cargadorCalacterias(categoriaElegida){

    contenedorPoductos.innerHTML = "";

    categoriaElegida.forEach(mate => {

        const div = document.createElement("div");
        div.classList.add("mate");
        div.innerHTML = `
            <div class="producto">            
                <img src="${mate.imagen}" class="producto--img">
                <div class="producto--detalles">
                    <h3 class="producto--titulo">${mate.titulo}</h3>
                    <p class="producto--especificaciones">${mate.especificaciones}</p>
                </div>
            </div>
        `;

        contenedorPoductos.append(div);
    })
};

function cargadorTitulos(tituloElegido){

    contenedorTitulo.innerHTML = "";

    tituloElegido.forEach(titulo => {

        const h1 = document.createElement("h1");
        h1.classList.add("titulo");
        h1.innerHTML = `
            <h1 class="titulo--principal">${titulo.titulo}</h1>
        `;

        contenedorTitulo.append(h1);
    })
};


botonCategoria.forEach( boton => {
    boton.addEventListener("click", (e) => {
        

        botonCategoria.forEach(boton => boton.classList.remove( "active" ));
        e.currentTarget.classList.add( "active" );

        
        const categoriaBoton = Mates.filter(mate => mate.categoria.Id === e.currentTarget.id);
        const tituloBoton = Titulos.filter(titulo => titulo.id === e.currentTarget.id);

        
        cargadorCalacterias(categoriaBoton);
        cargadorTitulos(tituloBoton)

    })
} );