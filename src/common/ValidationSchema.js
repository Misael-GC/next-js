/*
File: src/commons/ValidationSchema.js
Title: react-shop-admin
author: formik
date: 02/11/2022
*/

import * as Yup from 'yup'; //import para el paquete instalado

const ValidationSchema = Yup.object().shape({
  title: Yup.string() //Valida Title
    .min(2, 'El titulo debe de llevar minimo 2 letras!') //Mínimo 2 caráteres
    .max(25, 'El titulo debe llevar como maximo 25 letras!') //Máximo 25 carácteres
    .required('Titulo Requerido'), //Obligatorio llenar
  price: Yup.number() //Valide el Precio
    .min(1, 'El precio deber ser de minimo 1!') //1 es el precio mínimo
    .max(100000, 'El precio debe ser como maximo de 100000!') //Hats 100000 el precio máximo
    .required('Price Required'), //Requerido
  description: Yup.string() //Valida la descripción
    .min(6, 'La descripción debe llevar como minimo 6 letras!') //Mínimo 6 carácteres
    .max(100, 'La descripción debe de llevar como maximo 100 letras!') //Máximo 100 carácteres
    .required('Description Required'), //Requerido
  categoryId: Yup.string() //Id de categoría
    .min(1, 'El id debe llevar como minimo un numero!')
    .max(1, 'Category Id too Long!')
    .required('Category Id Required'),
  images: Yup.array() //Es array según la API
    .of(
      Yup.string() //Dentro del array permite el string
      //  .required('Image Required'),
    ),
});

export { ValidationSchema };
