# calculadora
calculadora com HTML , CSS E JAVASCRIPT 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com%22%3E/">
<link rel="preconnect href="https:"//fonts.gstatic.com/" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
<script src="joao.js"></script>
</head>



<body>

<div>
    <input class="display">

    <button class="gray-button">AC</button>
    <button class="gray-button">+/</button>
    <button class="blue-button">/</button>
    <button class="blue-button">*</button>
    <button class="black-button">7</button>
    <button class="black-button">8</button>
    <button class="black-button">9</button>
    <button class="blue-button">-</button>
    <button class="black-button">4</button>
    <button class="black-button">5</button>
    <button class="black-button">6</button>
    <button class="blue-button">+</button>
    <button class="black-button">1</button>
    <button class="black-button">2</button>
    <button class="black-button">3</button>
    <button class="equal-button-equal">=</button>
    <button class="black-button-zero">0</button>
    <button class="black-button">.</button>

</input>

</div>




</body>




</html>

CSS
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #FFFF;
  }
  
  
  body {
      background: #DAF0FF;
      height: 100vh;
      width: 100vw;
      display: grid;
      justify-content: center;
      align-items: center;
  
  }
  
  
  
  div {
      background: linear-gradient(191.34deg, #17181A -4.95%, #17181A 103.74%);
      border-radius: 39px;
      width: 375px;
      height: 568px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(7, 1fr);
      padding: 20px;
  }

  .black-button{
    background-color: #17181A;
  }

  .gray-button{
    background-color: gray;
  }

  .blue-button{
    background-color: blue;
  }

  .equal-button-equal{
    background-color: blue;
  }
