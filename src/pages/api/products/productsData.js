// import { categories } from './categories/categoriesData';
// import { tags } from './tags/tagsData';
const categories = require('./categories/categoriesData');
const tags = require('./tags/tagsData');

let id = 0;

const products = [
	{
		id: id++,
		title: 'Anillo Curvo',
		description:
			'Este es un anillo de oro rosa hecho con un diseño curvo y abierto, con detalles sutiles, finos y una atadura de plata que resalta la elegancia del anillo.',
		category: categories[0],
		tags: [tags[1]],
		images: [
			'https://i.postimg.cc/qBj62Lht/anillo-ororosa-01.jpg',
			'https://i.postimg.cc/ZRLB7PwM/anillo-ororosa-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Anillo en Cadena',
		description:
			'Este es un anillo de oro hecho con un diseño en cadena que le da una apariencia disruptiva, resalta por su mismo diseño que llama la atención',
		category: categories[0],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/Hxm89v9M/anillo-oro-01.jpg',
			'https://i.postimg.cc/Fs6fBHxN/anillo-oro-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Anillo Luna Estrella',
		description:
			'Este es un detallado anillo de oro con un diseño que hace alisión a la luna y las estrellas, con cuidados detalles hace de este un anillo perfecto para regalar.',
		category: categories[0],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/6QnGRxnw/anillo-oro-02.jpg',
			'https://i.postimg.cc/L65YD1Lx/anillo-oro-02-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas Espiral',
		description: 'Estas son unas aretas de oro con un diseño en espiral.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/NFfyWyVf/aretas-oro-01.jpg',
			'https://i.postimg.cc/7hsCDH81/aretas-oro-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas Brazalete',
		description:
			'Estas son unas aretas de oro con un diseño tipo brazalete griego.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/nhQsbfd7/aretas-oro-02.jpg',
			'https://i.postimg.cc/Xvfpqc6Y/aretas-oro-02-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas Diamantina',
		description:
			'Estas son unas aretas de oro con un incrustaciones de diamante.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/wB8194Pr/aretas-oro-03.jpg',
			'https://i.postimg.cc/XJxqcjJM/aretas-oro-03-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de Fé',
		description:
			'Esta es una cadena de oro con un dige de letras que dice "Fé".',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/90MML6RD/cadena-oro-01.jpg',
			'https://i.postimg.cc/W3stkFs6/cadena-oro-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de Argollas',
		description:
			'Esta es una cadena de oro hecha con argollas en forma de rectangulos gruesos.',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/fW2kVRpm/cadena-oro-02.jpg',
			'https://i.postimg.cc/BbVvkmHM/cadena-oro-02-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de doble Frente',
		description:
			'Esta es una cadena de oro hecha con una línea argollas en forma de rectangulos delgados y otra con argollas mas pequeñas con diges.',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/281yhfNJ/cadena-oro-03.jpg',
			'https://i.postimg.cc/JzJhYcn5/cadena-oro-03-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Pulsera decorada',
		description:
			'Esta es una pulsera hecha con bisutería y decorados de colores.',
		category: categories[3],
		tags: [tags[2]],
		images: ['https://i.postimg.cc/Pr0xMFtq/pulsera-basica-01.jpg'],
	},
	{
		id: id++,
		title: 'Pulsera decorada',
		description:
			'Esta es una pulsera hecha con bisutería y decorados de colores.',
		category: categories[3],
		tags: [tags[2]],
		images: ['https://i.postimg.cc/MGmpq61c/pulsera-basica-02.jpg'],
	},
	{
		id: id++,
		title: 'Pulsera decorada',
		description:
			'Esta es una pulsera hecha con bisutería y decorados de colores.',
		category: categories[3],
		tags: [tags[2]],
		images: ['https://i.postimg.cc/N0cj392q/pulsera-basica-03.jpg'],
	},
	{
		id: id++,
		title: 'Anillo de flores',
		description:
			'Este es un detallado anillo de oro con un diseño de flores perfecto para esa persona especial.',
		category: categories[0],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/D0Q1BDtm/anillo-oro-03.jpg',
			'https://i.postimg.cc/ZY6PbBCZ/anillo-oro-03-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Anillo infinito',
		description:
			'Este es un anillo de oro con forma del infinito, si quieres algo simbolico, este es el ideal.',
		category: categories[0],
		tags: [tags[0]],
		images: ['https://i.postimg.cc/8cghdDXq/anillo-oro-04.jpg'],
	},
	{
		id: id++,
		title: 'Anillo de corazones',
		description:
			'Este es un anillo de oro con dos corazones que representan unidad, esto si es un regalo de aniversario.',
		category: categories[0],
		tags: [tags[0]],
		images: ['https://i.postimg.cc/3RvXDW1X/anillo-oro-05.jpg'],
	},
	{
		id: id++,
		title: 'Aretas de estrella',
		description:
			'Estas son una aretas en forma de estrella decoradas con perlas de diferentes colores.',
		category: categories[1],
		tags: [tags[2]],
		images: [
			'https://i.postimg.cc/K88tD0Qv/aretas-orfebreria-01.jpg',
			'https://i.postimg.cc/JzYZ6jd3/aretas-orfebreria-01-1.jpg',
			'https://i.postimg.cc/bNTQn7xB/aretas-orfebreria-01-2.jpg',
			'https://i.postimg.cc/QxsQH8T7/aretas-orfebreria-01-3.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas de tiara',
		description:
			'Estas son una aretas de oro en forma de diadema con bolas incrustadas.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/HLJ5fjfq/aretas-oro-04.jpg',
			'https://i.postimg.cc/LsrfR2Sn/aretas-oro-04-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de corazon',
		description:
			'Esta es una cadena de oro con un dige en forma ded corazon, con un centro en diferentes colores.',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/xCMm1hjg/cadena-oro-04.jpg',
			'https://i.postimg.cc/T1xDL0px/cadena-oro-04-1.jpg',
			'https://i.postimg.cc/sxJZpWhh/cadena-oro-04-2.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena triple',
		description:
			'Esta es una cadena de oro formada por otras tres cadenas con diferentes decoradoas.',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/ZYP3kGM5/cadena-oro-06.jpg',
			'https://i.postimg.cc/5Nxzfshq/cadena-oro-06-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Pulsera de cerrojo',
		description:
			'Esta es una pulsera de oro con multiples diges que hacen referencia a los cerrojos y candados.',
		category: categories[3],
		tags: [tags[0]],
		images: ['https://i.postimg.cc/pLS5YRpq/pulsera-oro-01.jpg'],
	},
	{
		id: id++,
		title: 'Pulsera de corazones',
		description:
			'Esta es una pulsera de oro con cuatro diges en forma de corazon.',
		category: categories[3],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/J4Pk0bmw/pulsera-oro-02.jpg',
			'https://i.postimg.cc/dV3TyLth/pulsera-oro-02-1.jpg',
		],
	},
];

module.exports = products;
